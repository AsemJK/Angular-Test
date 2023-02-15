import { Component } from '@angular/core';
import { ServerDTO } from './shared/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Test';
  servers: ServerDTO[] = [];

onServerAdded(serverData: any){
  this.servers.push(serverData);
}

onBlueprintAdded(bluprintData: any){
  this.servers.push(bluprintData);
}

}
