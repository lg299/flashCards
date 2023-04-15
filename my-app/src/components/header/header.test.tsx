import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './header'


describe("<Header />", () => {
    const result = render(< Header/>);
    const header = result.container.querySelector('#header-time')

    test("return header", () => {
        expect(header).toHaveTextContent("flashCards")
    })
});
