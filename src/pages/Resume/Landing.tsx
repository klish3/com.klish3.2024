import React from "react";

import { Competencies, Header, Resume, Summary } from "../../pages/Resume";

export const Landing: React.FC = () => {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center gap-8 px-8 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
        <div className="container mx-auto p-5">
          <Header />
          <Summary />

          <Competencies />

          <Resume />
        </div>
      </main>
    </>
  );
};
