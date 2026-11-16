import { useState, useEffect } from 'react';
import './Profile.css';
import {
  titles,
  developerCode
} from '../utils/utils';

export default function Profile() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  /* Cycles through job and other titles */
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;

    if (!isDeleting && displayed.length < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentTitle.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentTitle.slice(0, displayed.length - 1));
      }, 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="profile" id="profile">
      {/* Animated background elements */}
      <div className="profile__bg">
        <div className="profile__orb profile__orb--1"></div>
        <div className="profile__orb profile__orb--2"></div>
        <div className="profile__orb profile__orb--3"></div>
        <div className="profile__grid"></div>
      </div>

      <div className="profile__content container">
        <div className="profile__text">
          <p className="profile__greeting">
            <span className="profile__wave">👋</span> Hello, I&apos;m
          </p>
          <h1 className="profile__name">
            Sai Vikas
            <span className="profile__name-highlight"> Chinthirla</span>
          </h1>
          <div className="profile__title-wrapper">
            <span className="profile__title-prefix">&gt; </span>
            <span className="profile__title">{displayed}</span>
            <span className="profile__cursor">|</span>
          </div>
          <p className="profile__description">
            Passionate about building innovative software solutions that bridge
            research and real-world applications. I love crafting elegant systems
            and pushing the boundaries of what technology can achieve.
          </p>
          <div className="profile__actions">
            <button
              className="profile__btn profile__btn--primary"
              onClick={() => scrollToSection('projects')}
            >
              <span>View My Work</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              className="profile__btn profile__btn--secondary"
              onClick={() => scrollToSection('contact')}
            >
              <span>Get In Touch</span>
            </button>
          </div>
        </div>

        <div className="profile__visual">
          <div className="profile__code-block">
            <div className="profile__code-header">
              <span className="profile__code-dot profile__code-dot--red"></span>
              <span className="profile__code-dot profile__code-dot--yellow"></span>
              <span className="profile__code-dot profile__code-dot--green"></span>
              <span className="profile__code-filename">developer.js</span>
            </div>
            <pre className="profile__code">
              {developerCode}
            </pre>
          </div>
        </div>
      </div>

      <div className="profile__scroll-indicator" onClick={() => scrollToSection('skills')}>
        <span className="profile__scroll-text">Scroll</span>
        <div className="profile__scroll-line">
          <div className="profile__scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}
