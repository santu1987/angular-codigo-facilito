import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//--importo mel servicio de articulos
import{  ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  
  //--Propiedades
  public name: string;
  public username: string;
  public avatar: string;
  //--
  //Se declara un decorador como una instancia de evenEmitter, en este caso devuelve un bool
  @Output() suscribed = new EventEmitter<boolean>();

  constructor(private articlesS: ArticlesService){}

  ngOnInit() {
      this.name = "Gianni";
      this.username = "gianni_santucci";
      this.avatar = "https://static3.abc.es/media/play/2017/12/14/homer-simpson-superheroe-ketF--620x349@abc.png";
      //Emito el valor del payload
      setTimeout(()=> this.suscribed.emit(true),3000)
      setTimeout(()=> this.name="Cody",3000)

      this.articlesS.articlesCount = 20;
  }

  changing( event: any){
    console.log(event.target.value)
    this.username = event.target.value
  }  
}
