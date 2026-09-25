import { Link } from 'react-router-dom';
import { dishes } from '../data/data';

function Karnataka() {
  const karnatakaDishes = dishes.filter((dish) => dish.state === 'Karnataka');

  return (
    <section className="section-block">
      <div className="container">
        <div className="section-heading centered">
          <p className="section-tag">Karnataka</p>
          <h1>Flavours of Karnataka</h1>
          <p className="lead-text">
            Discover some of the traditional and popular dishes of Karnataka.
          </p>
        </div>

        <div className="card-grid three-column">
          {karnatakaDishes.map((dish) => (
            <article key={dish.id} className="card dish-card">
              <img src={dish.image} alt={dish.name} className="card-image" />

              <div className="card-body">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>

                <Link className="btn btn-primary" to={`/places?dish=${dish.slug}`}>
                  Find Places
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Karnataka;
