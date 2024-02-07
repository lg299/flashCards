import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';


// methods of App comp
// - component renders
// - check data state var is loaded
// - checkTranslationIsCorrect
// - nextTranslation
// - check correct translationStatus is displayed
// - check loops back to start of translationArray

describe('App tests.', () => {
    it('App should render.', () => {
      // Arange
      const comp = render(<App />)

      // Assert
      // expect(screen.getByText("flashCards")).toBeInTheDocument();
    });

    it('App should update state to read data from csv file.', () => {
      // Arange
      // const comp = render(<App />)

      // Assert 
      // can we check that 'me dijo' has been rendered - this feels brittle tho


    })
});