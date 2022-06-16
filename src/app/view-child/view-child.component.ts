import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  @ViewChild('asTitle') title: ElementRef;
  @ViewChild('asImage') image: ElementRef;
  //constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {

  }

}
