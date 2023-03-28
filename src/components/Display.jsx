export default function Display(props) {
  return (
    <td colSpan="5">
      <input
        id="display"
        name="display"
        value={props.value}
        size="28"
        maxLength="25"
      ></input>
    </td>
  );
}
