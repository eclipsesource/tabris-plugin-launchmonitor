#import "ESLaunchMonitor.h"

@implementation ESLaunchMonitor
static ESLaunchMonitor *instance;

- (instancetype) initWithObjectId:(NSString *)objectId properties:(NSDictionary *)properties andClient:(TabrisClient *)client {
    self = [super initWithObjectId:objectId andClient:client];
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
        Message<Notification> *message = [[self notifications] forObject:self];
        [message fireEvent:@"urlLaunch" withAttributes:@{@"queryParameters":queryParameters}];
    }
}

+ (void)didOpenByURL:(NSURL *)url {
    [instance sendURLLaunch: url];
}

- (UIView *)view {
    return nil;
}

@end
