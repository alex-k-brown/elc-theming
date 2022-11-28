import React from 'react';
import { ProductImage } from './ProductImage';
import './styles/productGrid.scss';

export const ProductGrid = ({ heading, cta1, p1Name, p1Img, p1Price, p2Name, p2Img, p2Price, p3Name, p3Img, p3Price, p4Name, p4Img, p4Price }) =>
  <section className="productGrid">
    <h2 className="h2 productGrid__heading">{heading}</h2>
    <div className="productGrid__items">
      <div className="productGrid__item">
        <ProductImage image={p1Img} />
        <div className="productGrid__info">
          <div>
            <h1 className="bodyText productGrid__title">{p1Name}</h1>
            <h4 className="bodyText productGrid__price">{p1Price}</h4>
          </div>
          <button className="button">{cta1}</button>
        </div>
      </div>
      <div className="productGrid__item">
        <ProductImage image={p2Img} />
        <div className="productGrid__info">
          <div>
            <h1 className="bodyText productGrid__title">{p2Name}</h1>
            <h4 className="bodyText productGrid__price">{p2Price}</h4>
          </div>
          <button className="button">{cta1}</button>
        </div>
      </div>
      <div className="productGrid__item">
        <ProductImage image={p3Img} />
        <div className="productGrid__info">
          <div>
            <h1 className="bodyText productGrid__title">{p3Name}</h1>
            <h4 className="bodyText productGrid__price">{p3Price}</h4>
          </div>
          <button className="button">{cta1}</button>
        </div>
      </div>
      <div className="productGrid__item ">
        <ProductImage image={p4Img} />
        <div className="productGrid__info">
          <div>
            <h1 className="bodyText productGrid__title">{p4Name}</h1>
            <h4 className="bodyText productGrid__price">{p4Price}</h4>
          </div>
          <button className="button">{cta1}</button>
        </div>
      </div>
      </div>
  </section>
