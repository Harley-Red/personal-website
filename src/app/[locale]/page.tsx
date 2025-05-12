import Header from '../../components/Header';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/navigation';

export default function Home() {
  const t = useTranslations('HomePage');

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
        <h2 className="text-3xl font-semibold mb-4">{t('resume.title')}</h2>
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          {t('resume.download')}
        </a>
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
