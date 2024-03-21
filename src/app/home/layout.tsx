import React from 'react';
import NavBar from '../../components/navigation/navigation';
import Footer from '../../components/footer/footer';

export default function Layout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <NavBar />
   
        {children}

        <Footer />
      </section>
    )
  }