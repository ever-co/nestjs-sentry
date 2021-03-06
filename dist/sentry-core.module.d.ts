import { DynamicModule } from '@nestjs/common';
import { SentryModuleAsyncOptions, SentryModuleOptions } from './interfaces/sentry-options.interface';
export declare class SentryCoreModule {
    static forRoot(options: SentryModuleOptions): DynamicModule;
    static forRootAsync(options: SentryModuleAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
