import Waves from './components/Waves';
import { resume } from './data/resume';
import './App.css';

function App() {
  return (
    <div className="site">
      <div className="background-layer" aria-hidden="true">
        <div className="resume-bg" />
        <div className="background-overlay" />
      </div>

      <Waves
        lineColor="rgba(129, 140, 248, 0.2)"
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />

      <header className="hero">
        <p className="hero-eyebrow">Culinary Professional</p>
        <h1>{resume.name}</h1>
        <p className="hero-subtitle">{resume.title}</p>
        <div className="hero-meta">
          <span>{resume.location}</span>
          <span className="meta-divider" />
          <a href={`mailto:${resume.email}`}>{resume.email}</a>
        </div>
        <nav className="hero-nav" aria-label="Page sections">
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="content">
        <section id="skills" className="panel">
          <div className="panel-header">
            <span className="panel-number">01</span>
            <h2>Skills</h2>
          </div>
          <ul className="skill-grid">
            {resume.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="experience" className="panel">
          <div className="panel-header">
            <span className="panel-number">02</span>
            <h2>Experience</h2>
          </div>
          <div className="timeline">
            {resume.experience.map((job) => (
              <article key={`${job.company}-${job.period}`} className="job">
                <div className="job-header">
                  <div>
                    <h3>{job.company}</h3>
                    <p className="job-location">{job.location}</p>
                  </div>
                  <div className="job-meta">
                    <span className="job-role">{job.role}</span>
                    <time>{job.period}</time>
                  </div>
                </div>
                <ul>
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="panel">
          <div className="panel-header">
            <span className="panel-number">03</span>
            <h2>Education & Certifications</h2>
          </div>
          <div className="education-grid">
            {resume.education.map((item) => (
              <article key={`${item.credential}-${item.school}`} className="edu-card">
                <time>{item.year}</time>
                <h3>{item.credential}</h3>
                <p>{item.school}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="panel contact-panel">
          <div className="panel-header">
            <span className="panel-number">04</span>
            <h2>Get in Touch</h2>
          </div>
          <div className="contact-content">
            <div className="contact-photo-wrap">
              <img
                src="/devin-restrepo.png"
                alt="Devin Restrepo"
                className="contact-photo"
                width={280}
                height={373}
              />
            </div>
            <div className="contact-details">
              <p className="contact-copy">
                Interested in bringing Devin&apos;s culinary expertise to your kitchen? Reach out directly.
              </p>
              <a className="contact-button" href={`mailto:${resume.email}`}>
                {resume.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {resume.name}</p>
      </footer>
    </div>
  );
}

export default App;
