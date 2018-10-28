#import <Tabris/BasicWidget.h>

@interface ESLaunchParameters : BasicWidget
@property (strong, readonly) NSDictionary *urlLaunchParameters;
+ (void)setURL:(NSURL *)url;
@end
