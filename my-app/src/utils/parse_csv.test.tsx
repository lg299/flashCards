import React from 'react';
import { render, screen } from '@testing-library/react';
import loadData from './parse_csv';

describe("testing parse csv reads file", () => {
    test("reads file with correct path", () => {
        const {data, err} = loadData('data/example_csv.csv');
        console.log("data: ", data)
        expect(data).toBeUndefined();
    })
})