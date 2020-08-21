import { Component, OnInit,Input, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-tabchildnav',
  templateUrl: './tabchildnav.component.html',
  styleUrls: ['./tabchildnav.component.css']
})
export class TabchildnavComponent implements OnInit {
@Input() outletName : String
  constructor() { }

  ngOnInit(): void {
  }

}
