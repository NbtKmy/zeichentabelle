export function filterChars(chars, cat) {
  return function(dispatch) {
      const chars_filtered = chars.filter(char => char.section == cat);

      dispatch({type: "FILTERED_CHAR", payload: chars_filtered});
        };

}
