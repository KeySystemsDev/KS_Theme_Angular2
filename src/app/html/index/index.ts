import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.html',
  styleUrls: ['./index.css'],
})

export class IndexComponent {
    
  themes:any[] = [];
  themes2:any[] = [];
  public loading = false;
  public someArray = [1, 2, 3, 4, 5];

    constructor(

        public http:Http

    ) {   
            window.scrollTo(0, 0);
            this.loading = true;
            this.http.get('https://paginaswebks.com/wp-json/wp/v2/temas')
            .subscribe( 
              data => {
                  this.themes = data.json().sort(() => Math.random() * 2 - 1);
                  this.themes2 = data.json().sort(() => Math.random() * 2 - 1);
                  this.loading = false;
              },
              err => {
                  console.log(err);
                  this.loading = false;
              });  
      }
     
}
