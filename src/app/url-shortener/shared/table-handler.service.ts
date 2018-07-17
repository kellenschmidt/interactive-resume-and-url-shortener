import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { LinkData } from '../shared/link-data';
import { LinkRepositoryService } from '../shared/link-repository.service';

@Injectable()
export class TableHandlerService {

  /** Stream that emits whenever the data has been modified */
  table: BehaviorSubject<LinkData[]> = new BehaviorSubject<LinkData[]>([]);
  get data(): LinkData[] { return this.table.value; }
  tableLoaded: boolean = true;
  tableEmpty: boolean = false;

  constructor(private linkRepository: LinkRepositoryService) { }

  init() {
    // Load database with links from http request
    this.getLinks();
  }

  // Get URLs and set equal to array for use in table
  getLinks() {
    // Turn loading spinner on
    this.tableLoaded = false;

    this.linkRepository.getLinks().subscribe(
      (responseBody) => {
        // Set table equal to response from GET request
        console.log("Setting new table data to: ");
        console.log(responseBody.data);
        if (responseBody.data.length > 0) {
          this.setTableEmptiness(false);
          this.table.next(responseBody.data);
        } else {
          this.setTableEmptiness(true);
        }
        
        this.tableLoaded = true;
      },
      (err: HttpErrorResponse) => {
        this.tableLoaded = true;

        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: GET request for LinkDataResponse failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, error was: ${err.error['error']}`);
        }

        // Refresh table with default links
        this.getLinks();
      } // error
    ) // http subscribe
  }

  // Adds a new link to the database
  insert(index: number, newRow: LinkData) {
    this.setTableEmptiness(false);
    // Create copy of existing array
    let copiedData = this.data.slice();

    // Get index of matching row in table if one exists
    let duplicateIndex = copiedData.findIndex(x => x.code == newRow.code);
    if(duplicateIndex > -1) {
      // Remove old row from table
      copiedData.splice(duplicateIndex, 1);
    }

    // Add new row to table
    copiedData.splice(index, 0, newRow);
    this.table.next(copiedData);
  }

  // Remove link from the database with the given code
  remove(code: string): number {
    // Get index of row to remove
    let index = this.data.findIndex(row => row.code === code);
    // Remove row from array
    if (index > -1) {
      let copiedData = this.data.slice();
      copiedData.splice(index, 1);
      if (copiedData.length === 0) {
        this.setTableEmptiness(true);
      } else {
        this.table.next(copiedData);
      }
    }
    // Return index of removed element
    return index;
  }

  // Get the LinkData for a given code
  getByCode(code: string): LinkData {
    return this.data.find(row => row.code === code);
  }

  // Get an array of LinkData objects for the given range of indexes
  get(startIndex: number, count: number): LinkData[] {
    return this.data.slice(startIndex, startIndex + count);
  }

  setTableEmptiness(setEmpty: boolean) {
    if (setEmpty) {
      this.table.next(new Array(7).fill({
        "code": "",
        "user_id": 0,
        "long_url": "",
        "date_created": "",
        "count": -1,
        "visible": 0,
      }));
      this.tableEmpty = true;
    } else {
      if (this.data.length > 0 && this.data[0].count === -1) {
        this.table.next([]);
      }
      this.tableEmpty = false;
    }
  }
}
