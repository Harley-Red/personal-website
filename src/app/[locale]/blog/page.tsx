import { useTranslations } from 'next-intl';
import Header from '../../../components/Header';

export default function Blog() {
  const t = useTranslations('BlogPage');

  return (
    <main className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8">{t('title')}</h2>
        <p className="text-gray-600 mb-8">{t('description')}</p>
        {/* 这里可以渲染博客列表 */}
        <div className="text-gray-400">{t('comingSoon')}</div>
      </section>
    </main>
  );
}