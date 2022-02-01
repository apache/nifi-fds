/**
 * @fileoverview added by tsickle
 * Generated from: animations/fade/fadeInOut.animation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, state, style, transition, animate, AUTO_STYLE, query, animateChild, group, } from '@angular/animations';
/**
 * @record
 */
export function IFadeInOutAnimation() { }
if (false) {
    /** @type {?|undefined} */
    IFadeInOutAnimation.prototype.easeOnIn;
    /** @type {?|undefined} */
    IFadeInOutAnimation.prototype.easeOnOut;
}
/**
 * const tdFadeInOutAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * easeOnIn: Animation accelerates and decelerates when fading in. Defaults to ease-in.
 * * easeOnOut: Animation accelerates and decelerates when fading out. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a fade animation.
 *
 * usage: [\@tdFadeInOut]="{ value: true | false, params: { duration: 200 }}"
 * @type {?}
 */
export const tdFadeInOutAnimation = trigger('tdFadeInOut', [
    state('0', style({
        opacity: '0',
        visibility: 'hidden',
    })),
    state('1', style({
        opacity: AUTO_STYLE,
        visibility: AUTO_STYLE,
    })),
    transition('0 => 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ easeOnIn }}'),
        ]),
    ], { params: { duration: 150, delay: '0', easeOnIn: 'ease-in' } }),
    transition('1 => 0', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ easeOnOut }}'),
        ]),
    ], { params: { duration: 150, delay: '0', easeOnOut: 'ease-out' } }),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZUluT3V0LmFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9jb21tb24vIiwic291cmNlcyI6WyJhbmltYXRpb25zL2ZhZGUvZmFkZUluT3V0LmFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUVQLFVBQVUsRUFDVixLQUFLLEVBQ0wsWUFBWSxFQUNaLEtBQUssR0FDTixNQUFNLHFCQUFxQixDQUFDOzs7O0FBRzdCLHlDQUdDOzs7SUFGQyx1Q0FBa0I7O0lBQ2xCLHdDQUFtQjs7Ozs7Ozs7Ozs7Ozs7OztBQWdCckIsTUFBTSxPQUFPLG9CQUFvQixHQUE2QixPQUFPLENBQUMsYUFBYSxFQUFFO0lBQ25GLEtBQUssQ0FDSCxHQUFHLEVBQ0gsS0FBSyxDQUFDO1FBQ0osT0FBTyxFQUFFLEdBQUc7UUFDWixVQUFVLEVBQUUsUUFBUTtLQUNyQixDQUFDLENBQ0g7SUFDRCxLQUFLLENBQ0gsR0FBRyxFQUNILEtBQUssQ0FBQztRQUNKLE9BQU8sRUFBRSxVQUFVO1FBQ25CLFVBQVUsRUFBRSxVQUFVO0tBQ3ZCLENBQUMsQ0FDSDtJQUNELFVBQVUsQ0FDUixRQUFRLEVBQ1I7UUFDRSxLQUFLLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FBQywrQ0FBK0MsQ0FBQztTQUN6RCxDQUFDO0tBQ0gsRUFDRCxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FDL0Q7SUFDRCxVQUFVLENBQ1IsUUFBUSxFQUNSO1FBQ0UsS0FBSyxDQUFDO1lBQ0osS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUMvQyxPQUFPLENBQUMsZ0RBQWdELENBQUM7U0FDMUQsQ0FBQztLQUNILEVBQ0QsRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQ2pFO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgYW5pbWF0ZSxcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxuICBBVVRPX1NUWUxFLFxuICBxdWVyeSxcbiAgYW5pbWF0ZUNoaWxkLFxuICBncm91cCxcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJRmFkZUluT3V0QW5pbWF0aW9uIGV4dGVuZHMgSUFuaW1hdGlvbk9wdGlvbnMge1xuICBlYXNlT25Jbj86IHN0cmluZztcbiAgZWFzZU9uT3V0Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIGNvbnN0IHRkRmFkZUluT3V0QW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMTUwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlT25JbjogQW5pbWF0aW9uIGFjY2VsZXJhdGVzIGFuZCBkZWNlbGVyYXRlcyB3aGVuIGZhZGluZyBpbi4gRGVmYXVsdHMgdG8gZWFzZS1pbi5cbiAqICogZWFzZU9uT3V0OiBBbmltYXRpb24gYWNjZWxlcmF0ZXMgYW5kIGRlY2VsZXJhdGVzIHdoZW4gZmFkaW5nIG91dC4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBmYWRlIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZEZhZGVJbk91dF09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkRmFkZUluT3V0QW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEZhZGVJbk91dCcsIFtcbiAgc3RhdGUoXG4gICAgJzAnLFxuICAgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIH0pLFxuICApLFxuICBzdGF0ZShcbiAgICAnMScsXG4gICAgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogQVVUT19TVFlMRSxcbiAgICAgIHZpc2liaWxpdHk6IEFVVE9fU1RZTEUsXG4gICAgfSksXG4gICksXG4gIHRyYW5zaXRpb24oXG4gICAgJzAgPT4gMScsXG4gICAgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2VPbkluIH19JyksXG4gICAgICBdKSxcbiAgICBdLFxuICAgIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiAxNTAsIGRlbGF5OiAnMCcsIGVhc2VPbkluOiAnZWFzZS1pbicgfSB9LFxuICApLFxuICB0cmFuc2l0aW9uKFxuICAgICcxID0+IDAnLFxuICAgIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlT25PdXQgfX0nKSxcbiAgICAgIF0pLFxuICAgIF0sXG4gICAgeyBwYXJhbXM6IHsgZHVyYXRpb246IDE1MCwgZGVsYXk6ICcwJywgZWFzZU9uT3V0OiAnZWFzZS1vdXQnIH0gfSxcbiAgKSxcbl0pO1xuIl19