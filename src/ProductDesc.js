import React from 'react';

import caret from './images/caret.svg';
import './styles/productDesc.scss';

export const ProductDesc = ({ name, description, rating, features, shade }) => (
  <section className="product-desc">
    <h2 className="product-desc__title">{name}</h2>
    <p className="body-text product-desc__blurb">{description}</p>
    <figure className="product-desc__rating">
      <img className="product-desc__rating-stars" src={rating} alt="Product Rating" />
      <img className="product-desc__caret" src={caret} alt="View All Ratings" />
    </figure>
    <section className="product-desc__details">
      <div className="product-desc__detail">
        <h4 className="body-text body-text--tight product-desc__detail-title">Benefits</h4>
        <p className="body-text body-text--tight product-desc__detail-info">{features.benefits}</p>
      </div>
      <div className="product-desc__detail">
        <h4 className="body-text body-text--tight product-desc__detail-title">Finish</h4>
        <p className="body-text body-text--tight product-desc__detail-info">{features.finish}</p>
      </div>
      <div className="product-desc__detail">
        <h4 className="body-text body-text--tight product-desc__detail-title">Coverage</h4>
        <p className="body-text body-text--tight product-desc__detail-info">{features.coverage}</p>
      </div>
      <div className="product-desc__detail">
        <h4 className="body-text body-text--tight product-desc__detail-title">Key Ingredients</h4>
        <p className="body-text body-text--tight product-desc__detail-info">
          {features.keyIngredients} <a href="http://www.clinique.com">More</a>
        </p>
      </div>
    </section>
    <section className="product-desc__shade">
      <span className="body-text body-text--tight product-desc__shade-name">{shade.name}</span>
      <div className="product-desc__shade-color" style={{ background: shade.color }}></div>
    </section>
  </section>
);
