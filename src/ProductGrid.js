import React from 'react';
import { ProductImage } from './ProductImage';
import './styles/productGrid.scss';

export const ProductGrid = ({ heading, cta1, p1Name, p1Img, p1Price, p2Name, p2Img, p2Price, p3Name, p3Img, p3Price, p4Name, p4Img, p4Price }) =>
  <section className="product-grid">
    <h2 className="product-grid__heading">{heading}</h2>
    <div className="product-grid__items">
      <div className="product-grid__item">
        <ProductImage image={p1Img} />
        <div className="product-grid__info">
          <div className="product-grid__text">
            <h1 className="body-text product-grid__title">{p1Name}</h1>
            <h4 className="body-text product-grid__price">{p1Price}</h4>
          </div>
          <button className="button">{cta1}</button>
        </div>
      </div>
      <div className="product-grid__item">
        <ProductImage image={p2Img} />
        <div className="product-grid__info">
          <div className="product-grid__text">
            <h1 className="body-text product-grid__title">{p2Name}</h1>
            <h4 className="body-text product-grid__price">{p2Price}</h4>
          </div>
          <button className="button">{cta1}</button>
        </div>
      </div>
      <div className="product-grid__item">
        <ProductImage image={p3Img} />
        <div className="product-grid__info">
          <div className="product-grid__text">
            <h1 className="body-text product-grid__title">{p3Name}</h1>
            <h4 className="body-text product-grid__price">{p3Price}</h4>
          </div>
          <button className="button">{cta1}</button>
        </div>
      </div>
      <div className="product-grid__item ">
        <ProductImage image={p4Img} />
        <div className="product-grid__info">
          <div className="product-grid__text">
            <h1 className="body-text product-grid__title">{p4Name}</h1>
            <h4 className="body-text product-grid__price">{p4Price}</h4>
          </div>
          <button className="button">{cta1}</button>
        </div>
      </div>
      </div>
  </section>
