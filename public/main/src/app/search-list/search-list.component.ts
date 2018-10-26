import { Component, OnInit } from '@angular/core';
import { FetchReviewService } from '../fetch-review.service';
import { Review  } from '../Review.model';
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  review: Review;
  private reviewSub: Subscription;
  constructor(private fetchService: FetchReviewService) { }

  ngOnInit() {
    this.reviewSub = this.fetchService.getReviewUpdateListener()
    .subscribe((review: Review ) => {
      this.review = review;
    });
  }

}
