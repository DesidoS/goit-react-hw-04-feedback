import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';

const Statistics = ({ good, neutral, bad, total, positivePercent }) => {
  return (
    <StatisticsItem
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      positivePercent={positivePercent}
    />
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercent: PropTypes.number.isRequired,
};
