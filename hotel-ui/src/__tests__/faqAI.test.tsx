import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FaqAI from '../components/FaqAI';

describe('FaqAI Component', () => {
  test('renders the main question heading', () => {
    render(<FaqAI />);
    const heading = screen.getByText('Have a question?');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('text-1');
  });

  test('renders the Beta badge', () => {
    render(<FaqAI />);
    const betaBadge = screen.getByText('Beta');
    expect(betaBadge).toBeInTheDocument();
    expect(betaBadge).toHaveClass('bold');
  });

  test('renders the AI description text', () => {
    render(<FaqAI />);
    const description = screen.getByText(
      'Get instant answers with Al powered search of property information and reviews.'
    );
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-3');
  });

  test('renders the search input with placeholder', () => {
    render(<FaqAI />);
    const input = screen.getByPlaceholderText('Ask a question');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('search-input');
    expect(input).toHaveAttribute('type', 'text');
  });

  test('renders the search button with icon', () => {
    render(<FaqAI />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('search-btn');
    expect(button.querySelector('i')).toHaveClass('fa-solid fa-magnifying-glass');
  });
});
