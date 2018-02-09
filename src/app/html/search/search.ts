import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.html',
  styleUrls: ['./search.css'],
})

export class SearchComponent {

  searchs:any[] = [];
  public loading = false;

  public name: any;
  private sub: any;

  constructor(      
                    public http:Http,
                    private route: ActivatedRoute
                
                ) { 
                    window.scrollTo(0, 0);
                    this.loading = true;

                    this.sub = this.route.params.subscribe(params => {
                      this.name = params['name']; 
                    });


                    this.http.get('https://paginaswebks.com/wp-json/wp/v2/temas?search='+ this.name)
                    .subscribe( 
                        data => {
                            this.searchs = data.json();
                            this.loading = false;
                        },
                        err => {
                            console.log(err);
                            this.loading = false;
                        });  

                   
    
    }
}
