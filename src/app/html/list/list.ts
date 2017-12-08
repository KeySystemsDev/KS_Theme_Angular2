import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
})

export class ListComponent {

  themes:any[] = [];
  public loading = false;

  constructor(      
                    public http:Http
                
                ) {
                    this.loading = true;
                    this.http.get('https://paginaswebks.com/wp-json/wp/v2/temas')
                    .subscribe( 
                        data => {
                            this.themes = data.json();
                            console.log(this.themes);
                            this.loading = false;
                        },
                        err => {
                            console.log(err);
                            this.loading = false;
                        });  

                   
    
    }
}
