import { Component, ElementRef, HostListener, Renderer2, ViewChild, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter, } from '@angular/core';
import { socialsState } from '../animations/animations.component';
export class CardRevealComponent {
    constructor(_r, _cdRef) {
        this._r = _r;
        this._cdRef = _cdRef;
        this.animationStart = new EventEmitter();
        this.animationEnd = new EventEmitter();
        this.show = false;
    }
    onWindowResize() {
        if (this.cardOverflow && this.cardFront && this.cardReveal) {
            const height = this.cardFront.nativeElement.offsetHeight;
            this._r.setStyle(this.cardOverflow.nativeElement, 'height', height + 'px');
            this._r.setStyle(this.cardReveal.nativeElement.firstElementChild, 'height', height + 'px');
        }
    }
    toggle() {
        this.show = !this.show;
        this.socials = this.socials === 'active' ? 'inactive' : 'active';
        setTimeout(() => {
            const height = this.cardFront.nativeElement.offsetHeight;
            this._r.setStyle(this.cardOverflow.nativeElement, 'height', height + 'px');
            if (this.cardReveal) {
                this._r.setStyle(this.cardReveal.nativeElement.firstElementChild, 'height', height + 'px');
            }
        }, 0);
        this._cdRef.markForCheck();
    }
    onAnimationStart() {
        this.animationStart.emit();
    }
    onAnimationDone() {
        this.animationEnd.emit();
    }
}
CardRevealComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-reveal',
                template: "<div #cardOverflow class=\"card-overflow\">\n  <div #cardFront class=\"card-front\">\n    <ng-content select=\".card-front\"></ng-content>\n  </div>\n  <div\n    #cardReveal\n    class=\"card-reveal\"\n    *ngIf=\"show\"\n    [@socialsState]=\"socials\"\n    (@socialsState.done)=\"onAnimationDone()\"\n    (@socialsState.start)=\"onAnimationStart()\"\n  >\n    <ng-content select=\".card-reveal\"></ng-content>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [socialsState],
                styles: ["@charset \"UTF-8\";.card.promoting-card .fa{transition:.4s}.card.promoting-card .fa[class*=fa-]:hover{cursor:pointer;transition:.4s}.card.weather-card .collapse-content a.collapsed:after{content:\"Expand\"}.card.weather-card .collapse-content a:not(.collapsed):after{content:\"Collapse\"}.card.weather-card .degree:after{content:\"\u00B0C\";font-size:3rem;font-weight:400;margin-top:.9rem;position:absolute}.card.gradient-card{transition:all .5s ease-in-out}.card.gradient-card .first-content .card-title{font-weight:500}.card.gradient-card .second-content,.card.gradient-card .third-content{display:none}.card.gradient-card .card-body{height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;transition:all .5s ease-in-out;visibility:hidden}.card.gradient-card .card-image,.card.gradient-card .card-image .mask{border-radius:.25rem}.card.gradient-card:focus-within{margin-top:3rem;transition:all .5s ease-in-out}.card.gradient-card:focus-within .card-image{border-radius:.25rem;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);height:7rem;margin-bottom:2rem;margin-left:1rem;margin-top:-2rem;transition:all .5s ease-in-out;width:7rem}.card.gradient-card:focus-within .card-image .mask{border-radius:.25rem}.card.gradient-card:focus-within .card-body{border-radius:.25rem;height:auto;opacity:1;overflow:visible;padding-bottom:1.25rem;padding-top:1.25rem;transition:all .7s ease-in-out;visibility:visible}.card.gradient-card:focus-within .card-body .progress{height:.4rem}.card.gradient-card:focus-within .card-body .progress .progress-bar{height:.4rem}.card.gradient-card:focus-within .first-content{display:none}.card.gradient-card:focus-within .second-content{display:block}.card.gradient-card:focus-within .third-content{display:block;margin-top:-6rem}@media (max-device-width:1025px){.card.gradient-card:hover{margin-top:3rem;transition:all .5s ease-in-out}.card.gradient-card:hover .card-image{border-radius:.25rem;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);height:7rem;margin-bottom:2rem;margin-left:1rem;margin-top:-2rem;transition:all .5s ease-in-out;width:7rem}.card.gradient-card:hover .card-image .mask{border-radius:.25rem}.card.gradient-card:hover .card-body{border-radius:.25rem;height:auto;opacity:1;overflow:visible;padding-bottom:1.25rem;padding-top:1.25rem;transition:all .7s ease-in-out;visibility:visible}.card.gradient-card:hover .card-body .progress,.card.gradient-card:hover .card-body .progress .progress-bar{height:.4rem}.card.gradient-card:hover .first-content{display:none}.card.gradient-card:hover .second-content{display:block}.card.gradient-card:hover .third-content{display:block;margin-top:-6rem}}.card.booking-card .rating{font-size:.7rem}.card.chart-card .classic-tabs .nav li a.active{border-bottom:2px solid;transition:width .5s ease,background-color .5s ease}.card.chart-card .classic-tabs .nav.tabs-white li a{color:#757575;font-weight:500}.card.chart-card .classic-tabs .nav.tabs-white li a.active{color:#673ab7}.card.chart-card .btn-deep-purple-accent{background-color:#b388ff;margin-top:-65px}.card.chart-card .btn-deep-purple-accent i{color:#000!important}.card.chart-card .btn-teal-accent{background-color:#1de9b6;margin-top:-65px}.card.chart-card .btn-teal-accent i{color:#000!important}.card.colorful-card .indigo-accent-text{color:#304ffe}.card.colorful-card .btn-indigo-accent{background-color:#304ffe}.card.colorful-card .yellow-darken-text{color:#fdd835}.card.colorful-card .testimonial-card .avatar{border:3px solid #fff;margin-top:-30px;width:55px}.card.colorful-card .testimonial-card .avatar img{height:50px;width:50px}.card.colorful-card .brown-darken-text{color:#3e2723}.card.colorful-card .btn-red-lighten{background-color:#ffcdd2}.card-wrapper.card-action{min-height:640px}@media (max-width:450px){.card-wrapper.card-action{min-height:790px}}.card-form .md-form input[type=email]:focus:not([readonly]),.card-form .md-form input[type=password]:focus:not([readonly]),.card-form .md-form input[type=text]:focus:not([readonly]){border-bottom:1px solid #fff;box-shadow:0 1px 0 0 #fff}.card-form .card-form-2{border-top-left-radius:21px;border-top-right-radius:21px;margin-top:-35px}.card-form .card-form-2 .form-check-input[type=checkbox].filled-in:checked+label:after,.card-form .card-form-2 label.btn input[type=checkbox].filled-in:checked+label:after{background-color:#e53935;border:2px solid #e53935}.card-form .card-form-2 .btn-outline-red-accent{background-color:transparent;border:2px solid #e53935;color:#e53935}.card-form .card-form-2 .pink-accent-text{color:#c51162}.z-depth-1-bottom{box-shadow:0 5px 5px -2px rgba(0,0,0,.16)}.card-wrapper{height:500px;perspective:800px;position:relative}.card-wrapper .face{background-color:#fff;height:100%;position:absolute;width:100%}.card-wrapper .face h4{margin-bottom:15px}.card-wrapper .face h5{margin-top:30px}.card-wrapper .face .content{padding:15px;text-align:left}.card-wrapper .face .content p{margin-bottom:30px}.card-wrapper .face .content .rotate-btn{color:#000;float:right;font-size:1.2rem;margin-right:-8px;padding:1rem}.card-wrapper .card-up{height:50%;overflow:hidden}.card-wrapper .card-up img{min-width:400px;width:100%}.card-wrapper .avatar{border-radius:50%;display:block;height:120px;margin:-65px auto 0;overflow:hidden;width:120px}.card-wrapper .avatar img{background:none repeat scroll 0 0 #fff;border:5px solid #fff;width:100%}.card-wrapper .card-rotating{height:100%;position:absolute;text-align:center;width:100%}.card-wrapper .card-rotating .content{position:relative}.card-wrapper .card-rotating .content .rotate-btn{position:absolute;right:8px;top:0}.card-wrapper .fa-repeat,.card-wrapper .fa-undo{font-size:20px;margin-top:30px}.card-wrapper .fa-undo{margin-top:30px}.card-wrapper .card-rotating{transform-style:preserve-3d}.card-wrapper .back,.card-wrapper .front{-webkit-backface-visibility:hidden;backface-visibility:hidden;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);transition:transform 1s}.card-wrapper .fron{cursor:auto;z-index:2}.card-wrapper .back{padding:1rem;transform:rotateY(-180deg)}.card-wrapper .back .card-title{cursor:pointer}.card-wrapper .back .card-title i{color:#9e9e9e;position:absolute;right:20px}.card-wrapper .card-rotating.effect__click.flipped .front{transform:rotateY(180deg)}.card-wrapper .card-rotating.effect__click.flipped .back{transform:rotateY(0)}.embed-responsive-item{background:#000}.tp-box{position:relative;transform-style:preserve-3d;transition:transform 1s}.tp-box .tp-box_side{-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;position:absolute;text-align:center;width:100%}.tp-box .tp-box_back{transform:rotateY(179.9deg)}.flip-container{perspective:1000px;transform-style:preserve-3d}.flip-container .flipper{position:relative;transform-style:preserve-3d;transition:1s}.flip-container .front{transform:rotateY(0deg);z-index:2}.flip-container .back{transform:rotateY(-180deg)}.flip-container .back,.flip-container .front{-webkit-backface-visibility:hidden;backface-visibility:hidden;left:0;position:absolute;top:0;transform-style:preserve-3d;transition:1s}.flip-container.rotate .back{background-color:#fff;transform:rotateY(0deg)}.flip-container.rotate .front{transform:rotateY(180deg)}.card-overflow{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);height:100%;overflow:hidden}"]
            },] }
];
CardRevealComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
CardRevealComponent.propDecorators = {
    cardReveal: [{ type: ViewChild, args: ['cardReveal',] }],
    cardFront: [{ type: ViewChild, args: ['cardFront', { static: true },] }],
    cardOverflow: [{ type: ViewChild, args: ['cardOverflow', { static: true },] }],
    animationStart: [{ type: Output }],
    animationEnd: [{ type: Output }],
    onWindowResize: [{ type: HostListener, args: ['window:resize',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1yZXZlYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctdWlraXQtcHJvLXN0YW5kYXJkL3NyYy9saWIvcHJvL2FuaW1hdGVkLWNhcmRzL2NhcmQtcmV2ZWFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osU0FBUyxFQUNULFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQVVsRSxNQUFNLE9BQU8sbUJBQW1CO0lBb0I5QixZQUFvQixFQUFhLEVBQVUsTUFBeUI7UUFBaEQsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBZjFELG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDNUQsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUc3RCxTQUFJLEdBQUcsS0FBSyxDQUFDO0lBV21ELENBQUM7SUFSeEUsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDMUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO1lBQ3pELElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztTQUM1RjtJQUNILENBQUM7SUFJRCxNQUFNO1FBQ0osSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDakUsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztZQUN6RCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQzthQUM1RjtRQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNELGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsMmJBQXlDO2dCQUV6QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFVBQVUsRUFBRSxDQUFDLFlBQVksQ0FBQzs7YUFDM0I7OztZQWpCQyxTQUFTO1lBSVQsaUJBQWlCOzs7eUJBZWhCLFNBQVMsU0FBQyxZQUFZO3dCQUN0QixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFDdkMsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NkJBRTFDLE1BQU07MkJBQ04sTUFBTTs2QkFLTixZQUFZLFNBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc29jaWFsc1N0YXRlIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9hbmltYXRpb25zLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1jYXJkLXJldmVhbCcsXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC1yZXZlYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbmltYXRlZC1jYXJkcy1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW3NvY2lhbHNTdGF0ZV0sXG59KVxuZXhwb3J0IGNsYXNzIENhcmRSZXZlYWxDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCdjYXJkUmV2ZWFsJykgY2FyZFJldmVhbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY2FyZEZyb250JywgeyBzdGF0aWM6IHRydWUgfSkgY2FyZEZyb250OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjYXJkT3ZlcmZsb3cnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjYXJkT3ZlcmZsb3c6IEVsZW1lbnRSZWY7XG5cbiAgQE91dHB1dCgpIGFuaW1hdGlvblN0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgYW5pbWF0aW9uRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHB1YmxpYyBzb2NpYWxzOiBhbnk7XG4gIHB1YmxpYyBzaG93ID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIGlmICh0aGlzLmNhcmRPdmVyZmxvdyAmJiB0aGlzLmNhcmRGcm9udCAmJiB0aGlzLmNhcmRSZXZlYWwpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuY2FyZEZyb250Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgdGhpcy5fci5zZXRTdHlsZSh0aGlzLmNhcmRPdmVyZmxvdy5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICB0aGlzLl9yLnNldFN0eWxlKHRoaXMuY2FyZFJldmVhbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLCAnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcjogUmVuZGVyZXIyLCBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuc2hvdyA9ICF0aGlzLnNob3c7XG4gICAgdGhpcy5zb2NpYWxzID0gdGhpcy5zb2NpYWxzID09PSAnYWN0aXZlJyA/ICdpbmFjdGl2ZScgOiAnYWN0aXZlJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuY2FyZEZyb250Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgdGhpcy5fci5zZXRTdHlsZSh0aGlzLmNhcmRPdmVyZmxvdy5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICBpZiAodGhpcy5jYXJkUmV2ZWFsKSB7XG4gICAgICAgIHRoaXMuX3Iuc2V0U3R5bGUodGhpcy5jYXJkUmV2ZWFsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQsICdoZWlnaHQnLCBoZWlnaHQgKyAncHgnKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBvbkFuaW1hdGlvblN0YXJ0KCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhcnQuZW1pdCgpO1xuICB9XG4gIG9uQW5pbWF0aW9uRG9uZSgpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkVuZC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==