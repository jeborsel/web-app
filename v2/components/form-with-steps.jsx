import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSteps } from '../hooks';
import { colors, breakpoints } from '../assets/styles/constants';
import { Button } from './UI';
import Form from './form';

const FormWithSteps = ({ steps, onCompleteAll }) => {
  const { currentStep, isFinalStep, stepForward, stepBack, stepTo } = useSteps(steps.length);
  const flattenedFields = steps.reduce((all, step) => all.concat(step.fields), []);
  const stepTitles = steps.reduce((all, step) => all.concat(step.title), []);

  /*
   * Opportunity is result of all form values
   */
  const [opportunity, setOpportunity] = useState({});

  /*
   * Validate
   * Save & continue if valid, else show errors
   */
  const submitStep = (values) => {
    /*
     * TODO: Validate - return errors if errors
     */
    //

    /*
     * TODO: save form state client side
     */
    //

    /*
     * Add current step values to multi step form result
     */
    setOpportunity({ ...opportunity, ...values });

    /*
     * Continue
     */
    stepForward();
  };

  /*
   * Add opportunity to firestore
   */
  const handleSubmit = () => {
    onCompleteAll(opportunity);
  };

  /*
   * Current step props
   */
  const { title, fields } = steps[currentStep];

  return (
    <Form onSubmit={submitStep} title={title} fields={fields}>
      <div className="stepper">
        <Button type="button" onClick={stepBack}>
          Stap terug
        </Button>
        {stepTitles.map((title, index) => (
          <Button key={index} onClick={() => stepTo(index)}>
            {`${index + 1}. ${title}`}
          </Button>
        ))}
        {!isFinalStep ? (
          <Button type="submit" onSubmit={submitStep}>
            Ga door
          </Button>
        ) : (
          <Button type="submit" onClick={handleSubmit}>
            Bevestig
          </Button>
        )}
      </div>
      <style jsx>
        {`
          .stepper {
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${colors.white};
            box-shadow: 0 0.5rem 1rem 0.5rem rgba(0, 0, 0, 0.2);
            margin: 0 calc(15vw - 4.5rem);
          }

          @media (max-width: ${breakpoints.medium}) {
            .stepper {
              margin: 0;
            }
          }
        `}
      </style>
    </Form>
  );
};

FormWithSteps.propTypes = {
  steps: PropTypes.shape({
    title: PropTypes.string,
    field: PropTypes.arrayOf(PropTypes.object)
  }),
  onCompleteAll: PropTypes.func
};

export default FormWithSteps;
