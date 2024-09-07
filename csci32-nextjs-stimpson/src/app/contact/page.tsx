import Head from 'next/head';
import React from 'react'; // Importing React to use React.Fragment

export default function Contact() {
  return (
    <React.Fragment>
      {/* Head Metadata */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact - Painter</title>
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold">Contact Me</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12">
        <section>
          <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg">
                Name
              </label>
              <input type="text" id="name" className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg">
                Email
              </label>
              <input type="email" id="email" className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg">
                Message
              </label>
              <textarea id="message" className="border border-gray-300 p-2 rounded w-full" defaultValue={''} />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white p-6 mt-12 text-center">
        <p>© 2024 Painter's R'S. All rights reserved.</p>
      </footer>
    </React.Fragment>
  );
}
