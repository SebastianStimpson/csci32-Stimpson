<>
  import type {"{"} Metadata {"}"} from "next"; import {"{"} Inter {"}"} from
  "next/font/google"; import "./globals.css"; const inter = Inter({"{"} subsets:
  ["latin"] {"}"}); export const metadata: Metadata = {"{"}
  title: "Painter's Portfolio", description: "A portfolio showcasing painting
  works and services",
  {"}"}; export default function RootLayout({"{"}
  children,
  {"}"}: Readonly&lt;{"{"}
  children: React.ReactNode;
  {"}"}&gt;) {"{"}
  return (
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>
    {"{"}metadata.title{"}"}
  </title>
  <link href="/dist/output.css" rel="stylesheet" />
  <header className="bg-white shadow">
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Painter's Name</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="/about.html" className="text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="/contact.html" className="text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main className="container mx-auto py-12">
    {"{"}children{"}"}
  </main>
  <footer className="bg-white p-6 mt-12 text-center">
    <p>© 2024 Painter's Name. All rights reserved.</p>
  </footer>
  );
  {"}"}
</>
