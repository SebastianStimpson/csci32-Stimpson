import Head from 'next/head'
import React from 'react' // Importing React to use React.Fragment
import Image from 'next/image' // Importing Image component from Next.js

export default function Portfolio() {
  return (
    <React.Fragment>
      {/* Head Metadata */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Painter&apos;s Portfolio</title>
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>

      {/* Main Content */}
      <main className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-semibold mb-4">Transforming Spaces with Color</h2>
            <p className="text-lg">
              Welcome to the portfolio of a passionate painter. Check out my latest works and get in touch for an
              estimate on your next project.
            </p>
            <a href="/estimate.html" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded">
              Get an Estimate
            </a>
          </div>
          <div>
            <Image
              src="https://rdcnewscdn.realtor.com/wp-content/uploads/2015/08/house-painter.jpg"
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
        <p>© 2024 Painter&apos;s R&apos;S. All rights reserved.</p>
      </footer>
    </React.Fragment>
  )
}
