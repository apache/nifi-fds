/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { trigger, state, style, transition, animate, AUTO_STYLE, query, animateChild, group } from '@angular/animations';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJjb21tb24vYW5pbWF0aW9ucy9jb2xsYXBzZS9jb2xsYXBzZS5hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUNoQixVQUFVLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUd2Ryx3Q0FHQzs7O0lBRkUseUNBQXFCOztJQUNyQix3Q0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnZCLE1BQU0sT0FBTyxtQkFBbUIsR0FBNkIsT0FBTyxDQUFDLFlBQVksRUFBRTtJQUNqRixLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztRQUNmLE1BQU0sRUFBRSxHQUFHO1FBQ1gsUUFBUSxFQUFFLFFBQVE7S0FDbkIsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLEdBQUcsRUFBRyxLQUFLLENBQUM7UUFDaEIsTUFBTSxFQUFFLFVBQVU7UUFDbEIsUUFBUSxFQUFFLFVBQVU7S0FDckIsQ0FBQyxDQUFDO0lBQ0gsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixLQUFLLENBQUM7WUFDSixRQUFRLEVBQUUsUUFBUTtZQUNsQixNQUFNLEVBQUUsVUFBVTtTQUNuQixDQUFDO1FBQ0YsS0FBSyxDQUFDO1lBQ0osS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUMvQyxPQUFPLENBQUMsMkNBQTJDLEVBQUUsS0FBSyxDQUFDO2dCQUN6RCxNQUFNLEVBQUUsR0FBRztnQkFDWCxRQUFRLEVBQUUsUUFBUTthQUNuQixDQUFDLENBQUM7U0FDSixDQUFDO0tBQ0gsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUMsQ0FBQztJQUM3RCxVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLEtBQUssQ0FBQztZQUNKLE1BQU0sRUFBRSxHQUFHO1lBQ1gsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDL0MsT0FBTyxDQUFDLDJDQUEyQyxFQUFFLEtBQUssQ0FBQztnQkFDekQsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLE1BQU0sRUFBRSxVQUFVO2FBQ25CLENBQUMsQ0FBQztTQUNKLENBQUM7S0FDSCxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBQyxDQUFDO0NBQy9ELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ29sbGFwc2VBbmltYXRpb24gZXh0ZW5kcyBJQW5pbWF0aW9uT3B0aW9ucyB7XG4gICBlYXNlT25DbG9zZT86IHN0cmluZztcbiAgIGVhc2VPbk9wZW4/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogY29uc3QgdGRDb2xsYXBzZUFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDE1MCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZU9uQ2xvc2U6IEFuaW1hdGlvbiBhY2NlbGVyYXRlcyBhbmQgZGVjZWxlcmF0ZXMgd2hlbiBjbG9zaW5nLiBEZWZhdWx0cyB0byBlYXNlLWluLlxuICogKiBlYXNlT25PcGVuOiBBbmltYXRpb24gYWNjZWxlcmF0ZXMgYW5kIGRlY2VsZXJhdGVzIHdoZW4gb3BlbmluZy4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBjb2xsYXBzZS9leHBhbmQgYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkQ29sbGFwc2VdPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDUwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZENvbGxhcHNlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZENvbGxhcHNlJywgW1xuICBzdGF0ZSgnMScsIHN0eWxlKHtcbiAgICBoZWlnaHQ6ICcwJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIH0pKSxcbiAgc3RhdGUoJzAnLCAgc3R5bGUoe1xuICAgIGhlaWdodDogQVVUT19TVFlMRSxcbiAgICBvdmVyZmxvdzogQVVUT19TVFlMRSxcbiAgfSkpLFxuICB0cmFuc2l0aW9uKCcwID0+IDEnLCBbXG4gICAgc3R5bGUoe1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgaGVpZ2h0OiBBVVRPX1NUWUxFLFxuICAgIH0pLFxuICAgIGdyb3VwKFtcbiAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2UgfX0nLCBzdHlsZSh7XG4gICAgICAgIGhlaWdodDogJzAnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB9KSksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiAxNTAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLWluJyB9fSksXG4gIHRyYW5zaXRpb24oJzEgPT4gMCcsIFtcbiAgICBzdHlsZSh7XG4gICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB9KSxcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19Jywgc3R5bGUoe1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGhlaWdodDogQVVUT19TVFlMRSxcbiAgICAgIH0pKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDE1MCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG5dKTtcbiJdfQ==