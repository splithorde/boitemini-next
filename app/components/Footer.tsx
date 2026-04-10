'use client';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="p-4 text-center text-sm text-gray-500">
      © {year || ''} BoiteMini. Tous droits réservés.
    </footer>
  );
}