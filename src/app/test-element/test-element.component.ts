import { Component } from '@angular/core';

@Component({
  selector: 'app-test-element',
  templateUrl: './test-element.component.html',
  styleUrls: ['./test-element.component.css']
})
export class TestElementComponent {


  sendLocalReference(passedData:any){
    console.log(passedData.value);
  }
}
