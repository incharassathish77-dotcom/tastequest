import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>TasteQuest</h3>
          <p>Discover India Through Its Food</p>
        </div>

        <div>
          <h4>Quick links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/states">States</Link></li>
            <li><Link to="/dishes">Dishes</Link></li>
            <li><Link to="/places">Places</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
          </ul>
        </div>
      </div>

      <div className="copyright">© 2026 TasteQuest</div>
    </footer>
  );
}

export default Footer;
