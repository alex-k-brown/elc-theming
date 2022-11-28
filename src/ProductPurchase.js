import React from 'react';

import caret from './images/caret.png';
import minus from './images/minus.png';
import plus from './images/plus.png';
import './styles/productPurchase.scss';

export const ProductPurchase = ({ price }) =>
  <section className="productPurchase">
    <div className="bodyText productPurchase__component productPurchase__quantity">
      Quantity <img className="productPurchase__minus" src={minus} alt="Decrease Quantity"/> 1 <img className="productPurchase__plus" src={plus} alt="Increase Quantity"/>
    </div>
    <div className="bodyText productPurchase__component productPurchase__frequency">
      One Time Purchase  <img className='productPurchase__caret' src={caret} alt="Select Frequency"/>
    </div>
    <div className="productPurchase__component productPurchase__price">{price}</div>
    <button className="button button__style_dark productPurchase__component" name="AddToBag">Add To Bag</button>
  </section>