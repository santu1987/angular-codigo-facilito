import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//--Importo el observable....
import { Observable } from 'rxjs';
//--
import { map } from 'rxjs/operators';
import { share } from 'rxjs/operators';

//--Para darle forma a lo que se retornar en la función getAll, voy a crear una interface
class Repo{
	constructor(public id:string, public name:string){}
}
//--
interface Repo{
	id: string,
	name: string
}



@Injectable()
export class ArticlesService{

	public articlesCount : number =  0;
	//--Creo un observador del tipo Repo arreglo...
	public reposObserver : Observable<Repo[]>;
	public reposCount : number = 0;

	public mainRepo : Repo;

	constructor(private http: HttpClient){
		this.countRepos();
		this.getMainRepo();
	}
	//-Consulta todos los registros
	getAll(){
		//1-Retorna un observador, por lo que debemos subscribirnos...
		//2-Declaro reposObserver como rel resultad de la peticion
		//- De esta forma puede ser usado por cualñquier componente
		this.reposObserver = this.http.get('https://api.github.com/users/santu1987/repos')
			.pipe(map(data =>{
				//1- Devuelve el primer registro...
				if (data instanceof Array) {
				    return data.map((r:any) => new Repo(r.id, r.name));
				}
				
				//return new Repo(data[0].id,data[0].name)
				//2 -Retorna data como una instancia de la clase repo
				//return new Repo(data[0].id,data[0].name)
				//3- Retorna a todo el contenido de data como una instancia de la clase repo
				//return data.map(r=> new Repo(r.id,r.name))
			}))
			.pipe(share());
			
			//.subscribe(data=>{ console.log(data);})
		
	}
	//--
	/*Creo el observable*/
	buildObservable(): Observable<any>{
		let number = 0;
		return Observable.create(function(observer){
			//setInterval(()=> observer.next(number++),1000)
		})
	}
	//--
	/*--- Creo una función para contar los repos--*/
	countRepos(){
		fetch('https://api.github.com/users/santu1987/repos')
			.then(response => response.json())
			.then(repos => this.reposCount = repos.length);
	}
	//--
	getMainRepo(){
		//No es recomendable usar fetch ya que solo se aplica para el explorador, es recomendable usar http response
		fetch('https://api.github.com/users/santu1987/repos')
			.then(response => response.json())
			.then(repos=>{
				const JSONRepo = repos[repos.length-1];
				this.mainRepo = new Repo(JSONRepo.id, JSONRepo.name);
				console.log(this.mainRepo);
			})
	}
	//--
}