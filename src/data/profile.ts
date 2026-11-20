type ProjectCategory = "팀 프로젝트" | "개인 프로젝트" | "KH 정보교육원";

type Project = {
  slug: string;
  name: string;
  summary: string;
  purpose: string;
  period: string;
  teamSize: number;
  categories: readonly ProjectCategory[];
  technologies: readonly string[];
  role: string;
  contributions: readonly string[];
  githubUrl: string;
};

type SkillGroup = {
  category: string;
  skills: readonly { name: string; score: number }[];
};

export const siteMetadata = {
  title: "김일현 Portfolio",
  description: "김일현의 신입 백엔드 개발자 포트폴리오. 오류의 원인을 분석해 문제를 해결하고, 부족한 부분은 스스로 찾아 공부하며 채워 갑니다. 팀 프로젝트에서 맡은 역할과 직접 구현한 기능을 소개합니다.",
} as const;

export const profile = {
  name: "김일현",
  targetRole: "신입 백엔드 개발자",
  introduction: "부족한 부분을 스스로 찾아 공부하고, 오류의 원인을 분석해 해결하는 것을 좋아하는 신입 백엔드 개발자 김일현입니다.",
  photo: {
    src: "/이력서 사진.jpg",
    alt: "김일현 프로필 사진",
  },
  summary: {
    teamProjects: 2,
    completedCourses: 2,
    technologies: 19,
  },
  links: {
    github: "https://github.com/Kim-ilhyeon",
    blog: "https://kih3915.tistory.com/",
    email: "mailto:rladlfgus3915@naver.com",
  }
} as const;

export const activities = [
  {
    period: "2020.03~2024.02",
    title: "대림대학교 졸업",
  },
  {
    period: "2024.12~2025.06",
    title: "KH 정보교육원 첫 번째 과정 수료",
  },
  {
    period: "2026.05~2026.11",
    title: "KH 정보교육원 두 번째 과정 수료",
  },
  {
    period: "2026.07.15~2026.08.14",
    title: "쉽코딩 팀 프로젝트 진행",
  },
  {
    period: "2026.10.01~2026.11.13",
    title: "모아(Moa) 팀 프로젝트 진행",
  }
] as const;

export const awards = [
  {
    date: "2025.06",
    recipient: "김일현",
    title: "KH 정보교육원 성적향상 상 수상(초반 성적 대비 향상)",
  },
  {
    date: "2026.11",
    recipient: "김일현",
    title: "열심히한 수강생 상 수상 및 인터뷰",
  }
] as const;

export const skillGroups = [
  {
    category: "언어",
    skills: [
      {
        name: "Java",
        score: 4,
      },
      {
        name: "JavaScript",
        score: 4,
      }
    ],
  },
  {
    category: "백엔드",
    skills: [
      {
        name: "Spring Boot",
        score: 3.5,
      },
      {
        name: "Spring MVC",
        score: 5,
      },
      {
        name: "MyBatis",
        score: 4,
      },
      {
        name: "JWT 인증",
        score: 3,
      }
    ],
  },
  {
    category: "프런트엔드",
    skills: [
      {
        name: "React",
        score: 3,
      },
      {
        name: "JSP",
        score: 4,
      },
      {
        name: "HTML",
        score: 4,
      },
      {
        name: "CSS",
        score: 3,
      },
      {
        name: "Ajax",
        score: 3.5,
      }
    ],
  },
  {
    category: "데이터베이스",
    skills: [
      {
        name: "MySQL",
        score: 4,
      }
    ],
  },
  {
    category: "프로젝트 외 실습",
    skills: [
      {
        name: "Oracle DB",
        score: 4,
      }
    ],
  },
  {
    category: "실시간 통신",
    skills: [
      {
        name: "WebSocket",
        score: 3.5,
      },
      {
        name: "STOMP",
        score: 3.5,
      }
    ],
  },
  {
    category: "협업 도구",
    skills: [
      {
        name: "Git",
        score: 4,
      },
      {
        name: "GitHub",
        score: 3.5,
      },
      {
        name: "Notion",
        score: 3.5,
      },
      {
        name: "Slack",
        score: 3,
      }
    ],
  }
] satisfies readonly SkillGroup[];

export const projectFilters = [
  "전체",
  "팀 프로젝트",
  "개인 프로젝트",
  "KH 정보교육원",
] as const satisfies readonly ("전체" | ProjectCategory)[];

export const projects = [
  {
    slug: "moa",
    name: "모아 (Moa)",
    summary: "활동 지역을 기준으로 계모임·소모임을 찾고, 모임 운영과 회비·공동자금 관리를 한곳에서 할 수 있는 지역 커뮤니티 서비스입니다.",
    purpose: "활동 지역을 기준으로 모임을 찾고 모임 운영과 공동자금 관리를 한곳에서 할 수 있도록 돕습니다.",
    period: "2026.10.01.~2026.11.13.",
    teamSize: 3,
    categories: [
      "팀 프로젝트",
      "KH 정보교육원",
    ],
    technologies: [
      "Java 17",
      "Spring Boot",
      "MyBatis",
      "MySQL",
      "React",
      "WebSocket",
      "STOMP",
      "토스페이먼츠 가상계좌 발급 API",
    ],
    role: "팀장, 계모임·소모임 운영 기능 개발",
    contributions: [
      "팀장으로 개발 일정과 이슈를 관리하고 팀원이 개발한 기능을 통합했습니다.",
      "계모임·소모임 운영 기능을 개발하고, 계모임의 계원 관리, 회비 납부 관리, 공동자금 관리, 수령 순번 추천 및 지정 기능을 구현했습니다.",
      "프로젝트 규모에 맞춰 토스페이먼츠 API로 가상계좌를 발급하고, 공동자금의 입출금 내역은 MySQL에 저장해 조회할 수 있도록 구현했습니다.",
      "계모임별 채팅방을 만들고 WebSocket과 STOMP를 이용해 메시지를 실시간으로 주고받도록 구현했습니다.",
    ],
    githubUrl: "https://github.com/siiiha/final_project_moa",
  },
  {
    slug: "easycoding",
    name: "쉽코딩 (EasyCoding)",
    summary: "객관식·빈칸형 개발 문제와 오답 풀이를 제공하고, 학습 기록과 통계로 꾸준한 학습을 돕는 서비스입니다.",
    purpose: "개발 문제 풀이와 학습 기록을 통해 꾸준한 학습을 돕습니다.",
    period: "2026.07.15.~2026.08.14.",
    teamSize: 3,
    categories: [
      "팀 프로젝트",
      "KH 정보교육원",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "MyBatis",
      "MySQL",
      "JSP",
      "HTML",
      "CSS",
      "JavaScript",
      "Ajax",
      "JWT",
    ],
    role: "커뮤니티 이미지 업로드 구현, JWT 인증 처리 개선",
    contributions: [
      "커뮤니티 게시글에 이미지를 첨부할 수 있도록 이미지 업로드 기능을 구현했습니다.",
      "JWT 기반 인증이 반복되는 횟수와 인증 처리 시간을 줄여 조회 응답 속도를 개선했습니다.",
      "형상 관리와 회의록 작성을 맡았습니다.",
    ],
    githubUrl: "https://github.com/Kim-ilhyeon/semi_project-easycoding",
  }
] satisfies readonly Project[];
