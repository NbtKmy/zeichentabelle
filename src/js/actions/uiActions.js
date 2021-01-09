export function uiList() {
  return function(dispatch) {
      dispatch({type: "UI_LIST"});
        };

}

export function uiTile() {
  return function(dispatch) {
      dispatch({type: "UI_TILE"});
        };

}
