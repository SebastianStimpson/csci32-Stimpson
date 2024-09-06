import Image from 'next/image';
import Head from 'next/head';
import React from 'react'; // Importing React to use React.Fragment

export default function Home() {
  return (
    <React.Fragment>
      {/* Head Metadata */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Painter's Portfolio</title>
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>

      {/* Header */}
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
                <a href="/about.tsx" className="text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="/contact.tsx" className="text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-semibold mb-4">Transforming Spaces with Color</h2>
            <p className="text-lg">
              Welcome to the portfolio of a passionate painter. Check out my latest works and get in touch for an estimate
              on your next project.
            </p>
            <a href="/estimate.tsx" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded">
              Get an Estimate
            </a>
          </div>
          <div>
            <Image
              src="/your-image-path-here.jpg"
              alt="Painter's Work"
              width={500}
              height={500}
              className="rounded shadow-md"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white p-6 mt-12 text-center">
        <p>© 2024 Painter's Name. All rights reserved.</p>
      </footer>
    </React.Fragment>
  );
}
