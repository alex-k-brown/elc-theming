import React from 'react';

import caret from './images/caret.png';
import minus from './images/minus.png';
import plus from './images/plus.png';
import './styles/productPurchase.scss';

export const ProductPurchase = ({ price }) =>
  <section className="product-purchase">
    <div className="body-text body-text--tight product-purchase__component product-purchase__quantity">
      Quantity <img className="product-purchase__minus" src={minus} alt="Decrease Quantity"/> 1 <img className="product-purchase__plus" src={plus} alt="Increase Quantity"/>
    </div>
    <div className="body-text body-text--tight product-purchase__component product-purchase__frequency">
      One Time Purchase  <img className='product-purchase__caret' src={caret} alt="Select Frequency"/>
    </div>
    <div className="product-purchase__component product-purchase__price">{price}</div>
    <button className="button button--dark product-purchase__component" name="AddToBag">Add To Bag</button>
  </section>