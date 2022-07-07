import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavLink from '../NavLink';

describe('Tests for the NavLink', () => {
  test('Should render the  NavLink', () => {
    render(<BrowserRouter><NavLink /></BrowserRouter>);
    expect(screen.getByText(/Foot Championships/i)).toBeInTheDocument();
  });
});
