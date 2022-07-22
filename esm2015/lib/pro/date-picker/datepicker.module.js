import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MDBDatePickerComponent } from './datepicker.component';
import { FocusDirective } from './directives/datepickerFocus.directive';
import { InputAutoFillDirective } from './directives/datepickerAutofill.directive';
import { LocaleService } from './services/datepickerLocale.service';
export class DatepickerModule {
}
DatepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [MDBDatePickerComponent, FocusDirective, InputAutoFillDirective],
                exports: [MDBDatePickerComponent, FocusDirective, InputAutoFillDirective],
                providers: [LocaleService],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy11aWtpdC1wcm8tc3RhbmRhcmQvc3JjL2xpYi9wcm8vZGF0ZS1waWNrZXIvZGF0ZXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFRcEUsTUFBTSxPQUFPLGdCQUFnQjs7O1lBTjVCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDO2dCQUNwQyxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLEVBQUUsc0JBQXNCLENBQUM7Z0JBQzlFLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLGNBQWMsRUFBRSxzQkFBc0IsQ0FBQztnQkFDekUsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1EQkRhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGF0ZXBpY2tlckZvY3VzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IElucHV0QXV0b0ZpbGxEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGF0ZXBpY2tlckF1dG9maWxsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExvY2FsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGVwaWNrZXJMb2NhbGUuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtNREJEYXRlUGlja2VyQ29tcG9uZW50LCBGb2N1c0RpcmVjdGl2ZSwgSW5wdXRBdXRvRmlsbERpcmVjdGl2ZV0sXHJcbiAgZXhwb3J0czogW01EQkRhdGVQaWNrZXJDb21wb25lbnQsIEZvY3VzRGlyZWN0aXZlLCBJbnB1dEF1dG9GaWxsRGlyZWN0aXZlXSxcclxuICBwcm92aWRlcnM6IFtMb2NhbGVTZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJNb2R1bGUge31cclxuIl19