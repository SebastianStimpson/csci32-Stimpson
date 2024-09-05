;<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Estimate - Painter</title>
  <link href="/dist/output.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fullcalendar@5.10.2/main.min.css" />
  <header className="bg-white shadow">
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Get an Estimate</h1>
    </div>
  </header>
  <main className="container mx-auto py-12">
    <section className="mb-8">
      <h2 className="text-4xl font-semibold mb-4">Upcoming Jobs Schedule</h2>
      <div id="calendar" />
    </section>
    <section>
      <h2 className="text-4xl font-semibold mb-4">Request an Estimate</h2>
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
          <label htmlFor="description" className="block text-lg">
            Project Description
          </label>
          <textarea id="description" className="border border-gray-300 p-2 rounded w-full" defaultValue={''} />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </section>
  </main>
  <footer className="bg-white p-6 mt-12 text-center">
    <p>© 2024 Painter's Name. All rights reserved.</p>
  </footer>
</>