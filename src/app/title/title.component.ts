import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-title',
	templateUrl: 'title.component.html',
	//styles : ['h1{ font-family:Roboto;}'],
	styleUrls: ['./title.component.css']
})

export class TitleComponent implements OnInit{
	public name:string;
	public edad:number;
	public edades:number[];

	public css_classes : string[] = ["active","shadow"];

	public moreInformation : boolean = false;

	public isAvailable : boolean = true;

	public topics: string[];

	public category: string //mobile, web, other 
	//--Cuerpo de metodos

	constructor(){}

	ngOnInit(){
		this.name = "Gianni";
		this.edad = 25;
		setTimeout(()=> this.isAvailable = false, 3000)
	    setTimeout(()=> this.moreInformation = true,3000)

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
