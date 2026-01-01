import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">
        <h1>Creative Showcase</h1>
        <div className="auth-buttons">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </header>

      <p className="subtitle">
        Discover and showcase creative memories 🎨
      </p>

      <div className="masonry">
        {/* Placeholder images */}
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="masonry-item">
            <img
              src={`https://picsum.photos/400/300?random=${i}`}
              alt="art"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
