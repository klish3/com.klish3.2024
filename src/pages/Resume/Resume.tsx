import { Card } from "flowbite-react";
import React from "react";
import { Certifications } from "./Certifications";
import { Competencies } from "./Competencies";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Header } from "./Header";
import { Summary } from "./Summary";

export const Resume: React.FC = () => {
  return (
    <div className="container mx-auto p-10 text-gray-500 dark:text-gray-400">
      <Card>

    <Header/>
        <hr />

        <Summary/>

        <Competencies/>
        <Experience/>

        <hr />
        <Education/>
     <hr />
        <Certifications/>
      </Card>
    </div>
  );
};
