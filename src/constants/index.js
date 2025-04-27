import { desc } from "motion/react-client";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import { time } from "motion";

// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const HERO_CONTENT = `A software engineer with 3+ years of experience specializing in Python development and data-driven solutions. Skilled in building scalable backend systems, developing robust APIs, and working extensively with data extraction, reconciliation, and management.
Passionate about creating secure, efficient applications that solve real-world data challenges.
Experienced across SQL and NoSQL databases, cloud platforms, and containerized environments.
Currently expanding backend expertise with Node.js to broaden my technical toolkit.`

// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const ABOUT_TEXT = `I'm a backend-focused software engineer based in Bangalore with over 3 years of professional experience.
My expertise lies in Python development, building scalable APIs, and creating data-driven solutions for businesses.
I've worked extensively on projects involving data extraction, reconciliation, and test data management, ensuring security and efficiency at every step.
Beyond Python, I have hands-on experience with SQL and NoSQL databases, containerization with Docker, and cloud services on Azure.
Currently, I'm expanding my backend skills with Node.js to stay versatile and deliver even more robust solutions.`

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Project Engineer Development",
    company: " Avo Automation",
    description: `At Avo Automation, I work on iTDM, a test data management product, where I focus on backend solutions for data extraction, management, and dynamic data masking.
I played a key role in enhancing the execution components of our internal test automation tool, improving its scalability and integration with diverse data sources (SQL, NoSQL, file storage).
My contributions help streamline data provisioning, ensure security compliance, and improve testing efficiency.`,
    technologies: ["Python", "PySpark", "Flask", "SQL databases", "NoSQL", "Node.js"],
  },
  {
    year: "2022 - 2023",
    role: "Associate Software Engineer",
    company: "Bot IT Services",
    description: `At Bot IT Services, I developed scalable backend systems, focusing on data extraction and reconciliation for various domains, including finance, e-commerce, and compliance.
I built robust APIs to support services like ESI, EPF, TDS data extraction, and custom invoice data reconciliation.
Additionally, I worked on the backend for a code grading application, automating the evaluation of UiPath/Automation Anywhere scripts, ensuring quality and adherence to defined rules.
I collaborated closely with cross-functional teams to optimize backend solutions, streamline development processes, and ensure seamless production deployments.`,
    technologies: ["Python", "Pandas", "Flask", "MySql", "MongoDB", "Docker", "Kubernetes", "Azure", "Git", "GitHub"],
  },
];

export const PROJECTS = [
  {
    title: "iTDM (Avo Automation)",
    image: project1,
    // description:
    //   "A test data management solution developed as part of the Ao Automation team. I focused on building backend components for data extraction, dynamic data masking, and test data provisioning. The product helps streamline data management, improve security compliance (GDPR, CCPA), and enhance integration with diverse data sources (SQL, NoSQL, and file storage). My contributions also involved optimizing the execution components of our internal test automation tool, boosting efficiency in testing workflows.",
    description:
      "Developed backend components for the iTDM product, focusing on data extraction, dynamic data masking, and secure data provisioning. Optimized integration with SQL, NoSQL, and file storage, improving testing efficiency. Contributed to the execution framework of our internal test automation tool, enhancing scalability and performance.",
    technologies: ["Python", "PySpark", "Flask", "Cassandra", "SQL databases", "NoSQL", "Git"],
    timeline: "Aug 2023 - Present",
  },
  {
    title: "Assure (Avo Automation)",
    image: project4,
    description:
      "Worked on optimizing the execution component of Assure, test automation product. Focused on enhancing the efficiency and performance of test case execution. Additionally, contributed to folder structure optimization, improving the organization and scalability of the project for better maintainability.",
    technologies: ["Node.js", "JavaScript", "MongoDB", "Git", "GitHub"],
    timeline: "Aug 2023 - Present",
  },
  {
    title: "QuickBots (Bot IT Services)",
    image: project2,
    // description:
    //   "Developed APIs and backend services for a variety of data extraction and reconciliation tasks, including ESI, EPF, TDS data extraction, invoice reconciliation, and business card data extraction. I worked on handling large datasets, ensuring that the backend systems were scalable, and helped deliver production-ready solutions for clients in diverse sectors. This included collaborating with cross-functional teams to ensure seamless deployment and integration.",
    description: "Built APIs for data extraction and reconciliation tasks, including ESI, EPF, TDS, GSTR2B, Swiggy and Zomato. Worked on scalable backend systems for diverse clients, optimizing deployment and ensuring robust production environments.",
    technologies: ["Python", "Flask", "Pandas", "MySQL", "MongoDB", "Docker", "Kubernetes", "Azure" , "Git", "GitHub"],
    timeline: "Jul 2022 - Jun 2023",
  },
  {
    title: "CodeInsight (Bot IT Services)",
    image: project3,
    description: "Developed the backend for a code grading application that automates the evaluation of UiPath and Automation Anywhere scripts, ensuring quality compliance and improving deployment efficiency.",
      // "Developed the backend for an application that automates the grading of UiPath and Automation Anywhere scripts. I focused on building the core functionality to evaluate scripts based on defined rules and automate the quality-checking process. The system ensured the scripts adhered to quality standards, improving overall script deployment efficiency and ensuring compliance.",
    technologies: ["Python", "Flask", "Git", "GitHub", ],
    timeline: "May 2022 - Jun 2022",
  },
];

export const CONTACT = {
  address: "Bangalore, India",
  phoneNo: "+91 8217341330 ",
  email: "amritranjanamc@gmail.com",
};
