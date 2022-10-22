import React from "react";
import ProjectItem from "./project-item";
import { projects } from "./projects";

export default function ProjectList() {
  return (
    <section
      style={{ overflow: "hidden" }}
      className="section my-5"
      id="projects"
    >
      <h2 id="projects" className="text-center title mb-5">
        Projects
      </h2>
      {projects.map((project) => (
        <ProjectItem project={project}></ProjectItem>
      ))}
    </section>
  );
}
