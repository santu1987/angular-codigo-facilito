//--Para incorporar animaciones a nuestro componente
import { trigger,style,transition, animate, stagger, query, keyframes } from '@angular/animations';
//Archivo de animaciones paso a paso para la lista
export const staggeredShowUp = trigger('staggeredShowUp',[
	//Desde el estado que sea hasta el estado que sea
	transition('*=>*',[	
		query(':enter', style({ transform: 'translateX(-100px)', opacity:'0'}),{optional:true}),
		query(':enter', stagger('80ms',[
			animate('0.4s ease-out',keyframes([
				style({ transform: 'translatex(-100px)', opacity:'0', offset:0}),
				style({ transform: 'translatex(50px)', opacity:'1', offset:0.5}),
				style({ transform: 'translatex(0px)', opacity:'1', offset:1})
			]))
		]),{optional: true})//querySelectorAll: Todos los elementos que esten entrando en el DOM
	])	
]);