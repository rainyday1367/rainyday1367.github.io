import { createI18n } from 'vue-i18n'

const messages = {
  ko: {
    nav: { about: 'About', resume: 'Resume', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    home: {
      name: '정동한',
      title1: 'System Engineer',
      title2: 'Cloud Engineer',
      subtitle: '개발 전 과정에 대한 경험을 바탕으로 개발자가 필요로 하는 인프라를 제공하고 원활한 소통을 지향하는 인프라 엔지니어입니다.<br/>백엔드 개발 경험과 무중단 아키텍처 설계 경험을 통해 안정적이고 유연한 인프라 환경을 지향합니다.<br/>현재는 IaC와 컨테이너, AI 툴에 관심을 두고 학습하고 있습니다.',
      viewWork: '프로젝트 보기',
      contactMe: '연락하기'
    },
    resume: {
      title: '이력서 (Resume)',
      eduTitle: '🎓 학력 (Education)',
      edu1: '강원대학교 본교',
      edu1Desc: '컴퓨터공학과 (학점 3.73 / 4.5)',
      edu2: '국립 경상대학교',
      edu2Desc: '정보통신공학과 (학점 3.76 / 4.5)',
      certTitle: '🏆 자격 및 수상',
      cert1: 'RHCSA 자격증 취득',
      cert1Desc: 'Red Hat 시스템 관리자 자격증.',
      cert2: 'BEYOND SW CAMP 최종 프로젝트 1위',
      cert2Desc: "'Core Flow' 아키텍처 구축/배포.",
      cert3: '강원대 IT대학 졸업작품 우수상',
      cert3Desc: '블록체인 기반 기숙사 증명서 시스템.',
      cert4: '정보처리기사',
      cert4Desc: '국가공인 자격 취득.',
      cert5: '운전면허 1종 보통',
      cert5Desc: '자동차운전면허 취득.',
      expTitle: '💼 교육 및 활동',
      exp1: '용산 새싹 4기 양성과정',
      exp1Desc: 'Network, DB, Linux, AWS, k8s 수강 중',
      exp2: '한화시스템 Beyond SW CAMP 14기 수료',
      exp2Desc: '백엔드 과정 (Spring Boot, Vue.js, MariaDB, Docker, k8s, AWS)',
      exp3: '강원대 AWS Hackathon',
      exp3Desc: '러브리허설 데이팅 봇 (Lambda 백엔드)',
      exp4: '강원대 원격 교육 센터',
      exp4Desc: '영상 촬영 및 편집 업무',
      exp5: '(주)로보그램 인공지능 로봇연구소',
      exp5Desc: '교재 검토, Shell Script 작성, Open API 연동'
    },
    skills: {
      title: '보유 기술 (Skills)',
      dev: '개발 (Development)',
      infra: '인프라 (Infrastructure)',
      tool: '도구 (Tools)'
    },
    projects: {
      title: '프로젝트 (Projects)',
      p1Title: 'CoreFlow (협업 일정 관리 시스템)',
      p1Desc: '배포 담당으로 CI/CD, AWS 배포를 수행했습니다.<br/>Github Actions와 AWS EC2/S3/Load Balancer 활용해 Blue-Green 무중단 배포 환경을 구축하였습니다.<br/>파사드 패턴을 적용하여 CRUD 작업을 수행했습니다.',
      p2Title: 'MyLocalDiary',
      p2Desc: '지도 API를 활용하여 장소를 다이어리 형식으로 공유할 수 있는 SNS 시스템을 구축했습니다.<br/>JWT와 Spring Security를 활용해서 로그인 로직을 구현하였습니다.',
      p3Title: '블록체인 증명서 관리 시스템 (졸업 작품)',
      p3Desc: '로컬 Ethereum 네트워크와 Solidity 스마트 컨트랙트를 통해 학생 인증이 완료된 학생은 학생 증명 서류를 PDF로 발급 받을 수 있는 시스템의 기획을 담당했습니다.'
    },
    contact: {
      title: '연락처 (Contact)',
      subtitle: "Let's Build Something <span class='text-gradient font-bold'>Amazing</span> Together",
      desc: '함께 일할 기회를 찾고 있습니다.<br/>실무에서의 경험과 성장의 기회를 환영합니다.<br/>가벼운 대화도 좋습니다.',
      phone: '전화번호',
      github: 'GitHub'
    }
  },
  en: {
    nav: { about: 'About', resume: 'Resume', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    home: {
      name: 'Jung Dong Han',
      title1: 'System Engineer',
      title2: 'Cloud Engineer',
      subtitle: 'An infrastructure engineer aiming for seamless communication by providing the infrastructure developers need, based on full-cycle development experience.<br/>I strive for a stable and flexible infrastructure environment leverages backend development and zero-downtime architecture design experience.<br/>Currently learning and focusing on IaC, containers, and AI tools.',
      viewWork: 'View My Work',
      contactMe: 'Contact Me'
    },
    resume: {
      title: 'Resume',
      eduTitle: '🎓 Education',
      edu1: 'Kangwon National University',
      edu1Desc: 'Computer Engineering (GPA 3.73 / 4.5)',
      edu2: 'Kyungsang National University',
      edu2Desc: 'Information and Communication Engineering (GPA 3.76 / 4.5)',
      certTitle: '🏆 Awards & Certificates',
      cert1: 'RHCSA Certification',
      cert1Desc: 'Red Hat Certified System Administrator.',
      cert2: '1st Place, BEYOND SW CAMP Final Project',
      cert2Desc: 'Core Flow architecture and deployment.',
      cert3: 'Excellence Award, IT College Graduation Project',
      cert3Desc: 'Blockchain-based dormitory certificate system.',
      cert4: 'Engineer Information Processing',
      cert4Desc: 'National technical qualification.',
      cert5: 'Driver License (Class 1 Normal)',
      cert5Desc: 'Acquired regular driver license.',
      expTitle: '💼 Experience & Activities',
      exp1: 'Yongsan SeSAC 4th Cohort',
      exp1Desc: 'Taking Network, DB, Linux, AWS, k8s courses.',
      exp2: 'Hanwha Systems Beyond SW CAMP 14th',
      exp2Desc: 'Backend track (Spring Boot, Vue.js, DB, Docker, k8s, AWS)',
      exp3: 'AWS Hackathon at KNU',
      exp3Desc: 'Dating bot Lambda backend development.',
      exp4: 'KNU Distance Education Center',
      exp4Desc: 'Video recording and editing assistant.',
      exp5: 'Robogram AI Robotics Lab',
      exp5Desc: 'Textbook review, Shell scripting, Open API integration.'
    },
    skills: {
      title: 'Technical Skills',
      dev: 'Development',
      infra: 'Infrastructure',
      tool: 'Tools'
    },
    projects: {
      title: 'Projects',
      p1Title: 'CoreFlow (Collaboration Schedule Management)',
      p1Desc: 'Handled deployment using CI/CD and AWS.<br/>Built a Blue-Green zero-downtime deployment environment with Github Actions, EC2, S3, and Load Balancer.<br/>Implemented CRUD operations applying the Facade pattern.',
      p2Title: 'MyLocalDiary',
      p2Desc: 'Built an SNS system using Map APIs to share locations in a diary format.<br/>Implemented login logic utilizing JWT and Spring Security.',
      p3Title: 'Blockchain Certificate Management (Graduation Project)',
      p3Desc: 'Planned a system where verified students can be issued PDF certificates via local Ethereum network and Solidity smart contracts.'
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's Build Something <span class='text-gradient font-bold'>Amazing</span> Together",
      desc: 'Looking for an opportunity to work together.<br/>I welcome practical experience and opportunities for growth.<br/>A casual chat is also welcome.',
      phone: 'Phone',
      github: 'GitHub'
    }
  },
  ja: {
    nav: { about: 'About', resume: 'Resume', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    home: {
      name: 'チョン・ドンハン',
      title1: 'System Engineer',
      title2: 'Cloud Engineer',
      subtitle: '開発全過程の経験を基に、開発者が必要とするインフラを提供し、円滑なコミュニケーションを目指すインフラエンジニアです。<br/>バックエンド開発と無停止アーキテクチャ設計の経験から、安定して柔軟なインフラ環境を追求しています。<br/>現在はIaC、コンテナ、AIツールに関心を持ち学習しています。',
      viewWork: 'プロジェクトを見る',
      contactMe: 'お問い合わせ'
    },
    resume: {
      title: '履歴書 (Resume)',
      eduTitle: '🎓 学歴 (Education)',
      edu1: '江原大学校 本校',
      edu1Desc: 'コンピュータ工学科 (GPA 3.73 / 4.5)',
      edu2: '国立慶尚大学校',
      edu2Desc: '情報通信工学科 (GPA 3.76 / 4.5)',
      certTitle: '🏆 資格および受賞',
      cert1: 'RHCSA 資格取得',
      cert1Desc: 'Red Hat 認定システム管理者。',
      cert2: 'BEYOND SW CAMP 最終プロジェクト 1位',
      cert2Desc: "'Core Flow' アーキテクチャ構築/デプロイ。",
      cert3: '江原大 IT大学 卒業制作 優秀賞',
      cert3Desc: 'ブロックチェーン基盤の寮証明書システム。',
      cert4: '情報処理技師',
      cert4Desc: '国家公認資格取得。',
      cert5: '運転免許 1種 普通',
      cert5Desc: '普通自動車免許取得。',
      expTitle: '💼 教育および活動',
      exp1: '龍山 SeSAC 4期 養成課程',
      exp1Desc: 'Network, DB, Linux, AWS, k8s 受講中',
      exp2: 'ハンファシステム Beyond SW CAMP 14期 修了',
      exp2Desc: 'バックエンド課程 (Spring Boot, Vue, Docker, k8s, AWS)',
      exp3: '江原大学校 AWS Hackathon',
      exp3Desc: 'デートボットLambdaバックエンド開発。',
      exp4: '江原大学校 遠隔教育革新センター',
      exp4Desc: '映像撮影および編集業務。',
      exp5: '(株)ロボグラム 人工知能ロボット研究所',
      exp5Desc: '教材検討、Shell Script作成、Open API連携。'
    },
    skills: {
      title: '保有スキル (Skills)',
      dev: '開発 (Development)',
      infra: 'インフラ (Infrastructure)',
      tool: 'ツール (Tools)'
    },
    projects: {
      title: 'プロジェクト (Projects)',
      p1Title: 'CoreFlow (協業スケジュール管理システム)',
      p1Desc: 'デプロイ担当としてCI/CD、AWSデプロイを実行。<br/>Github ActionsとAWS EC2/S3/ELBを用いてBlue-Green無停止デプロイ環境を構築。<br/>Facadeパターンを適用しCRUD操作を実装。',
      p2Title: 'MyLocalDiary',
      p2Desc: '地図APIを活用し、場所を日記形式で共有できるSNSシステムを構築。<br/>JWTとSpring Securityを利用してログインロジックを実装。',
      p3Title: 'ブロックチェーン証明書管理システム (卒業制作)',
      p3Desc: 'ローカルEthereumネットワークとSolidityスマートコントラクトを通じ、学生認証が完了した学生が証明書をPDFで発行できるシステムを企画。'
    },
    contact: {
      title: '連絡先 (Contact)',
      subtitle: "Let's Build Something <span class='text-gradient font-bold'>Amazing</span> Together",
      desc: '一緒に働く機会を探しています。<br/>実務での経験と成長の機会を歓迎します。<br/>軽い会話も大歓迎です。',
      phone: '電話番号',
      github: 'GitHub'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'ko',
  fallbackLocale: 'en',
  globalInjection: true,
  messages
})
