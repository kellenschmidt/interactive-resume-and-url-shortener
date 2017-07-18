import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LinkData } from '../../shared/link-data';
import { MdSnackBar } from '@angular/material';
import { LinkRepositoryService } from '../../shared/link-repository.service';
import { TableHandlerService } from '../table-handler.service';

@Component({
  moduleId: module.id,
  selector: 'ks-link-input',
  templateUrl: 'link-input.component.html',
  styleUrls: ['link-input.component.scss']
})
export class LinkInputComponent implements OnInit {

  siteUrl: string = "https://kellenschmidt.com";
  linkInputMode: boolean = true;
  titles: string[] = ["Shorten your links", "Your short URL"];
  title: string = this.titles[0];
  longUrl: string = "";
  shortUrl: string = "";
  newLinkData: LinkData;

  // Copy short URL to clipboard
  copy(textToCopy: string) {
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

  // Toggle display mode between long URL input and short URL output
  toggleInputMode() {
    this.linkInputMode = !this.linkInputMode;
    this.title = this.titles[1-this.titles.indexOf(this.title)];
  }

  // Trim URL
  configLongUrl(longUrl: string): any {
    return longUrl.trim();
  }

  // Set values for new short URL and display
  addLinkHttp(longUrl: string) {
    this.linkRepository.addLink(longUrl).subscribe(
      (responseBody) => {
        // Get link data
        this.newLinkData = responseBody;
        // Clear input field
        this.longUrl = "";
        // Set short URL and display
        this.shortUrl = `${this.siteUrl}/${this.newLinkData.code}`;
        this.toggleInputMode();
        // Add to table
        this.tableHandler.insert(0, this.newLinkData);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: POST request for LinkData failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ) // http subscribe
  } //postLink

  onSubmit() {
    let trimmedUrl = this.configLongUrl(this.longUrl)
    this.addLinkHttp(trimmedUrl);
  }

  constructor(private linkRepository: LinkRepositoryService,
              private snackBar: MdSnackBar,
              private tableHandler: TableHandlerService) { }

  ngOnInit() { }

} // LinkInputComponent
