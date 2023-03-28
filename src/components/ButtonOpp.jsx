export default function ButtonOpp(props) {
  return (
    <td>
      <input
        type="button"
        class="btnOpps"
        name="btnOpps"
        value={props.value}
        onClick={props.click}
      ></input>
    </td>
  );
}
