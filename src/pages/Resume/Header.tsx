"use client";

export const Header = () => {
  return (
    <>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Tawanda Kanyangarara
        <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
          Technical Lead
        </span>
        Web
        <span className="text-blue-600 dark:text-blue-500">Front End</span>
      </h1>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="mb-3">
          <p>
            Guildford, Surrey, UK <br /> klish3@gmail.com
          </p>
        </div>
        <div className="mb-3 text-right">
          <p>
            <a href="https://www.linkedin.com/in/tawandakli">
              linkedin.com/tawandakli
            </a>
          </p>
          <p>
            <a href="https://www.github.com/klish3">github.com/klish3</a>
          </p>
        </div>
      </div>
    </>
  );
};
