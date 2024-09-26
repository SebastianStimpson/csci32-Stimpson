'use client'
import React, { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { DateSelectArg, EventInput } from '@fullcalendar/core'

// Dynamically import FullCalendar component
const FullCalendar = dynamic(() => import('@fullcalendar/react'), { ssr: false })

// Define the TimeSlot interface
interface TimeSlot {
  start: string
  end: string
}

export default function Estimate() {
  // State variables for form inputs
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null)
  const [events, setEvents] = useState<EventInput[]>([
    { title: 'Job 1', start: '2024-09-10' },
    { title: 'Job 2', start: '2024-09-15' },
  ])

  // State for form submission feedback
  const [submissionMessage, setSubmissionMessage] = useState<string>('')
  const [formErrors, setFormErrors] = useState<string>('')

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

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Basic validation
    if (!name || !email || !description || !selectedTimeSlot) {
      setFormErrors('Please fill out all fields and select a time slot.')
      return
    }

    // Clear any previous errors
    setFormErrors('')

    // Add the new event to the calendar
    const newEvent: EventInput = {
      title: `Appointment with ${name}`,
      start: selectedTimeSlot.start,
      end: selectedTimeSlot.end,
    }
    setEvents([...events, newEvent])

    // Display success message
    setSubmissionMessage('Your appointment has been scheduled.')

    // Reset the form fields and selected time slot
    setName('')
    setEmail('')
    setDescription('')
    setSelectedTimeSlot(null)
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
            // Prevent selection overlap with existing events
            selectOverlap={false}
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

        {/* Display Form Submission Feedback */}
        {submissionMessage && <div className="mb-8 p-4 bg-green-100 text-green-700 rounded">{submissionMessage}</div>}

        {/* Display Form Errors */}
        {formErrors && <div className="mb-8 p-4 bg-red-100 text-red-700 rounded">{formErrors}</div>}

        <section>
          <h2 className="text-4xl font-semibold mb-4">Request an Estimate</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 p-2 rounded w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 p-2 rounded w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-lg">
                Project Description
              </label>
              <textarea
                id="description"
                className="border border-gray-300 p-2 rounded w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />
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
        <p>© 2024 Painter&apos;s R&apos;S. All rights reserved.</p>
      </footer>
    </React.Fragment>
  )
}
