Dynamic Application Form - created with React

Form will take in JSON information, located in the inputFields.json file found in the src folder. Fields can be added by adding entries in the JSON file following the existing format. Fields that are added within their own sub array will display within the same row as columns of that row. Existing examples are First Name, Last Name as well as City, State, Zip.

Validation for any field that has their required property set to true. Validation can also be added to select and textarea inputs.
If a field fails validation, via onBlur or clicking Submit, the field will change color to red and the user will not be able to proceed to the 'Thank You' screen. Custom validation for Email and Phone numbers added.

The form is mobile responsive and will convert to a uniform 1 column form at a width of 700px or less and this includes fields that appear as columns on the same row when in desktop view.

Tabbing and accessibility text have been added to the fields as well as the buttons. Tabbing will not work once the form is submitted as the fields will be disabled at that point.

Styling has been done with custom CSS without the use of styling frameworks.

Unit testing has been added for 3 of the post submission inputs.

Unfortunately I was unable to implement Redux in the application due to my lack of experience with the framework. I tried adding it in after the fact but the code was starting to get a bit messy so I opted to revert back to my original state management implementation. I think if I had tried to use Redux from the get go I could have implemented it as I do have a better idea of using store, reducer, store dispatch and actions to manage state after reading the documentation and giving it a try.

Overall it was a fun challenge!
