import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
})

export class ListComponent {

  themes:any[] = [];

  constructor(      
                    public http:Http
                
                ) {
                    
                    this.http.get('https://paginaswebks.com/ks/paginaswebks.com/wp-json/wp/v2/temas')
                    .subscribe( 
                        data => {
                            this.themes = data.json();
                            console.log(this.themes);
                        },
                        err => {
                            console.log(err);
                        });  

                   
    
    }
}
