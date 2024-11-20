import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegionModal from '../components/RegionModal';

describe('RegionModal Component', () => {
  const mockOnClose = jest.fn();
  const mockOnRegionUpdate = jest.fn();

  const renderComponent = (isOpen: boolean = true) => {
    render(
      <RegionModal
        isOpen={isOpen}
        onClose={mockOnClose}
        onRegionUpdate={mockOnRegionUpdate}
      />
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('does not render when isOpen is false', () => {
    renderComponent(false);
    expect(screen.queryByText('Display Settings')).not.toBeInTheDocument();
  });

  test('renders modal with default elements when isOpen is true', () => {
    renderComponent();
    expect(screen.getByText('Display Settings')).toBeInTheDocument();
    expect(screen.getByLabelText('Region')).toBeInTheDocument();
    expect(screen.getByLabelText('Currency')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
  });

  test('updates currency when a region is selected', () => {
    renderComponent();
    const regionSelect = screen.getByLabelText('Region') as HTMLSelectElement;

    fireEvent.change(regionSelect, { target: { value: 'UK' } });
    expect(regionSelect.value).toBe('UK');
    const currencyInput = screen.getByLabelText('Currency');
    expect(currencyInput).toHaveValue('GBP');
  });

  test('saves region and currency to local storage and calls callbacks on Save', () => {
    renderComponent();
    const regionSelect = screen.getByLabelText('Region') as HTMLSelectElement;
    const saveButton = screen.getByRole('button', { name: 'Save' });

    fireEvent.change(regionSelect, { target: { value: 'PT' } });
    fireEvent.click(saveButton);

    expect(localStorage.getItem('region')).toBe('PT');
    expect(localStorage.getItem('currency')).toBe('EUR');
    expect(mockOnRegionUpdate).toHaveBeenCalledWith('PT');
    expect(mockOnClose).toHaveBeenCalled();
  });

//   test('closes modal when clicking outside the modal content', () => {
//     renderComponent();
//     fireEvent.mouseDown(document.body); // Simulate a click outside the modal
//     expect(mockOnClose).toHaveBeenCalled();
//   });

  test('does not close modal when clicking inside the modal content', () => {
    renderComponent();
    const modalContent = screen.getByText('Display Settings');
    fireEvent.mouseDown(modalContent); // Simulate a click inside the modal
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  test('closes modal when clicking the close button', () => {
    renderComponent();
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });




});
