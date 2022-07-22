import { Component, ElementRef, ChangeDetectorRef, Optional, Inject, HostBinding, } from '@angular/core';
import { MDB_OPTION_PARENT, MDB_OPTION_GROUP, OptionComponent, } from './option.component';
export class SelectAllOptionComponent extends OptionComponent {
    constructor(_el, _cdRef, _parent, group) {
        super(_el, _cdRef, _parent, group);
        this._multiple = true;
        this.option = true;
    }
    ngOnInit() { }
}
SelectAllOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-select-all-option',
                template: "<span class=\"mdb-option-checkbox-wrapper\" *ngIf=\"_multiple\">\n  <input type=\"checkbox\" [checked]=\"selected\" class=\"form-check-input mdb-option-checkbox\" />\n  <label class=\"mdb-option-checkbox-label\"></label>\n</span>\n<span class=\"mdb-option-text\" ngClass=\"{'active', active}\">\n  <ng-content></ng-content>\n</span>\n",
                styles: [".mdb-option{align-items:center;background-color:transparent;color:rgba(0,0,0,.87);cursor:pointer;display:flex;flex-direction:row;font-size:1rem;font-weight:400;height:48px;padding-left:16px;padding-right:16px;text-overflow:ellipsis;white-space:nowrap;width:100%}.mdb-option.active,.mdb-option.selected.active,.mdb-option:hover{background-color:#ddd}.mdb-option.selected.disabled{background-color:transparent;color:#9e9e9e;cursor:default}.mdb-option.selected{background-color:#eee}.mdb-option.disabled{color:#9e9e9e;cursor:default}.mdb-option.mdb-select-all-option.selected.active{background-color:#ddd}.mdb-option.mdb-select-all-option.selected{background-color:#fff}.mdb-option-label{align-items:center;display:flex;height:37px;justify-content:space-between;line-height:37px;width:100%}.mdb-option-checkbox-label{height:10px!important;margin-top:-2px!important;top:0!important}.mdb-option-text{width:100%}.mdb-option-text.active{background-color:#00f}.mdb-option-icon{height:34px;width:34px}[type=checkbox]:checked,[type=checkbox]:not(:checked){opacity:0;pointer-events:none;position:absolute}.form-check-input[type=checkbox]+label,label.btn input[type=checkbox]+label{-moz-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-block;height:1.5625rem;line-height:1.5625rem;padding-left:35px;position:relative;user-select:none}.form-check-input[type=checkbox]+label:before,.form-check-input[type=checkbox]:not(.filled-in)+label:after,label.btn input[type=checkbox]+label:before,label.btn input[type=checkbox]:not(.filled-in)+label:after{border:2px solid #8a8a8a;border-radius:1px;content:\"\";height:18px;left:0;margin-top:3px;position:absolute;top:0;transition:.2s;width:18px;z-index:0}.form-check-input[type=checkbox]:not(.filled-in)+label:after,label.btn input[type=checkbox]:not(.filled-in)+label:after{border:0;transform:scale(0)}.form-check-input[type=checkbox]:not(:checked):disabled+label:before,label.btn input[type=checkbox]:not(:checked):disabled+label:before{background-color:#bdbdbd;border:none}.form-check-input[type=checkbox]:checked+label:before,label.btn input[type=checkbox]:checked+label:before{-webkit-backface-visibility:hidden;backface-visibility:hidden;border-color:transparent #4285f4 #4285f4 transparent;border-style:solid;border-width:2px;height:1.375rem;left:-5px;top:-4px;transform:rotate(40deg);transform-origin:100% 100%;width:12px}.form-check-input[type=checkbox]:checked:disabled+label:before,label.btn input[type=checkbox]:checked:disabled+label:before{border-bottom:2px solid #bdbdbd;border-right:2px solid #bdbdbd}.form-check-input[type=checkbox]:indeterminate+label:before,label.btn input[type=checkbox]:indeterminate+label:before{-webkit-backface-visibility:hidden;backface-visibility:hidden;border:none;border-right:2px solid #4285f4;height:1.375rem;left:-12px;top:-11px;transform:rotate(90deg);transform-origin:100% 100%;width:10px}.form-check-input[type=checkbox]:indeterminate:disabled+label:before,label.btn input[type=checkbox]:indeterminate:disabled+label:before{background-color:transparent;border-right:2px solid rgba(0,0,0,.46)}.form-check-input[type=checkbox].filled-in+label:after,label.btn input[type=checkbox].filled-in+label:after{border-radius:.125rem}.form-check-input[type=checkbox].filled-in+label:after,.form-check-input[type=checkbox].filled-in+label:before,label.btn input[type=checkbox].filled-in+label:after,label.btn input[type=checkbox].filled-in+label:before{content:\"\";left:0;position:absolute;transition:border .25s,background-color .25s,width .2s .1s,height .2s .1s,top .2s .1s,left .2s .1s;z-index:1}.form-check-input[type=checkbox].filled-in:not(:checked)+label:before,label.btn input[type=checkbox].filled-in:not(:checked)+label:before{border:3px solid transparent;height:0;left:6px;top:10px;transform:rotate(37deg);transform-origin:100% 100%;width:0}.form-check-input[type=checkbox].filled-in:not(:checked)+label:after,label.btn input[type=checkbox].filled-in:not(:checked)+label:after{background-color:transparent;border:2px solid #5a5a5a;height:20px;top:0;width:20px;z-index:0}.form-check-input[type=checkbox].filled-in:checked+label:before,label.btn input[type=checkbox].filled-in:checked+label:before{border-color:transparent #fff #fff transparent;border-style:solid;border-width:2px;height:13px;left:1px;top:0;transform:rotate(37deg);transform-origin:100% 100%;width:8px}.form-check-input[type=checkbox].filled-in:checked+label:after,label.btn input[type=checkbox].filled-in:checked+label:after{background-color:#a6c;border:2px solid #a6c;height:20px;top:0;width:20px;z-index:0}.form-check-input[type=checkbox].filled-in.filled-in-danger:checked+label:after,label.btn input[type=checkbox].filled-in.filled-in-danger:checked+label:after{background-color:#f44336;border-color:#f44336}.form-check-input[type=checkbox]:disabled:not(:checked)+label:after,.form-check-input[type=checkbox]:disabled:not(:checked)+label:before,label.btn input[type=checkbox]:disabled:not(:checked)+label:after,label.btn input[type=checkbox]:disabled:not(:checked)+label:before{background-color:#bdbdbd;border-color:#bdbdbd}.form-check-input[type=checkbox]:disabled:checked+label:before,label.btn input[type=checkbox]:disabled:checked+label:before{background-color:transparent}.form-check-input[type=checkbox]:disabled:checked+label:after,label.btn input[type=checkbox]:disabled:checked+label:after{background-color:#bdbdbd;border-color:#bdbdbd}"]
            },] }
];
SelectAllOptionComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MDB_OPTION_PARENT,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MDB_OPTION_GROUP,] }] }
];
SelectAllOptionComponent.propDecorators = {
    option: [{ type: HostBinding, args: ['class.mdb-select-all-option',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFsbC1vcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy11aWtpdC1wcm8tc3RhbmRhcmQvc3JjL2xpYi9wcm8vb3B0aW9uL3NlbGVjdC1hbGwtb3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsVUFBVSxFQUNWLGlCQUFpQixFQUNqQixRQUFRLEVBQ1IsTUFBTSxFQUNOLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUVoQixlQUFlLEdBRWhCLE1BQU0sb0JBQW9CLENBQUM7QUFPNUIsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGVBQWU7SUFHM0QsWUFDRSxHQUFlLEVBQ2YsTUFBeUIsRUFDYyxPQUF3QixFQUN6QixLQUFxQjtRQUUzRCxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFSckMsY0FBUyxHQUFHLElBQUksQ0FBQztRQVlqQixXQUFNLEdBQUcsSUFBSSxDQUFDO0lBSGQsQ0FBQztJQUtELFFBQVEsS0FBVSxDQUFDOzs7WUFwQnBCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQywwVkFBc0M7O2FBRXZDOzs7WUFsQkMsVUFBVTtZQUNWLGlCQUFpQjs0Q0F3QmQsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQkFBaUI7NENBQ3BDLFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCOzs7cUJBS3JDLFdBQVcsU0FBQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9wdGlvbmFsLFxuICBJbmplY3QsXG4gIEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1EQl9PUFRJT05fUEFSRU5ULFxuICBNREJfT1BUSU9OX0dST1VQLFxuICBNZGJPcHRpb25Hcm91cCxcbiAgT3B0aW9uQ29tcG9uZW50LFxuICBNZGJPcHRpb25QYXJlbnQsXG59IGZyb20gJy4vb3B0aW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zZWxlY3QtYWxsLW9wdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcHRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vcHRpb24uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0QWxsT3B0aW9uQ29tcG9uZW50IGV4dGVuZHMgT3B0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgX211bHRpcGxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBfZWw6IEVsZW1lbnRSZWYsXG4gICAgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1EQl9PUFRJT05fUEFSRU5UKSBfcGFyZW50OiBNZGJPcHRpb25QYXJlbnQsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNREJfT1BUSU9OX0dST1VQKSBncm91cDogTWRiT3B0aW9uR3JvdXBcbiAgKSB7XG4gICAgc3VwZXIoX2VsLCBfY2RSZWYsIF9wYXJlbnQsIGdyb3VwKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWRiLXNlbGVjdC1hbGwtb3B0aW9uJylcbiAgb3B0aW9uID0gdHJ1ZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG59XG4iXX0=