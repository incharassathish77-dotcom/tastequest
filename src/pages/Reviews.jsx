import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';
import { supabase } from '../supabaseClient';

function Reviews() {
  const [searchParams] = useSearchParams();
  const selectedPlace = searchParams.get('place') || 'mysuru-sweet-shop';
  const [formData, setFormData] = useState({
    name: '',
    place: selectedPlace,
    rating: '',
    review: ''
  });
  const [reviews, setReviews] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchReviews = async () => {
    setLoading(true);
    setErrorMessage('');

    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('place', selectedPlace)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setReviews(data || []);
    } catch (err) {
      setReviews([]);
      setErrorMessage('Unable to load reviews. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setFormData((current) => ({ ...current, place: selectedPlace }));
    fetchReviews();
  }, [selectedPlace]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      setMessage('Please enter your name.');
      return;
    }

    if (!formData.rating) {
      setMessage('Please select a rating.');
      return;
    }

    if (!formData.review.trim()) {
      setMessage('Please write your review.');
      return;
    }

    setSubmitLoading(true);
    setMessage('');

    try {
      const { data, error } = await supabase
        .from('reviews')
        .insert([
          {
            name: formData.name.trim(),
            place: selectedPlace,
            rating: Number(formData.rating),
            review: formData.review.trim()
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      const newReview = data && data[0] ? data[0] : null;

      if (newReview) {
        setReviews((currentReviews) => [newReview, ...currentReviews]);
      }

      setFormData({
        name: '',
        place: selectedPlace,
        rating: '',
        review: ''
      });
      setMessage('Thank you! Your review has been submitted successfully.');
    } catch (err) {
      setMessage('Unable to submit your review. Please try again.');
    } finally {
      setSubmitLoading(false);
    }
  };

  const placeTitle = selectedPlace
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <section className="section-block">
      <div className="container">
        <div className="section-heading centered">
          <p className="section-tag">Guest reviews</p>
          <h1>Reviews for {placeTitle}</h1>
        </div>

        <div className="review-layout">
          <div className="review-list">
            {loading ? (
              <div className="empty-state">Loading reviews...</div>
            ) : errorMessage ? (
              <div className="empty-state">{errorMessage}</div>
            ) : reviews.length > 0 ? (
              reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))
            ) : (
              <div className="empty-state">No reviews yet. Be the first to review!</div>
            )}
          </div>

          <form className="review-form" onSubmit={handleSubmit}>
            <h2>Write Your Review</h2>

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="place">Place</label>
              <input id="place" name="place" value={placeTitle} readOnly />
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <select id="rating" name="rating" value={formData.rating} onChange={handleChange}>
                <option value="">Select rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="review">Your Review</label>
              <textarea
                id="review"
                name="review"
                value={formData.review}
                onChange={handleChange}
                rows="5"
                placeholder="Share your experience"
              />
            </div>

            <button type="submit" className="btn btn-primary full-width" disabled={submitLoading}>
              {submitLoading ? 'Submitting...' : 'Submit Review'}
            </button>

            {message && <p className="form-message">{message}</p>}

            <div className="new-reviews-block">
              <h3>New Reviews</h3>
              {reviews.length > 0 ? (
                reviews.slice(0, 3).map((review) => (
                  <div key={review.id} className="mini-review">
                    <strong>{review.name}</strong>
                    <span>{'★'.repeat(review.rating)}</span>
                    <p>{review.review}</p>
                  </div>
                ))
              ) : (
                <p className="empty-state">No reviews yet. Be the first to review!</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
