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

  constructor(      
                    public http:Http,
                    private route: ActivatedRoute
                
                ) {
                    this.sub = this.route.params.subscribe(params => {
                      this.id = +params['id']; 
                    });

                    this.http.get('https://paginaswebks.com/wp-json/wp/v2/temas/' + this.id)
                    .subscribe( 
                        data => {
                            this.theme = data.json();
                            
                            console.log(this.theme);
                        },
                        err => {
                            console.log(err);
                        });  

                   
    
    }
}
