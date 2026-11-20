import type { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <main className="mx-auto grid w-full max-w-5xl gap-12 px-6 py-12">
      <section>
        <h1 className="text-3xl font-semibold">소개</h1>
      </section>
      <section>
        <h2 className="text-xl font-semibold">숫자 요약</h2>
      </section>
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
    </main>
  );
}
