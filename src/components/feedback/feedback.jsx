import { nanoid } from 'nanoid';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKeys = Object.keys(options);
  return (
    <div>
      {optionsKeys.map(item => {
        return (
          <button key={nanoid()} onClick={onLeaveFeedback} value={item}>
            {item}
          </button>
        );
      })}
    </div>
  );
};
