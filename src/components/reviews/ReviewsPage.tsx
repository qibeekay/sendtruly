import React from "react";
import { ReviewsHeader, ReviewsUtilze } from "../../components";
import ReviewsRequest from "./ReviewsRequest";
import ReviewsSeekReviews from "./ReviewsSeekReviews";
import ReviewsFirstStep from "./ReviewsFirstStep";

const ReviewsPage = () => {
  return (
    <div>
      <ReviewsHeader />
      <ReviewsUtilze />
      <ReviewsRequest />
      <ReviewsSeekReviews />
      <ReviewsFirstStep />
    </div>
  );
};

export default ReviewsPage;
