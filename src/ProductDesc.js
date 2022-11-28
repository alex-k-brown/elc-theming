import React from 'react';

import caret from './images/caret.svg';
import './styles/productDesc.scss';

export const ProductDesc = ({ name, description, rating, features, shade }) => (
  <section className="productDesc">
    <h2 className="h2">{name}</h2>
    <p className="bodyText productDesc__blurb">{description}</p>
    <figure className="productDesc__rating">
      <img className="productDesc__rating_stars" src={rating} alt="Product Rating" />
      <img className="productDesc__rating_caret" src={caret} alt="View All Ratings" />
    </figure>
    <section className="productDesc__details">
      <div className="productDesc__details_item">
        <h4 className="bodyText productDesc__details_item_title">Benefits</h4>
        <p className="bodyText productDesc__details_item_info">{features.benefits}</p>
      </div>
      <div className="productDesc__details_item">
        <h4 className="bodyText productDesc__details_item_title">Finish</h4>
        <p className="bodyText productDesc__details_item_info">{features.finish}</p>
      </div>
      <div className="productDesc__details_item">
        <h4 className="bodyText productDesc__details_item_title">Coverage</h4>
        <p className="bodyText productDesc__details_item_info">{features.coverage}</p>
      </div>
      <div className="productDesc__details_item">
        <h4 className="bodyText productDesc__details_item_title">Key Ingredients</h4>
        <p className="bodyText productDesc__details_item_info">
          {features.keyIngredients} <a href="http://www.clinique.com">More</a>
        </p>
      </div>
    </section>
    <section className="productDesc__shade">
      <span className="bodyText productDesc__shade_name">{shade.name}</span>
      <div className="productDesc__shade_color" style={{ background: shade.color }}></div>
    </section>
  </section>
);
