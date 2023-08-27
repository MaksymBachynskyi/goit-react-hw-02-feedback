import { nanoid } from 'nanoid';
import { StyledBtn, WraperBtns } from './feedback';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKeys = Object.keys(options);
  return (
    <WraperBtns>
      {optionsKeys.map(item => {
        return (
          <StyledBtn key={nanoid()} onClick={onLeaveFeedback} value={item}>
            {item}
          </StyledBtn>
        );
      })}
    </WraperBtns>
  );
};
