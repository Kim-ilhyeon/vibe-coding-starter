import Image from "next/image";
import type { ReactElement } from "react";
import { profile } from "@/data/profile";

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
        <section>
          <h2 className="text-xl font-semibold">활동·수상 이력</h2>
        </section>
        <section>
          <h2 className="text-xl font-semibold">기술 스택</h2>
        </section>
        <section>
          <h2 className="text-xl font-semibold">연락</h2>
        </section>
      </div>
    </main>
  );
}
