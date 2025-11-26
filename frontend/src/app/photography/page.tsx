"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";

interface Photo {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

export default function PhotographyPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    {
      id: 2,
      src: "/photography/DSCF0516.jpg",
      alt: "Photography by Naqi Haider",
      title: "DSCF0516",
    },
    {
      id: 1,
      src: "/photography/DSCF3789.jpg",
      alt: "Photography by Naqi Haider",
      title: "DSCF3789",
    },
    {
      id: 3,
      src: "/photography/DSCF1596.jpg",
      alt: "Photography by Naqi Haider",
      title: "DSCF1596",
    },
    {
      id: 4,
      src: "/photography/DSCF0161.jpg",
      alt: "Photography by Naqi Haider",
      title: "DSCF0161",
    },
    {
      id: 6,
      src: "/photography/DSCF4719.jpg",
      alt: "Photography by Naqi Haider",
      title: "DSCF4719",
    },
    {
      id: 5,
      src: "/photography/DSCF3969.jpg",
      alt: "Photography by Naqi Haider",
      title: "DSCF3969",
    },

    {
      id: 7,
      src: "/photography/DSCF4764.jpg",
      alt: "Photography by Naqi Haider",
      title: "DSCF4764",
    },
    {
      id: 8,
      src: "/photography/DSCF4803.jpg",
      alt: "Photography by Naqi Haider",
      title: "DSCF4803",
    },
    {
      id: 9,
      src: "/photography/DSCF5028.jpg",
      alt: "Photography by Naqi Haider",
      title: "DSCF5028",
    },
    {
      id: 11,
      src: "/photography/DSCF0537.jpg",
      alt: "Photography by Naqi Haider",
      title: "DSCF0537",
    },
    {
      id: 10,
      src: "/photography/IMG_0041.jpg",
      alt: "Photography by Naqi Haider",
      title: "Sasha",
    },
    {
      id: 12,
      src: "/photography/DSCF4807.jpg",
      alt: "Photography by Naqi Haider",
      title: "DSCF4807",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-8 px-4 md:px-8">
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
    </>
  );
}

