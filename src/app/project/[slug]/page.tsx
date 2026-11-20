import { notFound } from "next/navigation";
import type { ReactElement } from "react";
import { profile, projects } from "@/data/profile";

export function generateStaticParams(): { slug: string }[] {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: PageProps<"/project/[slug]">): Promise<ReactElement> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <article className="grid gap-8">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">{project.name}</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">{project.summary}</p>
        </header>
        <section aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="text-xl font-semibold">프로젝트 개요</h2>
          <dl className="mt-4 grid gap-4 rounded-xl border border-black/10 bg-white p-5">
            <div>
              <dt className="font-semibold">목적</dt>
              <dd className="mt-1">{project.purpose}</dd>
            </div>
            <div>
              <dt className="font-semibold">기간</dt>
              <dd className="mt-1">{project.period}</dd>
            </div>
            <div>
              <dt className="font-semibold">팀 규모</dt>
              <dd className="mt-1">{project.teamSize}명</dd>
            </div>
          </dl>
        </section>
        <section aria-labelledby="technologies-heading">
          <h2 id="technologies-heading" className="text-xl font-semibold">사용 기술</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology): ReactElement => (
              <li key={technology} className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm">
                {technology}
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="contributions-heading">
          <h2 id="contributions-heading" className="text-xl font-semibold">맡은 역할과 주요 구현 내용</h2>
          <p className="mt-4 font-medium">{project.role}</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
            {project.contributions.map((contribution): ReactElement => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>
        </section>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <a className="font-medium text-blue-700 underline underline-offset-4" href={project.githubUrl}>
            GitHub 저장소
          </a>
          <a className="font-medium text-blue-700 underline underline-offset-4" href={profile.links.blog}>
            개인 블로그
          </a>
        </div>
      </article>
    </main>
  );
}
