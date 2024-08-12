"use client";

import { List, ListItem } from "flowbite-react";

export const Competencies = () => {
  return (
    <>
      <h2 className="my-4 text-5xl text-gray-300 dark:text-white">
        Core Competencies
      </h2>
      <div className="mb-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <p className="mb-3 ">
            <h2 className="mb-2 text-lg font-bold">Leadership</h2>
            <List>
              <ListItem>Leadership</ListItem>
              <ListItem>Business acumen</ListItem>
              <ListItem>System design</ListItem>

              <ListItem>Effective communication skills</ListItem>

              <ListItem>Critical and strategic thinking</ListItem>
              <ListItem>
                Adaptability through continuous learning mindset
              </ListItem>
              <ListItem>Agile</ListItem>
            </List>
          </p>
          <p className="mb-3">
            <h2 className="mb-2 text-lg font-bold">Technical</h2>
            <List>
              <ListItem>AWS</ListItem>
              <ListItem>OpenShift</ListItem>
              <ListItem>Kubernetes</ListItem>
              <ListItem>Azure</ListItem>
              <ListItem>Front-end architecture</ListItem>
              <ListItem>Web Security</ListItem>
            </List>
          </p>

          <p className="mb-3 ">
            <h2 className="mb-2 text-lg font-bold">Languages</h2>
            <List>
              <ListItem>TypeScript</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>Jenkins</ListItem>
            </List>
          </p>
          <p className="mb-3 ">
            <h2 className="text-lgh mb-2 font-bold">Frameworks</h2>
            <List>
              <ListItem>React</ListItem>
              <ListItem>React Native</ListItem>
              <ListItem>Angular</ListItem>
              <ListItem>Terraform</ListItem>
            </List>
          </p>
        </div>
      </div>
    </>
  );
};
