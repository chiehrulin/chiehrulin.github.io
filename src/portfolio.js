/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "ChiehRu's Portfolio",
  description: ".",
  og: {
    title: "ChiehRu Portfolio",
    type: "website",
    url: "http://chiehrulin.com/",
  },
};

//Home Page
const greeting = {
  title: "Jenny Lin",
  logo_name: "CRLin",
  // nickname: "Jenny Lin",
  subTitle:
    "Recently pursuing an MSIS degree at the University of Texas Austin. My passion lies in creating inclusive UX designs that ensure information accessibility for all.",
  resumeLink:
    "https://drive.google.com/file/d/1INZ4cRl1lUQjIDwZ64QsDEBXcMQlOc7i/view?usp=drive_link",
  portfolio_repository:
    "https://drive.google.com/file/d/1INZ4cRl1lUQjIDwZ64QsDEBXcMQlOc7i/view?usp=drive_link",
  githubProfile: "https://github.com/chiehrulin",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/chiehrulin",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chiehrulin/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:jenny.lin@utexas.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];
const skills = {
  data: [
    {
      title: "Hello! I am Jenny.",
      fileName: "",
      skills: [
        "I am currently focused on eHealth and inclusive UX design at UT Austin. My goal is to create thoughtful and accessible designs, making it useful and beneficial for everyone.",
        "With the background in Library and Information Science and extensive HCI study in the Netherlands, my academic journey has enriched my skills in data literacy, visualization, and incorporated coding to create user-friendly software.",
        "I am enthusiastic about the prospect of gaining more real-world experiences and making a meaningful impact by contributing to innovative design projects",
      ],
      softwareSkills: [
        {
          skillName: "",
          fontAwesomeClassname: "",
          style: {
            backgroundColor: "transparent",
          },
        },
        // {
        //   skillName: "Keras",
        //   fontAwesomeClassname: "simple-icons:keras",
        //   style: {
        //     backgroundColor: "white",
        //     color: "#D00000",
        //   },
        // },
        // {
        //   skillName: "PyTorch",
        //   fontAwesomeClassname: "logos-pytorch",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "ion-logo-python",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#3776AB",
        //   },
        // },
        // {
        //   skillName: "Deeplearning",
        //   imageSrc: "deeplearning_ai_logo.png",
        // },
        //],
        //},
        // {
        //   title: "Full Stack Development",
        //   fileName: "FullStackImg",
        //   skills: [
        //     "⚡ Building responsive website front end using React-Redux",
        //     "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        //     "⚡ Creating application backend in Node, Express & Flask",
        //   ],
        //   softwareSkills: [
        //     {
        //       skillName: "HTML5",
        //       fontAwesomeClassname: "simple-icons:html5",
        //       style: {
        //         color: "#E34F26",
        //       },
        //     },
        //     {
        //       skillName: "CSS3",
        //       fontAwesomeClassname: "fa-css3",
        //       style: {
        //         color: "#1572B6",
        //       },
        //     },
        //     {
        //       skillName: "Sass",
        //       fontAwesomeClassname: "simple-icons:sass",
        //       style: {
        //         color: "#CC6699",
        //       },
        //     },
        //     {
        //       skillName: "JavaScript",
        //       fontAwesomeClassname: "simple-icons:javascript",
        //       style: {
        //         backgroundColor: "#000000",
        //         color: "#F7DF1E",
        //       },
        //     },
        //     {
        //       skillName: "ReactJS",
        //       fontAwesomeClassname: "simple-icons:react",
        //       style: {
        //         color: "#61DAFB",
        //       },
        //     },
        //     {
        //       skillName: "NodeJS",
        //       fontAwesomeClassname: "simple-icons:node-dot-js",
        //       style: {
        //         color: "#339933",
        //       },
        //     },
        //     {
        //       skillName: "NPM",
        //       fontAwesomeClassname: "simple-icons:npm",
        //       style: {
        //         color: "#CB3837",
        //       },
        //     },
        //     {
        //       skillName: "Yarn",
        //       fontAwesomeClassname: "simple-icons:yarn",
        //       style: {
        //         color: "#2C8EBB",
        //       },
        //     },
        //     {
        //       skillName: "Gatsby",
        //       fontAwesomeClassname: "simple-icons:gatsby",
        //       style: {
        //         color: "#663399",
        //       },
        //     },
        //     {
        //       skillName: "Flutter",
        //       fontAwesomeClassname: "simple-icons:flutter",
        //       style: {
        //         color: "#02569B",
        //       },
        //     },
        //   ],
        // },
        // {
        //   title: "Cloud Infra-Architecture",
        //   fileName: "CloudInfraImg",
        //   skills: [
        //     "⚡ Experience working on multiple cloud platforms",
        //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
        //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
        //   ],
        //   softwareSkills: [
        //     {
        //       skillName: "GCP",
        //       fontAwesomeClassname: "simple-icons:googlecloud",
        //       style: {
        //         color: "#4285F4",
        //       },
        //     },
        //     {
        //       skillName: "AWS",
        //       fontAwesomeClassname: "simple-icons:amazonaws",
        //       style: {
        //         color: "#FF9900",
        //       },
        //     },
        //     {
        //       skillName: "Azure",
        //       fontAwesomeClassname: "simple-icons:microsoftazure",
        //       style: {
        //         color: "#0089D6",
        //       },
        //     },
        //     {
        //       skillName: "Firebase",
        //       fontAwesomeClassname: "simple-icons:firebase",
        //       style: {
        //         color: "#FFCA28",
        //       },
        //     },
        //     {
        //       skillName: "PostgreSQL",
        //       fontAwesomeClassname: "simple-icons:postgresql",
        //       style: {
        //         color: "#336791",
        //       },
        //     },
        //     {
        //       skillName: "MongoDB",
        //       fontAwesomeClassname: "simple-icons:mongodb",
        //       style: {
        //         color: "#47A248",
        //       },
        //     },
        //     {
        //       skillName: "Docker",
        //       fontAwesomeClassname: "simple-icons:docker",
        //       style: {
        //         color: "#1488C6",
        //       },
        //     },
        //     {
        //       skillName: "Kubernetes",
        //       fontAwesomeClassname: "simple-icons:kubernetes",
        //       style: {
        //         color: "#326CE5",
        //       },
        //     },
        //   ],
        // },
        // {
        //   title: "UI/UX Design",
        //   fileName: "DesignImg",
        //   skills: [
        //     "⚡ Designing highly attractive user interface for mobile and web applications",
        //     "⚡ Customizing logo designs and building logos from scratch",
        //     "⚡ Creating the flow of application functionalities to optimize user experience",
        //   ],
        //   softwareSkills: [
        //     {
        //       skillName: "Adobe XD",
        //       fontAwesomeClassname: "simple-icons:adobexd",
        //       style: {
        //         color: "#FF2BC2",
        //       },
        //     },
        //     {
        //       skillName: "Figma",
        //       fontAwesomeClassname: "simple-icons:figma",
        //       style: {
        //         color: "#F24E1E",
        //       },
        //     },
        //     {
        //       skillName: "Adobe Illustrator",
        //       fontAwesomeClassname: "simple-icons:adobeillustrator",
        //       style: {
        //         color: "#FF7C00",
        //       },
        //     },
        //     {
        //       skillName: "Inkscape",
        //       fontAwesomeClassname: "simple-icons:inkscape",
        //       style: {
        //         color: "#000000",
        //       },
        //     },
      ],
    },
  ],
};
// //Work1 Page
const work1 = {
  data: [
    {
      title: "Hello! I am Jenny!",
      fileName: "",
      work1: [
        " I developed a passion for information studies during my third year of university. At NTU, I conducted research on data literacy and data visualization, focusing on information behavior and UI/UX design.",
        " As an exchange student at Radboud University in the Netherlands (2022-2023), I delved into HCI and Communication studies, exploring AI and theories about information studies to help people get closer to the fast-changing techniques.",
        " During an internship at the Ministry of Foreign Affairs (R.O.C.), Department of Archives, Information Management, and Telecommunications, I implemented a new interface in their information system, improving document cataloging, archiving, and access.",
        " These experiences have strengthened my belief in the inseparable relationship between humans and information, leading me to contribute my skills and expertise to new projects and teams in the IT industry in the future.",
      ],
      softwareWork1: [
        {
          work1Name: "",
          fontAwesomeClassname: "",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          work1Name: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          work1Name: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          work1Name: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          work1Name: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      work1: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareWork1: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        //   {
        //     skillName: "CSS3",
        //     fontAwesomeClassname: "fa-css3",
        //     style: {
        //       color: "#1572B6",
        //     },
        //   },
        //   {
        //     skillName: "Sass",
        //     fontAwesomeClassname: "simple-icons:sass",
        //     style: {
        //       color: "#CC6699",
        //     },
        //   },
        //   {
        //     skillName: "JavaScript",
        //     fontAwesomeClassname: "simple-icons:javascript",
        //     style: {
        //       backgroundColor: "#000000",
        //       color: "#F7DF1E",
        //     },
        //   },
        //   {
        //     skillName: "ReactJS",
        //     fontAwesomeClassname: "simple-icons:react",
        //     style: {
        //       color: "#61DAFB",
        //     },
        //   },
        //   {
        //     skillName: "NodeJS",
        //     fontAwesomeClassname: "simple-icons:node-dot-js",
        //     style: {
        //       color: "#339933",
        //     },
        //   },
        //   {
        //     skillName: "NPM",
        //     fontAwesomeClassname: "simple-icons:npm",
        //     style: {
        //       color: "#CB3837",
        //     },
        //   },
        //   {
        //     skillName: "Yarn",
        //     fontAwesomeClassname: "simple-icons:yarn",
        //     style: {
        //       color: "#2C8EBB",
        //     },
        //   },
        //   {
        //     skillName: "Gatsby",
        //     fontAwesomeClassname: "simple-icons:gatsby",
        //     style: {
        //       color: "#663399",
        //     },
        //   },
        //   {
        //     skillName: "Flutter",
        //     fontAwesomeClassname: "simple-icons:flutter",
        //     style: {
        //       color: "#02569B",
        //     },
        //   },
        // ],
        // },
        // {
        //   title: "Cloud Infra-Architecture",
        //   fileName: "CloudInfraImg",
        //   work1: [
        //     "⚡ Experience working on multiple cloud platforms",
        //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
        //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
        //   ],
        //   softwareWork1: [
        //     {
        //       skillName: "GCP",
        //       fontAwesomeClassname: "simple-icons:googlecloud",
        //       style: {
        //         color: "#4285F4",
        //       },
        //     },
        //     {
        //       skillName: "AWS",
        //       fontAwesomeClassname: "simple-icons:amazonaws",
        //       style: {
        //         color: "#FF9900",
        //       },
        //     },
        //     {
        //       skillName: "Azure",
        //       fontAwesomeClassname: "simple-icons:microsoftazure",
        //       style: {
        //         color: "#0089D6",
        //       },
        //     },
        //     {
        //       skillName: "Firebase",
        //       fontAwesomeClassname: "simple-icons:firebase",
        //       style: {
        //         color: "#FFCA28",
        //       },
        //     },
        //     {
        //       skillName: "PostgreSQL",
        //       fontAwesomeClassname: "simple-icons:postgresql",
        //       style: {
        //         color: "#336791",
        //       },
        //     },
        //     {
        //       skillName: "MongoDB",
        //       fontAwesomeClassname: "simple-icons:mongodb",
        //       style: {
        //         color: "#47A248",
        //       },
        //     },
        //     {
        //       skillName: "Docker",
        //       fontAwesomeClassname: "simple-icons:docker",
        //       style: {
        //         color: "#1488C6",
        //       },
        //     },
        //     {
        //       skillName: "Kubernetes",
        //       fontAwesomeClassname: "simple-icons:kubernetes",
        //       style: {
        //         color: "#326CE5",
        //       },
        //     },
        //   ],
        // },
        // {
        //   title: "UI/UX Design",
        //   fileName: "DesignImg",
        //   skills: [
        //     "⚡ Designing highly attractive user interface for mobile and web applications",
        //     "⚡ Customizing logo designs and building logos from scratch",
        //     "⚡ Creating the flow of application functionalities to optimize user experience",
        //   ],
        //   softwareSkills: [
        //     {
        //       skillName: "Adobe XD",
        //       fontAwesomeClassname: "simple-icons:adobexd",
        //       style: {
        //         color: "#FF2BC2",
        //       },
        //     },
        //     {
        //       skillName: "Figma",
        //       fontAwesomeClassname: "simple-icons:figma",
        //       style: {
        //         color: "#F24E1E",
        //       },
        //     },
        //     {
        //       skillName: "Adobe Illustrator",
        //       fontAwesomeClassname: "simple-icons:adobeillustrator",
        //       style: {
        //         color: "#FF7C00",
        //       },
        //     },
        //     {
        //       skillName: "Inkscape",
        //       fontAwesomeClassname: "simple-icons:inkscape",
        //       style: {
        //         color: "#000000",
        //       },
        //     },
      ],
    },
  ],
};

// Experience Page
const experience = {
  // title: "Experience",
  // subtitle: "Work, Internship and Volunteership",
  // description:
  //   "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  // header_image_path: "experience.svg",

  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Research Assistant",
          company: "School of Information, The University of Texas at Austin",
          // company_url: "https://legatohealthtech.com/",
          logo_path: "ischool.png",
          duration: "Sep 2023 - Present",
          location: "Austin, Texas",
          description:
            "Conducting systematic literature review to evaluate health IT. Designing effective eHealth literacy interventions for older adults.",
          color: "#0879bf",
        },
        {
          title: "Administrative Services Associate",
          company:
            "Univeristy of Texas Libraries, The University of Texas at Austin",
          // company_url: "https://legatohealthtech.com/",
          logo_path: "library.png",
          duration: "Aug 2023 - Present",
          location: "Austin, Texas",
          description:
            "Organizing fiscal documents and files in preparation for retention and destruction.",
          color: "#0879bf",
        },
        {
          title: "UX Internship",
          company:
            "Department of Archives, Information Management and Telecommunications, Ministry of Foreign Affairs (R.O.C.)",
          // company_url: "https://legatohealthtech.com/",
          logo_path: "ROC_Ministry_of_Foreign_Affairs.png",
          duration: "Mar 2022 - Jun 2022",
          location: "Taipei, Taiwan",
          description:
            "Designed a prototype and prepared A/B test to apply a new interface in the information system.\tManaged, cataloged, archived, analyzed, and transferred 1,000,000+ files to National Archives Administration in two months.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer Intern",
          company: "Champions Education Association",
          //company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "de.png",
          duration: "Sep 2021 - Jun 2022",
          location: "Taipei, Taiwan",
          description:
            "Created mind games for teenagers on LINE Application by Python. Increased participants rate by 15%, compared to last season by using interactive chatbot.",
          color: "#9b1578",
        },
        {
          title: "Resaerch Assistant",
          company: "Department of Library and Information Science, NTU",
          //company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "National_Taiwan_University.png",
          duration: "Sep 2021 - Jan 2022",
          location: "Taipei, Taiwan",
          description:
            "Analyzed information visualization on epidemic websites throughout the world. Tested questionnaires, conducted visual-elicitation interviews, and analyzed students’ recognition of data in different disciplines.",
          color: "#9b1578",
        },
        {
          title: "Translator",
          company: "HENNGE Taiwan, Inc.",
          //company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "hennge.png",
          duration: "Feb 2021 - Jul 2022",
          location: "Taipei, Taiwan",
          description:
            "Translated articles form Japanese and English into Chinese on blog.",
          color: "#fc1f20",
        },
        {
          title: "Consultant Internship",
          company: "Apply Consultant Company",
          //company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "apply.png",
          duration: "Jan 2020 - Feb 2020",
          location: "Taipei, Taiwan",
          description:
            "Introduced products by telemarketing and improved sales rate by 10%. Organized and held a presentation of the product to the public.",
          color: "#fc1f20",
        },
        {
          title: "Statistical Analyst",
          company: "MSL Group",
          //company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "MSL.png",
          duration: "Jan 2019 - Feb 2019",
          location: "Taipei, Taiwan",
          description:
            "Calculated the number of Google Map guide stars and analyzed the market trends. Conducted tourism surveys, and promoted the tourist industry by social media with the Tourism Bureau.",
          color: "#fc1f20",
        },
        {
          title: "Administrative Assistant",
          company: "Montessori Interactive",
          //company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "MI.jpeg",
          duration: "Jan 2018 - Feb 2018",
          location: "Taipei, Taiwan",
          description:
            "Managed an E-commerce website and promoted products by Google Ads. Organized customer data in a database and analyzed their purchase behavior in the market.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Leadership/Extracurriculars",
      experiences: [
        {
          title: "NTU Student Ambassadors",
          company: "Member",
          //company_url: "https://www.tiktok.com/en/",
          logo_path: "amb.jpeg",
          duration: "Sep 2020 - Jun 2023",
          //location: "San Francisco, USA",
          description:
            "Practiced diplomatic etiquette in international conferences. Received foreign guests, performed campus guide and became emcee in formal forums.",
          color: "#000000",
        },
        {
          title: "PTY Social Service Team, NTU",
          company: "Member",
          //company_url: "https://www.delhivery.com/",
          logo_path: "pty.png",
          duration: "Sep 2020 - Sep 2021",
          //location: "Gurgaon, Haryana",
          description:
            "Provided teaching services to rural primary schools, assisting and caring for children who lack educational resources.",
          color: "#ee3c26",
        },
        {
          title: "International Companions for Learning Team, NTU",
          company: "Member",
          //company_url: "https://www.delhivery.com/",
          logo_path: "icl.png",
          duration: "Sep 2020 - Sep 2021",
          //location: "Gurgaon, Haryana",
          description:
            "Promoted cultural awareness values and service learning. Taught English in remote areas together with my international companions.",
          color: "#ee3c26",
        },
        {
          title: "Japanese Language and Literature Student Association, NTU",
          company: "President",
          //company_url:
          //"https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "ntujp.jpeg",
          duration: "Sep 2019 - Sep 2020",
          //location: "Work From Home",
          description:
            "Handled school documents and communicated between professors as well as classmates. Held career speeches as well as sociative performances, and organized the association.",
          color: "#0071C5",
        },
        {
          title: "General Affairs Department of Social Science Seed Club, NTU",
          company: "Vice Leader of Financial Section",
          //company_url:
          //"https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "seed.png",
          duration: "Sep 2018 - Sep 2019",
          //location: "Work From Home",
          description:
            "Formulated budgets for camp expenses and contacted manufacturers for subsidies.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Awards",
      experiences: [
        {
          title: "Best Poster Award Runners-Up",
          company: "iConference 2022 (👉click here)",
          company_url: "https://www.ischools.org/past-conferences/2022",
          logo_path: "iConf.jpeg",
          duration: "Mar 2022",
          //location: "Hyderabad, Telangana",
          //description:
          //   "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "NTU Altruism Award",
          company: "National Taiwan University (NTU)",
          //company_url: "https://www.microsoft.com/",
          logo_path: "ntu.png",
          duration: "Sep 2021",
          //location: "Hyderabad, Telangana",
          // description:
          //   "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
      ],
    },
  ],
};
// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};
// 要連到外部連結!
// const degreeout = {
//   degreeout: [
//     {
//       title: "Optimize NTU Press Website",
//       subtitle: "3 UX Designers Team (Sep 2021 - Jan 2022)",
//       logo_path: "ntupress.png",
//       //alt_name: "Indiana University Bloomington",
//       duration: "Project",
//       descriptions: [
//         "▪️ Redesign a platform that enables users to relish in their memories, preserving and commemorating the beautiful moments associated with NTU.",
//         "▪️ Create an immersive website that provides users with an interactive and visually appealing experience, while still prioritizing usability and ease of navigation.",
//       ],
//       website_link:
//         "https://www.figma.com/proto/xAldf4Ekl6izoc5QYWPGsU/%E5%8F%B0%E5%A4%A7%E5%87%BA%E7%89%88%E4%B8%AD%E5%BF%83?type=design&node-id=306-115&t=WJJC2tj4jgkdgnY8-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=306%3A115&show-proto-sidebar=1&mode=design",
//     },
//   ],
// };

const degreein = {
  degreein: [
    {
      title: "My UT | 4 UX Designers Team ",
      subtitle:
        "Responsibility: UX Research, UI Design, Prototype, Collaboration",
      logo_path: "myut.png",
      //alt_name: "IIITDM Kurnool",
      duration: "Aug. - Nov. 2023",
      descriptions: [
        "Redesigned the University of Texas at Austin's student portal to optimize user flow and design concepts, specifically focusing on mobile accessibility.",
      ],
      website_link: "/project3",
    },
    // {
    //   title: "Optimize NTU Press Website",
    //   subtitle: "3 UX Designers Team (Sep 2021 - Jan 2022)",
    //   logo_path: "ntupress.png",
    //   //alt_name: "IIITDM Kurnool",
    //   duration: "Project",
    //   descriptions: [
    //     "Designed an immersive website to improve user experience as well as inclusive accessibility. Conducted iteration and applied interactive components that adhered to the principles of heuristic evaluation for user-centered design.",
    //   ],
    //   website_link: "/project2",
    // },

    // {
    //   title:
    //     "How do students from different disciplines perceive the concept of “data”?: A visual elicitation method",
    //   subtitle: "Tsai, Tien-I; Chang, Yun-Chi; Lin, Chieh-Ru (2022)",
    //   logo_path: "iConf.jpeg",
    //   //alt_name: "IIITDM Kurnool",
    //   duration: "Publication",
    //   descriptions: [
    //     "Conducted synchronous online visual-elicitation interviews by transforming Hartel’s iSquare draw-and-write technique into the draw-and-tell dSquare approach. Tested questionnaires, and analyzed 37 undergraduate students’ recognition of data in different disciplines.",

    //   ],
    //   website_link: "/project1",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  work1,
  competitiveSites,
  degreein,
  // degreeout,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
