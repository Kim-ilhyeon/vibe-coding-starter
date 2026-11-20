import { projectFilters, projects } from "@/data/profile";

export type ProjectFilter = (typeof projectFilters)[number];

export function filterProjects(filter: ProjectFilter): readonly (typeof projects)[number][] {
  if (filter === "전체") {
    return projects;
  }

  return projects.filter(({ categories }) =>
    categories.some((category) => category === filter),
  );
}
