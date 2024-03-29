import css from "./Options.module.css";
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
          onClick={() => handleClickOnButtons("good")}
          type="button"
        >
          Good
        </button>
        <button
          className={css.button}
          onClick={() => handleClickOnButtons("neutral")}
          type="button"
        >
          Neutral
        </button>
        <button
          className={css.button}
          onClick={() => handleClickOnButtons("bad")}
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
