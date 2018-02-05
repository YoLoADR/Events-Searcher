import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventApiProvider } from '../../providers/event-api/event-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  events: any;

  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'title';

  constructor(public navCtrl: NavController, public event: EventApiProvider) {}

  ionViewDidLoad() {
    this.getEvents();
  }

  getEvents() {
    this.event.getEvents()
       .subscribe(
        events => {
          this.events = events;
          console.log("this.events", this.events);
        },
         error =>  this.errorMessage = <any>error);
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
}
