#import "ESLaunchMonitor.h"
#import <Tabris/PublicTypes.h>

@implementation ESLaunchMonitor
static ESLaunchMonitor *instance;

- (instancetype) initWithObjectId:(NSString *)objectId properties:(NSDictionary *)properties inContext:(id<TabrisContext>)context {
    self = [super initWithObjectId:objectId properties:properties inContext:context];
    if (self) {
        instance = self;
    }
    return self;
}

+ (NSString *)remoteObjectType {
    return @"com.eclipsesource.tabris.LaunchMonitor";
}

+ (NSMutableSet *)remoteObjectProperties {
    NSMutableSet *set = [super remoteObjectProperties];
    [set addObject:@"urlLaunchListener"];
    return set;
}

- (void)sendURLLaunch:(NSURL *)url {
    NSURLComponents *urlComponents = [NSURLComponents componentsWithURL:url resolvingAgainstBaseURL:NO];
    NSMutableDictionary *queryParameters = [[NSMutableDictionary alloc] init];
    for (NSURLQueryItem *queryItem in [urlComponents queryItems]) {
        [queryParameters setObject:[queryItem value] forKey:[queryItem name]];
    }
    if (self.urlLaunchListener) {
        [self fireEventNamed:@"urlLaunch" withAttributes:@{@"queryParameters":queryParameters, @"url": [url absoluteString]}];
    }
}

+ (void)didOpenByURL:(NSURL *)url {
    [instance sendURLLaunch: url];
}

@end
