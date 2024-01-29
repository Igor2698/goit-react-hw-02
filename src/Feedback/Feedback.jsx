export const Feedback = ({
  reviews: { good, neutral, bad },
  totalFeedback,
}) => {
  const positivePersent = Math.round(((good + neutral) / totalFeedback) * 100);
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral:{neutral} </p>
      <p>Bad: {bad} </p>
      <p>Positive: {positivePersent}%</p>
    </div>
  );
};
