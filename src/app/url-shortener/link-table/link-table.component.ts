import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { LinkData } from '../shared/link-data';
import { TableHandlerService } from '../shared/table-handler.service';
import { MatSnackBar, MatPaginator, MatSort } from '@angular/material';
import { LinkRepositoryService } from '../shared/link-repository.service';
import { merge, fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UrlVariablesService } from '../../shared/url-variables.service';

@Component({
  selector: 'ks-link-table',
  templateUrl: './link-table.component.html',
  styleUrls: ['./link-table.component.scss']
})
export class LinkTableComponent implements OnInit {
  displayedColumns: string[] = ['long_url', 'date_created', 'code', 'count'];
  tableDatabase = this.tableHandler;
  dataSource: ExampleDataSource | null;
  siteUrl: string = this.urlVars.siteUrl;
  iOSDevice: boolean = false;
  analyticsUrl = this.urlVars.analyticsUrl;

  @ViewChild('filter') filter: ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public tableHandler: TableHandlerService,
    private linkRepository: LinkRepositoryService,
    private snackBar: MatSnackBar,
    private urlVars: UrlVariablesService) { }

  ngOnInit() {
    this.tableHandler.init();

    this.dataSource = new ExampleDataSource(this.tableDatabase, this.sort, this.paginator);

    fromEvent(this.filter.nativeElement, 'keyup').pipe(
      debounceTime(150),
      distinctUntilChanged()
    ).subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });

    this.iOSDevice = navigator.userAgent.match(/iphone|ipad|ipod/i) !== null;
  }

  // Menu option to hide link
  hideLink(code: string) {
    // Display snackbar with "undo" action
    let snackBarRef = this.snackBar.open("URL hidden", "Undo", { duration: 5000 });
    let undo = false;

    // Copy row to remove
    let tempLinkRow: LinkData = this.tableHandler.getByCode(code);
    // Remove row and get index
    let index = this.tableHandler.remove(code);

    snackBarRef.onAction().subscribe(() => {
      undo = true;

      // Add row back into array
      this.tableHandler.insert(index, tempLinkRow);
    });

    snackBarRef.afterDismissed().subscribe(() => {
      if(undo === false) {
        this.hideUrlHttp(code, index, tempLinkRow);
      }
    });
  }

  // Remove from visibility and reload table
  // index and tempLinkRow properties used to add link back to table if auth error occurs
  hideUrlHttp(code: string, index: number, tempLinkRow: LinkData) {
    this.linkRepository.hideLink(code).subscribe(
      (responseBody) => {
        // Link has already been removed from table, this just removes it from the database too
      },
      (err: HttpErrorResponse) => {
        // If request returns an error because unauthenticated
        if(err.error['error'] !== undefined) {
          let snackBarRef = this.snackBar.open('Authentication error, re-login and try again.', "", { duration: 4000 });
          // Add row back into array
          this.tableHandler.insert(index, tempLinkRow);
        }
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: PUT request to hide link failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, error was: ${err.error['error']}`);
        }
      } // error
    ) // http subscribe
  }

  // Copy short URL to clipboard
  copy(code: string) {
    let textToCopy = this.siteUrl + "/" + code;
    
    // Temporarily create invisible element on screen to copy text from
    let selBox = document.createElement('textarea');

    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = textToCopy;

    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();

    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.snackBar.open("Short URL copied to clipboard", "", { duration: 3000 });
  }

  // Convert date from SQL format to Angular DatePipe compatible format
  formatDate(oldDate: string): string {
    // Replace '-' with '/'
    return oldDate.replace(/-/g, "/");
  }

  siteUrlWithoutHttp(siteUrl: string): string {
    return siteUrl.substring(siteUrl.lastIndexOf("/")+1);
  }

}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _tableDatabase: TableHandlerService,
              private _sort: MatSort,
              private _paginator: MatPaginator) {
    super();
  }

  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<LinkData[]> {

    const displayDataChanges = [
      this._tableDatabase.table,
      this._filterChange,
      this._sort.sortChange,
      this._paginator.page,
    ];

    return merge(...displayDataChanges).pipe(map(() => {
      // Filter data
      let data = this._tableDatabase.data.slice().filter((item: LinkData) => {
        let searchStr = (item.long_url + item.code).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });

      // Sort data
      data = this.getSortedData(data);

      // Paginate data
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    }));
  }

  disconnect() {}

  /** Returns a sorted copy of the database data. */
  getSortedData(dataToSort: LinkData[]): LinkData[] {
    const data = dataToSort
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'long_url': [propertyA, propertyB] = [a.long_url, b.long_url]; break;
        case 'date_created': [propertyA, propertyB] = [a.date_created, b.date_created]; break;
        case 'code': [propertyA, propertyB] = [a.code, b.code]; break;
        case 'count': [propertyA, propertyB] = [a.count, b.count]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }
}
