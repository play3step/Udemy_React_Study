const ResultModal = ({ result, targetTime }) => {
  return (
    <dialog className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} second.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X sconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};
export default ResultModal;
