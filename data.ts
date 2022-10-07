import {
  educationType,
  linkDataType,
  projectDataType,
  techStackDataType,
  workExperienceType,
} from "./index";

const LinkData: linkDataType[] = [
  {
    title: "GITHUB",
    url: "https://github.com/october-03",
  },
  {
    title: "ROCKETPUNCH",
    url: "https://www.rocketpunch.com/@autumnoctoberbus",
  },
  {
    title: "BLOG",
    url: "https://velog.io/@october03",
  },
  {
    title: "LINKEDIN",
    url: "https://www.linkedin.com/in/jae-young-kim-761408220/",
  },
];

const TechStackData: techStackDataType = {
  usable: [
    "TypeScript",
    "ES6",
    "React",
    "React Hooks",
    "Redux",
    "Next.js",
    "React Native",
  ],
  interested: ["TDD", "SSR", "Webpack", "Babel", "Yarn Berry", "pnpm"],
};

const ProjectData: projectDataType[] = [
  {
    title: "TiOS PAY 앱 리뉴얼",
    list: {
      content: [
        "회사 프로젝트",
        "개발기간: 2022.03 ~ 2022.05",
        "React Native 기반의 TiOS PAY -> AP First로의 전반적인 리뉴얼된 화면 개발 작업을 하였습니다.",
        "선물하기 관련 기능, 화면들을 중점적으로 개발했습니다",
      ],
      techStack: ["React Native", "Redux", "JavaScript", "React"],
    },
    link: "https://play.google.com/store/apps/details?id=com.keepercustomerapp&hl=ko&gl=US",
  },
  {
    title: "SOOSIM 17.5 개발",
    list: {
      content: [
        "개인 프로젝트",
        "개발기간: 2022.07",
        "한양사이버대학교 디자인학부 졸업전시회 17.5회 수심 사이트 개발을 하였습니다",
      ],
      techStack: ["React", "TypeScript"],
    },
    link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/17_5th/index.html",
  },
  {
    title: "롤 전적검색 및 팀 매칭 사이트 개발",
    list: {
      content: [
        "개인 프로젝트",
        "개발기간: 2022.09 ~ 작업중",
        "현재 작업중에 있으며 Node.js, Express, MongoDB를 기반으로 한 API는 개발이 완료되었습니다.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
      ],
    },
  },
  {
    title: "mts 앱 제작 (앱 이름 미정)",
    list: {
      content: [
        "회사 프로젝트",
        "개발기간: 2022.04 ~ 작업중",
        "React Native 기반의 코인 트레이딩 봇 관리 앱을 제작하고 있습니다.",
        "전반적인 화면개발 작업과 봇 관련 기능 개발 작업을 했습니다.",
        "기능단위 TDD를 최초로 적용한 앱 입니다.",
      ],
      techStack: ["React Native", "Redux", "TypeScript", "Jest"],
    },
  },
  {
    title: "거래 관련 앱 제작 (앱 이름 미정)",
    list: {
      content: [
        "회사 프로젝트",
        "개발기간: 2022.04 ~ 작업중",
        "React Native 기반의 거래소 앱을 제작하고 있습니다.",
        "전반적인 화면개발 작업과 경매 기능 개발, 회원 정보 관련 기능 개발작업을 했습니다.",
      ],
      techStack: ["React Native", "React", "TypeScript", "Jest"],
    },
  },
];

const WorkExperienceData: workExperienceType[] = [
  {
    companyName: "Diffense",
    period: "2021.09 ~ 2021.10",
    list: ["웹디자인, 웹퍼블리싱 인턴"],
  },
  {
    companyName: "BLOCKWARE",
    period: "2021.12 ~ 재직중",
    list: ["프론트엔드"],
  },
];

const EducationData: educationType[] = [
  {
    schoolName: "한세사이버보안고등학교",
    period: "2020.04 ~ 2022.02",
    list: ["U센서 네트워크보안과"],
  },
  {
    schoolName: "한양사이버대학교",
    period: "2022.03 ~ 재학중",
    list: ["뉴미디어디자인학과"],
  },
];

const Email = "season_autumn@kakao.com";

export {
  LinkData,
  EducationData,
  WorkExperienceData,
  ProjectData,
  Email,
  TechStackData,
};
