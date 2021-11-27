import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDrawerToggleResult} from "@angular/material/sidenav";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output('toggle')
  sdnavStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(){
    this.sdnavStatus.emit();
  }

  print(tx: string): void {
    console.log(tx);
  }
}
