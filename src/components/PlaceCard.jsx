import { Link } from 'react-router-dom';

function toSlug(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function PlaceCard({ place }) {
  const placeSlug = place.slug || toSlug(place.name);

  return (
    <article className="card place-card">
      <div className="card-body">
        <h3>{place.name}</h3>
        <p className="place-meta">{place.location}</p>
        <p className="rating">Rating: {place.rating} / 5</p>
        <p>{place.description}</p>

        <Link className="btn btn-primary" to={`/reviews?place=${placeSlug}`}>
          View Reviews
        </Link>
      </div>
    </article>
  );
}

export default PlaceCard;
