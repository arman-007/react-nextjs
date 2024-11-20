import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import GalleryModal from '../components/GalleryModal'; // Adjust the import path as needed

describe('GalleryModal Component', () => {
  test('renders the modal with all elements', () => {
    render(<GalleryModal />);

    // Check if the modal container is rendered
    const modalContainer = screen.getByRole('img');
    expect(modalContainer).toBeInTheDocument();

    // Check for the close button
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();

    // Check if the default image is rendered
    const modalImage = screen.getByAltText('Gallery Image');
    expect(modalImage).toBeInTheDocument();
    expect(modalImage).toHaveAttribute('src', 'https://placehold.co/600x400');

    // Check for navigation buttons
    const prevButton = screen.getByRole('button', { name: /previous/i });
    expect(prevButton).toBeInTheDocument();
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeInTheDocument();

    // Check for caption text
    const caption = screen.getByText(/Juneau Vacation Rental/i);
    expect(caption).toBeInTheDocument();

    // Check for image count
    const imageCount = screen.getByText('1 / 5');
    expect(imageCount).toBeInTheDocument();
  });

  test('renders the correct caption and count text', () => {
    render(<GalleryModal />);

    const caption = screen.getByText(
      /Juneau Vacation Rental \| 2BR \| 1BA \| 1,115 Sq Ft \| Stairs Required/i
    );
    expect(caption).toBeInTheDocument();

    const imageCount = screen.getByText('1 / 5');
    expect(imageCount).toBeInTheDocument();
  });

  test('renders close button with the correct icon', () => {
    render(<GalleryModal />);

    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();
    expect(closeButton.querySelector('i')).toHaveClass('fa-solid fa-xmark');
  });

  test('renders navigation buttons with the correct icons', () => {
    render(<GalleryModal />);

    const prevButton = screen.getByRole('button', { name: /previous/i });
    expect(prevButton).toHaveClass('prev');
    expect(prevButton.querySelector('i')).toHaveClass(
      'fa-solid fa-circle-chevron-left'
    );

    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toHaveClass('next');
    expect(nextButton.querySelector('i')).toHaveClass(
      'fa-solid fa-circle-chevron-right'
    );
  });
});
