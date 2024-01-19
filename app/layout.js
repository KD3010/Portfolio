import Navbar from './components/Navbar';
import './global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="eng">
      <head>
        <title>Kushagra Devda | Portfolio</title>
      </head>
      <body>
        <main className="min-h-[100vh] bg-slate-300/20">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
