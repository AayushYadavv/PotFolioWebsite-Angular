import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AutoAdminPageService} from "../../auto-admin-page.service"

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css'],
})
export class AdminhomeComponent implements OnInit {
  message: boolean = true;
  
  constructor(private adminServ :AutoAdminPageService) {}

  ngOnInit(): void {
    this.adminServ.changeMessage(true)
  
  }
}
