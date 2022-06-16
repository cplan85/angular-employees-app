import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
})
export class ViewChildComponent implements OnInit {
  @ViewChild('asTitle') title: ElementRef;
  @ViewChild('asImage') image: ElementRef;

  public data: any;
  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.data = {
      text: 'Hello world?',
      url: 'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg',
    };
  }

  change(): void {
    const asTitle = this.title.nativeElement;
    const asImage = this.image.nativeElement;

    this.renderer2.setStyle(asTitle, 'color', 'red');

    this.renderer2.setAttribute(
      asImage,
      'src',
      'https://www.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png'
    );

    this.renderer2.setAttribute(asImage, 'data-name', 'pepito');
    console.log(asTitle);
  }
}
