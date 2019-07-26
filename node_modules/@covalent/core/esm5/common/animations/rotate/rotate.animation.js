/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
export var tdRotateAnimation = trigger('tdRotate', [
    state('0', style({
        transform: 'rotate({{ degressStart }}deg)',
    }), { params: { degressStart: 0 } }),
    state('1', style({
        transform: 'rotate({{ degreesEnd }}deg)',
    }), { params: { degreesEnd: 180 } }),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}'),
        ]),
    ], { params: { duration: 250, delay: '0', ease: 'ease-in' } }),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRlLmFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL2FuaW1hdGlvbnMvcm90YXRlL3JvdGF0ZS5hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUMxQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssR0FDM0IsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUk3QixzQ0FHQzs7O0lBRkMsbUNBQWlCOztJQUNqQixnQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmhCLE1BQU0sS0FBTyxpQkFBaUIsR0FBNkIsT0FBTyxDQUFDLFVBQVUsRUFBRTtJQUM3RSxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztRQUNmLFNBQVMsRUFBRSwrQkFBK0I7S0FDM0MsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7SUFDbkMsS0FBSyxDQUFDLEdBQUcsRUFBRyxLQUFLLENBQUM7UUFDaEIsU0FBUyxFQUFFLDZCQUE2QjtLQUN6QyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEVBQUMsQ0FBQztJQUNuQyxVQUFVLENBQUMsU0FBUyxFQUFFO1FBQ3BCLEtBQUssQ0FBQztZQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDL0MsT0FBTyxDQUFDLDJDQUEyQyxDQUFDO1NBQ3JELENBQUM7S0FDSCxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBQyxDQUFDO0NBQzlELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcbiAgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJUm90YXRlQW5pbWF0aW9uIGV4dGVuZHMgSUFuaW1hdGlvbk9wdGlvbnMge1xuICBkZWdyZWVzPzogbnVtYmVyO1xuICBlYXNlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIGNvbnN0IHRkUm90YXRlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGRlZ3Jlc3NTdGFydDogRGVncmVlcyBvZiByb3RhdGlvbiB0aGF0IHRoZSBkb20gb2JqZWN0IHdpbGwgZW5kIHVwIGluIGR1cmluZyB0aGUgXCJmYWxzZVwiIHN0YXRlXG4gKiAqIGRlZ3JlZXNFbmQ6IERlZ3JlZXMgb2Ygcm90YXRpb24gdGhhdCB0aGUgZG9tIG9iamVjdCB3aWxsIGVuZCB1cCBpbiBkdXJpbmcgdGhlIFwidHJ1ZVwiIHN0YXRlXG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMTUwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZXMgYW5kIGRlY2VsZXJhdGVzLiBEZWZhdWx0cyB0byBlYXNlLWluLlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgcm90YXRpb24gYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkUm90YXRlXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGRlZ3JlZXNFbmQ6IDkwIH19XCJcbiAqL1xuXG5leHBvcnQgY29uc3QgdGRSb3RhdGVBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkUm90YXRlJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoe3sgZGVncmVzc1N0YXJ0IH19ZGVnKScsXG4gIH0pLCB7IHBhcmFtczogeyBkZWdyZXNzU3RhcnQ6IDAgfX0pLFxuICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKHt7IGRlZ3JlZXNFbmQgfX1kZWcpJyxcbiAgfSksIHsgcGFyYW1zOiB7IGRlZ3JlZXNFbmQ6IDE4MCB9fSksXG4gIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogMjUwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1pbicgfX0pLFxuXSk7XG4iXX0=