
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Companies = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-talentup-blue400 to-talentup-blue200 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-white">{t('companies.title')}</h1>
            <h2 className="text-2xl sm:text-3xl text-white mt-4">
              {t('companies.heroTitle')}
            </h2>
            <p className="text-white/90 mt-4 text-lg">
              {t('companies.heroText')}
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="gradient-text text-center">{t('companies.advantages.title')}</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-10 h-10 bg-talentup-blue400/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-talentup-blue400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('companies.advantages.point1')}</h3>
                <p className="mt-1 text-gray-600 text-sm">
                  Nous sélectionnons rigoureusement chaque candidat pour vous garantir des profils de qualité.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-10 h-10 bg-talentup-blue400/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-talentup-blue400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('companies.advantages.point2')}</h3>
                <p className="mt-1 text-gray-600 text-sm">
                  Nos candidats sont évalués sur des projets réels, pas seulement sur leur CV.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-10 h-10 bg-talentup-blue400/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-talentup-blue400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('companies.advantages.point3')}</h3>
                <p className="mt-1 text-gray-600 text-sm">
                  Consultez leurs réalisations concrètes avant même de les rencontrer.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-10 h-10 bg-talentup-blue400/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-talentup-blue400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('companies.advantages.point4')}</h3>
                <p className="mt-1 text-gray-600 text-sm">
                  Nos stagiaires sont formés intensivement pendant 6 mois pour être opérationnels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="gradient-text text-center mb-12">{t('companies.process.title')}</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-talentup-blue400 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="ml-4">
                  <p className="text-lg text-gray-800">{t('companies.process.point1')}</p>
                  <p className="mt-2 text-gray-600">
                    Notre plateforme vous permet de filtrer les candidats selon vos critères et d'explorer leurs projets en détail.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-talentup-blue400 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="ml-4">
                  <p className="text-lg text-gray-800">{t('companies.process.point2')}</p>
                  <p className="mt-2 text-gray-600">
                    Une fois que vous avez identifié les candidats qui vous intéressent, nous organisons les entretiens et facilitons tout le processus de recrutement.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild className="btn-gradient" size="lg">
                <Link to="/contact">{t('companies.cta')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;
