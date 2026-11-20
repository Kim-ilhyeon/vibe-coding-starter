# 03. GitHub 세팅 (비공개 저장소 + 원격 연결)

> 이 문서는 **AI 코딩 에이전트가 읽고 그대로 실행**하기 위한 작업 지시서다.
> 사용자는 Git을 써 본 백엔드 개발자다. 각 단계에서 무엇을 했는지 짧게 설명해 준다.
> 선행 조건: `01-linter.md` 완료 (`pnpm lint` 통과 상태)

## 목표

이 프로젝트가 GitHub **비공개(private) 저장소**에 올라가 있고, 앞으로 **수정 → 커밋 → push** 루틴으로 작업을 저장할 수 있는 상태를 만든다.

## 작업 순서

1. **사전 확인** (하나라도 실패하면 멈추고 사용자에게 설치/로그인 방법을 안내한다)

   ```bash
   git --version
   git config user.name
   git config user.email
   gh --version
   gh auth status
   ```

   - `user.name`/`user.email`이 비어 있으면 사용자에게 값을 물어보고 `git config --global`로 설정한다. **임의로 지어내지 않는다.**
   - `gh auth status`가 로그인 안 됨이면 `gh auth login`을 **브라우저 로그인 방식**으로 안내한다. 한 번만 쓰는 코드와 주소가 나오면 바로 보여 준다. 토큰·비밀번호는 묻지 않는다.

2. **`.gitignore` 점검** — 아래 항목이 들어 있는지 확인하고 없으면 추가한다.

   ```
   node_modules
   .next
   out
   .env*
   !.env.example
   .DS_Store
   ```

   - `.env` 계열 파일이 이미 Git에 추적되고 있다면 즉시 사용자에게 알린다.
   - lock 파일은 `pnpm-lock.yaml` 하나만 있어야 한다. `package-lock.json`·`yarn.lock`이 있으면 사용자에게 알린다.

3. **로컬 저장소 확인**
   - `create-next-app`으로 만들었다면 이미 `git init`이 되어 있다. `git status`로 확인한다.
   - "not a git repository"가 나오면 `git init -b main`을 실행하고, 지금까지의 파일을 첫 커밋으로 남길지 사용자에게 묻는다.
   - 기본 브랜치 이름이 `main`인지 확인한다 (`git branch --show-current`).

4. **커밋되지 않은 변경 확인** — 커밋하지 않은 변경이 있으면 목록을 보여 주고, 커밋할지 사용자에게 묻는다. 커밋 메시지는 `종류: 무엇을 했는지` 형식(`feat`, `fix`, `chore`, `docs`, `test`)으로 쓴다.

5. **공개 전 점검** — 저장소 전체에서 전화번호·주소·개인 이메일·API 키·토큰처럼 보이는 문자열을 찾아 결과를 보여 준다. 발견되면 멈추고 사용자에게 묻는다.

6. **GitHub 저장소 만들기** — 저장소 이름을 사용자에게 묻고, **비공개**로 만든다.

   ```bash
   gh repo create <저장소이름> --private --source=. --remote=origin
   ```

7. **푸시** — **반드시 사용자에게 "푸시해도 될까요?"라고 확인을 받은 뒤** 실행한다.

   ```bash
   git push -u origin main
   ```

   - push가 `GH007`(private email) 문구로 거절되면, GitHub 설정 › Emails의 `users.noreply.github.com` 주소를 사용자에게 받아 Git 이메일과 아직 안 올린 커밋의 작성자 이메일을 고친 뒤 다시 확인을 받고 push한다.

## 완료 기준 (모두 확인 후 결과를 보여줄 것)

- [ ] `git remote -v`에 origin이 GitHub 주소로 연결됨
- [ ] GitHub 저장소가 **Private**
- [ ] `git status` → "working tree clean"
- [ ] `git log --oneline -5` 출력
- [ ] `.env` 계열 파일과 `node_modules`·`.next`가 커밋에 없음
- [ ] 저장소 주소를 사용자에게 알려줌 (브라우저에서 Private 표시와 파일이 보이는지 확인 요청)

## 마지막 보고

저장소 주소와 함께 앞으로의 루틴을 정리해 준다.

```bash
git add .
git commit -m "feat: 무엇을 했는지"
git push
```
