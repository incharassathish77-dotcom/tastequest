import { Link } from 'react-router-dom';

function StateCard({ state, onSelect }) {
  return (
    <article className="card state-card">
      <img src={state.image} alt={state.name} className="card-image" />

      <div className="card-body">
        <h3>{state.name}</h3>
        <p>{state.description}</p>

        {state.name === 'Karnataka' ? (
          <Link className="btn btn-primary" to="/states/karnataka">
            Explore
          </Link>
        ) : (
          <button type="button" className="btn btn-secondary" onClick={() => onSelect(state.name)}>
            Explore
          </button>
        )}
      </div>
    </article>
  );
}

export default StateCard;
