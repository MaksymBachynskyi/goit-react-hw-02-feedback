export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total(good, neutral, bad)}</p>
      <p>Positive feedback:{positivePercentage(good, bad)}%</p>
    </div>
  );
};
