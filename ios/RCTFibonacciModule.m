//
//  RCTFibonacciModule.m
//  FibonacciApp
//
//  Created by Mateus Lopes on 27/06/23.
//

#import <Foundation/Foundation.h>
// RCTFibonacciModule.m
#import "RCTFibonacciModule.h"
#import <React/RCTLog.h>

@implementation RCTFibonacciModule

RCT_EXPORT_METHOD(calculateFibonacci:(nonnull NSNumber *)inputNumber withResolver:(RCTResponseSenderBlock)callback)
{
 RCTLogInfo(@"Pretending to create fibonacci %@", inputNumber);
  NSMutableArray *fibSeries = [NSMutableArray new];
          int total = 0;
          int prev = 1;
          int number = [inputNumber intValue];
          for (int x=1; x < number; x++){
              total = total + prev;
              prev = total - prev;
              [fibSeries addObject:[NSNumber numberWithInt:total]];
          }
  RCTLogInfo(@"Fibonacci numbers are: %@", fibSeries);
  NSString *fibSeriesString = [fibSeries componentsJoinedByString:@", "];
  
  callback(@[fibSeriesString]);
}

// To export a module named RCTFibonacciModule or RCTFibonacciModuleFoo
RCT_EXPORT_MODULE();

@end
