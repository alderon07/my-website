import React from "react";

export default function Intro() {
  return (
    <div className="flex items-center justify-center md:min-h-screen">
      <section className="flex grow flex-col items-start justify-center lg:mx-40 lg:pb-16">
        <div className="flex flex-col gap-4 self-center">
          <div className="flex flex-col gap-2">
            <h6 className="text-lg lg:text-xl xl:text-2xl">
              Hello, my name is
            </h6>
            <h1
              className={`text-5xl font-semibold transition delay-100 duration-200 ease-in-out hover:scale-105 lg:text-6xl xl:text-7xl`}
            >
              Naqi Haider.
            </h1>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl">
              I build things.
            </h2>
          </div>
          <div>
            <p className="max-w-lg text-justify lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum
              dolor sit amet consectetur adipiscing elit. Iaculis nunc sed augue
              lacus viverra vitae. Risus nec feugiat in fermentum posuere urna
              nec tincidunt praesent. Venenatis a condimentum vitae sapien.
              Egestas erat imperdiet sed euismod nisi porta lorem mollis.W
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
