//
//  RNComponent.m
//  RNModule
//
//  Created by Anton Kuznetsov on 01/12/2016.
//
//

#import "RNComponent.h"

@implementation RNComponent
{
    UIColor *squareColor;
}

- (void)setIsRed:(BOOL)isRed
{
    squareColor= (isRed) ? [UIColor redColor] : [UIColor greenColor];
    [self setNeedsDisplay];
}

- (void)drawRect:(CGRect)rect
{
    [squareColor setFill];
    CGContextFillRect(UIGraphicsGetCurrentContext(), rect);
}

@end
