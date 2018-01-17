import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { Board } from './../models/board.model';

@Injectable()
export class BoardService {
  boards: Board[];

  private _projectUrl: string = 'http://taskmanagementapi.loc/api/v1/projects';

  constructor(private _http: HttpClient) {}

  getById(id) {
    return this._http.get(this._projectUrl + '/ ' + id);
  }

  getAll() {
    return this._http.get(this._projectUrl);
  }

  save(data) {
    const body = {name: data['name']};
    this.boards.push(body);
    return this._http.post(this._projectUrl, body);
  }

  update(id, data) {
    const body = {name: data['name']};
    return this._http.put(this._projectUrl + '/' + id, body);
  }

  delete(id) {
    return this._http.delete(this._projectUrl + '/' + id);
  }

}
