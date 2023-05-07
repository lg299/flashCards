import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// methods of App comp
// - checkTranslationIsCorrect
// - nextTranslation
// - check correct translationStatus is displayed
// - check loops back to start of translationArray

describe('App tests.', () => {
  it('App should render.', () => {
    render(<App />);
  });

  it('App should update state to read data from csv file.', () => {

  })
});