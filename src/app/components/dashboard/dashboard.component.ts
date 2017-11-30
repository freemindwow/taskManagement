import { Component, OnInit } from '@angular/core';

import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public boardList;

  constructor(public boardService: BoardService) { }

  ngOnInit() {
    this.boardService.getAll().subscribe(res => {
      this.boardList = res['data'];
    });
  }

}
