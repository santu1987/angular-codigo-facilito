import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { staggeredShowUp } from '../animations/staggeredShowUp.animation';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  animations: [staggeredShowUp]
})
export class ArticlesComponent implements OnInit {

  constructor(private articlesS : ArticlesService) { }

  ngOnInit() {
  	this.articlesS.getAll();
  	//Creo mi observable que esta creado dentro del servicio de articlesS
  	const observable = this.articlesS.buildObservable();

  	observable.subscribe((data)=>{
  		console.log(data);
  	});
  }

}
