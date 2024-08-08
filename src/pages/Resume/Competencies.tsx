"use client";

import { Accordion, List, ListItem } from "flowbite-react";




export const Competencies = () => {
  return (
    <>
      <div className="mb-6">
        <h2 className="mb-2 text-xl font-bold">Core Competencies</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <p className="mb-3 ">
            <List>
              <ListItem>TypeScript</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>React</ListItem>
              <ListItem>React Native</ListItem>
            </List>
          </p>
          <p className="mb-3">
            <List>
              <ListItem>Angular</ListItem>
              <ListItem>Cloud Services</ListItem>
              <ListItem>AWS</ListItem>
              <ListItem>DevOps &amp; Infrastructure</ListItem>
            </List>
          </p>
        </div>

        <Accordion collapseAll flush>
          <Accordion.Panel>
            <Accordion.Title>Extra</Accordion.Title>
            <Accordion.Content>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <p className="mb-3 ">
                  <List>
                    <ListItem>Terraform</ListItem>
                    <ListItem>Jenkins</ListItem>
                    <ListItem>OpenShift</ListItem>
                    <ListItem>Team Leadership &amp; Mentoring</ListItem>
                  </List>
                </p>
                <p className="mb-3 ">
                  <List>
                    <ListItem>Agile Methodologies</ListItem>
                    <ListItem>Security &amp; Fraud Detection</ListItem>
                    <ListItem>UI/UX Design</ListItem>
                  </List>
                </p>
              </div>

              <List></List>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
};
