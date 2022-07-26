import { ModuleWithProviders, ElementRef } from '@angular/core';
export declare class ToastContainerDirective {
    private el;
    constructor(el: ElementRef);
    getContainerElement(): HTMLElement;
}
export declare class ToastContainerModule {
    static forRoot(): ModuleWithProviders<ToastContainerModule>;
}
