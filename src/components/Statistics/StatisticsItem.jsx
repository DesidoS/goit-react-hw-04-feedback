import PropTypes from 'prop-types';
import { List } from './StatisticsItem.styled';
const StatisticsItem = ({ good, neutral, bad, total, positivePercent }) => {
  return (
    <>
      {good || neutral || bad ? (
        <List>
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <span>Total: {total}</span>
          <span>Positive feedback: {positivePercent}%</span>
        </List>
      ) : (
        <span>No feedback given.</span>
      )}
    </>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercent: PropTypes.number.isRequired,
};
