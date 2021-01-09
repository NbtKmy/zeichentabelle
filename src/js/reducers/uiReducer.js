export default function reducer(state={
    ui_list: true,
    ui_tile: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "UI_LIST": {
        return {...state, ui_tile: false, ui_list: true};
      }
      case "UI_TILE": {
        return {...state, ui_tile: true, ui_list: false};
      }
    }

    return state;
}
