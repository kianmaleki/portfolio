import { Container, Navbar } from "@/components";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar />
        <Container className="my-6">{children}</Container>
      </body>
    </html>
  );
}
