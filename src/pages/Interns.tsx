
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
import { Card, CardContent } from '@/components/ui/card';

interface Intern {
  id: number;
  name: string;
  photo: string;
  skills: string[];
  projects: string[];
  specialty: string;
  location: string;
  bio: string;
}

const Interns = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  // Sample interns data
  const interns: Intern[] = [
    {
      id: 1,
      name: 'Alexandre Dupont',
      photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=150&h=150',
      skills: ['React', 'JavaScript', 'TypeScript', 'Node.js'],
      projects: ['E-commerce', 'Dashboard'],
      specialty: 'Frontend',
      location: 'Paris',
      bio: 'Développeur Frontend passionné avec une solide expérience en React. Spécialiste des interfaces utilisateur modernes et performantes.',
    },
    {
      id: 2,
      name: 'Sophie Martin',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
      skills: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
      projects: ['API REST', 'Microservices'],
      specialty: 'Backend',
      location: 'Lyon',
      bio: 'Développeuse Backend spécialisée en Java et architecture microservices. Expérience dans la conception d\'API robustes et évolutives.',
    },
    {
      id: 3,
      name: 'Thomas Lefebvre',
      photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150',
      skills: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
      projects: ['Infrastructure as Code', 'CI/CD'],
      specialty: 'DevOps',
      location: 'Bordeaux',
      bio: 'Ingénieur DevOps avec une forte expertise en AWS et automatisation. Passionné par l\'optimisation des workflows et l\'infrastructure as code.',
    },
    {
      id: 4,
      name: 'Camille Dubois',
      photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=150&h=150',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Visualization'],
      projects: ['Analyse prédictive', 'NLP'],
      specialty: 'Data Science',
      location: 'Toulouse',
      bio: 'Data Scientist avec expérience en machine learning et traitement du langage naturel. Capable de transformer des données brutes en insights stratégiques.',
    },
    {
      id: 5,
      name: 'Lucas Bernard',
      photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=150&h=150',
      skills: ['Flutter', 'Swift', 'Kotlin', 'Firebase'],
      projects: ['Application mobile e-commerce', 'Messagerie sécurisée'],
      specialty: 'Mobile',
      location: 'Nantes',
      bio: 'Développeur mobile cross-platform spécialisé en Flutter. Expérience dans la création d\'applications performantes et intuitives pour iOS et Android.',
    },
    {
      id: 6,
      name: 'Emma Petit',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&h=150',
      skills: ['Figma', 'Adobe XD', 'HTML/CSS', 'UI/UX'],
      projects: ['Refonte site web', 'Design System'],
      specialty: 'UI/UX Design',
      location: 'Paris',
      bio: 'Designer UI/UX créative avec une forte sensibilité utilisateur. Spécialisée dans la création d\'interfaces intuitives et esthétiques.',
    },
  ];

  // Get unique specialties and locations for filters
  const specialties = [...new Set(interns.map(intern => intern.specialty))];
  const locations = [...new Set(interns.map(intern => intern.location))];

  // Filter interns based on search and filters
  const filteredInterns = interns.filter(intern => {
    const matchesSearch = intern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        intern.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        intern.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
                        intern.projects.some(project => project.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesSpecialty = specialtyFilter ? intern.specialty === specialtyFilter : true;
    const matchesLocation = locationFilter ? intern.location === locationFilter : true;

    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-talentup-blue400 to-talentup-green py-12">
        <div className="container">
          <h1 className="text-white text-center">{t('interns.title')}</h1>
        </div>
      </section>
      
      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder={t('interns.search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('interns.filters.specialty')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Toutes spécialités</SelectItem>
                    {specialties.map(specialty => (
                      <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('interns.filters.location')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Toutes localisations</SelectItem>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
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
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredInterns.map(intern => (
                <Card key={intern.id} className="card-hover border">
                  <CardContent className="p-6">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <img
                          src={intern.photo}
                          alt={intern.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{intern.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className="bg-talentup-blue400/10 text-talentup-blue400">
                            {intern.specialty}
                          </Badge>
                          <span className="text-sm text-gray-500">{intern.location}</span>
                        </div>
                        <p className="mt-3 text-sm text-gray-700 line-clamp-2">
                          {intern.bio}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="text-sm font-medium text-gray-900">Compétences</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {intern.skills.map(skill => (
                          <Badge key={skill} variant="outline" className="bg-gray-50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="text-sm font-medium text-gray-900">Projets</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {intern.projects.map(project => (
                          <Badge key={project} variant="outline" className="bg-talentup-green/10 text-talentup-green border-talentup-green/30">
                            {project}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" className="mr-2">Voir portfolio</Button>
                      <Button className="btn-gradient">Contacter</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {filteredInterns.length === 0 && (
                <div className="col-span-2 text-center py-12">
                  <p className="text-gray-500">Aucun stagiaire ne correspond à vos critères.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Interns;
