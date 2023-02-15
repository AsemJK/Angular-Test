import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ServerDTO } from '../shared/server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent {

 @Input() server: ServerDTO= new ServerDTO('server','x','xxx');
constructor(){}
}
