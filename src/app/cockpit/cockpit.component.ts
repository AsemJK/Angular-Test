import { Component, EventEmitter, Output } from '@angular/core';
import { ServerDTO } from '../shared/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<ServerDTO>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<ServerDTO>();
  newServerName: string = "";
  newServerContent: string = "";
  onAddServer()
  {
    this.serverCreated.emit(new ServerDTO('server',this.newServerName,this.newServerContent));
  }
  onAddBluePrint()
  {
    this.blueprintCreated.emit(new ServerDTO('blueprint',this.newServerName,this.newServerContent));
  }
}
