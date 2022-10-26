import PropTypes from 'prop-types';
import { TbCoffee } from 'react-icons/tb';
import { Button, ButtonContainer, Icon } from './FeedbackButton.styled';

const FeedbackButton = ({ onLeaveFeedback, options }) => {
  const buttons = Object.keys(options);
  return (
    <ButtonContainer>
      {buttons.map(btn => (
        <Button
          key={btn}
          type="button"
          onClick={() => {
            onLeaveFeedback(btn);
          }}
        >
          {btn[0].toUpperCase() + btn.slice(1)}
          <Icon>
            <TbCoffee />
          </Icon>
        </Button>
      ))}
    </ButtonContainer>
  );
};

export default FeedbackButton;

FeedbackButton.propTypes = {
  options: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
