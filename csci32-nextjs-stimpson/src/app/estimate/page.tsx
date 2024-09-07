import Head from 'next/head'
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import FullCalendar components
const FullCalendar = dynamic(() => import('@fullcalendar/react'), { ssr: false })
const { Calendar } = require('@fullcalendar/core')
const dayGridPlugin = require('@fullcalendar/daygrid')

export default function Estimate() {
  useEffect(() => {
    // Initialize FullCalendar when the component mounts
    const calendarEl = document.getElementById('calendar')
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      events: [
        // Example events
        { title: 'Job 1', date: '2024-09-10' },
        { title: 'Job 2', date: '2024-09-15' },
      ],
    })
    calendar.render()
  }, [])

  return (
    <React.Fragment>
      {/* Head Metadata */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Estimate - Painter</title>
        <link href="/dist/output.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fullcalendar/core@5.10.2/main.min.css" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold">Get an Estimate</h1>
        </div>
      </header>

      {/* Main Content */}
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

      {/* Footer */}
      <footer className="bg-white p-6 mt-12 text-center">
        <p>© 2024 Painter's Name. All rights reserved.</p>
      </footer>
    </React.Fragment>
  )
}
