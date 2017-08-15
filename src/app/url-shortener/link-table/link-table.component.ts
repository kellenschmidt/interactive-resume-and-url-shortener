import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LinkData } from '../../shared/link-data';
import { TableHandlerService } from '../table-handler.service';
import { MdSnackBar, MdPaginator, MdSort } from '@angular/material';
import { LinkRepositoryService } from '../../shared/link-repository.service';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  moduleId: module.id,
  selector: 'ks-link-table',
  templateUrl: 'link-table.component.html',
  styleUrls: ['link-table.component.scss']
})
export class LinkTableComponent implements OnInit {
  displayedColumns = ['long_url', 'date_created', 'code', 'count'];
  tableDatabase = this.tableHandler;
  dataSource: ExampleDataSource | null;
  siteUrl: string = "https://kellenschmidt.com/";
  spinnerSettings = { color: 'primary', mode: 'indeterminate' };

  @ViewChild('filter') filter: ElementRef;
  @ViewChild(MdSort) sort: MdSort;
  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(public tableHandler: TableHandlerService,
              private linkRepository: LinkRepositoryService,
              private snackBar: MdSnackBar) {}

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.tableDatabase, this.sort, this.paginator);

    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
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
    let textToCopy = this.siteUrl + code;
    
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

    let snackBarRef = this.snackBar.open("Short URL copied to clipboard", "", { duration: 2500 });
  }

  // Convert date from SQL format to Angular DatePipe compatible format
  formatDate(oldDate: string): string {
    // Replace '-' with '/'
    return oldDate.replace(/-/g, "/");
  }

}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  constructor(private _tableDatabase: TableHandlerService,
              private _sort: MdSort,
              private _paginator: MdPaginator) {
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
      this._sort.mdSortChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
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
    });
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