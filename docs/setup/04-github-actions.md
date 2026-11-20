# 04. GitHub Actions 세팅 (CI 자동 검사)

> 이 문서는 **AI 코딩 에이전트가 읽고 그대로 실행**하기 위한 작업 지시서다.
> 사용자는 백엔드 개발자다. 각 단계에서 무엇을 했는지 짧게 설명해 준다. (GitHub Actions ≈ Jenkins 같은 CI)
> 선행 조건: `01`~`03` 완료 (`pnpm lint`·`pnpm test` 통과, GitHub에 push 된 상태)

## 목표

GitHub에 push하거나 Pull Request를 올릴 때마다 **GitHub이 자동으로 lint → test → build를 실행**하고, 결과를 ✓/✗로 보여주는 상태를 만든다.

## 작업 순서

1. **로컬 버전 확인**

   ```bash
   node -v    # 예: v22.x  → node-version: 22
   pnpm -v    # 예: 10.x   → version: 10
   ```

2. **로컬에서 먼저 통과시키기**

   ```bash
   pnpm lint
   pnpm test
   pnpm build
   ```

3. **워크플로 파일 생성** — `.github/workflows/ci.yml`을 만든다. `version`과 `node-version`은 1번에서 확인한 메이저 버전으로 바꾼다.

   ```yaml
   name: CI

   on:
     push:
       branches: [main]
     pull_request:

   jobs:
     lint-test-build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: pnpm/action-setup@v4
           with:
             version: 10
         - uses: actions/setup-node@v4
           with:
             node-version: 22
             cache: pnpm
         - run: pnpm install --frozen-lockfile
         - run: pnpm lint
         - run: pnpm test
         - run: pnpm build
   ```

   > ⚠️ 테스트는 반드시 1회 실행(`vitest run`)이어야 한다. watch 모드로 돌리면 CI가 끝나지 않는다.
   > 빌드에 환경변수가 필요하면(예: Supabase 주소) 값을 파일에 적지 말고 사용자에게 GitHub Secrets 등록을 안내한다.

4. **커밋 & 푸시** — 사용자에게 확인을 받은 뒤 실행한다.

   ```bash
   git add .github/workflows/ci.yml
   git commit -m "ci: GitHub Actions로 lint/test/build 자동 검사"
   git push
   ```

5. **실행 결과 확인** — `gh run list --limit 1` → `gh run watch`. 실패하면 실패한 스텝의 로그를 읽고 원인을 고친 뒤 다시 확인을 받고 push한다.

## 트러블슈팅

| 증상 | 원인 | 해결 |
|------|------|------|
| `pnpm: command not found` | pnpm 설치 스텝 누락 | `pnpm/action-setup` 스텝 확인 |
| lockfile 관련 에러 | `pnpm-lock.yaml` 미커밋 또는 불일치 | 로컬에서 `pnpm install` 후 lock 파일 커밋 |
| CI가 끝나지 않음 | 테스트가 watch 모드 | `"test": "vitest run"` 확인 |
| 러너에서만 실패 | Node/pnpm 버전 차이 | 1번 버전과 yml 값 일치시키기 |

## 완료 기준 (모두 확인 후 결과를 보여줄 것)

- [ ] `.github/workflows/ci.yml` 존재, 버전 값이 로컬과 일치
- [ ] GitHub Actions 최신 실행 결과가 **성공(✓)**
- [ ] 사용자에게 Actions 탭 주소 안내

## 마지막 보고

CI가 무엇을 언제 검사하는지 한 줄, 실행 결과, 빨간 ✗가 뜨면 "Actions 로그 보고 고쳐줘"라고 요청하면 된다는 안내를 3~5줄로 정리한다.
