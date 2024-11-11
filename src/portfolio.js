/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hwahyeon Park",
  greet:"안녕하세요",
  title: "박화현입니다.",
  subTitle: 
    emoji("- 배움을 즐기며 책임감을 가진 개발자🚀"),
  subTitle2: 
    "- 클라우드와 IoT 시스템에 특화된 소프트웨어 엔지니어 입니다.",  
  subTitle3: 
    "- 클라우드 서비스(AWS, Azure)를 활용한 인프라 구축 및 관리 경험을 보유하고 있으며, 임베디드 기기 통신 프로토콜과 데이터 보안에도 깊은 이해를 갖고 있습니다.",      
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


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "개발자",
      company: "Lenif",
      companylogo: require("./assets/images/lenif-logo.png"),
      date: "2022. 03  –  2024. 05",
      desc: "펌웨어 및 서버 개발 ",
      descBullets: [
        "ESP32 펌웨어 개발 (통신, AWS IoT)  ",
        "AWS 기반의 IoT 시스템 및 서버 개발",
        "IoT 기기 모니터링 및 데이터 분석 시스템 구축 ",
        "Azure 기반 IoT 시스템 확장 및 통합 "
      ]
    },
    {
      role: "연구원",
      company: "서울여자대학교 산학협력단",
      companylogo: require("./assets/images/swuLogo.jpg"),
      date: "2021. 08  -  2022. 02",
      desc: "과제 연구 및 프로그램 개발",
      descBullets: [
        "<디지털 트윈 IoT 서비스 환경의 SES 기반 정보보안 프레임워크 > 연구 ",
        "Asia Simulation Conference에 논문 제출 및 구두 발표"
      ]
    },
    {
      role: "인턴",
      company: "BRFRAME",
      companylogo: require("./assets/images/brframe_logo.png"),
      date: "July 2019  –  Febuary 2020",
      desc: "프로그램 개발 및 자료 분석",
      descBullets: [
        "Azure IoT 서비스를 활용한 다수 임베디드 시스템 개발 (Raspberry Pi, Edge Gateway(Dell), JETSON NANO(NVIDIA) 사용)  ",
        "한국전자기술연구원(KETI) 자체개발 IoT 플랫폼 Mobius를 활용한 센서 네트워크 프로젝트 진행 "
      ]
    }    
  ]
};

// Skills Section
const skillsSection = {  
  display: true,
  softwareSkills: [
    {
      title: "Programming Languages",
      skills: [
        { skillName: "Java", image: require("./assets/images/java.png") },
        { skillName: "Python", image: require("./assets/images/python.png") },
        { skillName: "C", image: require("./assets/images/c.png") },
        { skillName: "C++", image: require("./assets/images/cp.png") },                
        { skillName: "SQL", image: require("./assets/images/sql.png") }
      ]
    },
    {
      title: "Cloud Platforms",
      skills: [
        { skillName: "AWS IoT", image: require("./assets/images/awsiot.jpeg") },
        { skillName: "AWS EC2", image: require("./assets/images/ec2.jpeg") },
        { skillName: "AWS Lambda", image: require("./assets/images/lambda.png") },
        { skillName: "AWS RDS", image: require("./assets/images/rds.png") },
        { skillName: "AWS DynamoDB", image: require("./assets/images/dynamodb.jpg") },
        { skillName: "AWS S3", image: require("./assets/images/s3.jpeg") },
        { skillName: "Azure IoT Hub", image: require("./assets/images/azureiot.png") },
        { skillName: "Docker", image: require("./assets/images/docker.webp") }
      ]
    },
    {
      title: "Networking Protocols",
      skills: [
        { skillName: "MQTT", image: require("./assets/images/mqtt.png") },
        { skillName: "BLE", image: require("./assets/images/ble.webp") },
        { skillName: "REST API", image: require("./assets/images/restapi.jpg") },
        { skillName: "gRPC", image: require("./assets/images/grpc.png") }                
      ]
    },
    {
      title: "Development Boards",
      skills: [
        { skillName: "ESP32", image: require("./assets/images/esp32.jpg") },
        { skillName: "Raspberry Pi", image: require("./assets/images/raspberry.png") },
        { skillName: "Arduino", image: require("./assets/images/arduino.png") }      
      ]
    },
    {
      title: "Additional Tools",
      skills: [
        { skillName: "Datadog", image: require("./assets/images/datadog.png") },
        { skillName: "Android(Native)", image: require("./assets/images/android.png") }
      ]
    },
    {
      title: "Collaboration Tools",
      skills: [
        { skillName: "Notion", image: require("./assets/images/notion.png") },
        { skillName: "GitHub", image: require("./assets/images/git.jpg") },
        { skillName: "Figma", image: require("./assets/images/figma.png") }
      ]
    }
  ]
};
/* 
const skillsSection = {
  title: "Skills",
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
  */
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/cicons?d=gallery */
/*
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
*/

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
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/esp-iot.png"),
      projectName: "[Lenif] AWS IoT 를 연동한 ESP32 펌웨어 개발",
      projectDesc: "ESP32에 FreeRTOS 기반 펌웨어를 개발하고 AWS IoT와 연동하여 BLE 통신 및 OTA 업데이트 기능을 구현",
      footerLink: [
        {
          name: "View Project Information",
          url: "https://therapeutic-act-3bf.notion.site/AWS-IoT-ESP32-13a8c834785381b492ecfabfadc46d2e?pvs=4"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/server.png"),
      projectName: "[Lenif] AWS 기반의 MSA 서버 개발",
      projectDesc: "Microservice 아키텍처를 적용하여 서버 설계 및 관리, 데이터 수집 및 전송 체계 구축",
      footerLink: [
        {
          name: "View Project Information",
          url: "https://therapeutic-act-3bf.notion.site/AWS-MSA-13a8c834785381f396e1cb0b3beb615c?pvs=4"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
        emoji("🚩Google의 IoT 운영체제 Android Things를 활용하여 센서 데이터를 암호화하는 라이브러리 구현 프로젝트에 학부연구생으로 참여. Raspberry Pi에 센서를 연결하여 주기적으로 데이터를 수집하고, 암호화 후 데이터베이스로 전송하는 기능 개발"),
        subtitle2:
          emoji("🚩이 주제로 한국 시뮬레이션 학회에 ‘SEED 암호 라이브러리를 활용한 안전한 Android Things 통신 환경 연구’ 논문 등재"),
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
        emoji("🚩다양한 센서로 구성된 공간을 보안 알고리즘으로 통합하여 인증하는 프로젝트에 학부연구생으로 참여. Raspberry Pi에 센서를 연결하고 접근자 권한을 확인할 수 있는 센서 시스템 구성 "),
      subtitle2:
          emoji("🚩이 주제로 International Conference on Convergence Technology에 ‘IoT-based Space Security (ISS) Solution’ 논문 제출"),
      image: require("./assets/images/iss.png"),
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
        emoji("🚩SAE Level 5 무인 자동차 관제 환경에서 데이터를 구조적으로 정리하고 SES 암호 알고리즘을 통해 안전하게 보호하는 프로젝트에서 시나리오 계획 및 Android 구현 담당 "),
      subtitle2:
          emoji("🚩이 주제로 Asia Simulation Conference 2021(AsiaSim 2021)에 ‘A Study of Information Security Framework based on SES in Autonomous Vehicle Controlling Environment’ 논문 제출 및 Oral Session 발표"),
      image: require("./assets/images/AsiaSim.png"),
      footerLink: [
        {
          name: "View Paper Information",
          url: "https://link.springer.com/chapter/10.1007/978-981-19-6857-0_7"
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
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

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  workExperiences,
  bigProjects,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
