import React from 'react';
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gradient-to-br from-yellow-900 to-amber-300 dark:bg-gradient-to-br dark:from-blue-900 dark:to-indigo-200 w-fit h-fit rounded-xl">
    <Image
      className="rounded-xl mix-blend-overlay hover:mix-blend-normal"
      src="/me.jpg"
      width={300}
      height={300}
      alt="Image of Naqi"
    ></Image>
  </div>
  )
}
