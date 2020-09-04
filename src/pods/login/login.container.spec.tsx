import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginContainer } from './login.container';

describe('Login container specs', () => {
  it('Should show name, password and submit button on the document when rendered', () => {
    //Arrange

    //Act
    render(<LoginContainer />);

    const nameElement = screen.queryByRole('textbox');
    const passwordElement = screen.getByTestId('password');
    const buttonElement = screen.getByRole('button');

    //Assert
    expect(nameElement).toBeInTheDocument();
    expect(passwordElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();

    //expect(nameElement.getAttribute('value')).toEqual('admin');
    //expect(passwordElement.getAttribute('value')).toEqual('test');
  });
});
