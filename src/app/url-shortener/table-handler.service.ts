import { Injectable } from '@angular/core';
import { LinkData } from '../shared/link-data';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { LinkRepositoryService } from '../shared/link-repository.service';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/of';

@Injectable()
export class TableHandlerService {

  private table: LinkData[];
  private _table: ReplaySubject<LinkData[]>;
  table$: Observable<LinkData[]>;

  getObservable(): Observable<LinkData[]> {
    return Observable.of(this.table);
  }
  
  // Get URLs and set equal to array for use in table
  refresh() {
    this.linkRepository.getLinks().subscribe(
      (responseBody) => {
        // Set table equal to response from GET request
        this.set(responseBody.data);
        this._table.next(this.table);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: GET request for LinkDataResponse failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ) // http subscribe
  }

  insert(index: number, newRow: LinkData) {
    this.table.splice(index, 0, newRow);
  }

  remove(code: string): number {
    // Get index of row to remove
    let index = this.table.findIndex(row => row.code === code);
    // Remove row from array
    if (index > -1) {
      this.table.splice(index, 1);
    }
    // Return index of removed element
    return index;
  }

  set(newTable: LinkData[]) {
    this.table = newTable;
  }

  getByCode(code: string): LinkData {
    return this.table.find(row => row.code === code);
  }

  getAll() {
    return this.table;
  }

  get(startIndex: number, count: number) {
    return this.table.slice(startIndex, startIndex+count);
  }

  constructor(private linkRepository: LinkRepositoryService) {
    this._table = new ReplaySubject<LinkData[]>();
    this.table$ = this._table.asObservable();
    // Initialize table
    this.refresh();
  }

}
