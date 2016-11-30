//
//  RNModule.m
//  RNModule
//
//  Created by Anton Kuznetsov on 29/11/2016.
//
//

#import "RNModuleManager.h"
#import "RCTLog.h"

@implementation RNModuleManager
{
    NSArray *events;
}

- (instancetype)init
{
    self = [super init];
    if (self) {
        events = @[
            @"Mercedes-Benz",
            @"BMW",
            @"Porsche",
            @"Opel",
            @"Volkswagen",
            @"Audi"
        ];
    }
    return self;
}

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(findCars,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    if (events) {
        resolve(events);
    } else {
        NSError *error = [NSError errorWithDomain: @"RNModuleManager" code: 146 userInfo: @{NSLocalizedDescriptionKey: @"Error"}];
        reject(@"no_events", @"There were no events", error);
    }
}

@end
