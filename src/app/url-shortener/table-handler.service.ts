import { Injectable } from '@angular/core';
import { LinkData } from '../shared/link-data';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LinkRepositoryService } from '../shared/link-repository.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class TableHandlerService {

  /** Stream that emits whenever the data has been modified */
  table: BehaviorSubject<LinkData[]> = new BehaviorSubject<LinkData[]>([]);
  get data(): LinkData[] { return this.table.value; }
  tableLoaded: boolean = false;
  tableAuthError: boolean = false;

  constructor(private linkRepository: LinkRepositoryService,
              private snackBar: MdSnackBar) {
    // Turn loading spinner on
    this.tableLoaded = false;
    // Load database with links from http request
    this.getLinks();
  }

  // Get URLs and set equal to array for use in table
  getLinks() {
    this.linkRepository.getLinks().subscribe(
      (responseBody) => {
        // Set table equal to response from GET request
        this.table.next(responseBody.data);

        // Set tableLoaded (remove loading spinner) and tableAuthError (remove placeholder)
        this.tableLoaded = true;
        this.tableAuthError = false;
      },
      (err: HttpErrorResponse) => {
        // Set authError and loaded to display error placeholder in table
        this.tableAuthError = true;
        this.tableLoaded = true;
        // If request returns an error because unauthenticated
        if(err.error['error'] !== undefined) {
          let snackBarRef = this.snackBar.open('Authentication error, re-login and try again.', "", { duration: 4000 });
        }
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: GET request for LinkDataResponse failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, error was: ${err.error['error']}`);
        }
      } // error
    ) // http subscribe
  }

  // Adds a new link to the database
  insert(index: number, newRow: LinkData) {
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
      this.table.next(copiedData);
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

}