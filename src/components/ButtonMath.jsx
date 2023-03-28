export default function ButtonMath(props) {
  return (
    <td>
      <input
        type="button"
        class="btnMath"
        name="btnMath"
        value={props.value}
        onClick={props.click}
      ></input>
    </td>
  );
}
