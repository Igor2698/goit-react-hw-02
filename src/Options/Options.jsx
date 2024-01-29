import css from "../Options/Options.module.css";
export const Options = ({
  handleClickOnButtons,
  totalFeedback,
  resetReview,
}) => {
  return (
    <>
      {" "}
      <div className={css.buttonsContainer}>
        <button
          className={css.button}
          onClick={handleClickOnButtons}
          type="button"
        >
          Good
        </button>
        <button
          className={css.button}
          onClick={handleClickOnButtons}
          type="button"
        >
          Neutral
        </button>
        <button
          className={css.button}
          onClick={handleClickOnButtons}
          type="button"
        >
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
