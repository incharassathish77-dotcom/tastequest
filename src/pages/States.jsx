import { useState } from 'react';
import StateCard from '../components/StateCard';
import { states } from '../data/data';

function States() {
  const [selectedState, setSelectedState] = useState('');

  return (
    <section className="section-block">
      <div className="container">
        <div className="section-heading centered">
          <p className="section-tag">Discover states</p>
          <h1>Explore Indian States</h1>
          <p className="lead-text">Choose a state and discover its traditional food.</p>
        </div>

        <div className="card-grid three-column">
          {states.map((state) => (
            <StateCard key={state.id} state={state} onSelect={setSelectedState} />
          ))}
        </div>

        {selectedState && (
          <div className="coming-soon-box">
            <h3>{selectedState}</h3>
            <p>More dishes coming soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default States;
