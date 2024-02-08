import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { Description } from "../Description/Description";
import { Options } from "../Options/Options";
import { Feedback } from "../Feedback/Feedback";
import { Notification } from "../Notification/Notification";

function App() {
  const [reviews, setReviews] = useState(() => {
    const savedRevies = window.localStorage.getItem("saved-reviews");
    if (savedRevies !== null) {
      return JSON.parse(savedRevies);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-reviews", JSON.stringify(reviews));
  }, [reviews]);

  const { good, neutral, bad } = reviews;
  const totalFeedback = good + neutral + bad;

  const handleClickOnButtons = (buttonType) => {
    setReviews({ ...reviews, [buttonType]: reviews[buttonType] + 1 });
  };

  const resetReview = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Options
        handleClickOnButtons={handleClickOnButtons}
        totalFeedback={totalFeedback}
        resetReview={resetReview}
      />
      {totalFeedback ? (
        <Feedback reviews={reviews} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
