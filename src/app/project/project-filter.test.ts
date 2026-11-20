import { describe, expect, it } from "vitest";
import { filterProjects } from "./project-filter";

describe("프로젝트 필터", () => {
  it.each(["전체", "팀 프로젝트", "KH 정보교육원"] as const)(
    "%s에서 모아와 쉽코딩을 표시한다",
    (filter): void => {
      expect(filterProjects(filter).map(({ slug }) => slug)).toEqual(["moa", "easycoding"]);
    },
  );

  it("개인 프로젝트가 없으면 빈 목록을 반환한다", (): void => {
    expect(filterProjects("개인 프로젝트")).toEqual([]);
  });
});
