import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import TravelerModal from '../components/TravelerModal';

describe('TravelerModal', () => {
    test('renders correctly when isOpen is true', () => {
        render(<TravelerModal isOpen={true} />);
        expect(screen.getByText('Adults')).toBeInTheDocument();
        expect(screen.getByText('Children')).toBeInTheDocument();
        expect(screen.getByText('Save')).toBeInTheDocument();
    });

    test('does not render when isOpen is false', () => {
        render(<TravelerModal isOpen={false} />);
        expect(screen.queryByText('Adults')).not.toBeInTheDocument();
        expect(screen.queryByText('Children')).not.toBeInTheDocument();
        expect(screen.queryByText('Save')).not.toBeInTheDocument();
    });

    // test('increments and decrements adult count', () => {
    //     render(<TravelerModal isOpen={true} />);
    //     const incrementButton = screen.getByRole('button', { name: /incrementAdults/i });
    //     const decrementButton = screen.getByRole('button', { name: /decrementAdults/i });
    //     const adultCount = screen.getByText('2');

    //     fireEvent.click(incrementButton);
    //     expect(adultCount).toHaveTextContent('3');

    //     fireEvent.click(decrementButton);
    //     expect(adultCount).toHaveTextContent('2');
    // });

    // test('increments child count', () => {
    //     render(<TravelerModal isOpen={true} />);
    //     const incrementButton = screen.getByRole('button', { name: /incrementChildren/i });
    //     const childCount = screen.getByText('0');

    //     fireEvent.click(incrementButton);
    //     expect(childCount).toHaveTextContent('1');
    // });

    test('save button is present', () => {
        render(<TravelerModal isOpen={true} />);
        const saveButton = screen.getByRole('button', { name: /save/i });
        expect(saveButton).toBeInTheDocument();
    });
});