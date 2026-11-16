import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Skills.css';
import { skillCategories } from '../utils/utils';

function SkillCard({ category, index }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`skill-card ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="skill-card__header">
        <span className="skill-card__icon">{category.icon}</span>
        <h3 className="skill-card__title">{category.title}</h3>
      </div>
      <div className="skill-card__skills">
        {category.skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-item__info">
              <span className="skill-item__name">{skill.name}</span>
              <span className="skill-item__level">{skill.level}%</span>
            </div>
            <div className="skill-item__bar">
              <div
                className="skill-item__fill"
                style={{
                  width: isVisible ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 100 + 300}ms`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [headerRef, headerVisible] = useScrollAnimation();

  return (
    <section className="section" id="skills">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header ${headerVisible ? 'animate-visible' : 'animate-hidden'}`}
        >
          <span className="section-label">What I Know</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A collection of technologies and tools I&apos;ve been working with
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
