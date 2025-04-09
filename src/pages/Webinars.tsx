
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface Webinar {
  id: number;
  title: string;
  date: string;
  category: string;
  technology: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  description: string;
  isPast: boolean;
}

const Webinars = () => {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [technologyFilter, setTechnologyFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');

  // Sample webinars data
  const webinars: Webinar[] = [
    {
      id: 1,
      title: 'Introduction à React',
      date: '2025-05-15',
      category: 'Frontend',
      technology: 'React',
      difficulty: 'Débutant',
      description: 'Apprenez les bases de React et construisez votre première application.',
      isPast: false,
    },
    {
      id: 2,
      title: 'API REST avec Node.js',
      date: '2025-05-20',
      category: 'Backend',
      technology: 'Node.js',
      difficulty: 'Intermédiaire',
      description: 'Découvrez comment créer une API REST complète avec Node.js et Express.',
      isPast: false,
    },
    {
      id: 3,
      title: 'Design Patterns en TypeScript',
      date: '2025-04-05',
      category: 'Architecture',
      technology: 'TypeScript',
      difficulty: 'Avancé',
      description: 'Explorez les design patterns les plus utiles et apprenez à les implémenter en TypeScript.',
      isPast: true,
    },
    {
      id: 4,
      title: 'Introduction à Docker',
      date: '2025-04-01',
      category: 'DevOps',
      technology: 'Docker',
      difficulty: 'Débutant',
      description: 'Apprenez à conteneuriser vos applications et à simplifier votre workflow de développement.',
      isPast: true,
    },
    {
      id: 5,
      title: 'Sécurité Web: OWASP Top 10',
      date: '2025-05-25',
      category: 'Sécurité',
      technology: 'Web',
      difficulty: 'Intermédiaire',
      description: 'Découvrez les 10 vulnérabilités web les plus courantes et comment les prévenir.',
      isPast: false,
    },
    {
      id: 6,
      title: 'GraphQL pour les API modernes',
      date: '2025-06-01',
      category: 'Backend',
      technology: 'GraphQL',
      difficulty: 'Intermédiaire',
      description: 'Découvrez comment GraphQL peut améliorer vos API et simplifier vos requêtes de données.',
      isPast: false,
    },
  ];

  // Get unique categories, technologies, and difficulties for filters
  const categories = [...new Set(webinars.map(w => w.category))];
  const technologies = [...new Set(webinars.map(w => w.technology))];
  const difficulties = [...new Set(webinars.map(w => w.difficulty))];

  // Filter webinars based on search and filters
  const filteredWebinars = webinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        webinar.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter ? webinar.category === categoryFilter : true;
    const matchesTechnology = technologyFilter ? webinar.technology === technologyFilter : true;
    const matchesDifficulty = difficultyFilter ? webinar.difficulty === difficultyFilter : true;

    return matchesSearch && matchesCategory && matchesTechnology && matchesDifficulty;
  });

  // Format date based on current language
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(i18n.language === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  // Get difficulty badge color
  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Débutant':
        return 'bg-green-100 text-green-800';
      case 'Intermédiaire':
        return 'bg-blue-100 text-blue-800';
      case 'Avancé':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-talentup-blue400 to-talentup-green py-12">
        <div className="container">
          <h1 className="text-white text-center">{t('webinars.title')}</h1>
        </div>
      </section>
      
      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder={t('webinars.search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('webinars.filters.category')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Toutes catégories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={technologyFilter} onValueChange={setTechnologyFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('webinars.filters.technology')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Toutes technologies</SelectItem>
                    {technologies.map(tech => (
                      <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('webinars.filters.difficulty')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Tous niveaux</SelectItem>
                    {difficulties.map(diff => (
                      <SelectItem key={diff} value={diff}>{diff}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Webinaires à venir</h2>
            <div className="space-y-6">
              {filteredWebinars
                .filter(webinar => !webinar.isPast)
                .map(webinar => (
                  <div key={webinar.id} className="bg-white rounded-lg shadow-sm overflow-hidden card-hover">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="bg-talentup-blue200/50 text-talentup-blue400">
                              {webinar.category}
                            </Badge>
                            <Badge variant="secondary" className="bg-gray-100">
                              {webinar.technology}
                            </Badge>
                            <Badge variant="secondary" className={getDifficultyColor(webinar.difficulty)}>
                              {webinar.difficulty}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold mt-2">{webinar.title}</h3>
                          <p className="text-gray-500">{formatDate(webinar.date)}</p>
                          <p className="mt-2 text-gray-700">{webinar.description}</p>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6">
                          <Button className="w-full md:w-auto btn-gradient">{t('webinars.register')}</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              
              {filteredWebinars.filter(webinar => !webinar.isPast).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">Aucun webinaire à venir ne correspond à vos critères.</p>
                </div>
              )}
            </div>
            
            <h2 className="text-2xl font-semibold mt-12 mb-6">Webinaires passés</h2>
            <div className="space-y-6">
              {filteredWebinars
                .filter(webinar => webinar.isPast)
                .map(webinar => (
                  <div key={webinar.id} className="bg-white rounded-lg shadow-sm overflow-hidden card-hover">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="bg-talentup-blue200/50 text-talentup-blue400">
                              {webinar.category}
                            </Badge>
                            <Badge variant="secondary" className="bg-gray-100">
                              {webinar.technology}
                            </Badge>
                            <Badge variant="secondary" className={getDifficultyColor(webinar.difficulty)}>
                              {webinar.difficulty}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold mt-2">{webinar.title}</h3>
                          <p className="text-gray-500">{formatDate(webinar.date)}</p>
                          <p className="mt-2 text-gray-700">{webinar.description}</p>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6">
                          <Button variant="outline" className="w-full md:w-auto">{t('webinars.view')}</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              
              {filteredWebinars.filter(webinar => webinar.isPast).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">Aucun webinaire passé ne correspond à vos critères.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;
