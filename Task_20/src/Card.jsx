/* eslint-disable react/prop-types */

import './Card.css'; 

const Card = ({ items }) => {
  return (
    <div className="card-container">
      {items.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
