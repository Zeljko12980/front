import {Link} from "react-router-dom";

export function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <Link to="/cart" className="btn">
              View Cart
            </Link>
    </div>
  );
}