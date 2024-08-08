"use client";




export const Header = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Tawanda Kanyangarara</h1>
<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">

  <div className="mb-3">

    <p className="mt-3">Guildford, Surrey, UK</p>
    <p>klish3@gmail.com</p>
  </div>
  <div className="mb-3 text-right">
    <p>
      {" "}
      <a href="https://www.linkedin.com/in/tawandaklicom">
        linkedin.com/tawandakli
      </a>
    </p>
    <p>
      {" "}
      <a href="https://www.github.com/klish3">github.com/klish3</a>
    </p>
  </div>
</div>
    </>
  );
};
