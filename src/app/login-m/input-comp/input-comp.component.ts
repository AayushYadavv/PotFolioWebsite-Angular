import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-comp',
  templateUrl: './input-comp.component.html',
  styleUrls: ['./input-comp.component.css'],
})
export class InputCompComponent implements OnInit {
  @Input() label: String;
  @Input() inputType: String;
  @Input() control: FormControl;
  constructor() {}

  ngOnInit(): void {}
}
