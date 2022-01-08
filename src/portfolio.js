/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hwahyeon Park",
  greet:"안녕하세요",
  title: "박화현입니다.",
  subTitle: emoji(
    "호기심이 많고 배움을 즐기며 포기는 하지 않는 개발자🚀"
  ),
  language: "Java / C / Python ",
  platform: "Android / Azure / Docker / Git ",
  board: "RaspberryPi / Arduino / Lattepanda / Kinect ",
  resumeLink:"", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hwahyeon-park",
  gmail: "hwahyeonp25@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "새로운 기술이라도 호기심을 가지고 배우는 도전가",
  skills: [
    emoji(
      "⚡ IoT / Embedded 프로젝트 다수 경험"
    ),
    emoji(
      "⚡ 각종 개발 보드 경험 (Arduino, RaspberryPi, Kinect(MS Azure), LattePanda, NXP Pico, Edge Gateway(Dell), JETSON NANO(NVIDIA), Vision AI Development Kit(Qualcomm) 등)"
    ),
    emoji(
      "⚡ 서드파티(ThirdParty) 서비스 활용 (Android, Azure, Firebase, Android Things, Docker, Mobius 등)"
    ),
    emoji("⚡ 암호 알고리즘 활용 프로젝트 경험"),

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/cicons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fa-solid fa-c"
    },    {
      skillName: "C++",
      fontAwesomeClassname: "fa-solid fa-c"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },

    {
      skillName: "Raspberry-pi",
      fontAwesomeClassname: "fab fa-raspberry-pi"
    },
    {
      skillName: "Arduino",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Kinect",
      fontAwesomeClassname: "fas fa-camera"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Seoul Women's University",
      logo: require("./assets/images/swuLogo.jpg"),
      subHeader: "정보보호학과 (공학사)",//Bachelor of Engineering
      subHeader2:"중어중문학과 (문학사)",//Bachelor of Arts
      duration: "March 2016 - August 2021",//March 2016 - August 2021
      //desc: "Department of Information Security",//Department of Information Security
      //desc2: "Department of Chinese Language & Literature",//Department of Chinese Language & Literature
      descBullets: [
        "정보보호학과 학부연구생 참여 프로젝트 4개, 국내논문 1편, 해외논문 1편 출품",
        "Develop & Deploy 어드바이저 3학기 활동"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "IoT / Embedded", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "인턴",
      company: "BRFRAME",
      companylogo: require("./assets/images/brframeLogo-eng.jfif"),
      date: "July 2019  –  Febuary 2020",
      desc: "프로그램 개발 및 자료 분석",
      descBullets: [
        "Azure IoT 서비스를 활용한 다수 임베디드 시스템 개발 (Raspberry Pi, Edge Gateway(Dell), JETSON NANO(NVIDIA) 사용)  ",
        "Azure AI + Machine Learning 서비스를 활용한 다수 임베디드 시스템 개발 (Kinect(MS Azure), Vision AI Development Kit(Qualcomm) 사용)",
        "한국전자기술연구원(KETI) 자체개발 IoT 플랫폼 Mobius를 활용한 센서 네트워크 프로젝트 진행 "
      ]
    },
    {
      role: "연구원",
      company: "서울여자대학교 산학협력단",
      companylogo: require("./assets/images/swuLogo.jpg"),
      date: "August 2021  –  Present ",
      desc: "과제 연구, 논문 작성 및 프로그램 개발",
      descBullets: [
        "졸업 후, 모교에서 IoT 환경 암호 라이브러리 개발 연구 과제 참여 ",
        "Asia Simulation Conference에서 <A Study on SES-based Information Security Framework for Autonomous Vehicle Controlling Environment> 주제로 논문 제출 및 구두 발표"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Research 🏆 "),
  subtitle:
    "Some projects and papers that I have done !",

  achievementsCards: [
    {
      title: "Android Things를 활용한 암호화 라이브러리 구현",
      subtitle:
        emoji("🚩Google에서 개발한 IoT 운영체제인 Android Things를 활용하여 센서 값을 암호화하는 라이브러리를 구현하는 프로젝트에 학부연구생으로 참여하여, Raspberry Pi에 센서를 연결하고 지정한 주기대로 센서데이터를 받아 암호화하고 데이터베이스에 전송하는 기능을 구현하였습니다. "),
        subtitle2:
          emoji("🚩이 주제로 한국 시뮬레이션 학회에 'SEED 암호 라이브러리를 활용한 안전한 Android Things 통신 환경연구'라는 논문을 등재하였습니다."),
        image: require("./assets/images/AndroidThings.jpg"),
      footerLink: [
        {
          name: "View Paper Information",
          url: "https://www.semanticscholar.org/paper/A-Study-on-the-Secure-Communication-at-Android-the-Hwahyeon-Yoon/e1913ebf7c998239f926365948023c35f15557a9"
        }
      ]
    },
    {
      title: "IoT 기반 공간 보안 솔루션",
      subtitle:
        emoji("🚩여러 개의 센서들로 이루어진 공간을 하나의 보안 알고리즘으로 만들어 인증하는 프로젝트에 학부연구생으로 참여하여, Raspberry Pi에 다양한 센서들을 연결하고 접근자의 권한을 확인할 수 있도록 센서 시스템를 정리하였습니다. "),
      subtitle2:
          emoji("🚩이 주제로 International Conference on Convergence Technology에 'IoT-based Sapce Security(ISS) Solution'라는 논문을 제출하였습니다."),
      image: require("./assets/images/paper.svg"),
      footerLink: [
        {
          name: "View Paper",
          url: "http://iacst.org/iacst/Conferences/ICCT2018/sessions/Session%20ST-P4/890.htm"
        }
      ]
    },
    {
      title: "무인 자동차 관제 환경의 SES 기반 정보보안 프레임워크 연구",
      subtitle:
        emoji("🚩많은 데이터들을 실시간으로 처리하고 보호해야하는 SAE Level 5 수준의 무인 자동차 관제 환경에서 데이터를 구조적으로 정리하고 안전하게 보호할 수 있도록 SES 암호 알고리즘을 사용할 수 있도록 시나리오 계획 및 안드로이드 구현을 담당하였습니다. "),
      subtitle2:
          emoji("🚩이 주제로 Virtual Conference Asia Simulation Conference 2021(AsiaSim 2021)에 'A Study of Information Security Framework based on SES in Autonomous Vehicle Controlling Environment'라는 논문을 제출 및 학회 Oral Session에 발표를 하였습니다."),
      image: require("./assets/images/AsiaSim.png"),
      footerLink: [
        {
          name: "Conference Site",
          url: "http://www.asiasim2021.org/index.html"
        },
        {
          name: "Conference Program Information",
          url: "http://www.asiasim2021.org/files/AsiaSim2021%20pamphlet.pdf"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "hwahyeonp25@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
