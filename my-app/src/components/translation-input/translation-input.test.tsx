import React from 'react';
import { render, screen } from '@testing-library/react';
import { TranslationInput }  from './translation-input'

describe("testing render translation input", () => {
    const result = render(< TranslationInput label='placeholder' disabled={false}/>);
    const translationInput = result.container.querySelector('#standard-basic')

    test("return translationInput", () => {
        expect(translationInput).toBe
    })
})
