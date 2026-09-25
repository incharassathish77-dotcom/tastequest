import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Explore. Taste. Discover.</p>
          <h1>TasteQuest</h1>
          <p className="hero-subtitle">Your journey through India's flavours starts here.</p>
          <p className="hero-description">
            Explore India's states, discover traditional dishes, find places to taste them,
            and share your food experiences.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/states">Explore States</Link>
            <Link className="btn btn-secondary" to="/dishes">Discover Dishes</Link>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/images/mysore-pak.jpg"
            alt="Traditional Indian food platter"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
