import reducer from "./reducer";

it("new cart item should be added", () => {
  let state = {
    cart: [],
    user: null,
  };

  let newState = reducer(state, {
    type: "ADD_TO_CART",
    item: {
      id: 123,
      title: "test",
      image: "image",
      price: 3333,
      rating: 10,
    },
  });

  expect(newState.cart.length).toBe(1);
  expect(newState.cart[0].title).toBe("test");
});

it("after deleting length should be decrement", () => {
  let state1 = {
    cart: [
      {
        id: 1,
        title: "title for del test",
        image: "image for del test",
        price: 999999,
        rating: 5,
      },
      {
        id: 2,
        title: "title for del test",
        image: "image for del test",
        price: 999999,
        rating: 5,
      },
      {
        id: 3,
        title: "title for del test",
        image: "image for del test",
        price: 999999,
        rating: 5,
      },
    ],
    user: null,
  };

  let newState = reducer(state1, {
    type: "REMOVE_FROM_CART",
    payload: 2,
  });

  expect(newState.cart.length).toBe(2);
});
