import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-element',
  templateUrl: './test-element.component.html',
  styleUrls: ['./test-element.component.css']
})
export class TestElementComponent implements OnInit {

  @ViewChild('serverNameInput') HtmlPartAsViewChild: ElementRef | undefined;

  ngOnInit(): void {
  }


  sendLocalReference(passedData:any)
  {
    console.log(passedData.value);

    console.log(this.HtmlPartAsViewChild?.nativeElement.value);

  }
}
