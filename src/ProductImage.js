import React from 'react';
import './styles/productImage.scss';

export const ProductImage = ({ image, className }) =>
  <figure className={`product-image ${className ? className : ''}`}>
    <img className="product-image__img" src={image} alt="Product" />
  </figure>
    