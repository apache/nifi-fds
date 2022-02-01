/**
 * @fileoverview added by tsickle
 * Generated from: animations/flash/flash.animation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, state, style, keyframes, transition, animate, query, animateChild, group, } from '@angular/animations';
/**
 * const tdFlashAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a flash animation.
 *
 * usage: [\@tdFlash]="{ value: true | false, params: { duration: 200 }}"
 * @type {?}
 */
export const tdFlashAnimation = trigger('tdFlash', [
    state('0', style({
        opacity: 1,
    })),
    state('1', style({
        opacity: 1,
    })),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', keyframes([
                style({ opacity: 1, offset: 0 }),
                style({ opacity: 0, offset: 0.25 }),
                style({ opacity: 1, offset: 0.5 }),
                style({ opacity: 0, offset: 0.75 }),
                style({ opacity: 1, offset: 1.0 }),
            ])),
        ]),
    ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhc2guYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2NvbW1vbi8iLCJzb3VyY2VzIjpbImFuaW1hdGlvbnMvZmxhc2gvZmxhc2guYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsT0FBTyxFQUdQLEtBQUssRUFDTCxZQUFZLEVBQ1osS0FBSyxHQUNOLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBZTdCLE1BQU0sT0FBTyxnQkFBZ0IsR0FBNkIsT0FBTyxDQUFDLFNBQVMsRUFBRTtJQUMzRSxLQUFLLENBQ0gsR0FBRyxFQUNILEtBQUssQ0FBQztRQUNKLE9BQU8sRUFBRSxDQUFDO0tBQ1gsQ0FBQyxDQUNIO0lBQ0QsS0FBSyxDQUNILEdBQUcsRUFDSCxLQUFLLENBQUM7UUFDSixPQUFPLEVBQUUsQ0FBQztLQUNYLENBQUMsQ0FDSDtJQUNELFVBQVUsQ0FDUixTQUFTLEVBQ1Q7UUFDRSxLQUFLLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FDTCwyQ0FBMkMsRUFDM0MsU0FBUyxDQUFDO2dCQUNSLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUNoQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDbkMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUNuQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUNuQyxDQUFDLENBQ0g7U0FDRixDQUFDO0tBQ0gsRUFDRCxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FDNUQ7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdHJpZ2dlcixcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICBrZXlmcmFtZXMsXG4gIHRyYW5zaXRpb24sXG4gIGFuaW1hdGUsXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcbiAgQVVUT19TVFlMRSxcbiAgcXVlcnksXG4gIGFuaW1hdGVDaGlsZCxcbiAgZ3JvdXAsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogY29uc3QgdGRGbGFzaEFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgZmxhc2ggYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkRmxhc2hdPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDIwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZEZsYXNoQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEZsYXNoJywgW1xuICBzdGF0ZShcbiAgICAnMCcsXG4gICAgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogMSxcbiAgICB9KSxcbiAgKSxcbiAgc3RhdGUoXG4gICAgJzEnLFxuICAgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgfSksXG4gICksXG4gIHRyYW5zaXRpb24oXG4gICAgJzAgPD0+IDEnLFxuICAgIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoXG4gICAgICAgICAgJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyxcbiAgICAgICAgICBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxLCBvZmZzZXQ6IDAgfSksXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIG9mZnNldDogMC4yNSB9KSxcbiAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgb2Zmc2V0OiAwLjUgfSksXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIG9mZnNldDogMC43NSB9KSxcbiAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgb2Zmc2V0OiAxLjAgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICBdLFxuICAgIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLW91dCcgfSB9LFxuICApLFxuXSk7XG4iXX0=