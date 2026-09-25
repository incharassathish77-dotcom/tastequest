import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PlaceCard from '../components/PlaceCard';
import { supabase } from '../supabaseClient';

function toTitleCase(value) {
  return value
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function Places() {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const selectedDish = searchParams.get('dish') || '';
  const dishTitle = selectedDish ? toTitleCase(selectedDish) : 'Selected Dish';

  useEffect(() => {
    const fetchPlaces = async () => {
      if (!selectedDish) {
        setPlaces([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setErrorMessage('');

      try {
        const { data, error } = await supabase
          .from('places')
          .select('*')
          .eq('dish', selectedDish);

        if (error) {
          throw error;
        }

        setPlaces(data || []);
      } catch (err) {
        setPlaces([]);
        setErrorMessage('Unable to load places. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [selectedDish]);

  const filteredPlaces = places.filter((place) => {
    const matchesSearch =
      place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  return (
    <section className="section-block">
      <div className="container">
        <div className="section-heading centered">
          <p className="section-tag">Food places</p>
          <h1>
            {selectedDish ? `Places to Try ${dishTitle}` : 'Places to Explore'}
          </h1>
        </div>

        <div className="search-box">
          <label htmlFor="placeSearch" className="sr-only">
            Search for a place
          </label>
          <input
            id="placeSearch"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search for a place..."
          />
        </div>

        {loading ? (
          <div className="empty-state">Loading places...</div>
        ) : errorMessage ? (
          <div className="empty-state">{errorMessage}</div>
        ) : filteredPlaces.length > 0 ? (
          <div className="card-grid two-column">
            {filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            {selectedDish ? 'No places found for this dish.' : 'No places found.'}
          </div>
        )}
      </div>
    </section>
  );
}

export default Places;
