"use client";

import Link from "next/link";
import { useState, type ReactElement } from "react";
import { projectFilters } from "@/data/profile";
import { filterProjects, type ProjectFilter } from "./project-filter";

export function ProjectList(): ReactElement {
  const [filter, setFilter] = useState<ProjectFilter>("전체");
  const projects = filterProjects(filter);

  return (
    <div className="mt-5 grid gap-4">
      <div role="group" aria-label="프로젝트 분류" className="flex flex-wrap gap-2">
        {projectFilters.map((option): ReactElement => (
          <button
            key={option}
            type="button"
            aria-pressed={filter === option}
            onClick={(): void => setFilter(option)}
            className="cursor-pointer rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-medium hover:border-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 aria-pressed:border-blue-700 aria-pressed:bg-blue-700 aria-pressed:text-white"
          >
            {option}
          </button>
        ))}
      </div>
      {projects.length === 0 ? (
        <p role="status" className="rounded-xl border border-black/10 bg-white p-5 text-neutral-600">
          이 분류에 등록된 프로젝트가 없습니다.
        </p>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {projects.map(({ slug, name, summary, role }): ReactElement => (
            <li key={slug} className="min-w-0">
              <Link
                href={`/project/${slug}`}
                className="block h-full rounded-xl border border-black/10 bg-white p-5 hover:border-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="mt-2 leading-relaxed text-neutral-600">{summary}</p>
                <p className="mt-4 text-sm"><strong>주요 역할</strong> {role}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
