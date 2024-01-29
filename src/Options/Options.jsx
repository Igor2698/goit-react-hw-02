export const Options = ({
  handleClickOnButtons,
  totalFeedback,
  resetReview,
}) => {
  return (
    <>
      {" "}
      <div>
        <button onClick={handleClickOnButtons} type="button">
          Good
        </button>
        <button onClick={handleClickOnButtons} type="button">
          Neutral
        </button>
        <button onClick={handleClickOnButtons} type="button">
          Bad
        </button>
        {totalFeedback > 0 && (
          <button onClick={resetReview} type="button">
            Reset
          </button>
        )}
      </div>
    </>
  );
};
