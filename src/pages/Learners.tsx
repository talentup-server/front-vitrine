
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const Learners = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-talentup-green to-talentup-blue400 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-white">{t('learners.title')}</h1>
            <h2 className="text-2xl sm:text-3xl text-white mt-4">
              {t('learners.heroTitle')}
            </h2>
            <p className="text-white/90 mt-4 text-lg">
              {t('learners.heroText')}
            </p>
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="gradient-text text-center">
            {t('learners.options.title')}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-talentup-blue200/20 p-8 rounded-lg shadow-sm card-hover">
              <h3 className="text-xl font-semibold text-talentup-blue400">
                {t('learners.options.option1.title')}
              </h3>
              <p className="mt-4 text-gray-600">
                {t('learners.options.option1.text')}
              </p>
              <div className="mt-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-talentup-blue400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Publiez vos tutoriels et projets</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-talentup-blue400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Gagnez des points d'apprentissage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-talentup-blue400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Accédez à des ressources exclusives</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-talentup-green/10 p-8 rounded-lg shadow-sm card-hover">
              <h3 className="text-xl font-semibold text-talentup-green">
                {t('learners.options.option2.title')}
              </h3>
              <p className="mt-4 text-gray-600">
                {t('learners.options.option2.text')}
              </p>
              <div className="mt-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-talentup-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Accédez à toutes nos formations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-talentup-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Bénéficiez d'un mentor personnel</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-talentup-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Recevez des certifications reconnues</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="gradient-text text-center mb-12">
              {t('learners.benefits.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center card-hover">
                <div className="w-16 h-16 bg-talentup-blue400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-talentup-blue400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
                  </svg>
                </div>
                <h3 className="font-semibold">{t('learners.benefits.point1')}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Construisez votre réputation en partageant vos connaissances et vos projets.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center card-hover">
                <div className="w-16 h-16 bg-talentup-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-talentup-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                  </svg>
                </div>
                <h3 className="font-semibold">{t('learners.benefits.point2')}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Rejoignez notre programme de formation intensif pour booster votre carrière.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center card-hover">
                <div className="w-16 h-16 bg-talentup-blue200/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-talentup-blue400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold">{t('learners.benefits.point3')}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Votre portfolio en ligne permettra aux recruteurs de découvrir vos talents.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button className="btn-gradient" size="lg">
                {t('learners.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learners;
