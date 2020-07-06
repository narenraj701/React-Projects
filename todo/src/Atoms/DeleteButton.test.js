import React from 'react';
import { render,screen } from '@testing-library/react';
import {create} from 'react-test-renderer'
import Delete from './DeleteButton'

test("Match the snapshot - DeleteButton",() => {
    const input=create(<Delete />);
    expect(input.toJSON()).toMatchSnapshot();
})
test("Delete Button is present", () => {
    render(<Delete />)
    let button = screen.getByRole("button");
    expect(button).toBeInTheDocument()
});
test("Button has text Delete", () => {
    render(<Delete />)
    let button = screen.getByRole("button");
    expect(button).toHaveTextContent("Delete")
});



