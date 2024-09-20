'use client'
import React, { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { DateSelectArg } from '@fullcalendar/core'

// Dynamically import FullCalendar component
const FullCalendar = dynamic(() => import('@fullcalendar/react'), { ssr: false })

// Define the TimeSlot interface
interface TimeSlot {
  start: string
  end: string
}

export default function Estimate() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null)

  const events = [
    { title: 'Job 1', date: '2024-09-10' },
    { title: 'Job 2', date: '2024-09-15' },
  ]

  // Handle time slot selection
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const calendarApi = selectInfo.view.calendar
    calendarApi.unselect() // Clear the selection

    // Capture the selected time slot
    setSelectedTimeSlot({
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    })
  }

  return (
    <React.Fragment>
      {/* Head Metadata */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Estimate - Painter</title>
        <link href="/dist/output.css" rel="stylesheet" />
        {/* Include FullCalendar CSS */}
        <link href="https://cdn.jsdelivr.net/npm/@fullcalendar/core@6.1.8/main.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@6.1.8/main.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/@fullcalendar/timegrid@6.1.8/main.min.css" rel="stylesheet" />
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
          <h2 className="text-4xl font-semibold mb-4">Select a Date and Time</h2>
          {/* Render FullCalendar Component */}
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            selectable={true}
            selectMirror={true}
            events={events}
            select={handleDateSelect}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            // Optional: Set the initial date to today's date
            initialDate={new Date().toISOString().slice(0, 10)}
          />
        </section>

        {/* Display Selected Time Slot */}
        {selectedTimeSlot && (
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">Selected Time Slot</h3>
            <p>
              From: {new Date(selectedTimeSlot.start).toLocaleString()}
              <br />
              To: {new Date(selectedTimeSlot.end).toLocaleString()}
            </p>
          </section>
        )}

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
              <textarea id="description" className="border border-gray-300 p-2 rounded w-full" defaultValue="" />
            </div>
            {/* Include selected time slot in the form submission */}
            {selectedTimeSlot && (
              <div>
                <label className="block text-lg">Selected Time Slot</label>
                <p>
                  From: {new Date(selectedTimeSlot.start).toLocaleString()}
                  <br />
                  To: {new Date(selectedTimeSlot.end).toLocaleString()}
                </p>
              </div>
            )}
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
  )
}
