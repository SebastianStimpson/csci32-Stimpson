import Image from 'next/image';
import React from 'react'; // Importing React to use React.Fragment

export default function Home() {
  return (
    <React.Fragment>
      {/* Meta tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Painter's Portfolio</title>
      <link href="/dist/output.css" rel="stylesheet" />

      {/* Main Content */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-semibold mb-4">
              Transforming Spaces with Color
            </h2>
            <p className="text-lg">
              Welcome to the portfolio of a passionate painter. Check out my latest
              works and get in touch for an estimate on your next project.
            </p>
            <a
              href="/estimate.html"
              className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded"
            >
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
      </div>
    </React.Fragment>
  );
}
