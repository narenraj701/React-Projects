import React from 'react';
import { render } from '@testing-library/react';
import {create} from 'react-test-renderer'
import ToDoMessage from './ToDoMessage'

test("Match the snapshot - ToDoMessage",() => {
    const input=create(<ToDoMessage />);
    expect(input.toJSON()).toMatchSnapshot();
})
test("ToDoMeaasge is Present",()=>{
    const {getByTestId}=render(<ToDoMessage />);
    const element=getByTestId("ToDoMessage");
    expect(element).toBeInTheDocument();
})
test("Checking message passed in ToDoMessage",()=>{
    const {getByTestId}=render(<ToDoMessage message="complete assignments"/>);
    const element=getByTestId("ToDoMessage");
    expect(element).toHaveTextContent("complete assignments");
})
test("Message should have style strike-through if  todo task is compledted",()=>{
    const {getByTestId}=render(<ToDoMessage message="go shopping" finished={true}/>);
    const element=getByTestId("ToDoMessage");
    expect(element).toHaveStyle(`text-decoration:line-through;`);
})