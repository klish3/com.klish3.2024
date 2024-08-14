"use client";
import { Timeline } from "flowbite-react";

import { HiLocationMarker } from "react-icons/hi";
export const TimeLineKli = () => {
  return (
    <>
      <h2 className="my-4 text-5xl text-gray-300 dark:text-white">
        Professional Experience
      </h2>

      <h4 className="my-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-xl lg:text-xl">
        <span className="underline-offset-5 decoration-3 underline decoration-blue-400 dark:decoration-blue-600">
          Esure Group
        </span>
      </h4>

      <main className="fjustify-center gap-2 dark:bg-gray-800">
        <Timeline>
          <Timeline.Item>
            <Timeline.Point icon={HiLocationMarker} />
            <Timeline.Content>
              <Timeline.Time>July 2022 - Present</Timeline.Time>
              <Timeline.Title>Technical Lead</Timeline.Title>
              <Timeline.Body>
                <ul className="list-disc pl-4">
                  <li>
                    Revolutionized front-end development by establishing the
                    Front-End Guild with robust governance framework.
                  </li>
                  <li>
                    Pioneered esure's first conversational interface,
                    dramatically improving claimant accessibility and user
                    experience.
                  </li>
                  <li>
                    Engineered advanced application monitoring using AWS
                    Synthetics Canaries via Grafana, ensuring preemptive issue
                    resolution.
                  </li>
                  <li>
                    Developed a cutting-edge fraud detection system, achieving
                    100% tracking and elimination of fraudulent claims.
                  </li>
                  <li>
                    Spearheaded Prizmdoc deployment in Claims Fulfilment,
                    significantly bolstering customer data security.
                  </li>
                  <li>
                    Implemented Segment and Satisment for customer behavior
                    analysis, driving data-driven CX improvements.
                  </li>
                  <li>
                    Mastered infrastructure management with Terraform,
                    seamlessly integrating DevOps and InfoSec practices.
                  </li>
                  <li>
                    Built and mentored a high-performance Digital Claims team,
                    fostering continuous skill advancement.
                  </li>
                </ul>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>November 2020 - July 2022</Timeline.Time>
              <Timeline.Title>Front End Technical Lead</Timeline.Title>
              <Timeline.Body>
                <ul className="list-disc pl-4">
                  <li>
                    Led the migration of JavaScript packages from NPM to AWS
                    CodeArtifact, improving package management and security.
                  </li>
                  <li>
                    Developed a 3DS2 Payment solution for 5-star insurance
                    products, enhancing transaction security and customer trust.
                  </li>
                  <li>
                    Created and implemented a learning plan to upskill internal
                    Angular developers to React, facilitating team adaptability
                    and technological advancement.
                  </li>
                </ul>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </main>

      <h4 className="my-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-xl lg:text-xl">
        <span className="underline-offset-5 decoration-3 underline decoration-blue-400 dark:decoration-blue-600">
          Stenaline
        </span>
      </h4>

      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>
              Netherlands | February 2023 - July 2023
            </Timeline.Time>
            <Timeline.Title>React Native Developer (Contract)</Timeline.Title>
            <Timeline.Body>
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
                  implementing CI/CD pipelines for automated testing and
                  deployment.
                </li>
              </ul>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>

      <h4 className="my-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-xl lg:text-xl">
        <span className="underline-offset-5 decoration-3 underline decoration-blue-400 dark:decoration-blue-600">
          Payen
        </span>
      </h4>

      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>July 2019 - April 2020</Timeline.Time>
            <Timeline.Title>Senior Software Engineer</Timeline.Title>
            <Timeline.Body>
              <ul className="list-disc pl-4">
                <li>
                  Developed complex Angular applications, utilizing Angular
                  Material and Bootstrap 4 for responsive and intuitive user
                  interfaces.
                </li>
                <li>
                  Collaborated with UX/UI designers using Figma to create
                  visually appealing and user-friendly application designs.
                </li>
              </ul>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </>
  );
};
