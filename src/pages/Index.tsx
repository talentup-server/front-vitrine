
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-talentup-blue400/90 to-talentup-green/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay z-0"></div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="animate-fade-in">
              {t('home.hero.title')}
            </h1>
            <p className="mt-4 text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('home.hero.subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="bg-white text-talentup-blue400 hover:bg-white/90">
                <Link to="/stagiaires">
                  {t('home.hero.viewInterns')}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/webinaires">
                  {t('home.hero.exploreWebinars')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="gradient-text">
              {t('home.welcome.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('home.welcome.text')}
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/entreprises">
                <div className="p-6 bg-talentup-blue200/20 rounded-lg transition-all hover:shadow-lg hover:translate-y-[-4px]">
                  <h3 className="text-xl font-semibold text-talentup-blue400">
                    {t('home.welcome.forCompanies')}
                  </h3>
                  <div className="mt-4">
                    <Button className="btn-gradient w-full">{t('home.welcome.forCompanies')}</Button>
                  </div>
                </div>
              </Link>
              <Link to="/apprenants">
                <div className="p-6 bg-talentup-green/10 rounded-lg transition-all hover:shadow-lg hover:translate-y-[-4px]">
                  <h3 className="text-xl font-semibold text-talentup-green">
                    {t('home.welcome.forLearners')}
                  </h3>
                  <div className="mt-4">
                    <Button className="bg-talentup-green text-white hover:bg-talentup-green/90 w-full">
                      {t('home.welcome.forLearners')}
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why TalentUp Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="gradient-text">
              {t('home.why.title')}
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
                <div className="w-12 h-12 bg-talentup-blue400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-talentup-blue400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <p className="text-gray-600">
                  {t('home.why.point1')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
                <div className="w-12 h-12 bg-talentup-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-talentup-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <p className="text-gray-600">
                  {t('home.why.point2')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
                <div className="w-12 h-12 bg-talentup-blue200/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-talentup-blue400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <p className="text-gray-600">
                  {t('home.why.point3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
