import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import DishCard from '../components/DishCard';
import { dishes } from '../data/data';

const steps = [
  'Choose a State',
  'Discover Dishes',
  'Find Places',
  'Share Reviews'
];

const features = [
  {
    title: 'Discover',
    description: 'Explore traditional Indian dishes and regional food stories.'
  },
  {
    title: 'Taste',
    description: 'Find famous food spots and local places to try each dish.'
  },
  {
    title: 'Share',
    description: 'Share your food experience through simple, helpful reviews.'
  }
];

function Home() {
  const popularDishes = dishes.slice(0, 6);

  return (
    <>
      <Hero />

      <section className="section-block">
        <div className="container">
          <div className="section-heading">
            <p className="section-tag">Explore India</p>
            <h2>Every state has a flavour of its own.</h2>
          </div>

          <p className="lead-text">
            From the spicy curries of the north to the coconut-rich meals of the south,
            India is full of food traditions waiting to be explored.
          </p>
        </div>
      </section>

      <section className="section-block alt-block">
        <div className="container">
          <div className="section-heading">
            <p className="section-tag">Popular Dishes</p>
            <h2>Favourite bites from across India</h2>
          </div>

          <div className="card-grid three-column">
            {popularDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-heading">
            <p className="section-tag">How TasteQuest Works</p>
            <h2>Follow the journey</h2>
          </div>

          <div className="step-grid">
            {steps.map((step, index) => (
              <div key={step} className="step-box">
                <span className="step-number">0{index + 1}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-block">
        <div className="container">
          <div className="section-heading">
            <p className="section-tag">Why TasteQuest?</p>
            <h2>Food discovery made easy</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block cta-block">
        <div className="container cta-box">
          <div>
            <p className="section-tag">Start your journey</p>
            <h2>Start Your Food Journey</h2>
          </div>

          <Link className="btn btn-primary" to="/states">
            Explore States
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
