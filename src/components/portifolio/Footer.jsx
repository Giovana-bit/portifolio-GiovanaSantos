import { useState, useEffect } from 'react';
import moment from 'moment';
import VisitorCounter from './VisitorCounter';

export default function Footer() {
  const [time, setTime] = useState(moment().format('HH:mm:ss'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format('HH:mm:ss'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-6 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} // Todos os direitos reservados
        </p>

        {/* Contador de visitantes*/}
        <VisitorCounter />

        <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
          <span>{moment().format('DD.MM.YYYY')}</span>
          <span className="text-primary">{time}</span>
        </div>
      </div>
    </footer>
  );
}