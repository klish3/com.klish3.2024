"use client";




export const Experience = () => {
  return (
    <>
      <div className="mb-6">
        <h2 className="mb-2 text-xl font-bold">Professional Experience</h2>
        <h4 className="mb-2 text-lg font-bold">Esure Group</h4>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Technical Lead</h3>
          <p> Reigate, UK | July 2022 - Present</p>
          <ul className="list-disc pl-4">
            <li>
              Established and led the Front-End Guild, implementing a robust
              governance framework for front-end development across the
              organization.
            </li>
            <li>
              Spearheaded the development of esure's first conversational
              interface, enhancing accessibility for claimants and improving
              user experience.
            </li>
            <li>
              Implemented advanced application monitoring using AWS Synthetics
              Canaries via Grafana, ensuring proactive issue identification
              and resolution.
            </li>
            <li>
              Pioneered a comprehensive fraud detection system, achieving 100%
              tracking and mitigation of fraudulent claims applications.
            </li>
            <li>
              Led the Claims Fulfilment Team in deploying Prizmdoc,
              significantly enhancing security measures for customer data
              protection.
            </li>
            <li>
              Implemented customer behavior monitoring with Segment and
              Satisment, enabling data-driven improvements to customer
              experience.
            </li>
            <li>
              Managed infrastructure resources using Terraform, collaborating
              with DevOps and InfoSec teams to ensure seamless integration and
              security compliance.
            </li>
            <li>
              Cultivated a high-performing Digital Claims team, fostering a
              culture of mentorship and continuous skill development.
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
              implementing CI/CD pipelines for automated testing and
              deployment.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-bold">Payen</h4>
          <h3 className="text-lg font-bold">Senior Software Engineer</h3>
          <p>Guildford, Surrey | July 2019 - April 2020</p>
          <ul className="list-disc pl-4">
            <li>
              Developed complex Angular applications, utilizing Angular
              Material and Bootstrap 4 for responsive and intuitive user
              interfaces.
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
