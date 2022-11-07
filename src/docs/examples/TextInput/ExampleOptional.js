import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Optional TextInput */
export default function ExampleOptional() {
  return <TextInput
    htmlId="optional-input"
    label="First Name"
    name="firstname"
    onChange={() => {}}
    required
    error="First name is required"/>
}