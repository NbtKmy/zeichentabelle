export default function reducer(state={
    chars_filtered: [],
    error: null,
  }, action) {

    switch (action.type) {
      case "FILTERED_CHAR": {
        return {...state, filtered: true, chars_filtered: action.payload};
      }
      case "ERROR": {
        return {...state, error: true};
      }
    }

    return state;
}
