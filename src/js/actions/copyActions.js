export function copyStatus() {
  return function(dispatch) {
    dispatch({
      type: "COPIED"
    });

    setTimeout(() => {
      dispatch({
        type: "NOT_COPIED"
      })
    }, 1000);
  };
}
