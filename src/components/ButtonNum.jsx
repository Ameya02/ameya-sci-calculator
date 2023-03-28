export default function ButtonNum(props) {
  return (
    <td>
      <input
        type="button"
        class="btnNum"
        name="btnNum"
        id="btnNum"
        value={props.value}
        onClick={props.click}
      ></input>
    </td>
  );
}
