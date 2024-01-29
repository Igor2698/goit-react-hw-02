import css from "../Feedback/Feedback.module.css";

export const Feedback = ({
  reviews: { good, neutral, bad },
  totalFeedback,
}) => {
  const positivePersent = Math.round(((good + neutral) / totalFeedback) * 100);
  return (
    <div className={css.feedbackContainer}>
      <p className={css.good}>Good: {good}</p>
      <p className={css.neutral}>Neutral: {neutral}</p>
      <p className={css.bad}>Bad: {bad} </p>
      <p className={css.positive}>Positive: {positivePersent}%</p>
    </div>
  );
};
