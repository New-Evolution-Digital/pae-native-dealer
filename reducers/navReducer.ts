const initialState = {
  isHidden: true,
};

export default function navReducer(
  state = initialState,
  action: { type: any },
) {
  switch (action.type) {
    default:
      return state;
  }
}
