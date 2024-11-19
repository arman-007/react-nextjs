import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import DetailNavBar from '../components/detailNavBar';

describe('DetailNavBar', () => {
    test('renders Overview tab', () => {
        render(<DetailNavBar />);
        const overviewTab = screen.getByText('Overview');
        expect(overviewTab).toBeInTheDocument();
        expect(overviewTab).toHaveClass('active-tab');
    });

    test('renders Amenities tab', () => {
        render(<DetailNavBar />);
        const amenitiesTab = screen.getByText('Amenities');
        expect(amenitiesTab).toBeInTheDocument();
    });

    test('renders Policies tab', () => {
        render(<DetailNavBar />);
        const policiesTab = screen.getByText('Policies');
        expect(policiesTab).toBeInTheDocument();
    });

    test('all tabs have no-link and padding classes', () => {
        render(<DetailNavBar />);
        const tabs = screen.getAllByRole('link');
        tabs.forEach(tab => {
            expect(tab).toHaveClass('no-link');
            expect(tab).toHaveClass('padding');
        });
    });
});
