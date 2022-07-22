import { computeAutoPlacement, getReferenceOffsets, getTargetOffsets } from '../utils/index';
export function initData(targetElement, hostElement, position, options) {
    var hostElPosition = getReferenceOffsets(targetElement, hostElement);
    var placementAuto = !!position.match(/auto/g);
    // support old placements 'auto left|right|top|bottom'
    var placement = !!position.match(/auto\s(left|right|top|bottom)/g)
        ? position.split(' ')[1] || ''
        : position;
    var targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
    placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement);
    return {
        options: options,
        instance: {
            target: targetElement,
            host: hostElement,
            arrow: null
        },
        offsets: {
            target: targetOffset,
            host: hostElPosition,
            arrow: null
        },
        positionFixed: false,
        placement: placement,
        placementAuto: placementAuto
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdERhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy9tb2RpZmllcnMvaW5pdERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2pCLE1BQU0sZ0JBQWdCLENBQUM7QUFJeEIsTUFBTSxVQUFVLFFBQVEsQ0FDdEIsYUFBMEIsRUFBRSxXQUF3QixFQUFFLFFBQWdCLEVBQUUsT0FBZ0I7SUFHeEYsSUFBTSxjQUFjLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZFLElBQU0sYUFBYSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWhELHNEQUFzRDtJQUN0RCxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQztRQUNoRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQzlCLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFFYixJQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2hGLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUV4RixPQUFPO1FBQ0wsT0FBTyxTQUFBO1FBQ1AsUUFBUSxFQUFFO1lBQ1IsTUFBTSxFQUFFLGFBQWE7WUFDckIsSUFBSSxFQUFFLFdBQVc7WUFDakIsS0FBSyxFQUFFLElBQUk7U0FDWjtRQUNELE9BQU8sRUFBRTtZQUNQLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLElBQUksRUFBRSxjQUFjO1lBQ3BCLEtBQUssRUFBRSxJQUFJO1NBQ1o7UUFDRCxhQUFhLEVBQUUsS0FBSztRQUNwQixTQUFTLFdBQUE7UUFDVCxhQUFhLGVBQUE7S0FDZCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNvbXB1dGVBdXRvUGxhY2VtZW50LFxuICBnZXRSZWZlcmVuY2VPZmZzZXRzLFxuICBnZXRUYXJnZXRPZmZzZXRzXG59IGZyb20gJy4uL3V0aWxzL2luZGV4JztcblxuaW1wb3J0IHsgRGF0YSwgT3B0aW9ucyB9IGZyb20gJy4uL21vZGVscy9pbmRleCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RGF0YShcbiAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCwgcG9zaXRpb246IHN0cmluZywgb3B0aW9uczogT3B0aW9uc1xuKTogRGF0YSB7XG5cbiAgY29uc3QgaG9zdEVsUG9zaXRpb24gPSBnZXRSZWZlcmVuY2VPZmZzZXRzKHRhcmdldEVsZW1lbnQsIGhvc3RFbGVtZW50KTtcbiAgY29uc3QgcGxhY2VtZW50QXV0byA9ICEhcG9zaXRpb24ubWF0Y2goL2F1dG8vZyk7XG5cbiAgLy8gc3VwcG9ydCBvbGQgcGxhY2VtZW50cyAnYXV0byBsZWZ0fHJpZ2h0fHRvcHxib3R0b20nXG4gIGxldCBwbGFjZW1lbnQgPSAhIXBvc2l0aW9uLm1hdGNoKC9hdXRvXFxzKGxlZnR8cmlnaHR8dG9wfGJvdHRvbSkvZylcbiAgICA/IHBvc2l0aW9uLnNwbGl0KCcgJylbMV0gfHwgJydcbiAgICA6IHBvc2l0aW9uO1xuXG4gIGNvbnN0IHRhcmdldE9mZnNldCA9IGdldFRhcmdldE9mZnNldHModGFyZ2V0RWxlbWVudCwgaG9zdEVsUG9zaXRpb24sIHBsYWNlbWVudCk7XG4gIHBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KHBsYWNlbWVudCwgaG9zdEVsUG9zaXRpb24sIHRhcmdldEVsZW1lbnQsIGhvc3RFbGVtZW50KTtcblxuICByZXR1cm4ge1xuICAgIG9wdGlvbnMsXG4gICAgaW5zdGFuY2U6IHtcbiAgICAgIHRhcmdldDogdGFyZ2V0RWxlbWVudCxcbiAgICAgIGhvc3Q6IGhvc3RFbGVtZW50LFxuICAgICAgYXJyb3c6IG51bGxcbiAgICB9LFxuICAgIG9mZnNldHM6IHtcbiAgICAgIHRhcmdldDogdGFyZ2V0T2Zmc2V0LFxuICAgICAgaG9zdDogaG9zdEVsUG9zaXRpb24sXG4gICAgICBhcnJvdzogbnVsbFxuICAgIH0sXG4gICAgcG9zaXRpb25GaXhlZDogZmFsc2UsXG4gICAgcGxhY2VtZW50LFxuICAgIHBsYWNlbWVudEF1dG9cbiAgfTtcbn1cbiJdfQ==