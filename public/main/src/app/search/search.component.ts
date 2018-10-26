import { Component, OnInit, Output } from '@angular/core';
import { } from '../fetch-review.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { EventEmitter } from 'protractor';
import { FetchReviewService } from '../fetch-review.service';
/*export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
*/
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  url: string;
  /*urlFormControl = new FormControl('', [
    Validators.required,
    Validators.url,
  ]);
  matcher = new MyErrorStateMatcher();
  */
  onClick (searchField: HTMLInputElement) {
    this.url = searchField.value;
    // @Output() this.url= new EventEmitter ();
  }
  constructor(private fetchService: FetchReviewService) { }

  ngOnInit() {
    this.fetchService.getReview(this.url);
  }

}
