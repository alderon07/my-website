import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex justify-center items-center md:min-h-screen">

      <section className="flex flex-col grow md:py-16 md:mx-40 gap-8">
        <h2 className="text-5xl self-center md:text-6xl lg:text-7xl">About</h2>

        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="bg-gradient-to-br from-yellow-900 to-amber-300 dark:bg-gradient-to-br dark:from-blue-900 dark:to-indigo-200 rounded-3xl md:rounded-full max-w-lg max-h-lg">
            <img
              className="rounded-3xl md:rounded-full mix-blend-overlay hover:mix-blend-normal object-cover aspect-ratio"
              src="/me.jpg"
              alt="Image of Naqi"
            />
          </div>

          <div>
            <p className="text-justify md:text-lg max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum
              dolor sit amet consectetur adipiscing elit. Iaculis nunc sed augue
              lacus viverra vitae. Risus nec feugiat in fermentum posuere urna
              nec tincidunt praesent. Venenatis a condimentum vitae sapien.
              Egestas erat imperdiet sed euismod nisi porta lorem mollis.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
