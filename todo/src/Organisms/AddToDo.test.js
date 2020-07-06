
import React from "react";
import { create } from "react-test-renderer";
import { render,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddToDo from './AddToDo';


test("Match the snapshot - Due message",() => {
    const input=create(<AddToDo />);
    expect(input.toJSON()).toMatchSnapshot();
})
test("onchange of task message", () => {
    const { getByPlaceholderText } = render(<AddToDo />);
    const messageInput = getByPlaceholderText("enter a to do task");
    fireEvent.change(messageInput, { target: { value: "complete work" } });
    expect(messageInput).toHaveValue("complete work");
  });

  test("onchange of due message", () => {
    const { getByPlaceholderText } = render(<AddToDo />);
    const dueInput = getByPlaceholderText("enter a to do task");
    fireEvent.change(dueInput, { target: { value: "17th July" } });
    expect(dueInput).toHaveValue("17th July");
  })
  test("Submit Button is present",()=>{ 
    const { getByRole } = render(<AddToDo />);
    const button=getByRole('button');
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  })