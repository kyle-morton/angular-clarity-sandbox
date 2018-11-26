import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: [ 
    './shell.component.scss',
    "../../../../../../node_modules/@clr/icons/clr-icons.min.css",
    "../../../../../../node_modules/@clr/ui/clr-ui.min.css"
  ]
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
