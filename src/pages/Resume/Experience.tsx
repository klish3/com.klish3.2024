"use client";

export const Experience = () => {
  return (
    <>
      <div className="mb-6">
        <h2 className="mb-2 text-xl font-bold">
          Professional
          <mark className="rounded bg-blue-600 px-2 text-white dark:bg-blue-500">
            Experience
          </mark>
        </h2>

        <h4 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-2xl lg:text-3xl">
          <span className="underline-offset-5 decoration-3 underline decoration-blue-400 dark:decoration-blue-600">
            Esure Group
          </span>
        </h4>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Technical Lead</h3>
          <p> Reigate, UK | July 2022 - Present</p>
          <ul className="list-disc pl-4">
            <li>
              Revolutionized front-end development by establishing the Front-End
              Guild with robust governance framework.
            </li>
            <li>
              Pioneered esure's first conversational interface, dramatically
              improving claimant accessibility and user experience.
            </li>
            <li>
              Engineered advanced application monitoring using AWS Synthetics
              Canaries via Grafana, ensuring preemptive issue resolution.
            </li>
            <li>
              Developed a cutting-edge fraud detection system, achieving 100%
              tracking and elimination of fraudulent claims.
            </li>
            <li>
              Spearheaded Prizmdoc deployment in Claims Fulfilment,
              significantly bolstering customer data security.
            </li>
            <li>
              Implemented Segment and Satisment for customer behavior analysis,
              driving data-driven CX improvements.
            </li>
            <li>
              Mastered infrastructure management with Terraform, seamlessly
              integrating DevOps and InfoSec practices.
            </li>
            <li>
              Built and mentored a high-performance Digital Claims team,
              fostering continuous skill advancement.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Front End Technical Lead</h3>
          <p>Reigate, UK | November 2020 - July 2022</p>
          <ul className="list-disc pl-4">
            <li>
              Led the migration of JavaScript packages from NPM to AWS
              CodeArtifact, improving package management and security.
            </li>
            <li>
              Developed a 3DS2 Payment solution for 5-star insurance products,
              enhancing transaction security and customer trust.
            </li>
            <li>
              Created and implemented a learning plan to upskill internal
              Angular developers to React, facilitating team adaptability and
              technological advancement.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-bold">Stena Group IT</h4>
          <h3 className="text-lg font-bold">
            React Native Developer (Contract)
          </h3>
          <p> Netherlands | February 2023 - July 2023</p>
          <ul className="list-disc pl-4">
            <li>
              Led the development of a digital travel assistant application
              using React Native for Stenaline.
            </li>
            <li>
              Developed a robust Backend for Frontend (BFF) using NestJS,
              implementing RESTful APIs for seamless frontend-backend
              communication.
            </li>
            <li>
              Served as Security Champion, implementing best practices in
              application security and conducting regular security audits.
            </li>
            <li>
              Managed deployment and maintenance of the BFF on OpenShift,
              implementing CI/CD pipelines for automated testing and deployment.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-bold">Payen</h4>
          <h3 className="text-lg font-bold">Senior Software Engineer</h3>
          <p>Guildford, Surrey | July 2019 - April 2020</p>
          <ul className="list-disc pl-4">
            <li>
              Developed complex Angular applications, utilizing Angular Material
              and Bootstrap 4 for responsive and intuitive user interfaces.
            </li>
            <li>
              Collaborated with UX/UI designers using Figma to create visually
              appealing and user-friendly application designs.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
