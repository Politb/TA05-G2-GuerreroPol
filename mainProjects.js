const projects = [
  {
    title: "First project",
    description: `This project integrates Fail2Ban with Discord to provide real‑time
            security alerts. The system detects brute‑force and DoS attacks on
            services like SSH and Apache, automatically blocks malicious IPs,
            and sends instant notifications to a Discord channel via Webhooks.`,
    image: "img/lifeclubmma.png",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Stripe"],
    github: "http://github.com/myuser/proyecto1",
    link: "https://www.proyecto1.com",
  },
  {
    title: "Second project",
    description:
      "                        A modern website designed for a Mixed Martial Arts gym, showcasing classes, schedules, trainers, and promotional content. The goal is to create a dynamic and visually engaging platform to attract new members.",
    image: "img/fail2ban-logo-security-art-work.jpeg",
    tech: ["React", "HTML5", "CSS3", "JavaScript"],
    github: "http://github.com/myuser/proyecto2",
    link: "https://www.proyecto1.com",
  },
  {
    title: "Third project",
    description: `This project introduces the essential concepts of CSS. It explores the three main ways to apply styles and uses shared and page‑specific styles to structure and design multiple HTML pages. The work also covers the CSS box model, selector types, and layout techniques, applying them to redesign two existing pages.`,
    image: "img/css.png",
    tech: ["HTML5", "CSS"],
    github: "https://github.com/Politb/portal",
    link: "https://www.proyecto1.com",
  },
  {
    title: "Fourth project",
    description: "            This is the description of my fourth project",
    image:
      "https://images.unsplash.com/photo-1664575198308-3959904fa430?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    tech: ["React", "HTML5", "CSS3", "JavaScript"],
    github: "http://github.com/myuser/proyecto4",
    link: "https://www.proyecto1.com",
  },
  {
    title: "Fifth project",
    description: "            This is the description of my fifth project",
    image:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80",
    tech: ["React", "HTML5", "CSS3", "JavaScript"],
    github: "http://github.com/myuser/proyecto5",
    link: "https://www.proyecto1.com",
  },
];

const cleanPage = (element) => {
  element.innerHTML = "";
};

const Divider = () => `<div class="divider"></div>`;

const Projects = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="projects">
    ${Divider()}
    <div class="projects-container"></div>
    </section>`;
  const container = document.querySelector(".projects-container");
  for (const project of projects) {
    const figure = document.createElement("figure");
    figure.innerHTML = ProjectCard(project);
    container.appendChild(figure);
  }
};

const ProjectCard = (project) => `
<div class="project-card">
<img src=${project.image} alt=${project.title}/>
<div class="header">
<h2>${project.title}</h2>
<div>
<a href=${project.github}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6-.8 1.6-.8.6-1.1 1.6-1.5 2.5-1.5.7 0 1.3.1 1.9.4.5-.4.9-.9 1.2-1.5-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A10.9 10.9 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/>
</svg>

</a>
<a href=${project.link}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
  <path d="M10.6 13.4a1 1 0 0 1 0-1.4l3-3a1 1 0 1 1 1.4 1.4l-3 3a1 1 0 0 1-1.4 0z"/>
  <path d="M7 17a4 4 0 0 1 0-5.7l3-3a4 4 0 0 1 5.7 0 1 1 0 0 1-1.4 1.4 2 2 0 0 0-2.9 0l-3 3a2 2 0 0 0 2.9 2.9 1 1 0 0 1 1.4 1.4A4 4 0 0 1 7 17z"/>
  <path d="M17 7a4 4 0 0 1 0 5.7l-3 3a4 4 0 0 1-5.7 0 1 1 0 0 1 1.4-1.4 2 2 0 0 0 2.9 0l3-3a2 2 0 0 0-2.9-2.9 1 1 0 1 1-1.4-1.4A4 4 0 0 1 17 7z"/>
</svg>

</a>
</div>
</div>

<div class="detail">
<p>${project.description}</p>
<p class="tech">${project.tech.join(" - ")}</p>
</div>
</div>
`;

Projects();
