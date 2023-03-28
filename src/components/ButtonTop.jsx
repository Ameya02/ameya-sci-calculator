export default function ButtonTop(props) {
  return (
    <td>
      <input
        type="button"
        class="btnTop"
        name="btnTop"
        value={props.value}
        onClick={props.click}
      ></input>
    </td>
  );
}
