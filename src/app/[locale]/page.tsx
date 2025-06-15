'use client';

import Header from '../../components/Header';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const t = useTranslations('HomePage');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 点击外部关闭下拉
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <section id="about" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-4">{t('about.title')}</h2>
        <p className="text-gray-600">{t('about.description')}</p>
      </section>

      <section id="projects" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-4">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[1, 2].map((index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-bold">{t(`projects.items.project${index}.title`)}</h3>
            <p className="text-sm text-gray-600 mt-2">{t(`projects.items.project${index}.description`)}</p>
          </div>
        ))}
        </div>
      </section>

      <section id="resume" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8">{t('resume.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <a
            href="/resume_cn.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-blue-200 rounded-lg shadow-md hover:shadow-lg transition p-6 text-center group"
          >
            <div className="text-2xl font-bold mb-2 text-blue-700 group-hover:text-blue-900">
              {t('resume.preview_cn')}
            </div>
            <div className="text-gray-500">{t('resume.desc_cn')}</div>
          </a>
          <a
            href="/resume_en.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-green-200 rounded-lg shadow-md hover:shadow-lg transition p-6 text-center group"
          >
            <div className="text-2xl font-bold mb-2 text-green-700 group-hover:text-green-900">
              {t('resume.preview_en')}
            </div>
            <div className="text-gray-500">{t('resume.desc_en')}</div>
          </a>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-6">{t('contact.title')}</h2>
        <div className="flex flex-col space-y-4 text-lg text-gray-700">
          <a
            href={`mailto:${t('contact.email')}`}
            className="flex items-center space-x-3 hover:text-blue-600"
          >
            <FaEnvelope />
            <span>{t('contact.email')}</span>
          </a>
          <a
            href={'https://github.com/Harley-Red'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-black"
          >
            <FaGithub />
            <span>{t('contact.github')}</span>
          </a>
          <a
            href={'https://www.linkedin.com/in/harley-hong/'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-blue-700"
          >
            <FaLinkedin />
            <span>{t('contact.linkedin')}</span>
          </a>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-8">
        {t('footer.copyright', { year: new Date().getFullYear() })}
      </footer>
    </main>
  );
}
