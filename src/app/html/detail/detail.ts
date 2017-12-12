import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { Overlay } from 'ngx-modialog';
import { Modal, bootstrap4Mode } from 'ngx-modialog/plugins/bootstrap';

// run the plugin to work with version 4 of bootstrap
bootstrap4Mode();

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
                    private route: ActivatedRoute,
                    public modal: Modal
                
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

    onClick() {
        const dialogRef = this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .body(`
                <h4>Alert is a classic (title/body/footer) 1 button modal window that 
                does not block.</h4>
                <b>Configuration:</b>
                <ul>
                    <li>Non blocking (click anywhere outside to dismiss)</li>
                    <li>Size large</li>
                    <li>Dismissed with default keyboard key (ESC)</li>
                    <li>Close wth button click</li>
                    <li>HTML content</li>
                </ul>`)
            .open();

        dialogRef.result
            .then( result => alert(`The result is: ${result}`) );
    }
}
