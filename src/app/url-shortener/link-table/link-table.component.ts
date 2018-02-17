import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LinkData } from '../shared/link-data';
import { TableHandlerService } from '../shared/table-handler.service';
import { MatSnackBar, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { LinkRepositoryService } from '../shared/link-repository.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'ks-link-table',
  templateUrl: './link-table.component.html',
  styleUrls: ['./link-table.component.scss']
})
export class LinkTableComponent implements OnInit {
  displayedColumns: string[] = ['long_url', 'date_created', 'code', 'count'];
  siteUrl: string = environment.siteUrl;
  iOSDevice: boolean = false;
  ogData: LinkData[] = [
    {code: "1r4", user_id:-1, long_url:"https:\/\/github.com\/vuejs\/vue-devtools", date_created:"2018-02-16 20:37:18", count:1, visible:1}
  ];
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<LinkData>(this.tableHandler.data);

  constructor(public tableHandler: TableHandlerService,
              private linkRepository: LinkRepositoryService,
              private snackBar: MatSnackBar) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.tableHandler.init();
    this.iOSDevice = navigator.userAgent.match(/iphone|ipad|ipod/i) !== null;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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

    let snackBarRef = this.snackBar.open("Short URL copied to clipboard", "", { duration: 2500 });
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