// app/hotel/[id]/layout.tsx

import Header from '@/components/header';

export default function HotelLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div>
        <Header />
        <main>
            {children}
  </main>
      </div>
    );
  }
  