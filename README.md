# blog

개인 기술 블로그. [Astro](https://astro.build) 정적 사이트를 GitHub Pages로 배포한다.

## 글 쓰기

- 글은 `src/content/posts/<slug>.md`. 주소는 `/posts/<slug>/`.
- frontmatter: `title`, `description`, `published`(YYYY-MM-DD), 선택 `updated`, `tags`, `draft`.
- `draft: true`인 글은 목록, 글 페이지, RSS, 사이트맵 어디에도 나오지 않는다.
- 모든 글 아래와 소개 페이지에 서비스 안내가 붙는다. 문구와 링크는 `src/consts.ts`의 `SERVICE_CTA`
  (`url`이 비어 있으면 링크는 숨기고 공개 템플릿 링크만 보인다).

```bash
npm ci
npm run dev       # http://localhost:4321
npm run build     # astro check + 빌드 → dist/
```

## 배포

`main`에 푸시하면 `.github/workflows/deploy.yml`이 빌드해 GitHub Pages에 올린다. PR에서는 빌드와 검사만 한다.

처음 한 번: 레포 Settings → Pages → Source를 **GitHub Actions**로 바꾼다.

## 개인 도메인 연결 (나중에)

1. 도메인 DNS에 GitHub Pages용 레코드를 추가한다(apex는 A/AAAA, 서브도메인은 `<계정>.github.io`로 CNAME — GitHub 문서 "Managing a custom domain for your GitHub Pages site" 참고).
2. Settings → Pages → Custom domain에 도메인을 넣고 HTTPS를 켠다.
3. 레포 변수 `SITE_URL`을 `https://<도메인>`으로 설정한다(canonical·RSS·사이트맵 주소가 바뀐다).
