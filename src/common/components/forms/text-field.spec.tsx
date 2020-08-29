import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextField } from './text-field';

describe('text-field component specs', () => {
  it('Should be in the document when rendered and show the passed value', () => {
    //Arrange
    const props = {
      input: {
        name: 'text-field1',
        value: 'Alberto',
        onChange: jest.fn(),
        onBlur: jest.fn(),
        onFocus: jest.fn(),
      },
      meta: {
        submitError: false,
        dirtySinceLastSubmit: false,
        touched: false,
      },
    };

    //Act
    render(<TextField {...props} />);

    const valueElement = screen.getByDisplayValue(props.input.value);
    const nameElement = screen.getByRole('textbox');

    //Assert
    expect(valueElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(valueElement).toHaveValue('Alberto');
  });

  it('Should change the value when typing inside text-box', () => {
    //Arrange
    const props = {
      input: {
        name: 'text-field1',
        value: 'Alberto',
        onChange: jest.fn((e) => {
          props.input.value = e.target.value;
        }),
        onBlur: jest.fn(),
        onFocus: jest.fn(),
      },
      meta: {
        submitError: false,
        dirtySinceLastSubmit: false,
        touched: false,
      },
    };

    //Act
    const { rerender } = render(<TextField {...props} />);

    const valueElement = screen.getByRole('textbox');

    userEvent.type(valueElement, '2', {});

    rerender(<TextField {...props} />);

    //Assert

    expect(props.input.onChange).toHaveBeenCalled();
    expect(valueElement).toHaveValue('Alberto2');
  });
});
