import { __decorate } from "tslib";
// free
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CardsModule } from './cards/cards.module';
import { ButtonsModule } from './buttons/buttons.module';
import { NavbarModule } from './navbars/navbar.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { CarouselModule } from './carousel/carousel.module';
import { ChartsModule } from './charts/chart.module';
import { CollapseModule } from './collapse/collapse.module';
import { ModalModule } from './modals/modal.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { PopoverModule } from './popover/popover.module';
import { InputsModule } from './inputs/inputs.module';
import { WavesModule } from './waves/waves.module';
import { IconsModule } from './icons/icon.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { TableModule } from './tables/tables.module';
import { BadgeModule } from './badge/badge.module';
import { BreadcrumbModule } from './breadcrumbs/breadcrumb.module';
import { InputUtilitiesModule } from './input-utilities/input-utilities.module';
import { StickyHeaderModule } from './sticky-header/sticky-header.module';
export { StickyHeaderDirective, StickyHeaderModule } from './sticky-header/index';
export { MdbErrorDirective, MdbSuccessDirective, MdbValidateDirective, InputUtilitiesModule, } from './input-utilities/index';
export { MdbBreadcrumbComponent, MdbBreadcrumbItemComponent, BreadcrumbModule, } from './breadcrumbs/index';
export { MDBBadgeComponent, BadgeModule } from './badge/index';
export { MdbTablePaginationComponent, MdbTableRowDirective, MdbTableScrollDirective, MdbTableSortDirective, MdbTableDirective, MdbTableService, TableModule, } from './tables/index';
export { CHECKBOX_VALUE_ACCESSOR, CheckboxComponent, CheckboxModule } from './checkbox/index';
export { ButtonsModule, ButtonRadioDirective, ButtonCheckboxDirective, MdbBtnDirective, FixedButtonCaptionDirective, } from './buttons/index';
export { CardsModule, MdbCardComponent, MdbCardBodyComponent, MdbCardImageComponent, MdbCardTextComponent, MdbCardTitleComponent, MdbCardFooterComponent, MdbCardHeaderComponent, } from './cards/index';
export { WavesModule, WavesDirective } from './waves/index';
export { InputsModule, MdbInputDirective, MdbInput } from './inputs/index';
export { NavbarModule } from './navbars/index';
export { BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, DropdownModule, BsDropdownState, BsDropdownToggleDirective, } from './dropdown/index';
export { CarouselComponent, CarouselConfig, CarouselModule } from './carousel/index';
export { ChartsModule, BaseChartDirective } from './charts/index';
export { CollapseComponent, CollapseModule } from './collapse/index';
export { ModalBackdropComponent, ModalBackdropOptions, ModalDirective, ModalModule, ModalOptions, MDBModalService, ModalContainerComponent, MDBModalRef, } from './modals/index';
export { TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule, } from './tooltip/index';
export { PopoverConfig, PopoverContainerComponent, PopoverModule, PopoverDirective, } from './popover/index';
export { IconsModule, MdbIconComponent, FalDirective, FarDirective, FasDirective, FabDirective, FadDirective, } from './icons/index';
var MODULES = [
    ButtonsModule,
    CardsModule,
    WavesModule,
    InputsModule,
    NavbarModule,
    DropdownModule,
    CarouselModule,
    ChartsModule,
    CollapseModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    IconsModule,
    CheckboxModule,
    TableModule,
    BadgeModule,
    BreadcrumbModule,
    InputUtilitiesModule,
    StickyHeaderModule,
];
var MDBRootModule = /** @class */ (function () {
    function MDBRootModule() {
    }
    MDBRootModule = __decorate([
        NgModule({
            imports: [
                ButtonsModule,
                WavesModule.forRoot(),
                InputsModule.forRoot(),
                NavbarModule,
                DropdownModule.forRoot(),
                CarouselModule.forRoot(),
                ChartsModule,
                CollapseModule.forRoot(),
                ModalModule.forRoot(),
                TooltipModule.forRoot(),
                PopoverModule.forRoot(),
                IconsModule,
                CardsModule.forRoot(),
                CheckboxModule,
                TableModule,
                BadgeModule,
                BreadcrumbModule,
                InputUtilitiesModule,
                StickyHeaderModule,
            ],
            exports: MODULES,
            schemas: [NO_ERRORS_SCHEMA],
        })
    ], MDBRootModule);
    return MDBRootModule;
}());
export { MDBRootModule };
var MDBBootstrapModule = /** @class */ (function () {
    function MDBBootstrapModule() {
    }
    MDBBootstrapModule.forRoot = function () {
        return { ngModule: MDBRootModule };
    };
    MDBBootstrapModule = __decorate([
        NgModule({ exports: MODULES })
    ], MDBBootstrapModule);
    return MDBBootstrapModule;
}());
export { MDBBootstrapModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWZyZWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbWRiLWZyZWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPO0FBQ1AsT0FBTyxFQUF1QixRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFD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QUNYLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0NBQ25CLENBQUM7QUEyQkY7SUFBQTtJQUE0QixDQUFDO0lBQWhCLGFBQWE7UUF6QnpCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxhQUFhO2dCQUNiLFdBQVcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3JCLFlBQVksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RCLFlBQVk7Z0JBQ1osY0FBYyxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsY0FBYyxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsWUFBWTtnQkFDWixjQUFjLENBQUMsT0FBTyxFQUFFO2dCQUN4QixXQUFXLENBQUMsT0FBTyxFQUFFO2dCQUNyQixhQUFhLENBQUMsT0FBTyxFQUFFO2dCQUN2QixhQUFhLENBQUMsT0FBTyxFQUFFO2dCQUN2QixXQUFXO2dCQUNYLFdBQVcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3JCLGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxXQUFXO2dCQUNYLGdCQUFnQjtnQkFDaEIsb0JBQW9CO2dCQUNwQixrQkFBa0I7YUFDbkI7WUFDRCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csYUFBYSxDQUFHO0lBQUQsb0JBQUM7Q0FBQSxBQUE3QixJQUE2QjtTQUFoQixhQUFhO0FBRzFCO0lBQUE7SUFJQSxDQUFDO0lBSGUsMEJBQU8sR0FBckI7UUFDRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFIVSxrQkFBa0I7UUFEOUIsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO09BQ2xCLGtCQUFrQixDQUk5QjtJQUFELHlCQUFDO0NBQUEsQUFKRCxJQUlDO1NBSlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZnJlZVxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FyZHNNb2R1bGUgfSBmcm9tICcuL2NhcmRzL2NhcmRzLm1vZHVsZSc7XG5pbXBvcnQgeyBCdXR0b25zTW9kdWxlIH0gZnJvbSAnLi9idXR0b25zL2J1dHRvbnMubW9kdWxlJztcbmltcG9ydCB7IE5hdmJhck1vZHVsZSB9IGZyb20gJy4vbmF2YmFycy9uYXZiYXIubW9kdWxlJztcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAnLi9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tICcuL2Nhcm91c2VsL2Nhcm91c2VsLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGFydHNNb2R1bGUgfSBmcm9tICcuL2NoYXJ0cy9jaGFydC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29sbGFwc2VNb2R1bGUgfSBmcm9tICcuL2NvbGxhcHNlL2NvbGxhcHNlLm1vZHVsZSc7XG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9IGZyb20gJy4vbW9kYWxzL21vZGFsLm1vZHVsZSc7XG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi90b29sdGlwL3Rvb2x0aXAubW9kdWxlJztcbmltcG9ydCB7IFBvcG92ZXJNb2R1bGUgfSBmcm9tICcuL3BvcG92ZXIvcG9wb3Zlci5tb2R1bGUnO1xuaW1wb3J0IHsgSW5wdXRzTW9kdWxlIH0gZnJvbSAnLi9pbnB1dHMvaW5wdXRzLm1vZHVsZSc7XG5pbXBvcnQgeyBXYXZlc01vZHVsZSB9IGZyb20gJy4vd2F2ZXMvd2F2ZXMubW9kdWxlJztcbmltcG9ydCB7IEljb25zTW9kdWxlIH0gZnJvbSAnLi9pY29ucy9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja2JveE1vZHVsZSB9IGZyb20gJy4vY2hlY2tib3gvY2hlY2tib3gubW9kdWxlJztcbmltcG9ydCB7IFRhYmxlTW9kdWxlIH0gZnJvbSAnLi90YWJsZXMvdGFibGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBCYWRnZU1vZHVsZSB9IGZyb20gJy4vYmFkZ2UvYmFkZ2UubW9kdWxlJztcbmltcG9ydCB7IEJyZWFkY3J1bWJNb2R1bGUgfSBmcm9tICcuL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWIubW9kdWxlJztcbmltcG9ydCB7IElucHV0VXRpbGl0aWVzTW9kdWxlIH0gZnJvbSAnLi9pbnB1dC11dGlsaXRpZXMvaW5wdXQtdXRpbGl0aWVzLm1vZHVsZSc7XG5pbXBvcnQgeyBTdGlja3lIZWFkZXJNb2R1bGUgfSBmcm9tICcuL3N0aWNreS1oZWFkZXIvc3RpY2t5LWhlYWRlci5tb2R1bGUnO1xuXG5leHBvcnQgeyBTdGlja3lIZWFkZXJEaXJlY3RpdmUsIFN0aWNreUhlYWRlck1vZHVsZSB9IGZyb20gJy4vc3RpY2t5LWhlYWRlci9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIE1kYkVycm9yRGlyZWN0aXZlLFxuICBNZGJTdWNjZXNzRGlyZWN0aXZlLFxuICBNZGJWYWxpZGF0ZURpcmVjdGl2ZSxcbiAgSW5wdXRVdGlsaXRpZXNNb2R1bGUsXG59IGZyb20gJy4vaW5wdXQtdXRpbGl0aWVzL2luZGV4JztcblxuZXhwb3J0IHtcbiAgTWRiQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgTWRiQnJlYWRjcnVtYkl0ZW1Db21wb25lbnQsXG4gIEJyZWFkY3J1bWJNb2R1bGUsXG59IGZyb20gJy4vYnJlYWRjcnVtYnMvaW5kZXgnO1xuXG5leHBvcnQgeyBNREJCYWRnZUNvbXBvbmVudCwgQmFkZ2VNb2R1bGUgfSBmcm9tICcuL2JhZGdlL2luZGV4JztcblxuZXhwb3J0IHtcbiAgTWRiVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50LFxuICBNZGJUYWJsZVJvd0RpcmVjdGl2ZSxcbiAgTWRiVGFibGVTY3JvbGxEaXJlY3RpdmUsXG4gIE1kYlRhYmxlU29ydERpcmVjdGl2ZSxcbiAgTWRiVGFibGVEaXJlY3RpdmUsXG4gIE1kYlRhYmxlU2VydmljZSxcbiAgVGFibGVNb2R1bGUsXG59IGZyb20gJy4vdGFibGVzL2luZGV4JztcblxuZXhwb3J0IHsgQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1IsIENoZWNrYm94Q29tcG9uZW50LCBDaGVja2JveE1vZHVsZSB9IGZyb20gJy4vY2hlY2tib3gvaW5kZXgnO1xuXG5leHBvcnQge1xuICBCdXR0b25zTW9kdWxlLFxuICBCdXR0b25SYWRpb0RpcmVjdGl2ZSxcbiAgQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUsXG4gIE1kYkJ0bkRpcmVjdGl2ZSxcbiAgRml4ZWRCdXR0b25DYXB0aW9uRGlyZWN0aXZlLFxufSBmcm9tICcuL2J1dHRvbnMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBDYXJkc01vZHVsZSxcbiAgTWRiQ2FyZENvbXBvbmVudCxcbiAgTWRiQ2FyZEJvZHlDb21wb25lbnQsXG4gIE1kYkNhcmRJbWFnZUNvbXBvbmVudCxcbiAgTWRiQ2FyZFRleHRDb21wb25lbnQsXG4gIE1kYkNhcmRUaXRsZUNvbXBvbmVudCxcbiAgTWRiQ2FyZEZvb3RlckNvbXBvbmVudCxcbiAgTWRiQ2FyZEhlYWRlckNvbXBvbmVudCxcbn0gZnJvbSAnLi9jYXJkcy9pbmRleCc7XG5cbmV4cG9ydCB7IFdhdmVzTW9kdWxlLCBXYXZlc0RpcmVjdGl2ZSB9IGZyb20gJy4vd2F2ZXMvaW5kZXgnO1xuXG5leHBvcnQgeyBJbnB1dHNNb2R1bGUsIE1kYklucHV0RGlyZWN0aXZlLCBNZGJJbnB1dCB9IGZyb20gJy4vaW5wdXRzL2luZGV4JztcblxuZXhwb3J0IHsgTmF2YmFyTW9kdWxlIH0gZnJvbSAnLi9uYXZiYXJzL2luZGV4JztcblxuZXhwb3J0IHtcbiAgQnNEcm9wZG93bkNvbmZpZyxcbiAgQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCxcbiAgQnNEcm9wZG93bkRpcmVjdGl2ZSxcbiAgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUsXG4gIERyb3Bkb3duTW9kdWxlLFxuICBCc0Ryb3Bkb3duU3RhdGUsXG4gIEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXG59IGZyb20gJy4vZHJvcGRvd24vaW5kZXgnO1xuXG5leHBvcnQgeyBDYXJvdXNlbENvbXBvbmVudCwgQ2Fyb3VzZWxDb25maWcsIENhcm91c2VsTW9kdWxlIH0gZnJvbSAnLi9jYXJvdXNlbC9pbmRleCc7XG5cbmV4cG9ydCB7IENoYXJ0c01vZHVsZSwgQmFzZUNoYXJ0RGlyZWN0aXZlIH0gZnJvbSAnLi9jaGFydHMvaW5kZXgnO1xuXG5leHBvcnQgeyBDb2xsYXBzZUNvbXBvbmVudCwgQ29sbGFwc2VNb2R1bGUgfSBmcm9tICcuL2NvbGxhcHNlL2luZGV4JztcblxuZXhwb3J0IHtcbiAgTW9kYWxCYWNrZHJvcENvbXBvbmVudCxcbiAgTW9kYWxCYWNrZHJvcE9wdGlvbnMsXG4gIE1vZGFsRGlyZWN0aXZlLFxuICBNb2RhbE1vZHVsZSxcbiAgTW9kYWxPcHRpb25zLFxuICBNREJNb2RhbFNlcnZpY2UsXG4gIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50LFxuICBNREJNb2RhbFJlZixcbn0gZnJvbSAnLi9tb2RhbHMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBUb29sdGlwQ29uZmlnLFxuICBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50LFxuICBUb29sdGlwRGlyZWN0aXZlLFxuICBUb29sdGlwTW9kdWxlLFxufSBmcm9tICcuL3Rvb2x0aXAvaW5kZXgnO1xuXG5leHBvcnQge1xuICBQb3BvdmVyQ29uZmlnLFxuICBQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50LFxuICBQb3BvdmVyTW9kdWxlLFxuICBQb3BvdmVyRGlyZWN0aXZlLFxufSBmcm9tICcuL3BvcG92ZXIvaW5kZXgnO1xuXG5leHBvcnQge1xuICBJY29uc01vZHVsZSxcbiAgTWRiSWNvbkNvbXBvbmVudCxcbiAgRmFsRGlyZWN0aXZlLFxuICBGYXJEaXJlY3RpdmUsXG4gIEZhc0RpcmVjdGl2ZSxcbiAgRmFiRGlyZWN0aXZlLFxuICBGYWREaXJlY3RpdmUsXG59IGZyb20gJy4vaWNvbnMvaW5kZXgnO1xuXG5jb25zdCBNT0RVTEVTID0gW1xuICBCdXR0b25zTW9kdWxlLFxuICBDYXJkc01vZHVsZSxcbiAgV2F2ZXNNb2R1bGUsXG4gIElucHV0c01vZHVsZSxcbiAgTmF2YmFyTW9kdWxlLFxuICBEcm9wZG93bk1vZHVsZSxcbiAgQ2Fyb3VzZWxNb2R1bGUsXG4gIENoYXJ0c01vZHVsZSxcbiAgQ29sbGFwc2VNb2R1bGUsXG4gIE1vZGFsTW9kdWxlLFxuICBUb29sdGlwTW9kdWxlLFxuICBQb3BvdmVyTW9kdWxlLFxuICBJY29uc01vZHVsZSxcbiAgQ2hlY2tib3hNb2R1bGUsXG4gIFRhYmxlTW9kdWxlLFxuICBCYWRnZU1vZHVsZSxcbiAgQnJlYWRjcnVtYk1vZHVsZSxcbiAgSW5wdXRVdGlsaXRpZXNNb2R1bGUsXG4gIFN0aWNreUhlYWRlck1vZHVsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCdXR0b25zTW9kdWxlLFxuICAgIFdhdmVzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBJbnB1dHNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5hdmJhck1vZHVsZSxcbiAgICBEcm9wZG93bk1vZHVsZS5mb3JSb290KCksXG4gICAgQ2Fyb3VzZWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENoYXJ0c01vZHVsZSxcbiAgICBDb2xsYXBzZU1vZHVsZS5mb3JSb290KCksXG4gICAgTW9kYWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRvb2x0aXBNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBvcG92ZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEljb25zTW9kdWxlLFxuICAgIENhcmRzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDaGVja2JveE1vZHVsZSxcbiAgICBUYWJsZU1vZHVsZSxcbiAgICBCYWRnZU1vZHVsZSxcbiAgICBCcmVhZGNydW1iTW9kdWxlLFxuICAgIElucHV0VXRpbGl0aWVzTW9kdWxlLFxuICAgIFN0aWNreUhlYWRlck1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogTU9EVUxFUyxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBNREJSb290TW9kdWxlIHt9XG5cbkBOZ01vZHVsZSh7IGV4cG9ydHM6IE1PRFVMRVMgfSlcbmV4cG9ydCBjbGFzcyBNREJCb290c3RyYXBNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxNREJSb290TW9kdWxlPiB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IE1EQlJvb3RNb2R1bGUgfTtcbiAgfVxufVxuIl19