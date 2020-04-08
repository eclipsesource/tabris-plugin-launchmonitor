#import <Tabris/Control.h>

@interface ESLaunchMonitor : Control
@property (assign) BOOL urlLaunchListener;
+ (void)didOpenByURL:(NSURL *)url;
@end
