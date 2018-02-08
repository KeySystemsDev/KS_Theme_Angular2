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

  public theme = [];
  id: number;
  private sub: any;
  public loading = false;
  public title = [];
  public acf = [];

  constructor(      
                    public http:Http,
                    private route: ActivatedRoute,
                    public modal: Modal
                
                ) { 
                    window.scrollTo(0, 0);
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
            .title('Contactanos')
            .body(`

                <div class="card-body">
                    <h4>Temas auto administrables</h4>
                    <p>Si desea obtener uno de nuestros temas autoadministrable debe ponerse en contacto con nosotros a través de los siguientes medios.</p>
                    <p>Los precios y condiciones pueden variar según sus necesidades, uno de nuestros asesores le dará toda la información requerida para su proyecto. </p>
                </div>
                </div>
                <div class="card sb-card download-links">
                <div class="card-body">
                    <h4>Contactos</h4>
                    <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="tel:+584142667519" class="btn btn-secondary"><i class="fa fa-phone" aria-hidden="true"></i> +58 414 26 67 519 </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="tel:+584125568831" class="btn btn-secondary"><i class="fa fa-whatsapp" aria-hidden="true" style="color:#51c95d;"></i> +58 412 55 68 831 </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="tel:+56982565380" class="btn btn-secondary"><i class="fa fa-whatsapp" aria-hidden="true" style="color:#51c95d;"></i> +56 982 56 53 80 </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="malito:info@keysystemsca.com" class="btn btn-secondary"><i class="fa fa-envelope-o" aria-hidden="true" style="color:red;"></i> info@keysystemsca.com </a>
                    </li>
                    </ul>
                </div>
                </div>
                
                `)
            .open();

      
    }
}
