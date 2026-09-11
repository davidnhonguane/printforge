import "./globals.css";
import NavBar from "./Components/NavBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col pt-20">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
