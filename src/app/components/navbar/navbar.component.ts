import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SearchComponent } from '../../html/search/search';

@Component({
    moduleId: module.id,
    selector: 'navbarTheme',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent {

 
    constructor(      private router: Router
                        
                    
                    ) { 


                    }
    
    onSearch(name){ 
        this.router.navigate(['/search', name]);
        location.reload();    
    }
}