export const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
