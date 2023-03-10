import React from "react";
import {render, screen, fireEvent} from '@testing-library/react'
import Autocomplete from "./Autocomplete";

const mockState= [{ id:1 , title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}]

jest.mock("../utils/api");
const mockFunction = jest.fn();

describe("Autocomplete", () => {
  it("renders input correctly", () => {
    render(<Autocomplete />);
    const input = screen.getByRole('textbox', {placeholder: /Search for a product/i})    
    expect(input).toBeInTheDocument();
  });

  it("renders products correctly", () => {
    render(<Autocomplete />);
    const div = screen.getByRole('img', {placeholder: /Product display/i})    
    expect(div).toBeInTheDocument();
  });

});

