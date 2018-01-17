import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { BoardService } from './../../services/board.service';

@Component({
  selector: 'app-dialog-create-board',
  templateUrl: './dialog-create-board.component.html',
  styleUrls: ['./dialog-create-board.component.sass']
})
export class DialogCreateBoardComponent {

  constructor(public dialogRef: MatDialogRef<DialogCreateBoardComponent>, public boardService: BoardService) {}

  onAddBoard(form): void {
    if(form.valid) {
      this.boardService.save({'name': form.value.boardName}).subscribe(v => {
        this.dialogRef.close();
      });
    }
  }
}
