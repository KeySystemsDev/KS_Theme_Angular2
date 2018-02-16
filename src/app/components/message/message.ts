import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class MessageComponent {

    constructor(

        public service: NotificationsService

    ) { }

    menssageError() {
            this.service.error('Error', 'Lo sentimos ocurrio un error de conexión.');
        }
}