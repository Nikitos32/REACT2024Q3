import { MainLayout } from './components/MainLayout';
import './index.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Nikitos32</title>
      </head>
      <body>
        <div id="root" className="h-full flex flex-col">
          <MainLayout />
          {children}
        </div>
      </body>
    </html>
  );
}
