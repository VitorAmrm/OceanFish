import { Component, OnInit } from '@angular/core';
import {ExpansionItem, items} from "../ExpansionItem/sidenav.content";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  opened: boolean = false;
  buttons: ExpansionItem[] = items;

  constructor() { }

  ngOnInit(): void {
  }

  setOpenStatus(){
    this.opened = !this.opened
  }

  print(tx: string): void {
    console.log(tx);
  }
}
