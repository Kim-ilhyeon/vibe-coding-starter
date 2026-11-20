# 02. Testing 세팅 (Vitest)

> 이 문서는 **AI 코딩 에이전트가 읽고 그대로 실행**하기 위한 작업 지시서다.
> 사용자는 Spring Boot·React를 배운 백엔드 개발자이고 Next.js·pnpm은 처음이다. 각 단계에서 무엇을 했는지 짧게 설명해 준다. (Vitest ≈ JUnit)
> 선행 조건: `docs/setup/01-linter.md` 완료 (`pnpm lint` 통과 상태)

## 목표

`pnpm test` 한 줄로 테스트를 실행할 수 있고, **예시 테스트 1개 이상이 통과**하는 상태를 만든다.

## 배경 (사용자 설명용)

- 테스트는 "내가 만든 함수가 **의도대로 동작하는지** 자동으로 검산"하는 코드다.
- 진짜 가치는 **나중에 코드를 고쳐도(특히 AI가 고쳐도) 기존 기능이 안 깨졌는지** 바로 알려주는 데 있다.
- Vitest는 Jest와 사용법이 거의 같고, 더 빠르고 설정이 단순하다.

## 작업 순서

1. **설치**

   ```bash
   pnpm add -D vitest
   ```

2. **설정 파일 생성** — 프로젝트 루트에 `vitest.config.mts`를 만든다.
   tsconfig의 `@/*` → `src/*` 별칭을 테스트에서도 쓸 수 있게 한다.

   ```ts
   import { fileURLToPath } from "node:url";
   import { defineConfig } from "vitest/config";

   export default defineConfig({
     resolve: {
       alias: {
         "@": fileURLToPath(new URL("./src", import.meta.url)),
       },
     },
   });
   ```

3. **스크립트 추가** — `package.json`의 `scripts`에 추가한다.

   ```json
   "test": "vitest run",
   "test:watch": "vitest"
   ```

   > `vitest run` = 1회 실행 후 종료 (CI용), `vitest` = 파일 저장 시 자동 재실행(watch 모드).

4. **예시 코드 + 테스트 작성**
   - `src/lib/format.ts`에 숫자를 `12,000원` 형태로 바꾸는 `formatPrice(price: number): string` 함수를 만든다.
   - `src/lib/format.test.ts`에 테스트를 만든다. 규칙:
     - **테스트 하나 = 확인 하나** (`it` 하나에 `expect` 하나)
     - 본문은 `// Given` `// When` `// Then` 주석으로 3단 구분
     - 최소 케이스: `0 → "0원"`, `12000 → "12,000원"`, `1000000 → "1,000,000원"`

5. **실패하는 걸 한 번 보여주기** — `formatPrice`에서 쉼표 처리를 잠깐 지워 `pnpm test`가 **빨간색으로 실패**하는 것을 사용자에게 보여준 뒤, 원래대로 되돌려 다시 통과시킨다.

6. **AGENTS.md 완료 조건 갱신** — `AGENTS.md`의 작업 완료 조건에 `pnpm test`를 `pnpm lint`와 `pnpm build` 사이에 추가하고, 규칙에 "새 로직(함수)을 만들면 같은 폴더에 `*.test.ts` 테스트를 함께 만든다"를 한 줄 추가한다.

## 완료 기준 (모두 확인 후 결과를 보여줄 것)

- [ ] `pnpm test` → 모든 테스트 통과 (최소 3개)
- [ ] `pnpm lint` → 여전히 에러 0개 (테스트 파일 포함)
- [ ] 일부러 깨뜨렸을 때 실패하는 것을 확인하고 원상 복구함
- [ ] `AGENTS.md` 완료 조건에 `pnpm test`가 들어감

## 마지막 보고

설치한 것, 만든 파일, `pnpm test` 최종 출력, 기억할 명령어(`pnpm test`, `pnpm test:watch`)를 3~5줄로 정리한다.
