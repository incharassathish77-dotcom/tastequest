function ReviewCard({ review }) {
  const authorName = review.author || review.name || 'Anonymous';
  const reviewDate = review.date || review.created_at || '';
  const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

  return (
    <article className="review-card">
      <div className="review-header">
        <h3>{authorName}</h3>
        <span className="review-date">
          {reviewDate ? new Date(reviewDate).toISOString().slice(0, 10) : ''}
        </span>
      </div>

      <p className="review-stars" aria-label={`Rated ${review.rating} out of 5`}>
        {stars}
      </p>

      <p className="review-text">“{review.review}”</p>
    </article>
  );
}

export default ReviewCard;
