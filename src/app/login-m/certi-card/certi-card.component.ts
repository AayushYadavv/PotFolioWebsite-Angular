import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Certificate, certiModel } from '../../shared/models/certificate';

@Component({
  selector: 'app-certi-card',
  templateUrl: './certi-card.component.html',
  styleUrls: ['./certi-card.component.css'],
})
export class CertiCardComponent implements OnInit {
  @Input() certis: Certificate = certiModel[0];
  @Input() adminFunc = false;
  @Output() deleteEven = new EventEmitter<number>();
  apiLink;
  courselink;
  constructor() {}

  ngOnInit(): void {
    this.apiLink = `https://api.aayushyadav.in${this.certis.certiUrl}`;
    this.courselink = this.certis.certiCourseUrl;
  }
  deleteCerti() {
    this.deleteEven.emit(this.certis.certiID);
  }
}
