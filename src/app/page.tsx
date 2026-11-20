import Image from "next/image";
import type { ReactElement } from "react";
import { activities, awards, profile, skillGroups } from "@/data/profile";
import { ProjectList } from "./project/project-list";

const maxSkillScore = 5;
const contactLinkClass =
  "flex min-h-14 items-center gap-3 rounded-lg border border-background/25 px-4 py-3 text-sm font-medium hover:border-background/60 hover:bg-background/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background";

export default function Home(): ReactElement {
  const { name, introduction, photo, summary, links } = profile;

  return (
    <main className="grid w-full gap-12 pt-12">
      <section
        aria-labelledby="intro-heading"
        className="mx-auto grid w-full max-w-5xl items-center gap-8 px-6 md:grid-cols-[minmax(0,1fr)_17.5rem] md:gap-16"
      >
        <div>
          <h1 id="intro-heading" className="text-4xl font-semibold tracking-tight md:text-6xl">
            {name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed break-keep md:text-xl">
            {introduction}
          </p>
        </div>
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(min-width: 768px) 280px, (max-width: 288px) calc(100vw - 48px), 240px"
          loading="eager"
          className="h-auto w-full max-w-60 rounded-xl md:max-w-none"
        />
      </section>
      <section
        aria-labelledby="summary-heading"
        className="bg-foreground py-8 text-background"
      >
        <h2 id="summary-heading" className="sr-only">숫자 요약</h2>
        <dl className="mx-auto grid w-full max-w-5xl gap-6 px-6 sm:grid-cols-[repeat(auto-fit,minmax(min(100%,11rem),1fr))]">
          {summary.map(({ id, label, value, unit }): ReactElement => (
            <div key={id} className="min-w-0 wrap-anywhere">
              <dt className="text-sm">{label}</dt>
              <dd className="mt-1 text-2xl font-semibold">{value}{unit}</dd>
            </div>
          ))}
        </dl>
      </section>
      <div className="mx-auto grid w-full max-w-5xl gap-12 px-6">
        <section aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="text-xl font-semibold">프로젝트</h2>
          <ProjectList />
        </section>
        <section aria-labelledby="history-heading">
          <h2 id="history-heading" className="text-xl font-semibold">활동·수상 이력</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <h3 className="font-semibold">활동</h3>
              <ol className="mt-2 divide-y divide-black/10">
                {activities.map(({ period, title }): ReactElement => (
                  <li key={period} className="grid gap-1 py-3">
                    <span className="text-sm tabular-nums text-neutral-600">{period}</span>
                    <span>{title}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <h3 className="font-semibold">수상</h3>
              <ol className="mt-2 divide-y divide-black/10">
                {awards.map(({ date, recipient, title }): ReactElement => (
                  <li key={date} className="grid gap-1 py-3">
                    <span className="text-sm tabular-nums text-neutral-600">{date}</span>
                    <span>{title}</span>
                    <span className="text-sm text-neutral-600">수상자 {recipient}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        <section aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-xl font-semibold">기술 스택</h2>
          <p className="mt-2 text-sm text-neutral-600">{maxSkillScore}점 만점의 자기평가</p>
          <div className="mt-5 grid items-start gap-4 md:grid-cols-2">
            {skillGroups.map(({ category, skills }): ReactElement => (
              <div key={category} className="rounded-xl border border-black/10 bg-white p-5">
                <h3 className="font-semibold">{category}</h3>
                <ul className="mt-4 grid gap-3">
                  {skills.map(({ name, score }): ReactElement => (
                    <li key={name} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_3rem] items-center gap-3 text-sm">
                      <span className="wrap-anywhere">{name}</span>
                      <span aria-hidden="true" className="h-2 overflow-hidden rounded-full bg-neutral-200">
                        <span
                          className="block h-full rounded-full bg-blue-700"
                          style={{ width: `${(score / maxSkillScore) * 100}%` }}
                        />
                      </span>
                      <span className="text-right font-medium tabular-nums">{score}점</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section aria-labelledby="contact-heading" className="bg-foreground py-10 text-background md:py-14">
        <div className="mx-auto grid w-full max-w-5xl items-center gap-5 px-6 md:grid-cols-[1fr_3fr] md:gap-8">
          <h2 id="contact-heading" className="text-2xl font-semibold">연락</h2>
          <ul className="grid gap-3 md:grid-cols-3">
            <li>
              <a className={contactLinkClass} href={links.github}>
                <svg aria-hidden="true" className="size-5 shrink-0" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.49c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.81.06 1.23.83 1.23.83.72 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
                개인 GitHub
              </a>
            </li>
            <li>
              <a className={contactLinkClass} href={links.blog}>
                <svg aria-hidden="true" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10Zm0 0v7h7M8 13h8m-8 4h8" />
                </svg>
                개인 블로그
              </a>
            </li>
            <li>
              <a className={contactLinkClass} href={links.email}>
                <svg aria-hidden="true" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                공개용 개발 이메일
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
