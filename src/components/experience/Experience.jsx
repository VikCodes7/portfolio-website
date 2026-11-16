import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Experience.css';
import { experiences } from '../utils/utils';

function ExperienceItem({ experience, index }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`exp-item ${isVisible ? 'visible' : ''} ${experience.current ? 'exp-item--current' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="exp-item__timeline">
        <div className="exp-item__dot">
          {experience.current && <div className="exp-item__pulse"></div>}
        </div>
        <div className="exp-item__line"></div>
      </div>

      <div className="exp-item__content">
        <div className="exp-item__header">
          <div>
            <h3 className="exp-item__role">{experience.role}</h3>
            <p className="exp-item__company">
              <span className="exp-item__company-name">{experience.company}</span>
              <span className="exp-item__separator">•</span>
              <span className="exp-item__location">{experience.location}</span>
            </p>
          </div>
          <span className={`exp-item__period ${experience.current ? 'exp-item__period--current' : ''}`}>
            {experience.period}
          </span>
        </div>

        <ul className="exp-item__points">
          {experience.description.map((point, i) => (
            <li key={i} className="exp-item__point">
              <span className="exp-item__bullet">▹</span>
              {point}
            </li>
          ))}
        </ul>

        <div className="exp-item__tech">
          {experience.tech.map((t) => (
            <span key={t} className="exp-item__tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [headerRef, headerVisible] = useScrollAnimation();

  return (
    <section className="section" id="experience">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header ${headerVisible ? 'animate-visible' : 'animate-hidden'}`}
        >
          <span className="section-label">Where I&apos;ve Worked</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My journey through the world of software development
          </p>
        </div>

        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.role + exp.company} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
