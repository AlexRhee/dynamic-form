import inputFields from './inputFields.json';
import './App.css';
import { useState } from 'react';
import FormBox from './components/FormBox'
import InformationBox from './components/InformationBox'
import { FormContext } from './FormContext'

function App() {

  const [elements, setElements] = useState(inputFields);
  const [submitting, setSubmitting] = useState(false);

  //Seed state and reset function for update children during the submission validation check
  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  }

  //Validation variable
  let valid = true;

  //Function for the submit button logic that will run field validation on all fields and will not allow submission unless all fields pass
  const handleSubmit = (event) => {
    event.preventDefault();

    //reset the valid var to true prior to running validation
    valid = true;

    //Loop through all the elements to determine if required fields have been entered correctly
    elements.forEach(ele => {
      if (Array.isArray(ele)) {
        ele.forEach(el => {
          if (fieldValidation(el.required, el.id, el.value, el.type) === false) {
            el.invalid = true;
            valid = false;
          } else {
            el.invalid = false;
          }
        })
      } else {
        if (fieldValidation(ele.required, ele.id, ele.value, ele.type) === false) {
          ele.invalid = true;
          valid = false;
        } else {
          ele.invalid = false;
        }
      }
    })

    //Reset the see state to update the child to display validation errors on inputs
    reset();

    //If validation passes, change the submit state to move on to the thank you screen
    if (valid) {
      setSubmitting(prevState => !prevState)
    }
  }

  //Function to reset the form after submission, will remove all existing values and change the submission state
  const handleReset = () => {
    elements.forEach(ele => {
      if (Array.isArray(ele)) {
        ele.forEach(el => {
          el.value = null;
          el.invalid = false;
        })
      } else {
        ele.value = null;
        ele.invalid = false;
      }
    })

    setSubmitting(prevState => !prevState)
  }

  //Function to handle the on change event for inputs, will update the elements state
  const handleChange = (ind, event) => {

    const newElements = [...elements]
    newElements.forEach(field => {

      if (Array.isArray(field)) {
        field.forEach(el => {
          if (ind === el.ind) {
            el['value'] = event.target.value;
          }
        })
      } else {
        if (ind === field.ind) {
          field['value'] = event.target.value;
        }
      }
      setElements(newElements);
    });
  }

  //Function to handle the on blur event for inputs, will run field validation and mark fields as invalid if they fail
  const handleBlur = (ind, event) => {
    const newElements = [...elements]
    newElements.forEach(field => {
      if (Array.isArray(field)) {
        field.forEach(el => {
          if (ind === el.id) {
            if (fieldValidation(el.required, el.id, event.target.value, el.type) === false) {
              el.invalid = true;
            } else {
              el.invalid = false;
            }
          }
        })
      } else {
        if (ind === field.id) {
          if (fieldValidation(field.required, field.id, event.target.value, field.type) === false) {
            field.invalid = true;
          } else {
            field.invalid = false;
          }
        }
      }
      setElements(newElements);
    })
  }

  //Field validation function that is called from the handleBlur and handleSubmission functions
  const fieldValidation = (required, id, value, type) => {
    if (id === 'email' && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))) {
      return false;
    } else if (id === 'phone' && (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(value))) {
      return false;
    } else if (required && type === 'select' && value === '0') {
      return false;
    } else if (required && (!value || value.trim === '')) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <FormContext.Provider value={{ handleChange, handleBlur, seed }}>
      <div className="App">
        {!submitting ? <h2>Applicant Information</h2> : <h2>Thank you for applying!</h2>}
        {!submitting ? <FormBox submitting={submitting} handleSubmit={handleSubmit} /> : <InformationBox fields={elements} handleReset={handleReset} />}
      </div>
    </FormContext.Provider>
  );
}

export default App;
