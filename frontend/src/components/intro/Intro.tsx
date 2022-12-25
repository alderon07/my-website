import React from "react";

export default function Intro() {
  return (
    <div className="flex justify-center items-center md:min-h-screen">

      <section className="flex flex-col grow md:py-16 md:mx-40 justify-center items-start">
        <div className="flex flex-col self-center gap-8">
          <div className="flex flex-col gap-4">
            <h6 className="text-lg md:text-2xl xl:text-3xl">Hello, my name is</h6>
            <h1 className={`transition ease-in-out delay-100 duration-200 hover:scale-105 text-5xl md:text-6xl xl:text-8xl font-semibold`}>
              Naqi Haider.
            </h1>
            <h2 className="text-4xl md:text-5xl xl:text-6xl">I build things.</h2>
          </div>
          <div>
            <p className="lg:text-lg text-justify max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum
              dolor sit amet consectetur adipiscing elit. Iaculis nunc sed augue
              lacus viverra vitae. Risus nec feugiat in fermentum posuere urna nec
              tincidunt praesent. Venenatis a condimentum vitae sapien. Egestas erat
              imperdiet sed euismod nisi porta lorem mollis.W
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}