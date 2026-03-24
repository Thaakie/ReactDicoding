function DecreaseButton({ DecreaseButton, disable }) {
  return (
    <>
      <button onClick={DecreaseButton} disabled={disable}>
        <span>-</span>
      </button>
    </>
  );
}
export default DecreaseButton;
