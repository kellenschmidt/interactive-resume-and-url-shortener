import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MdSnackBar } from '@angular/material';
import { LinkRepositoryService } from '../../shared/link-repository.service';
import { LinkData } from '../../shared/link-data';

@Component({
  moduleId: module.id,
  selector: 'ks-link-table',
  templateUrl: 'link-table.component.html',
  styleUrls: ['link-table.component.scss']
})
export class LinkTableComponent implements OnInit {

  siteUrl: string = "https://kellenschmidt.com/";
  linkRows: LinkData[] = [];

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

  // Menu option to hide link
  hideLink(code: string) {
    // Display snackbar with "undo" action
    let snackBarRef = this.snackBar.open("URL hidden", "Undo", { duration: 5000 });
    let undo = false;

    // Copy row to remove
    let tempLinkRow: LinkData = this.linkRows.find(row => row.code === code);
    // Get index of row to remove
    let index = this.linkRows.findIndex(row => row.code === code);
    // Remove row from array
    if (index > -1) {
      this.linkRows.splice(index, 1);
    }

    snackBarRef.onAction().subscribe(() => {
      undo = true;

      // Add row back into array
      this.linkRows.splice(index, 0, tempLinkRow);
    });

    snackBarRef.afterDismissed().subscribe(() => {
      if(undo === false) {
        this.hideUrlHttp(code);
      }
    });
  }

  // Remove from visibility and reload table
  hideUrlHttp(code: string) {
    this.linkRepository.hideLink(code).subscribe(
      (responseBody) => {
        this.getLinksHttp();
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: PUT request to hide link failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ) // http subscribe
  }

  // Get URLs and set equal to array for use in table
  getLinksHttp() {
    this.linkRepository.getLinks().subscribe(
      (responseBody) => {
        // Read the result field from the JSON response
        this.linkRows = responseBody.data;
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

  constructor(private snackBar: MdSnackBar,
              private linkRepository: LinkRepositoryService) { }

  ngOnInit(): void {
    // Refresh table
    this.getLinksHttp();
  } // OnInit
}// LinkTableComponent
