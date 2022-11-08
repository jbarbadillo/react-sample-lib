import React from 'react';
import TextInputBEM from 'ps-react/TextInputBEM';

/** Required text box with error */
export default function ExampleOptional() {
  return <TextInputBEM
    htmlId="optional-input"
    label="First Name"
    name="firstname"
    onChange={() => {}}
    required
    error="First name is required"/>
}