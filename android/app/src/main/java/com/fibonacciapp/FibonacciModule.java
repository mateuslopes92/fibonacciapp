package com.fibonacciapp;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.util.Log;

import java.util.Arrays;

public class FibonacciModule extends ReactContextBaseJavaModule {
    FibonacciModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "FibonacciModule";
    }

    static long fibo(int n) {
        if (n < 2) {
            return n;
        } else {
            return fibo(n - 1) + fibo(n - 2);
        }
    }

    public static String calculateFibonacci(int inputNumber) {
        Log.d("CalendarModule", "calculateFibonacci called with number: " + inputNumber);
        if(inputNumber > 0){
            long result[] = new long[inputNumber];

            // calculate based on inputNumber
            for (int i = 0; i < inputNumber; i++) {
                result[i] = FibonacciModule.fibo(i);
                System.out.print("(" + i + "):" + FibonacciModule.fibo(i) + "\t");
            }

            return Arrays.toString(result);
        }

        return "Not a valid number";
    }
}
