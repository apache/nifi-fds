/**
 * @fileoverview added by tsickle
 * Generated from: animations/jello/jello.animation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, state, style, keyframes, transition, animate, query, animateChild, group, } from '@angular/animations';
/**
 * const tdJelloAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a jello animation.
 *
 * usage: [\@tdJello]="{ value: true | false, params: { duration: 200 }}"
 * @type {?}
 */
export const tdJelloAnimation = trigger('tdJello', [
    state('0', style({
        transform: 'none',
    })),
    state('1', style({
        transform: 'none',
    })),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', keyframes([
                style({ transform: 'none', offset: 0 }),
                style({ transform: 'none', offset: 0.011 }),
                style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222 }),
                style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 }),
                style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 }),
                style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 }),
                style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 }),
                style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
                style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 }),
            ])),
        ]),
    ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVsbG8uYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2NvbW1vbi8iLCJzb3VyY2VzIjpbImFuaW1hdGlvbnMvamVsbG8vamVsbG8uYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsT0FBTyxFQUdQLEtBQUssRUFDTCxZQUFZLEVBQ1osS0FBSyxHQUNOLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBZTdCLE1BQU0sT0FBTyxnQkFBZ0IsR0FBNkIsT0FBTyxDQUFDLFNBQVMsRUFBRTtJQUMzRSxLQUFLLENBQ0gsR0FBRyxFQUNILEtBQUssQ0FBQztRQUNKLFNBQVMsRUFBRSxNQUFNO0tBQ2xCLENBQUMsQ0FDSDtJQUNELEtBQUssQ0FDSCxHQUFHLEVBQ0gsS0FBSyxDQUFDO1FBQ0osU0FBUyxFQUFFLE1BQU07S0FDbEIsQ0FBQyxDQUNIO0lBQ0QsVUFBVSxDQUNSLFNBQVMsRUFDVDtRQUNFLEtBQUssQ0FBQztZQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDL0MsT0FBTyxDQUNMLDJDQUEyQyxFQUMzQyxTQUFTLENBQUM7Z0JBQ1IsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZDLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUMzQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUN0RSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUNwRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUN4RSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUN4RSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUM1RSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUM1RSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsMkNBQTJDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQ2pGLENBQUMsQ0FDSDtTQUNGLENBQUM7S0FDSCxFQUNELEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUM1RDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIGtleWZyYW1lcyxcbiAgdHJhbnNpdGlvbixcbiAgYW5pbWF0ZSxcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxuICBBVVRPX1NUWUxFLFxuICBxdWVyeSxcbiAgYW5pbWF0ZUNoaWxkLFxuICBncm91cCxcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZEplbGxvQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gNTAwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZSBhbmQgZGVjZWxlcmF0ZSBzdHlsZS4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBqZWxsbyBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRKZWxsb109XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkSmVsbG9BbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkSmVsbG8nLCBbXG4gIHN0YXRlKFxuICAgICcwJyxcbiAgICBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICdub25lJyxcbiAgICB9KSxcbiAgKSxcbiAgc3RhdGUoXG4gICAgJzEnLFxuICAgIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ25vbmUnLFxuICAgIH0pLFxuICApLFxuICB0cmFuc2l0aW9uKFxuICAgICcwIDw9PiAxJyxcbiAgICBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKFxuICAgICAgICAgICd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScsXG4gICAgICAgICAga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnbm9uZScsIG9mZnNldDogMCB9KSxcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnbm9uZScsIG9mZnNldDogMC4wMTEgfSksXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyknLCBvZmZzZXQ6IDAuMjIyIH0pLFxuICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKScsIG9mZnNldDogMC4zMzMgfSksXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NrZXdYKC0zLjEyNWRlZykgc2tld1koLTMuMTI1ZGVnKScsIG9mZnNldDogMC40NDQgfSksXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKScsIG9mZnNldDogMC41NTUgfSksXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NrZXdYKC0wLjc4MTI1ZGVnKSBza2V3WSgtMC43ODEyNWRlZyknLCBvZmZzZXQ6IDAuNjY2IH0pLFxuICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpJywgb2Zmc2V0OiAwLjc3NyB9KSxcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2tld1goLTAuMTk1MzEyNWRlZykgc2tld1koLTAuMTk1MzEyNWRlZyknLCBvZmZzZXQ6IDAuODg4IH0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXSxcbiAgICB7IHBhcmFtczogeyBkdXJhdGlvbjogNTAwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1vdXQnIH0gfSxcbiAgKSxcbl0pO1xuIl19