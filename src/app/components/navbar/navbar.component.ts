import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DialogCreateBoardComponent } from './../dialog-create-board/dialog-create-board.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  constructor(public dialog: MatDialog) {}

  openCreateBoardDialog(): void {
    let dialogRef = this.dialog.open(DialogCreateBoardComponent, {
      width: '323px'
    });
  }

}
