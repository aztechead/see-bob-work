"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { experienceData } from '@/data/experience';
import { skillsData } from '@/data/skills';
import { contactData } from '@/data/contact';
import { siteConfig } from '@/data/site';
import ExperienceCard from '@/components/ExperienceCard';
import SkillBar from '@/components/SkillBar';

export default function Home() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              {siteConfig.name}
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Experience</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
              <Link href="/resume" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Resume</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Split Layout */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-500/10 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full animate-bounce"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-indigo-600 dark:from-white dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6 animate-gradient">
                {siteConfig.hero.name}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl lg:max-w-none">
                {siteConfig.hero.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
                <a 
                  href="#experience" 
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {siteConfig.hero.ctaPrimary}
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105"
                >
                  {siteConfig.hero.ctaSecondary}
                </a>
                <Link 
                  href="/resume" 
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>View Resume</span>
                </Link>
              </div>
            </div>

            {/* Right Side - Pixel Art with Advanced Animations */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] group animate-float">
                {/* Animated Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-3xl transform rotate-6 transition-all duration-700 group-hover:rotate-12 animate-spin-slow"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-3xl transform -rotate-3 transition-all duration-700 group-hover:-rotate-6 animate-spin-slow-reverse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/5 to-pink-500/5 rounded-3xl transform rotate-12 transition-all duration-700 group-hover:rotate-24 animate-spin-slow"></div>
                
                {/* Main Frame */}
                <div className="relative w-full h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700 transform transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl animate-glow">
                  <Image
                    src="/pixel-desk.png"
                    alt="Pixel art of Bob working at desk"
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                </div>

                {/* Floating Particles */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/30 rounded-full animate-bounce animation-delay-1000"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-400/30 rounded-full animate-bounce animation-delay-1500"></div>
                <div className="absolute top-1/2 -right-6 w-4 h-4 bg-purple-400/30 rounded-full animate-ping animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Pixel Art Integration */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 relative overflow-hidden">
        {/* Floating Pixel Art Elements with Parallax */}
        <div className="absolute top-10 right-10 w-24 h-24 opacity-10 dark:opacity-20 animate-float-slow parallax-element">
          <Image
            src="/pixel-desk.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-10 left-10 w-16 h-16 opacity-10 dark:opacity-20 transform rotate-12 animate-float-slow-reverse parallax-element">
          <Image
            src="/pixel-desk.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{siteConfig.about.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto animate-expand"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {siteConfig.about.description}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl animate-fade-in-right hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Core Skills</h3>
                              <div className="space-y-4">
                  {skillsData.map((skill, index) => (
                    <SkillBar 
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={index * 200}
                    />
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with Flip Cards */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto animate-expand"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mt-6 max-w-2xl mx-auto">
              Click on any experience card to see more details about my achievements and impact
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experienceData.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
                isFlipped={flippedCards.includes(index)}
                onToggle={toggleCard}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Pixel Art */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 relative overflow-hidden">
        {/* Background Pixel Art with Parallax */}
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 dark:opacity-10 transform rotate-45 animate-float-slow parallax-element">
          <Image
            src="/pixel-desk.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{siteConfig.contact.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto animate-expand"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mt-6">
              {siteConfig.contact.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl animate-fade-in-left hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Contact Info</h3>
              <div className="space-y-4">
                                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{contactData.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center animate-pulse animation-delay-1000">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{contactData.location}</span>
                  </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl animate-fade-in-right hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Connect</h3>
                              <div className="space-y-4">
                  {contactData.social.map((social) => (
                    <a 
                      key={social.name}
                      href={social.url} 
                      className="flex items-center space-x-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-10 h-10 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                        {social.icon === 'linkedin' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        )}
                        {social.icon === 'github' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        )}
                      </div>
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 {siteConfig.hero.name}
          </p>
        </div>
      </footer>
    </div>
  );
}
