import cartReducer, { changeQuantity } from '../../features/cartSlice';

describe('cartSlice tests', () => {
  const initialState = {
    cart: [],
  };

  it('should return the initial state on first run', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  // Doesn't need to be async since we're testing internal logic
  it('should handle changeQuantity', () => {
    const product = { id: 1, quantity: 1, name: 'Product 1 Test', price: 1.99 };
    const state = {
      cart: [product],
    };

    const action = changeQuantity({ ...product, quantity: 2 });
    const expectedState = {
      cart: [{ ...product, quantity: 3 }],
    };

    expect(cartReducer(state, action)).toEqual(expectedState);
  });

  it('should handle add product', () => {
    const product = { id: 1, quantity: 1, name: 'Product 1 Test', price: 1.99 };
    const state = {
      cart: [product],
    };

    const action = changeQuantity({ ...product, quantity: 1 });
    const expectedState = {
      cart: [{ ...product, quantity: 2 }],
    };

    expect(cartReducer(state, action)).toEqual(expectedState);
  });

  it('should handle remove product', () => {
    const product = { id: 1, quantity: 1, name: 'Product 1 Test', price: 1.99 };
    const state = {
      cart: [product],
    };

    const action = changeQuantity({ ...product, quantity: -1 });
    const expectedState = {
      cart: [],
    };

    expect(cartReducer(state, action)).toEqual(expectedState);
  });
});
