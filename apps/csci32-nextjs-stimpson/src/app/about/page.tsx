'use client'

import Head from 'next/head'
import React, { useState } from 'react'

interface Photo {
  src: string | ArrayBuffer | null
  comment: string
}

export default function About() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [reviews, setReviews] = useState<string[]>([])
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoComment, setPhotoComment] = useState<string>('')
  const [reviewText, setReviewText] = useState<string>('')
  const handlePhotoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (photoFile) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotos([...photos, { src: reader.result, comment: photoComment }])
        setPhotoFile(null)
        setPhotoComment('')
      }
      reader.readAsDataURL(photoFile)
    }
  }
  const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (reviewText) {
      setReviews([...reviews, reviewText])
      setReviewText('')
    }
  }

  return (
    <React.Fragment>
      {/* Head Metadata */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About John Smith - Painter&apos;s Portfolio</title>
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>

      {/* Main Content */}
      <main className="container mx-auto py-12">
        {/* John Smith's Story */}
        <section className="mb-12">
          <h1 className="text-5xl font-bold mb-6">About John Smith</h1>
          <p className="text-lg">
            John Smith&apos;s passion for painting began when he helped his family paint their old home to save money.
            The experience ignited a love for transforming spaces with color, leading him to pursue a career in painting.
            Today, John brings that same dedication and attention to detail to every project, ensuring each client&apos;s
            vision comes to life.
          </p>
        </section>

        {/* Photo Upload Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Add Your Own Photos</h2>
          <form onSubmit={handlePhotoSubmit} className="mb-6">
            <div className="mb-4">
              <label className="block mb-2">Select Photo:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPhotoFile(e.target.files ? e.target.files[0] : null)}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Comment:</label>
              <textarea
                value={photoComment}
                onChange={(e) => setPhotoComment(e.target.value)}
                className="border p-2 w-full"
                rows={3}
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Upload Photo
            </button>
          </form>

          {/* Display Uploaded Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="border p-4">
                <img src={photo.src as string} alt={`Uploaded ${index}`} className="w-full h-auto mb-2" />
                <p>{photo.comment}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Reviews</h2>
          <form onSubmit={handleReviewSubmit} className="mb-6">
            <div className="mb-4">
              <label className="block mb-2">Your Review:</label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="border p-2 w-full"
                rows={3}
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Submit Review
            </button>
          </form>

          {/* Display Reviews */}
          <div>
            {reviews.map((review, index) => (
              <div key={index} className="border-b py-4">
                <p>{review}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white p-6 mt-12 text-center">
        <p>© 2024 Painter&apos;s R&apos;S. All rights reserved.</p>
      </footer>
    </React.Fragment>
  )
}
