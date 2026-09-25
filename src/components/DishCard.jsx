import { Link } from 'react-router-dom';

function toSlug(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function DishCard({ dish }) {
  const dishSlug = dish.slug || toSlug(dish.name);

  return (
    <article className="card dish-card">
      <img src={dish.image} alt={dish.name} className="card-image" />

      <div className="card-body">
        <span className="card-label">{dish.state}</span>
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>

        <Link className="btn btn-primary" to={`/places?dish=${dishSlug}`}>
          Find Places
        </Link>
      </div>
    </article>
  );
}

export default DishCard;
