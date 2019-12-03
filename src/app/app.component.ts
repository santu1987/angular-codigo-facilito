import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cursos-facilito';
  public userSuscribed: boolean = false;

  suscriptionChanged(ev: any){
  	console.log("el usuario se susbcribio");
  	console.log(ev);//se muestar el payload
  	this.userSuscribed = ev;
  }
}
