import React from "react";
import { render, getByTestId, fireEvent, getByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const container = render(<CheckoutForm />)
    console.log(container)
});

test("form shows success message on submit with form details", () => {
    const { getByTestId } = render(<CheckoutForm />)
    const button = getByText(container, 'Checkout')
    const success = getByTestId('successMessage')

    fireEvent.click(button)
    expect(success).toBeInTheDocument()
});
