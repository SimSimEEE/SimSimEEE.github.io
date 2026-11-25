export const SITE_TITLE = "SimSimEEE";
export const SITE_DESCRIPTION = "MCP 서버, AI 하네스, 개발 자동화 실무 기록";
/**
 * Service note shown under every post and on the about page.
 * `url` stays empty until the Kmong listing is approved; while it is empty only the template link shows.
 * Keep the wording in sync with projects/teaching/service-cta.md in the personal vault.
 */
export const SERVICE_CTA = {
  heading: "사내 시스템을 AI 도구에 안전하게 연결하는 MCP 서버를 만들어 드립니다",
  points: [
    "데이터를 바꾸는 요청은 미리보기 → 사람 확인 → 실행 순서로만 반영합니다",
    "AI가 쓰는 키마다 허용된 도구만 호출할 수 있습니다",
    "누가 언제 어떤 도구를 호출했는지 감사 로그로 남깁니다",
    "이 안전장치가 실제로 막는지 검증하는 테스트를 함께 드립니다",
  ],
  linkText: "크몽에서 의뢰하기",
  url: "",
};
export const TEMPLATE_REPO = "https://github.com/SimSimEEE/mcp-safe-write-template";
