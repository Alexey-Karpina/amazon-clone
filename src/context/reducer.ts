type CartType = {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
};

type ActionType = {
  type: string;
  item?: CartType;
  payload?: any;
};

export const initialState = {
  cart: [] as Array<CartType>,
  user: null as any,
};

export type InitialStateType = typeof initialState;

const deleteProd = (state: InitialStateType, id: number): Array<CartType> => {
  const { cart } = state;
  return cart.filter((item: CartType) => {
    return item.id !== id;
  });
};

export const getCartTotal = (cart: Array<CartType>): number => {
  return cart?.reduce((total: number, item: CartType) => item.price + total, 0);
};

const reducer = (state = initialState, action: ActionType) => {
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
