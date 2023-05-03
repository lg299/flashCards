import React from 'react';
import { render, screen } from '@testing-library/react';
import { loadData } from './parse_csv';


describe("testing parse csv reads file", () => {
    test("reads file with correct path", () => {
        const expected = [
            {"spanish": "me dijo", "english": "she/he told me", "wordOrPhrase": "1"},
            {"spanish": "me dijé", "english": "i told me", "wordOrPhrase": "1"}
        ]
        const records = loadData('data/example_csv.csv');
        expect(records).toEqual(expected)
    })
})