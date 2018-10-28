#import "ESLaunchParameters.h"

@implementation ESLaunchParameters

@synthesize urlLaunchParameters = _urlLaunchParameters;

static NSDictionary *urlLaunchParameters;

- (instancetype) initWithObjectId:(NSString *)objectId properties:(NSDictionary *)properties andClient:(TabrisClient *)client {
    return [super initWithObjectId:objectId properties:properties andClient:client];
}

+ (NSMutableSet *)remoteObjectProperties {
    NSMutableSet *properties = [super remoteObjectProperties];
    [properties addObject:@"urlLaunchParameters"];
    return properties;
}

+ (NSString *)remoteObjectType {
    return @"com.eclipsesource.tabris.LaunchParameters";
}

+ (void)setURL:(NSURL *)url {
    NSURLComponents *urlComponents = [NSURLComponents componentsWithURL:url resolvingAgainstBaseURL:NO];
    NSMutableDictionary *launchParameters = [[NSMutableDictionary alloc] init];
    for (NSURLQueryItem *queryItem in [urlComponents queryItems]) {
        [launchParameters setObject:[queryItem value] forKey:[queryItem name]];
    }
    urlLaunchParameters = launchParameters;
}

- (NSDictionary *)urlLaunchParameters {
    return urlLaunchParameters;
}

- (UIView *)view {
    return nil;
}

@end
