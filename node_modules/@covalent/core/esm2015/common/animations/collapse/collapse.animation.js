/**
 * @fileoverview added by tsickle
 * Generated from: animations/collapse/collapse.animation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, state, style, transition, animate, AUTO_STYLE, query, animateChild, group, } from '@angular/animations';
/**
 * @record
 */
export function ICollapseAnimation() { }
if (false) {
    /** @type {?|undefined} */
    ICollapseAnimation.prototype.easeOnClose;
    /** @type {?|undefined} */
    ICollapseAnimation.prototype.easeOnOpen;
}
/**
 * const tdCollapseAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * easeOnClose: Animation accelerates and decelerates when closing. Defaults to ease-in.
 * * easeOnOpen: Animation accelerates and decelerates when opening. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a collapse/expand animation.
 *
 * usage: [\@tdCollapse]="{ value: true | false, params: { duration: 500 }}"
 * @type {?}
 */
export const tdCollapseAnimation = trigger('tdCollapse', [
    state('1', style({
        height: '0',
        overflow: 'hidden',
    })),
    state('0', style({
        height: AUTO_STYLE,
        overflow: AUTO_STYLE,
    })),
    transition('0 => 1', [
        style({
            overflow: 'hidden',
            height: AUTO_STYLE,
        }),
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', style({
                height: '0',
                overflow: 'hidden',
            })),
        ]),
    ], { params: { duration: 150, delay: '0', ease: 'ease-in' } }),
    transition('1 => 0', [
        style({
            height: '0',
            overflow: 'hidden',
        }),
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', style({
                overflow: 'hidden',
                height: AUTO_STYLE,
            })),
        ]),
    ], { params: { duration: 150, delay: '0', ease: 'ease-out' } }),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2NvbW1vbi8iLCJzb3VyY2VzIjpbImFuaW1hdGlvbnMvY29sbGFwc2UvY29sbGFwc2UuYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBRVAsVUFBVSxFQUNWLEtBQUssRUFDTCxZQUFZLEVBQ1osS0FBSyxHQUNOLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFHN0Isd0NBR0M7OztJQUZDLHlDQUFxQjs7SUFDckIsd0NBQW9COzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J0QixNQUFNLE9BQU8sbUJBQW1CLEdBQTZCLE9BQU8sQ0FBQyxZQUFZLEVBQUU7SUFDakYsS0FBSyxDQUNILEdBQUcsRUFDSCxLQUFLLENBQUM7UUFDSixNQUFNLEVBQUUsR0FBRztRQUNYLFFBQVEsRUFBRSxRQUFRO0tBQ25CLENBQUMsQ0FDSDtJQUNELEtBQUssQ0FDSCxHQUFHLEVBQ0gsS0FBSyxDQUFDO1FBQ0osTUFBTSxFQUFFLFVBQVU7UUFDbEIsUUFBUSxFQUFFLFVBQVU7S0FDckIsQ0FBQyxDQUNIO0lBQ0QsVUFBVSxDQUNSLFFBQVEsRUFDUjtRQUNFLEtBQUssQ0FBQztZQUNKLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE1BQU0sRUFBRSxVQUFVO1NBQ25CLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FDTCwyQ0FBMkMsRUFDM0MsS0FBSyxDQUFDO2dCQUNKLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFFBQVEsRUFBRSxRQUFRO2FBQ25CLENBQUMsQ0FDSDtTQUNGLENBQUM7S0FDSCxFQUNELEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUMzRDtJQUNELFVBQVUsQ0FDUixRQUFRLEVBQ1I7UUFDRSxLQUFLLENBQUM7WUFDSixNQUFNLEVBQUUsR0FBRztZQUNYLFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FDTCwyQ0FBMkMsRUFDM0MsS0FBSyxDQUFDO2dCQUNKLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixNQUFNLEVBQUUsVUFBVTthQUNuQixDQUFDLENBQ0g7U0FDRixDQUFDO0tBQ0gsRUFDRCxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FDNUQ7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdHJpZ2dlcixcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICBhbmltYXRlLFxuICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXG4gIEFVVE9fU1RZTEUsXG4gIHF1ZXJ5LFxuICBhbmltYXRlQ2hpbGQsXG4gIGdyb3VwLFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb2xsYXBzZUFuaW1hdGlvbiBleHRlbmRzIElBbmltYXRpb25PcHRpb25zIHtcbiAgZWFzZU9uQ2xvc2U/OiBzdHJpbmc7XG4gIGVhc2VPbk9wZW4/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogY29uc3QgdGRDb2xsYXBzZUFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDE1MCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZU9uQ2xvc2U6IEFuaW1hdGlvbiBhY2NlbGVyYXRlcyBhbmQgZGVjZWxlcmF0ZXMgd2hlbiBjbG9zaW5nLiBEZWZhdWx0cyB0byBlYXNlLWluLlxuICogKiBlYXNlT25PcGVuOiBBbmltYXRpb24gYWNjZWxlcmF0ZXMgYW5kIGRlY2VsZXJhdGVzIHdoZW4gb3BlbmluZy4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBjb2xsYXBzZS9leHBhbmQgYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkQ29sbGFwc2VdPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDUwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZENvbGxhcHNlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZENvbGxhcHNlJywgW1xuICBzdGF0ZShcbiAgICAnMScsXG4gICAgc3R5bGUoe1xuICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgfSksXG4gICksXG4gIHN0YXRlKFxuICAgICcwJyxcbiAgICBzdHlsZSh7XG4gICAgICBoZWlnaHQ6IEFVVE9fU1RZTEUsXG4gICAgICBvdmVyZmxvdzogQVVUT19TVFlMRSxcbiAgICB9KSxcbiAgKSxcbiAgdHJhbnNpdGlvbihcbiAgICAnMCA9PiAxJyxcbiAgICBbXG4gICAgICBzdHlsZSh7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgaGVpZ2h0OiBBVVRPX1NUWUxFLFxuICAgICAgfSksXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKFxuICAgICAgICAgICd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScsXG4gICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgfSksXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICBdLFxuICAgIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiAxNTAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLWluJyB9IH0sXG4gICksXG4gIHRyYW5zaXRpb24oXG4gICAgJzEgPT4gMCcsXG4gICAgW1xuICAgICAgc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgfSksXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKFxuICAgICAgICAgICd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScsXG4gICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgaGVpZ2h0OiBBVVRPX1NUWUxFLFxuICAgICAgICAgIH0pLFxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXSxcbiAgICB7IHBhcmFtczogeyBkdXJhdGlvbjogMTUwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1vdXQnIH0gfSxcbiAgKSxcbl0pO1xuIl19