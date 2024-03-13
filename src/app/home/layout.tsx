import React from 'react';
import NavBar from '../navigation/navigation';
import Footer from '../footer/footer';

export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <NavBar />
   
        {children}

        <Footer />
      </section>
    )
  }