import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">{t('title')}</h1>
        <nav className="space-x-6 text-sm text-gray-600">
          <Link href="#about" className="hover:text-blue-600">{t('links.about')}</Link>
          <Link href="#projects" className="hover:text-blue-600">{t('links.projects')}</Link>
          <Link href="#resume" className="hover:text-blue-600">{t('links.resume')}</Link>
          <Link href="#contact" className="hover:text-blue-600">{t('links.contact')}</Link>
          <Link href="/blog" className="hover:text-blue-600">{t('links.blog')}</Link>
        </nav>
      </div>
    </header>
  );
}