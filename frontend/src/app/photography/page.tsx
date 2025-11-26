"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface Photo {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

export default function PhotographyPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // TODO: Replace these with your actual photos
  const photos: Photo[] = [
    {
      id: 1,
      src: "/photography/photo1.jpg",
      alt: "Photography sample 1",
      title: "Sample Photo 1",
    },
    {
      id: 2,
      src: "/photography/photo2.jpg",
      alt: "Photography sample 2",
      title: "Sample Photo 2",
    },
    {
      id: 3,
      src: "/photography/photo3.jpg",
      alt: "Photography sample 3",
      title: "Sample Photo 3",
    },
    {
      id: 4,
      src: "/photography/photo4.jpg",
      alt: "Photography sample 4",
      title: "Sample Photo 4",
    },
    {
      id: 5,
      src: "/photography/photo5.jpg",
      alt: "Photography sample 5",
      title: "Sample Photo 5",
    },
    {
      id: 6,
      src: "/photography/photo6.jpg",
      alt: "Photography sample 6",
      title: "Sample Photo 6",
    },
    {
      id: 7,
      src: "/photography/photo7.jpg",
      alt: "Photography sample 7",
      title: "Sample Photo 7",
    },
    {
      id: 8,
      src: "/photography/photo8.jpg",
      alt: "Photography sample 8",
      title: "Sample Photo 8",
    },
    {
      id: 9,
      src: "/photography/photo9.jpg",
      alt: "Photography sample 9",
      title: "Sample Photo 9",
    },
  ];

  return (
    <div className="min-h-screen py-8 px-4 md:px-8">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-emerald-700 dark:text-rose-400 hover:text-emerald-900 dark:hover:text-rose-300 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span className="text-lg">Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 pb-6 bg-gradient-to-r from-emerald-700 via-teal-600 to-amber-700 dark:from-rose-400 dark:via-pink-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Photography
        </h1>
        <p className="text-lg text-stone-700 dark:text-slate-400 max-w-2xl mx-auto">
          A collection of moments captured through my lens.
        </p>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-slate-200 dark:bg-slate-800 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {photo.title && (
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium text-lg">{photo.title}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-5xl hover:text-gray-300 transition-colors z-10 w-12 h-12 flex items-center justify-center"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              fill
              className="object-contain"
              sizes="90vw"
              quality={100}
            />
          </div>
          {selectedPhoto.title && (
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-white text-xl font-medium">
                {selectedPhoto.title}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

