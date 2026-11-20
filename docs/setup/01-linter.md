# 01. Linter 세팅 (ESLint)

> 이 문서는 **AI 코딩 에이전트가 읽고 그대로 실행**하기 위한 작업 지시서다.
> 사용자는 Spring Boot·React를 배운 백엔드 개발자이고 Next.js·pnpm은 처음이다. 각 단계에서 무엇을 했는지 짧게 설명해 준다. Java 도구에 빗댈 수 있으면 함께 말해 준다(예: ESLint ≈ Checkstyle).

## 목표

`pnpm lint` 한 줄로 프로젝트 전체 코드를 검사할 수 있고, **현재 에러가 0개인 깨끗한 상태(baseline)**를 만든다.

## 배경 (사용자 설명용)

- ESLint는 코드를 **실행하지 않고 읽어서** 실수(안 쓰는 변수, 위험한 패턴, 규칙 위반)를 찾아주는 도구다.
- Next.js 공식 규칙 묶음 `eslint-config-next`를 사용한다.
- 린터는 "실행 전" 검사, 테스트는 "실행 중" 검사다. 둘은 역할이 다르다.

## 작업 순서

1. **현재 상태 확인**
   - `package.json`에 `eslint`, `eslint-config-next`가 devDependencies에 있는지 확인한다.
   - 프로젝트 루트에 `eslint.config.mjs`가 있는지 확인한다.
   - 없다면 설치한다: `pnpm add -D eslint eslint-config-next`

2. **설정 파일 맞추기** — `eslint.config.mjs`가 아래 구조인지 확인하고, 다르면 이 형태로 맞춘다.

   ```js
   import { defineConfig, globalIgnores } from "eslint/config";
   import nextVitals from "eslint-config-next/core-web-vitals";
   import nextTs from "eslint-config-next/typescript";

   const eslintConfig = defineConfig([
     ...nextVitals,
     ...nextTs,
     globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
   ]);

   export default eslintConfig;
   ```

3. **스크립트 추가** — `package.json`의 `scripts`에 아래 두 줄이 있도록 한다.

   ```json
   "lint": "eslint",
   "lint:fix": "eslint --fix"
   ```

   > 참고: Next.js 16부터 `next lint` 명령은 없어졌다. `eslint`를 직접 실행한다.

4. **에디터 연동 (권장)** — `.vscode/extensions.json`을 만들어 ESLint 확장을 추천한다.

   ```json
   { "recommendations": ["dbaeumer.vscode-eslint"] }
   ```

5. **실행하고 baseline 만들기**
   - `pnpm lint` 실행.
   - 에러가 있으면 먼저 `pnpm lint:fix`로 자동 수정하고, 남은 것은 코드를 직접 고친다.
   - **규칙을 끄거나 `eslint-disable` 주석으로 숨기지 않는다.** 꼭 필요하면 이유를 사용자에게 설명하고 허락을 받는다.

## 완료 기준 (모두 확인 후 결과를 보여줄 것)

- [ ] `pnpm lint` 실행 결과 에러 0개
- [ ] `package.json`에 `lint`, `lint:fix` 스크립트 존재
- [ ] 일부러 안 쓰는 변수(`const unused = 1`)를 넣으면 `pnpm lint`가 잡아내는지 확인한 뒤, 그 코드는 다시 지운다

## 마지막 보고

무엇을 설치/수정했는지, `pnpm lint` 최종 출력, 사용자가 기억할 명령어(`pnpm lint`, `pnpm lint:fix`)를 3~5줄로 정리한다.
