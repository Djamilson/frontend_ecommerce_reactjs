import React from 'react';
import { dispatch, useSelector } from 'react-redux';

import { MdRemoveCircleOutline,
   MdAddCircleOutline, MdDelete }
    from 'react-icons/md'
import { frormatPrice } from '~/util'
import * as CartActions from '~/'

import { Container, ProductTable,  tTotal} from './styles';

export default function Cart() {
  const total = useSelector(state => frormatPrice(
    state.cart.reduce((
      totalSum, product
    ) => {return totalSum+ product.price * product.amount;}, 0)
  ));

  const cart = useSelector( state=> state.cart.map(product => ({
    ...product, subtotal: frormatPrice(product.price * product.amount)
  })))

  const dispatch = useDispatch();

  function increment(product){
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product){
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductTable>
        <thead><tr>
        <th />
        <th>PRODUTO</th>
        <th>QT</th>
        <th>SUBTOTAL</th>
        <th />
        </tr>
      </thead>
      <tbody>
        {
          cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>
                  {product.title}
                </strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={()=>decrement(product.id)}>
                    <MdRemoveCircleOutline size={20} color="#FFF" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={()=> increment(product.id)>
                    <MdAddCircleOutline size={20} color="#FFF" />
                  </button>

                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button type="button"
                onClick={()=> dispatch(CartActions.removerFromCart(product.id))}>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
      </ProductTable>
      <footer>
        <button type="button">Fizalizar pedido</button>
      <Total>
        <span>TOTAL</span>
        <strong>{total}</strong>
      </Total>
      </footer>
    </Container>
  );
}
