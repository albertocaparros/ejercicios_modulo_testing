import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginComponent } from './login.component';

describe('Login component specs', () => {
  it('Should show name, password and submit button on the document when rendered', () => {
    //Arrange
    const props = {
      input: {
        name: 'login',
        onChange: jest.fn(),
        onBlur: jest.fn(),
        onFocus: jest.fn(),
      },
      password: {
        name: 'password',
        onChange: jest.fn(),
        onBlur: jest.fn(),
        onFocus: jest.fn(),
      },
      meta: {
        submitError: false,
        dirtySinceLastSubmit: false,
        touched: false,
      },
      onLogin: jest.fn(),
      initialLogin: { login: 'admin', password: 'test' },
    };

    //Act
    render(<LoginComponent {...props} />);

    const nameElement = screen.queryByRole('textbox') as HTMLInputElement;
    const passwordElement = screen.getByTestId('password') as HTMLInputElement; //Porque no me deja acceder al input si no es con un test-id ??
    const buttonElement = screen.getByRole('button');

    //Assert
    expect(nameElement).toBeInTheDocument();
    expect(passwordElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();

    expect(nameElement.value).toEqual('admin');
    expect(passwordElement.value).toEqual('test'); //Porque no aparece el valor dentro del input password?
  });

  it('Should login succesfully when clicking on submit with the correct values for name and password', async () => {
    //Arrange
    const props = {
      input: {
        name: 'login',
        onChange: jest.fn(),
        onBlur: jest.fn(),
        onFocus: jest.fn(),
      },
      password: {
        name: 'password',
        onChange: jest.fn(),
        onBlur: jest.fn(),
        onFocus: jest.fn(),
      },
      meta: {
        submitError: false,
        dirtySinceLastSubmit: false,
        touched: false,
      },
      onLogin: jest.fn(),
      initialLogin: { login: 'admin', password: 'test' },
    };

    //Act
    const { rerender } = render(<LoginComponent {...props} />);

    const nameElement = screen.queryByRole('textbox');
    const passwordElement = screen.getByTestId('password');
    const buttonElement = screen.getByRole('button');

    await act(async () => {
      buttonElement.focus();
      userEvent.click(buttonElement);
    });

    //Assert
    expect(props.onLogin).toHaveBeenCalled();
  });
});
