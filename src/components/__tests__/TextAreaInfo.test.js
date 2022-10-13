import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TextAreaInfo from '../infoelements/TextAreaInfo';

afterEach(() => {
    cleanup();
})

test('should render TextAreaInfo component with prefilled input information, and be disabled', () => {

    const field =         {
        "id": "reason",
        "name": "Reason",
        "placeholder": "Describe why you are a good fit for the job you are applying for.",
        "type": "textarea",
        "ind": 9,
        "value": "Tech stacks align, culture seems like a good fit."
    }

    render(<TextAreaInfo field={field} />);
    const textareainfoElement = screen.getByTestId('textareainfo-1');
    expect(textareainfoElement).toBeInTheDocument();
    expect(textareainfoElement).toHaveTextContent('Tech stacks align');
    expect(textareainfoElement).toHaveTextContent('Reason');
    expect(textareainfoElement).toBeDisabled;
});

test('matches snapshot', () => {

    const field =         {
        "id": "reason",
        "name": "Reason",
        "placeholder": "Describe why you are a good fit for the job you are applying for.",
        "type": "textarea",
        "ind": 9,
        "value": "Tech stacks align, culture seems like a good fit."
    }

    const tree = renderer.create(<TextAreaInfo field={field} />).toJSON();
    expect(tree).toMatchSnapshot();
})