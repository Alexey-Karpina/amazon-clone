export const initialState = {
  cart: [],
  user: null,
};

const deleteProd = (state, id) => {
  const { cart } = state;
  return cart.filter((item) => {
    return item.id !== id;
  });
};

export const getCartTotal = (cart) => {
  return cart?.reduce((total, item) => item.price + total, 0);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: deleteProd(state, action.payload),
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
