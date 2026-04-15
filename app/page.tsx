export default function Home() {
  return (
    <main className="container">
      <header>
        <h1>MD Ripon Islam</h1>
        <p className="role">Fullstack Developer</p>
        <p className="location">Nilphamari, Bangladesh</p>
      </header>

      <section>
        <h2>About</h2>
        <p>
          Hi! I&apos;m MD Ripon Islam, a Fullstack Developer with experience
          building dynamic web applications that meet client needs.
        </p>
        <p>
          I focus on writing clean, maintainable code and staying up-to-date
          with modern technologies to deliver the best results for every
          project.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <div className="skills">
          <p>
            <strong>Frontend:</strong> JavaScript, TypeScript, React js, Next
            js, Vue js, Angular, Svelte, WebRTC
          </p>
          <p>
            <strong>Backend:</strong> Node js, Express js, Nest js, GraphQL,
            MongoDB, Neo4j
          </p>
          <p>
            <strong>Deployment:</strong> Docker, CI/CD, GitHub Actions, AWS
            (EC2, Amplify, RDS, S3, Route53, CodePipeline, CodeDeploy,
            OpenSearch), Nginx, Caddy
          </p>
        </div>
      </section>

      <section>
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Arnifi</strong> — Fullstack Developer{" "}
            <span className="date">Oct 2024 - Present</span>
          </li>
          <li>
            <strong>C-Sunshine</strong> — Frontend Developer{" "}
            <span className="date">July 2023 - Oct 2024</span>
            <br />
            <span className="desc">
              Developed and maintained responsive websites using React js, Vue
              js, and Angular. Integrated third-party APIs (OpenAI, Auth0) and
              backend APIs. Expanded to backend work with Node js, Nest js, and
              MongoDB. Maintained high code quality following best practices.
            </span>
          </li>
          <li>
            <strong>Mabias</strong> — Backend Developer (Internship){" "}
            <span className="date">Mar 2023 - May 2023</span>
            <br />
            <span className="desc">
              Learned MongoDB aggregation pipelines and optimized complex
              queries, improving system performance.
            </span>
          </li>
          <li>
            <strong>A2Series</strong> — Fullstack Developer (Internship){" "}
            <span className="date">Apr 2022 - Sep 2022</span>
            <br />
            <span className="desc">
              Worked on several fullstack projects using React and Node js,
              handling frontend, backend, and database design.
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <a
              href="https://fyndo.ripon.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Fyndo</strong>
            </a>{" "}
            — Social Media{" "}
            <span className="tech">
              React js, Node js, GraphQL, Neo4j, Socket.io, Cloudinary
            </span>
          </li>
          <li>
            <a
              href="https://autob.ripon.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Autob</strong>
            </a>{" "}
            — No Code Web Automation{" "}
            <span className="tech">
              React js, Mantine UI, Node js, Express js, Puppeteer
            </span>
          </li>
          <li>
            <a
              href="https://pageforge.ripon.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Page Forge</strong>
            </a>{" "}
            — Drag & Drop Page Builder <span className="tech">JavaScript</span>
          </li>
          <li>
            <a
              href="https://guess.ripon.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Guess</strong>
            </a>{" "}
            — Guessing Game <span className="tech">Vue js</span>
          </li>
          <li>
            <a
              href="https://examroom.ripon.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Exam Room</strong>
            </a>{" "}
            — Live Exams & Assessments
            <span className="tech">
              React js, Material UI, Node js, Express, WebRTC
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h2>Connect</h2>
        <p>
          <a href="mailto:mdriponislam.dev@gmail.com">Email</a> ·{" "}
          <a href="https://github.com/ripon876">GitHub</a> ·{" "}
          <a href="https://linkedin.com/in/ripon876">LinkedIn</a> ·{" "}
          <a href="https://twitter.com/ripon876_">Twitter</a>
        </p>
      </section>
    </main>
  );
}
