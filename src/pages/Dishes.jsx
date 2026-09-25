import { useEffect, useState } from 'react';
import DishCard from '../components/DishCard';
import { supabase } from '../supabaseClient';

function Dishes() {
  const [dishes, setDishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchDishes = async () => {
      setLoading(true);
      setErrorMessage('');

      try {
        const { data, error } = await supabase.from('dishes').select('*');

        if (error) {
          throw error;
        }

        setDishes(data || []);
      } catch (err) {
        setDishes([]);
        setErrorMessage('Unable to load dishes. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchDishes();
  }, []);

  const filteredDishes = dishes.filter((dish) => {
    const query = searchTerm.toLowerCase();
    return (
      dish.name.toLowerCase().includes(query) ||
      dish.state.toLowerCase().includes(query) ||
      dish.description.toLowerCase().includes(query)
    );
  });

  return (
    <section className="section-block">
      <div className="container">
        <div className="section-heading centered">
          <p className="section-tag">Explore Dishes</p>
          <h1>Explore Dishes</h1>
          <p className="lead-text">
            Discover delicious traditional dishes from different parts of India.
          </p>
        </div>

        <div className="search-box">
          <label htmlFor="dishSearch" className="sr-only">
            Search for a dish
          </label>
          <input
            id="dishSearch"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search for a dish..."
          />
        </div>

        {loading ? (
          <div className="empty-state">Loading dishes...</div>
        ) : errorMessage ? (
          <div className="empty-state">{errorMessage}</div>
        ) : filteredDishes.length > 0 ? (
          <div className="card-grid three-column">
            {filteredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        ) : (
          <div className="empty-state">No dishes found.</div>
        )}
      </div>
    </section>
  );
}

export default Dishes;
