// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import HouseRules from '../components/houseRules';

// describe('HouseRules Component', () => {
//   const mockRules = [
//     'Check in after 3:00 PM',
//     'Check out before 11:00 AM',
//     'Minimum age to rent: 25',
//   ];

//   it('renders the component without crashing', () => {
//     render(<HouseRules rules={mockRules} />);
//     expect(screen.getByText(/House Rules/i)).toBeInTheDocument();
//   });

//   it('displays check-in and check-out times correctly', () => {
//     render(<HouseRules rules={mockRules} />);
//     expect(screen.getByText(/Check in after 3:00 PM/i)).toBeInTheDocument();
//     expect(screen.getByText(/Check out before 11:00 AM/i)).toBeInTheDocument();
//   });

//   it('renders custom rules passed as props', () => {
//     render(<HouseRules rules={mockRules} />);
//     mockRules.forEach((rule) => {
//       expect(screen.getByText(rule)).toBeInTheDocument();
//     });
//   });

//   it('displays house rules categories (e.g., Children, Pets, Smoking)', () => {
//     render(<HouseRules rules={mockRules} />);
//     expect(screen.getByText(/Children/i)).toBeInTheDocument();
//     expect(screen.getByText(/Pets/i)).toBeInTheDocument();
//     expect(screen.getByText(/Smoking/i)).toBeInTheDocument();
//   });

//   it('renders the "Damage and Incidents" section', () => {
//     render(<HouseRules rules={mockRules} />);
//     expect(screen.getByText(/Damage and Incidents/i)).toBeInTheDocument();
//     expect(
//       screen.getByText(/You will be responsible for any damage/i)
//     ).toBeInTheDocument();
//   });

//   it('renders the cancellation policy section', () => {
//     render(<HouseRules rules={mockRules} />);
//     expect(screen.getByText(/Cancellation/i)).toBeInTheDocument();
//     expect(screen.getByText(/Full refund/i)).toBeInTheDocument();
//     expect(screen.getByText(/No refund/i)).toBeInTheDocument();
//   });

//   it('renders the "Important Information" section', () => {
//     render(<HouseRules rules={mockRules} />);
//     expect(screen.getByText(/Important Information/i)).toBeInTheDocument();
//     expect(screen.getByText(/Extra-person charges may apply/i)).toBeInTheDocument();
//   });

//   it('renders the "Frequently asked questions" section', () => {
//     render(<HouseRules rules={mockRules} />);
//     expect(screen.getByText(/Frequently asked questions/i)).toBeInTheDocument();
//   });

//   it('renders the "About the host" section', () => {
//     render(<HouseRules rules={mockRules} />);
//     expect(screen.getByText(/About the host/i)).toBeInTheDocument();
//     expect(screen.getByText(/Hosted by Evolve/i)).toBeInTheDocument();
//   });

//   it('renders the "Send a message" section with a contact button', () => {
//     render(<HouseRules rules={mockRules} />);
//     expect(screen.getByText(/Send a message/i)).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /Contact Host/i })).toBeInTheDocument();
//   });
// });
