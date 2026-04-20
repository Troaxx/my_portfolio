import React from 'react';
import { Navbar } from './Navbar';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="v2-layout">
      <Navbar />
      <main>{children}</main>
      <footer className="v2-footer">
        <div>Daniella Han</div>
        <div>Software Engineer & IT Student</div>
        <div>© {new Date().getFullYear()} Daniella. All rights reserved.</div>
      </footer>
    </div>
  );
};
