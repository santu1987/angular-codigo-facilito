import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
	selector: '[redBorder]'
})

export class RedBorder{
	//--Para reciboir argumentos es necesario hacerlo a través de input
	@Input() redBorder: string;
	@Input() redClass : string;
	//Es necesario efinir el para acceder al dom
	constructor( private el: ElementRef){ }
	ngOnInit(){
		console.log("ingreso aqui!");
		//De esta forma modifico el dom
		this.el.nativeElement.style.border = `solid 2px ${this.redBorder}`;
		this.el.nativeElement.classList.add(this.redClass);
	}
	//--Creo una función que se va ejecutar
	@HostListener("mouseover") applyBorder(){
		this.el.nativeElement.style.border = `solid 2px ${this.redBorder}`;
	}

	@HostListener("mouseout") removeBorder(){
		this.el.nativeElement.style.border = "none";
	}

}