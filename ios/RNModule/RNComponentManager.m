//
//  RNComponentManager.m
//  RNModule
//
//  Created by Anton Kuznetsov on 01/12/2016.
//
//

#import "RNComponentManager.h"
#import "RNComponent.h"
#import "UIKit/UIKit.h"

@implementation RNComponentManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
    RNComponent * theView;
    theView = [[RNComponent alloc] init];
    return theView;
}

RCT_EXPORT_VIEW_PROPERTY(isRed, BOOL)

@end
