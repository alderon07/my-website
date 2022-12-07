import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <main className="py-4">
      <div className="flex max-w-screen justify-center">
        <section className="space-y-4">
            <h6 className="text-lg md:text-2xl lg:text-3xl">Hello, my name is</h6>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold">Naqi Haider.</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl">I build things.</h2>
            <p className="text-md lg:text-lg text-justify max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum
              dolor sit amet consectetur adipiscing elit. Iaculis nunc sed augue
              lacus viverra vitae. Risus nec feugiat in fermentum posuere urna nec
              tincidunt praesent. Venenatis a condimentum vitae sapien. Egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Aenean sed adipiscing
              diam donec adipiscing tristique. Semper eget duis at tellus at urna
              condimentum mattis. Donec ac odio tempor orci dapibus ultrices in
              iaculis nunc. Id volutpat lacus laoreet non curabitur. Velit euismod
              in pellentesque massa placerat duis ultricies lacus. Eget felis eget
              nunc lobortis.
            </p>
        </section>
      </div>
    </main>
  );
}
