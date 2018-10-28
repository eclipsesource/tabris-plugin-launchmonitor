#import <Tabris/BasicWidget.h>

@interface ESLaunchMonitor : BasicWidget
@property (assign) BOOL urlLaunchListener;
+ (void)didOpenByURL:(NSURL *)url;
@end
