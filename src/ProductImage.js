import React from 'react';
import './styles/productImage.scss';

export const ProductImage = ({ image, className }) =>
  <figure className={`productImage ${className ? className : ''}`}>
    <img className="productImage__img" src={image} alt="Product" />
  </figure>
    