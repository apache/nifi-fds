/**
 * @fileoverview added by tsickle
 * Generated from: animations/headshake/headshake.animation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, state, style, keyframes, transition, animate, query, animateChild, group, } from '@angular/animations';
/**
 * const tdHeadshakeAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a headshake animation.
 *
 * usage: [\@tdHeadshake]="{ value: true | false, params: { duration: 200 }}"
 * @type {?}
 */
export const tdHeadshakeAnimation = trigger('tdHeadshake', [
    state('0', style({
        transform: 'translateX(0)',
    })),
    state('1', style({
        transform: 'translateX(0)',
    })),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', keyframes([
                style({ transform: 'translateX(0)', offset: 0 }),
                style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
                style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
                style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
                style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
                style({ transform: 'translateX(0)', offset: 0.5 }),
            ])),
        ]),
    ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZHNoYWtlLmFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9jb21tb24vIiwic291cmNlcyI6WyJhbmltYXRpb25zL2hlYWRzaGFrZS9oZWFkc2hha2UuYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsT0FBTyxFQUdQLEtBQUssRUFDTCxZQUFZLEVBQ1osS0FBSyxHQUNOLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBZTdCLE1BQU0sT0FBTyxvQkFBb0IsR0FBNkIsT0FBTyxDQUFDLGFBQWEsRUFBRTtJQUNuRixLQUFLLENBQ0gsR0FBRyxFQUNILEtBQUssQ0FBQztRQUNKLFNBQVMsRUFBRSxlQUFlO0tBQzNCLENBQUMsQ0FDSDtJQUNELEtBQUssQ0FDSCxHQUFHLEVBQ0gsS0FBSyxDQUFDO1FBQ0osU0FBUyxFQUFFLGVBQWU7S0FDM0IsQ0FBQyxDQUNIO0lBQ0QsVUFBVSxDQUNSLFNBQVMsRUFDVDtRQUNFLEtBQUssQ0FBQztZQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDL0MsT0FBTyxDQUNMLDJDQUEyQyxFQUMzQyxTQUFTLENBQUM7Z0JBQ1IsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ2hELEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0JBQ3RFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSwrQkFBK0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0JBQ3BFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0JBQ3RFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSwrQkFBK0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0JBQ3BFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQ25ELENBQUMsQ0FDSDtTQUNGLENBQUM7S0FDSCxFQUNELEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUM1RDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIGtleWZyYW1lcyxcbiAgdHJhbnNpdGlvbixcbiAgYW5pbWF0ZSxcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxuICBBVVRPX1NUWUxFLFxuICBxdWVyeSxcbiAgYW5pbWF0ZUNoaWxkLFxuICBncm91cCxcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZEhlYWRzaGFrZUFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgaGVhZHNoYWtlIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZEhlYWRzaGFrZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkSGVhZHNoYWtlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEhlYWRzaGFrZScsIFtcbiAgc3RhdGUoXG4gICAgJzAnLFxuICAgIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxuICAgIH0pLFxuICApLFxuICBzdGF0ZShcbiAgICAnMScsXG4gICAgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXG4gICAgfSksXG4gICksXG4gIHRyYW5zaXRpb24oXG4gICAgJzAgPD0+IDEnLFxuICAgIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoXG4gICAgICAgICAgJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyxcbiAgICAgICAgICBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb2Zmc2V0OiAwIH0pLFxuICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZVkoLTlkZWcpJywgb2Zmc2V0OiAwLjA2NSB9KSxcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCg1cHgpIHJvdGF0ZVkoN2RlZyknLCBvZmZzZXQ6IDAuMTg1IH0pLFxuICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZVkoLTVkZWcpJywgb2Zmc2V0OiAwLjMxNSB9KSxcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyknLCBvZmZzZXQ6IDAuNDM1IH0pLFxuICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb2Zmc2V0OiAwLjUgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICBdLFxuICAgIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLW91dCcgfSB9LFxuICApLFxuXSk7XG4iXX0=