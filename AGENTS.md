# AGENTS.md

이 파일은 이 저장소에서 일하는 AI 코딩 에이전트(Codex, Claude Code 등)를 위한 온보딩 문서다. 작업 전에 반드시 읽는다.
사용자는 Spring Boot·React·MySQL을 배운 백엔드 개발자이고, Next.js는 처음이다.

## 프로젝트 개요

채용 담당자에게 나를 소개하는 개인 포트폴리오 사이트이자, 나에 대한 간단한 소개와 내 기술스택에 대한 숙련도와 나의 프로젝트에 대한 내용으로 구성된 전형적인 개인 포트폴리오 사이트

- 범위 밖: 로그인, DB, 방명록, 블로그
- 상세 사양은 `docs/prd/`를 기준으로 한다. 없거나 정해지지 않은 값은 짐작하지 말고 먼저 묻는다.
- 내 정보는 `docs/profile.md`에 있는 것만 쓴다. 없는 경력·프로젝트·수치는 지어내지 않는다.

## 명령어

패키지 매니저는 **pnpm**만 사용한다. (npm, yarn 사용 금지)

```bash
pnpm install    # 의존성 설치
pnpm dev        # 개발 서버 (http://localhost:3000)
pnpm build      # 프로덕션 빌드
pnpm lint       # ESLint 검사
```

## 기술 스택

Next.js **App Router** + TypeScript(strict) + Tailwind CSS. 경로 별칭 `@/*` → `src/*`.

## 규칙

- 사용자에게 보이는 텍스트는 **한글**로 쓴다.
- `any` 금지. 컴포넌트·함수에 명시적 타입을 붙인다.
- 새 로직(함수)을 만들면 같은 폴더에 `*.test.ts` 테스트를 함께 만든다.
- 이미지는 `next/image`만 사용하고 `alt`를 반드시 넣는다.
- 요청받은 태스크만 만든다. PRD의 "추후 반영" 기능은 만들지 않는다.
- 요청받지 않은 라이브러리를 추가하지 않는다. 필요하면 먼저 묻는다.

## 작업 완료 조건

작업을 "끝났다"고 말하기 전에 아래를 실행하고, 실행한 명령과 출력을 그대로 보여준다.

```bash
pnpm lint
pnpm test
pnpm build
```

개발 서버(`pnpm dev`)가 켜져 있는 동안 빌드한 뒤 화면이 깨지면, 사용자에게 개발 서버를 껐다 다시 켜 달라고 알린다.

끝낼 때는 바꾼 파일 / 브라우저에서 확인할 것 / 확인하지 못한 것을 짧게 알려 준다.

## 하지 말 것

- `.env*` 파일 내용 출력·커밋 금지.
- 전화번호·집 주소·개인 이메일 같은 개인정보를 화면이나 코드에 넣지 않는다.
- 사용자 확인 없이 `git push`, 브랜치 삭제, 강제 푸시 금지.

## 참고 문서 (필요할 때만 읽는다)

- 개발 환경 세팅 절차: `docs/setup/` (01-linter → 02-testing → 03-github → 04-github-actions)
- 기획서·PRD·구현 계획: `docs/prd/`
- 내 정보: `docs/profile.md`

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
