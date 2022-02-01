/**
 * @fileoverview added by tsickle
 * Generated from: animations/rotate/rotate.animation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, state, style, transition, animate, query, animateChild, group, } from '@angular/animations';
/**
 * @record
 */
export function IRotateAnimation() { }
if (false) {
    /** @type {?|undefined} */
    IRotateAnimation.prototype.degrees;
    /** @type {?|undefined} */
    IRotateAnimation.prototype.ease;
}
/**
 * const tdRotateAnimation
 *
 * Parameter Options:
 * * degressStart: Degrees of rotation that the dom object will end up in during the "false" state
 * * degreesEnd: Degrees of rotation that the dom object will end up in during the "true" state
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerates and decelerates. Defaults to ease-in.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a rotation animation.
 *
 * usage: [\@tdRotate]="{ value: true | false, params: { degreesEnd: 90 }}"
 * @type {?}
 */
export const tdRotateAnimation = trigger('tdRotate', [
    state('0', style({
        transform: 'rotate({{ degressStart }}deg)',
    }), { params: { degressStart: 0 } }),
    state('1', style({
        transform: 'rotate({{ degreesEnd }}deg)',
    }), { params: { degreesEnd: 180 } }),
    transition('0 <=> 1', [group([query('@*', animateChild(), { optional: true }), animate('{{ duration }}ms {{ delay }}ms {{ ease }}')])], { params: { duration: 250, delay: '0', ease: 'ease-in' } }),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRlLmFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9jb21tb24vIiwic291cmNlcyI6WyJhbmltYXRpb25zL3JvdGF0ZS9yb3RhdGUuYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBRVAsS0FBSyxFQUNMLFlBQVksRUFDWixLQUFLLEdBQ04sTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUk3QixzQ0FHQzs7O0lBRkMsbUNBQWlCOztJQUNqQixnQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmhCLE1BQU0sT0FBTyxpQkFBaUIsR0FBNkIsT0FBTyxDQUFDLFVBQVUsRUFBRTtJQUM3RSxLQUFLLENBQ0gsR0FBRyxFQUNILEtBQUssQ0FBQztRQUNKLFNBQVMsRUFBRSwrQkFBK0I7S0FDM0MsQ0FBQyxFQUNGLEVBQUUsTUFBTSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQ2hDO0lBQ0QsS0FBSyxDQUNILEdBQUcsRUFDSCxLQUFLLENBQUM7UUFDSixTQUFTLEVBQUUsNkJBQTZCO0tBQ3pDLENBQUMsRUFDRixFQUFFLE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUNoQztJQUNELFVBQVUsQ0FDUixTQUFTLEVBQ1QsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2hILEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUMzRDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIGFuaW1hdGUsXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcbiAgcXVlcnksXG4gIGFuaW1hdGVDaGlsZCxcbiAgZ3JvdXAsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJUm90YXRlQW5pbWF0aW9uIGV4dGVuZHMgSUFuaW1hdGlvbk9wdGlvbnMge1xuICBkZWdyZWVzPzogbnVtYmVyO1xuICBlYXNlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIGNvbnN0IHRkUm90YXRlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGRlZ3Jlc3NTdGFydDogRGVncmVlcyBvZiByb3RhdGlvbiB0aGF0IHRoZSBkb20gb2JqZWN0IHdpbGwgZW5kIHVwIGluIGR1cmluZyB0aGUgXCJmYWxzZVwiIHN0YXRlXG4gKiAqIGRlZ3JlZXNFbmQ6IERlZ3JlZXMgb2Ygcm90YXRpb24gdGhhdCB0aGUgZG9tIG9iamVjdCB3aWxsIGVuZCB1cCBpbiBkdXJpbmcgdGhlIFwidHJ1ZVwiIHN0YXRlXG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMTUwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZXMgYW5kIGRlY2VsZXJhdGVzLiBEZWZhdWx0cyB0byBlYXNlLWluLlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgcm90YXRpb24gYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkUm90YXRlXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGRlZ3JlZXNFbmQ6IDkwIH19XCJcbiAqL1xuXG5leHBvcnQgY29uc3QgdGRSb3RhdGVBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkUm90YXRlJywgW1xuICBzdGF0ZShcbiAgICAnMCcsXG4gICAgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKHt7IGRlZ3Jlc3NTdGFydCB9fWRlZyknLFxuICAgIH0pLFxuICAgIHsgcGFyYW1zOiB7IGRlZ3Jlc3NTdGFydDogMCB9IH0sXG4gICksXG4gIHN0YXRlKFxuICAgICcxJyxcbiAgICBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoe3sgZGVncmVlc0VuZCB9fWRlZyknLFxuICAgIH0pLFxuICAgIHsgcGFyYW1zOiB7IGRlZ3JlZXNFbmQ6IDE4MCB9IH0sXG4gICksXG4gIHRyYW5zaXRpb24oXG4gICAgJzAgPD0+IDEnLFxuICAgIFtncm91cChbcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyldKV0sXG4gICAgeyBwYXJhbXM6IHsgZHVyYXRpb246IDI1MCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2UtaW4nIH0gfSxcbiAgKSxcbl0pO1xuIl19