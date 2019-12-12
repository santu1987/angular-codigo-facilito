import { Component, OnInit, Input } from '@angular/core';
import { showUp } from '../animations/showUp.animation';

@Component({
	selector: 'app-title',
	templateUrl: 'title.component.html',
	//styles : ['h1{ font-family:Roboto;}'],
	styleUrls: ['./title.component.css'],
	animations: [ showUp ]
})

export class TitleComponent implements OnInit{
	public name:string;
	public edad:number;
	public edades:number[];

	public css_classes : string[] = ["active","shadow"];

	public moreInformation : boolean = false;

	public isAvailable : boolean = false;

	public topics: string[];

	public category: string //mobile, web, other 

	public price:number;

	public seconds: number = 3660;

	public launchDate: Date;
	//--Cuerpo de metodos

	@Input() suscribed : boolean; 

	constructor(){}

	ngOnInit(){
		this.name = "Gianni";
		this.edad = 25;
		//setTimeout(()=> this.isAvailable = true, 3000)
	    setTimeout(()=> this.moreInformation = true,3000)
	    this.launchDate = new Date(2018,11,25);
	    this.price = 25;
		//setTimeout(()=> this.css_classes = ["shadow"], 3000)
		//-Dandole valores al arreglo de topicos/temas del curso
		this.topics = [
						"Fundamentos del framework",
						"Componentes",
						"Directivas",
						"Animaciones",
						"Servicios",
						"RxJs",
						"Binding"
		]
		//--
		this.category = "web";
	}

	toggleMoreInformation(){
		this.moreInformation = !this.moreInformation;	
	}

	getEdadNombre(): string{
		return `${this.name}: ${this.edad}`;
	}

}
