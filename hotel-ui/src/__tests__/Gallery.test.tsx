import React from 'react';
import { render, screen } from '@testing-library/react';
import Gallery from '../components/Gallery'; // Adjust the import path based on your structure
import '@testing-library/jest-dom';

describe('Gallery Component', () => {
  const mockImages = [
    '/uploads/images/image1.jpg',
    '/uploads/images/image2.jpg',
    '/uploads/images/image3.jpg',
    '/uploads/images/image4.jpg',
    '/uploads/images/image5.jpg',
  ];

  test('renders "No images available" when no images are provided', () => {
    render(<Gallery images={[]} />);
    expect(screen.getByText('No images available')).toBeInTheDocument();
  });

  test('renders overlay actions with correct buttons', () => {
    render(<Gallery images={mockImages} />);

    // Check "See all properties" link
    const seeAllLink = screen.getByText(/See all properties/i);
    expect(seeAllLink).toBeInTheDocument();
    expect(seeAllLink).toHaveAttribute('href', '/');

    // Check the "Share" button
    const shareButton = screen.getByRole('button', { name: /share/i });
    expect(shareButton).toBeInTheDocument();

    // Check the "Save" button
    const saveButton = screen.getByRole('button', { name: /save/i });
    expect(saveButton).toBeInTheDocument();
  });
});
