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

  test('renders the desktop gallery layout with correct number of images', () => {
    render(<Gallery images={mockImages} />);
    
    // Check the first large image
    const largeImage = screen.getByAltText('Gallery Image 1');
    expect(largeImage).toBeInTheDocument();
    expect(largeImage).toHaveAttribute('src', expect.stringContaining(mockImages[0]));

    // Check the small images
    mockImages.slice(1, 5).forEach((image, index) => {
      const smallImage = screen.getByAltText(`Gallery Image ${index + 2}`);
      expect(smallImage).toBeInTheDocument();
      expect(smallImage).toHaveAttribute('src', expect.stringContaining(image));
    });

    // Check the "View All" button
    expect(screen.getByText('30+')).toBeInTheDocument();
  });

  test('renders the mobile carousel with correct number of images', () => {
    render(<Gallery images={mockImages} />);
    
    // Check that all images are rendered in the carousel
    mockImages.forEach((image, index) => {
      const carouselImage = screen.getByAltText(`Gallery Image ${index + 1}`);
      expect(carouselImage).toBeInTheDocument();
      expect(carouselImage).toHaveAttribute('src', expect.stringContaining(image));
    });

    // Check the dots for carousel navigation
    const dots = screen.getAllByRole('dot'); // Replace with appropriate selector if needed
    expect(dots).toHaveLength(mockImages.length);
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
