//Un numero en segundo muestre cuantas horas y cuantos minutos hay en ese digito en segundos...
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'secondsToTimeFormat'
})

export class SecondsToTimeFormat implements  PipeTransform{
	transform(seconds: number):string{
		// 3660 =>1 hr 1 min
		const hours =Math.floor(seconds/3600);
		const minutes = Math.floor(seconds % 3600/60)
		return `${hours}hrs ${minutes}mins`;
	}
}