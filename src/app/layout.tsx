export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/src/index.css" />
        <title>Nikitos32</title>
      </head>
      <body>
        <div
          id="root"
          className="height: 100%; display: flex; flex-direction: column"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
