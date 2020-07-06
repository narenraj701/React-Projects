import React from 'react';
import { render,screen,fireEvent } from '@testing-library/react';
import {create} from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import MarkButton from './MarkButton'

test("Match the snapshot - MarkButton",() => {
    const input=create(<MarkButton />);
    expect(input.toJSON()).toMatchSnapshot();
})
test("Button is present", () => {
    render(<MarkButton />)
    let button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});
test("Button has text Mark as completed", () => {
    render(<MarkButton />)
    let button = screen.getByRole("button");
    expect(button).toHaveTextContent("Mark as completed")
});
test("Button onclick check",()=>{
    const mockClickMethod = jest.fn();
  const {getByRole}=  render(<MarkButton disableit={mockClickMethod}/>);
    fireEvent.click(getByRole("button"));
    expect(mockClickMethod).toHaveBeenCalledTimes(1);
});
test("Button is Disabled", () => {
    render(<MarkButton disabled={true}/>)
    let button = screen.getByRole("button");
    expect(button).toBeDisabled();
});



