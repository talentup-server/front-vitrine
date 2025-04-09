
import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-talentup-blue400 to-talentup-green py-12">
        <div className="container">
          <h1 className="text-white text-center">{t('about.title')}</h1>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="gradient-text">{t('about.history.title')}</h2>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              {t('about.history.text')}
            </p>
            
            <div className="mt-20">
              <h2 className="gradient-text">{t('about.values.title')}</h2>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
                  <div className="w-12 h-12 bg-talentup-blue400/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-talentup-blue400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{t('about.values.value1.title')}</h3>
                  <p className="mt-2 text-gray-600">
                    {t('about.values.value1.text')}
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
                  <div className="w-12 h-12 bg-talentup-green/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-talentup-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{t('about.values.value2.title')}</h3>
                  <p className="mt-2 text-gray-600">
                    {t('about.values.value2.text')}
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
                  <div className="w-12 h-12 bg-talentup-blue200/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-talentup-blue400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{t('about.values.value3.title')}</h3>
                  <p className="mt-2 text-gray-600">
                    {t('about.values.value3.text')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-20">
              <h2 className="gradient-text">{t('about.csr.title')}</h2>
              <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                {t('about.csr.text')}
              </p>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-talentup-green mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">
                      Nous avons permis à plus de 50 étudiants issus de quartiers défavorisés d'accéder à nos formations gratuitement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mt-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-talentup-green mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">
                      Nous organisons régulièrement des ateliers d'initiation au code dans les écoles primaires et collèges.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mt-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-talentup-green mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">
                      Notre programme de mentorat permet à des professionnels expérimentés de guider bénévolement des jeunes talents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
