"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import content from '@/content/content.json';
import type { SiteContent } from '@/content/types';
import ExperienceCard from '@/components/ExperienceCard';
import IndustryBadges from '@/components/IndustryBadges';
import SkillBar from '@/components/SkillBar';
import { experienceData } from '@/data/experience';
import { skillsData } from '@/data/skills';

const siteContent = content as SiteContent;

const principleIcons: Record<string, string> = {
  lightning: 'M13 3L4 14h6l-1 7 9-11h-6l1-7z',
  rocket: 'M12 2c3 0 7 4 7 7 0 2-1 4-3 5l1 5-5-1c-1 2-3 3-5 3-3 0-5-4-5-7s4-12 10-12z',
  heart: 'M12 21l-1.1-1C5.1 15 2 12.2 2 8.8 2 6 4.2 4 7 4c1.6 0 3.1.8 4 2.1C12 4.8 13.4 4 15 4c2.8 0 5 2 5 4.8 0 3.4-3.1 6.2-8.9 11.2z'
};

function sectionIdFromHref(href: string): string {
  return href.replace('#', '');
}

export default function Home() {
  const navLinks = siteContent.navigation.links;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(sectionIdFromHref(navLinks[0]?.href ?? '#about'));

  const observedSectionIds = useMemo(
    () => navLinks.map((link) => sectionIdFromHref(link.href)).filter(Boolean),
    [navLinks]
  );

  useEffect(() => {
    const sections = observedSectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0.1, 0.3, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [observedSectionIds]);

  const handleMobileLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header className="site-header">
        <div className="content-container">
          <nav className="flex h-20 items-center justify-between" aria-label="Primary">
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text)]">
              {siteContent.site.name}
            </Link>

            <div className="hidden items-center gap-2 md:flex">
              {navLinks.map((link) => {
                const sectionId = sectionIdFromHref(link.href);
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <Link href={siteContent.hero.ctaTertiary.href} className="btn btn-secondary ml-2">
                {siteContent.navigation.resumeLabel}
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] md:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>

          {isMobileMenuOpen && (
            <div id="mobile-menu" className="mb-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 md:hidden">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={handleMobileLinkClick} className="mobile-nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link href={siteContent.hero.ctaTertiary.href} onClick={handleMobileLinkClick} className="mobile-nav-link">
                    {siteContent.navigation.resumeLabel}
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <main id="main-content" className="pb-16">
        <section className="section-block pt-14 sm:pt-20">
          <div className="content-container">
            <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]">
              <div>
                <p className="text-base font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)] sm:text-lg">{siteContent.hero.name}</p>
                <h1 className="mt-4 text-3xl font-bold leading-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
                  {siteContent.hero.headline}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">{siteContent.hero.tagline}</p>
                <p className="mt-4 text-sm font-medium text-[var(--color-muted)]">{siteContent.hero.availability}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={siteContent.hero.ctaPrimary.href} className="btn btn-primary">
                    {siteContent.hero.ctaPrimary.label}
                  </a>
                  <a href={siteContent.hero.ctaSecondary.href} className="btn btn-secondary">
                    {siteContent.hero.ctaSecondary.label}
                  </a>
                  <Link href={siteContent.hero.ctaTertiary.href} className="btn btn-ghost">
                    {siteContent.hero.ctaTertiary.label}
                  </Link>
                </div>
              </div>

              <aside className="portfolio-card p-6">
                <div className="relative h-72 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)]">
                  <Image
                    src="/pixel-desk.png"
                    alt="Christopher Bobrowitz working at a desk"
                    fill
                    className="object-contain p-5"
                    priority
                  />
                </div>
                <div className="mt-5 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">Current Role</p>
                  <p className="text-lg font-semibold text-[var(--color-text)]">Lead Platform Architect at Viasat</p>
                  <p className="text-sm leading-6 text-[var(--color-muted)]">
                    Building enterprise AI/ML and data platform capabilities for satellite and terrestrial content delivery systems.
                  </p>
                </div>
              </aside>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siteContent.trustSignals.map((signal) => (
                <article key={signal.label} className="portfolio-card p-5">
                  <p className="text-2xl font-bold text-[var(--color-text)]">{signal.value}</p>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-primary)]">{signal.label}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{signal.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-block pt-16 sm:pt-20">
          <div className="content-container">
            <div className="section-intro">
              <h2>{siteContent.about.title}</h2>
              <p>{siteContent.about.description}</p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <article className="portfolio-card p-7">
                <h3 className="text-xl font-semibold text-[var(--color-text)]">Industry Context</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  Deep experience across highly regulated and high-scale domains where reliability, throughput, and operational clarity are non-negotiable.
                </p>
                <div className="mt-5">
                  <IndustryBadges industries={siteContent.industries} />
                </div>
              </article>

              <article className="portfolio-card p-7">
                <h3 className="text-xl font-semibold text-[var(--color-text)]">Core Strengths</h3>
                <div className="mt-5 space-y-5">
                  {skillsData.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="impact" className="section-block pt-16 sm:pt-20">
          <div className="content-container">
            <div className="section-intro">
              <h2>{siteContent.impact.title}</h2>
              <p>{siteContent.impact.subtitle}</p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {siteContent.impact.highlights.map((highlight) => (
                <article key={highlight.title} className="portfolio-card p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">{highlight.value}</p>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--color-text)]">{highlight.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{highlight.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="current-work" className="section-block pt-16 sm:pt-20">
          <div className="content-container">
            <div className="section-intro">
              <h2>{siteContent.currentWork.title}</h2>
              <p>{siteContent.currentWork.subtitle}</p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {siteContent.currentWork.projects.map((project) => (
                <article key={project.title} className="portfolio-card p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">{project.value}</p>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--color-text)]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{project.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="philosophy" className="section-block pt-16 sm:pt-20">
          <div className="content-container">
            <div className="section-intro">
              <h2>{siteContent.philosophyTitle}</h2>
              <p>Principles that shape execution, team culture, and delivery quality.</p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {siteContent.philosophy.map((principle) => (
                <article key={principle.title} className="portfolio-card p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface-alt)] text-[var(--color-primary)]">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={principleIcons[principle.icon] ?? principleIcons.heart} />
                    </svg>
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--color-text)]">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{principle.content}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-block pt-16 sm:pt-20">
          <div className="content-container">
            <div className="section-intro">
              <h2>Experience</h2>
              <p>Leadership roles spanning engineering management, architecture, and enterprise analytics.</p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {experienceData.map((experience) => (
                <ExperienceCard key={`${experience.company}-${experience.title}-${experience.period}`} experience={experience} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-block pt-16 sm:pt-20">
          <div className="content-container">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="portfolio-card p-7">
                <h2 className="text-3xl font-semibold text-[var(--color-text)]">{siteContent.contact.title}</h2>
                <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">{siteContent.contact.subtitle}</p>
                <p className="mt-3 text-sm font-medium text-[var(--color-muted)]">{siteContent.contact.availability}</p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={`mailto:${siteContent.contact.email}`} className="btn btn-primary">
                    Email Me
                  </a>
                  <a href={siteContent.hero.ctaTertiary.href} className="btn btn-ghost">
                    View Resume
                  </a>
                </div>
              </article>

              <article className="portfolio-card p-7">
                <h3 className="text-xl font-semibold text-[var(--color-text)]">Direct Contact</h3>
                <ul className="mt-5 space-y-4 text-sm text-[var(--color-muted)]">
                  <li>
                    <p className="font-semibold text-[var(--color-text)]">Email</p>
                    <a href={`mailto:${siteContent.contact.email}`} className="mt-1 inline-block text-[var(--color-primary)] hover:text-[var(--color-secondary)]">
                      {siteContent.contact.email}
                    </a>
                  </li>
                  <li>
                    <p className="font-semibold text-[var(--color-text)]">Location</p>
                    <p className="mt-1">{siteContent.contact.location}</p>
                  </li>
                  {siteContent.contact.social.map((social) => (
                    <li key={social.name}>
                      <p className="font-semibold text-[var(--color-text)]">{social.name}</p>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-block text-[var(--color-primary)] hover:text-[var(--color-secondary)]"
                      >
                        {social.url}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-border)] py-8">
        <div className="content-container">
          <p className="text-sm text-[var(--color-muted)]">© 2026 {siteContent.hero.name}. Built with Next.js.</p>
        </div>
      </footer>
    </div>
  );
}
