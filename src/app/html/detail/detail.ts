import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.html',
  styleUrls: ['./detail.css'],
})

export class DetailComponent {

  theme:any[] = [];
  id: number;
  private sub: any;
  public loading = false;
  title:any[] = [];
  acf:any[] = [];

  constructor(      
                    public http:Http,
                    private route: ActivatedRoute
                
                ) { 
                    this.loading = true;

                    this.sub = this.route.params.subscribe(params => {
                      this.id = +params['id']; 
                    });

                    this.http.get('https://paginaswebks.com/wp-json/wp/v2/temas/' + this.id)
                    .subscribe( 
                        data => {
                            this.theme = data.json();
                            this.title = data.json().title;
                            this.acf = data.json().acf; 
                            
                            console.log(data.json());

                            this.loading = false;
                        },
                        err => {
                            console.log(err);
                            this.loading = false;
                        });  

                   
    
    }
}
