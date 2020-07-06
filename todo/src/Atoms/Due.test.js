import React from 'react';
import { render } from '@testing-library/react';
import {create} from 'react-test-renderer';
import Due from './Due';

test("Match the snapshot - Due message",() => {
    const input=create(<Due />);
    expect(input.toJSON()).toMatchSnapshot();
})
test("Due Text Field is present",()=>{
    const {getByTestId}=render(<Due due={"10th July"}/>);
    const element=getByTestId("duetext");
    expect(element).toBeInTheDocument();
})
test("Checking Due Meaasge Passed",()=>{
    const {getByTestId}=render(<Due due={"10th July"}/>);
    const element=getByTestId("duetext");
    expect(element).toHaveTextContent("10th July");
})

