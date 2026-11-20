import { describe, expect, it } from "vitest";
import { generateStaticParams } from "./page";

describe("프로젝트 상세 경로", () => {
  it("모아와 쉽코딩의 상세 경로를 빌드에 포함한다", (): void => {
    expect(generateStaticParams()).toEqual([
      { slug: "moa" },
      { slug: "easycoding" },
    ]);
  });
});
