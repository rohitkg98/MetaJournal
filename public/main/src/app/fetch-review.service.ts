import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject } from 'rxjs';

import {Review } from './Review.model';
@Injectable({
  providedIn: 'root'
})
export class FetchReviewService {
  private review: Review ;
  private reviewsUpdated = new Subject<Review>() ;
  url: string;

  constructor(private http: HttpClient) { }
  getReview (url) {
    this.http.get <{review: Review }>('http://localhost:3000/api/reviews?website=' + 'url')
    .subscribe((postData) => {
      this.review = postData.review;
      this.reviewsUpdated.next(this.review);
    });
  }
  getReviewUpdateListener () {
    return this.reviewsUpdated.asObservable();
  }

}

