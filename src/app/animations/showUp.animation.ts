//--Para incorporar animaciones a nuestro componente
import { trigger,style,transition, animate, state } from '@angular/animations';

export const showUp = trigger('showUp',[
	state('0',style({
		//backgroundColor: 'blue'
		maxHeight: '40px'
	})),
	state('1',style({
		//backgroundColor: 'red'
		maxHeight: '500px'
	})),
	state('*',style({
		//backgroundColor: 'red'
		top: '0px'
	})),
	transition('0=>1', animate('0.4s ease-out')),
	transition('1=>0', animate('0.4s ease-in'))
]);