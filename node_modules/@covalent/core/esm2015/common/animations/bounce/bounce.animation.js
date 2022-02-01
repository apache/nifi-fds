/**
 * @fileoverview added by tsickle
 * Generated from: animations/bounce/bounce.animation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, state, style, keyframes, transition, animate, query, animateChild, group, } from '@angular/animations';
/**
 * const tdBounceAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a bounce animation.
 *
 * usage: [\@tdBounce]="{ value: true | false, params: { duration: 200 }}"
 * @type {?}
 */
export const tdBounceAnimation = trigger('tdBounce', [
    state('0', style({
        transform: 'translate3d(0, 0, 0)',
    })),
    state('1', style({
        transform: 'translate3d(0, 0, 0)',
    })),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', keyframes([
                style({
                    animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                    transform: 'translate3d(0, 0, 0)',
                    offset: 0,
                }),
                style({
                    animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                    transform: 'translate3d(0, 0, 0)',
                    offset: 0.2,
                }),
                style({
                    animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                    transform: 'translate3d(0, -30px, 0)',
                    offset: 0.4,
                }),
                style({
                    animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                    transform: 'translate3d(0, -30px, 0)',
                    offset: 0.43,
                }),
                style({
                    animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                    transform: 'translate3d(0, 0, 0)',
                    offset: 0.53,
                }),
                style({
                    animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                    transform: 'translate3d(0, -15px, 0)',
                    offset: 0.7,
                }),
                style({
                    animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                    transform: 'translate3d(0, 0, 0)',
                    offset: 0.8,
                }),
                style({ transform: 'translate3d(0, -4px, 0)', offset: 0.9 }),
                style({
                    animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                    transform: 'translate3d(0, 0, 0)',
                    offset: 1.0,
                }),
            ])),
        ]),
    ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm91bmNlLmFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9jb21tb24vIiwic291cmNlcyI6WyJhbmltYXRpb25zL2JvdW5jZS9ib3VuY2UuYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsT0FBTyxFQUVQLEtBQUssRUFDTCxZQUFZLEVBQ1osS0FBSyxHQUNOLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBZTdCLE1BQU0sT0FBTyxpQkFBaUIsR0FBNkIsT0FBTyxDQUFDLFVBQVUsRUFBRTtJQUM3RSxLQUFLLENBQ0gsR0FBRyxFQUNILEtBQUssQ0FBQztRQUNKLFNBQVMsRUFBRSxzQkFBc0I7S0FDbEMsQ0FBQyxDQUNIO0lBQ0QsS0FBSyxDQUNILEdBQUcsRUFDSCxLQUFLLENBQUM7UUFDSixTQUFTLEVBQUUsc0JBQXNCO0tBQ2xDLENBQUMsQ0FDSDtJQUNELFVBQVUsQ0FDUixTQUFTLEVBQ1Q7UUFDRSxLQUFLLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FDTCwyQ0FBMkMsRUFDM0MsU0FBUyxDQUFDO2dCQUNSLEtBQUssQ0FBQztvQkFDSix1QkFBdUIsRUFBRSwwQ0FBMEM7b0JBQ25FLFNBQVMsRUFBRSxzQkFBc0I7b0JBQ2pDLE1BQU0sRUFBRSxDQUFDO2lCQUNWLENBQUM7Z0JBQ0YsS0FBSyxDQUFDO29CQUNKLHVCQUF1QixFQUFFLDBDQUEwQztvQkFDbkUsU0FBUyxFQUFFLHNCQUFzQjtvQkFDakMsTUFBTSxFQUFFLEdBQUc7aUJBQ1osQ0FBQztnQkFDRixLQUFLLENBQUM7b0JBQ0osdUJBQXVCLEVBQUUsMENBQTBDO29CQUNuRSxTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxNQUFNLEVBQUUsR0FBRztpQkFDWixDQUFDO2dCQUNGLEtBQUssQ0FBQztvQkFDSix1QkFBdUIsRUFBRSwwQ0FBMEM7b0JBQ25FLFNBQVMsRUFBRSwwQkFBMEI7b0JBQ3JDLE1BQU0sRUFBRSxJQUFJO2lCQUNiLENBQUM7Z0JBQ0YsS0FBSyxDQUFDO29CQUNKLHVCQUF1QixFQUFFLDBDQUEwQztvQkFDbkUsU0FBUyxFQUFFLHNCQUFzQjtvQkFDakMsTUFBTSxFQUFFLElBQUk7aUJBQ2IsQ0FBQztnQkFDRixLQUFLLENBQUM7b0JBQ0osdUJBQXVCLEVBQUUsMENBQTBDO29CQUNuRSxTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxNQUFNLEVBQUUsR0FBRztpQkFDWixDQUFDO2dCQUNGLEtBQUssQ0FBQztvQkFDSix1QkFBdUIsRUFBRSwwQ0FBMEM7b0JBQ25FLFNBQVMsRUFBRSxzQkFBc0I7b0JBQ2pDLE1BQU0sRUFBRSxHQUFHO2lCQUNaLENBQUM7Z0JBQ0YsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDNUQsS0FBSyxDQUFDO29CQUNKLHVCQUF1QixFQUFFLDBDQUEwQztvQkFDbkUsU0FBUyxFQUFFLHNCQUFzQjtvQkFDakMsTUFBTSxFQUFFLEdBQUc7aUJBQ1osQ0FBQzthQUNILENBQUMsQ0FDSDtTQUNGLENBQUM7S0FDSCxFQUNELEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUM1RDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIGtleWZyYW1lcyxcbiAgdHJhbnNpdGlvbixcbiAgYW5pbWF0ZSxcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxuICBxdWVyeSxcbiAgYW5pbWF0ZUNoaWxkLFxuICBncm91cCxcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZEJvdW5jZUFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgYm91bmNlIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZEJvdW5jZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkQm91bmNlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEJvdW5jZScsIFtcbiAgc3RhdGUoXG4gICAgJzAnLFxuICAgIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICB9KSxcbiAgKSxcbiAgc3RhdGUoXG4gICAgJzEnLFxuICAgIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICB9KSxcbiAgKSxcbiAgdHJhbnNpdGlvbihcbiAgICAnMCA8PT4gMScsXG4gICAgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZShcbiAgICAgICAgICAne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2UgfX0nLFxuICAgICAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICAgICAgICAgICAgb2Zmc2V0OiAwLjIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApJyxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApJyxcbiAgICAgICAgICAgICAgb2Zmc2V0OiAwLjQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApJyxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApJyxcbiAgICAgICAgICAgICAgb2Zmc2V0OiAwLjQzLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICAgICAgICAgICAgb2Zmc2V0OiAwLjUzLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKScsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKScsXG4gICAgICAgICAgICAgIG9mZnNldDogMC43LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICAgICAgICAgICAgb2Zmc2V0OiAwLjgsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTRweCwgMCknLCBvZmZzZXQ6IDAuOSB9KSxcbiAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJyxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxuICAgICAgICAgICAgICBvZmZzZXQ6IDEuMCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXSxcbiAgICB7IHBhcmFtczogeyBkdXJhdGlvbjogNTAwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1vdXQnIH0gfSxcbiAgKSxcbl0pO1xuIl19