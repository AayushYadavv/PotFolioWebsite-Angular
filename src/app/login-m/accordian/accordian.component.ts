import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
})
export class AccordianComponent implements OnInit {
  constructor() {}
  @Input() heading: String;
  isVisible:boolean = false
  ngOnInit(): void {}

  toggle() {
    this.isVisible = !this.isVisible
  }
}
