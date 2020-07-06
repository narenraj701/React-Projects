
import React from "react";
import { create } from "react-test-renderer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ToDoCard from './ToDoCard'


jest.mock('../Atoms/ToDoMessage',() => ({
    __esModule: true,
    default: () => <div data-testid="message">Message Component</div>
}))
jest.mock('../Atoms/Due',() => ({
    __esModule: true,
    default: () => <div data-testid="duemessage">DueMessage Component</div>
}))
jest.mock('../Atoms/MarkButton',() => ({
    __esModule: true,
    default: () => <div data-testid="markbutton">MarkButton Component</div>
}))
jest.mock('../Atoms/DeleteButton',() => ({
    __esModule: true,
    default: () => <div data-testid="deletebutton">deletebutton Component</div>
}))
test("Match the snapshot - Due message",() => {
    const input=create(<ToDoCard />);
    expect(input.toJSON()).toMatchSnapshot();
})
test("Check if it contains a Message Component",()=>{
    const {getByTestId}=render(<ToDoCard />);
    const messageElement=getByTestId('message');
    expect(messageElement).toBeInTheDocument();
})
test("check if it contains Due message ",()=>{
    const {getByTestId}=render(<ToDoCard />);
    const dueMessageElement=getByTestId('duemessage');
    expect(dueMessageElement).toBeInTheDocument();
})
test("check if it contains MarkButton ",()=>{
    const {getByTestId}=render(<ToDoCard />);
    const markButtonElement=getByTestId('markbutton');
    expect(markButtonElement).toBeInTheDocument();
})
test("check if it contains DeleteButton ",()=>{
    const {getByTestId}=render(<ToDoCard />);
    const deleteButtonElement=getByTestId('markbutton');
    expect(deleteButtonElement).toBeInTheDocument();
})
