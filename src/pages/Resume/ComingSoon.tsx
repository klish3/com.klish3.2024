import React from "react";
import { Summary } from "./Summary";
import { List } from "flowbite-react";

export const ComingSoon: React.FC = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-y-screen-xl mx-auto px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Tawanda Kanyangarara <br />
              <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
                Technical Lead
              </span>
              <br />
              <span className="text-blue-600 dark:text-blue-500">
                Front End
              </span>
            </h1>
            <Summary />
          </div>
        </div>
      </section>
      <List horizontal>
        <List.Item>
          <a href="https://github.com/Klish3">github</a>
        </List.Item>
        <List.Item>
          <a href="https://www.linkedin.com/in/tawandakli/">linkedin</a>
        </List.Item>
      </List>
    </>
  );
};
