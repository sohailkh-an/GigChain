import React from 'react';
import NavBar from '../../components/navigation/navigation';
import Footer from '../../components/footer/footer';

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