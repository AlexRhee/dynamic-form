import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TextInfo from '../infoelements/TextInfo';


afterEach(() => {
    cleanup();
})

test('should render TextInfo component and be disabled', () => {

    const field =         {
        "id": "firstName",
        "name": "First Name",
        "placeholder": "First name",
        "required": true,
        "type": "text",
        "ind": 0,
        "value": "Alex"
    }

    render(<TextInfo field={field} />);
    const textinfoElement = screen.getByTestId('textinfo-1');
    expect(textinfoElement).toBeInTheDocument();
    expect(textinfoElement).toHaveTextContent('First Name');
    expect(textinfoElement).toBeDisabled;
})

test('matches snapshot', () => {

    const field =         {
        "id": "firstName",
        "name": "First Name",
        "placeholder": "First name",
        "required": true,
        "type": "text",
        "ind": 0,
        "value": "Alex"
    }

    const tree = renderer.create(<TextInfo field={field} />).toJSON();
    expect(tree).toMatchSnapshot();
})