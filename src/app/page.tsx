import Image from "next/image";
import type { ReactElement } from "react";
import { activities, awards, profile, skillGroups } from "@/data/profile";

const maxSkillScore = 5;

export default function Home(): ReactElement {
  const { name, introduction, photo, summary } = profile;

  return (
    <main className="grid w-full gap-12 py-12">
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
        <section>
          <h2 className="text-xl font-semibold">프로젝트</h2>
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
        <section>
          <h2 className="text-xl font-semibold">연락</h2>
        </section>
      </div>
    </main>
  );
}
