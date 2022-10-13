import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SelectInfo from '../infoelements/SelectInfo';

afterEach(() => {
    cleanup();
})

test('should render SelectInfo component with prefilled input information, and be disabled', () => {

    const field =         {
        "id": "jobTitle",
        "name": "Job Title",
        "options": [
            "Engineer - Lead",
            "Engineer - Mid Level",
            "Engineer - Junior",
            "Engineer - Front End Focused",
            "Engineer - Backend Focused",
            "Engineer - Full Stack"
        ],
        "placeholder": "Please select job title",
        "type": "select",
        "ind": 8,
        "value": "Engineer - Mid Level"
    }

    render(<SelectInfo field={field} />);
    const selectinfoElement = screen.getByTestId('selectinfo-1');
    expect(selectinfoElement).toBeInTheDocument();
    expect(selectinfoElement).toHaveTextContent('Job Title');
    expect(selectinfoElement).toHaveTextContent('Engineer - Mid Level');
    expect(selectinfoElement).toBeDisabled;
});

test('matches snapshot', () => {

    const field =         {
        "id": "jobTitle",
        "name": "Job Title",
        "options": [
            "Engineer - Lead",
            "Engineer - Mid Level",
            "Engineer - Junior",
            "Engineer - Front End Focused",
            "Engineer - Backend Focused",
            "Engineer - Full Stack"
        ],
        "placeholder": "Please select job title",
        "type": "select",
        "ind": 8,
        "value": "Engineer - Mid Level"
    }

    const tree = renderer.create(<SelectInfo field={field} />).toJSON();
    expect(tree).toMatchSnapshot();
})