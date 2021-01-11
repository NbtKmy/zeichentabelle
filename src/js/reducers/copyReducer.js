export default function reducer(state={
    copy_status: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "COPIED": {
        return {...state, copy_status: true};
      }
      case "NOT_COPIED": {
        return {...state, copy_status: false};
      }
    }

    return state;
}
