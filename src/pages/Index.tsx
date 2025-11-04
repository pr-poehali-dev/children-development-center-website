import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const individualPrograms = [
    {
      title: 'Логопедия',
      age: 'с 2,5 лет',
      description: 'Коррекция речевых нарушений, развитие правильного произношения',
      icon: 'MessageSquare',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      title: 'Подготовка к школе',
      age: '5-7 лет',
      description: 'Развитие навыков для успешного старта в 1 классе',
      icon: 'BookOpen',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Выполнение домашнего задания',
      age: '1-4 класс',
      description: 'Помощь ученикам 1-4 классов в освоении школьной программы',
      icon: 'NotebookPen',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Педагог-психолог',
      age: 'любой возраст',
      description: 'Поддержка эмоционального и личностного развития',
      icon: 'Brain',
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      title: 'Дети с особенностями развития',
      age: 'любой возраст',
      description: 'Индивидуальный подход и особая забота',
      icon: 'Heart',
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const groupPrograms = [
    {
      title: 'Мама и малыш',
      age: '2-4 года',
      description: 'Развивающие игры и упражнения для малышей вместе с родителями',
      icon: 'Users',
      color: 'bg-pink-50 border-pink-200'
    },
    {
      title: 'Подготовка к школе',
      age: '5-7 лет',
      description: 'Занятия в группе для дошкольников, формирование базовых знаний и умений',
      icon: 'GraduationCap',
      color: 'bg-yellow-50 border-yellow-200'
    }
  ];

  const teachers = [
    {
      name: 'Людмила Артуровна',
      position: 'Педагог начального образования, нейродефектолог',
      experience: '6 лет опыта',
      image: 'https://cdn.poehali.dev/files/4348b70b-f003-4220-928b-bf9ec180b4d2.jpg',
      description: 'СГПИ (Начальное образование, Иностранный язык), СКФУ (Нейродефектология)',
      education: [
        'Педагогика М. Монтессори',
        'Логопедия и коррекционно-педагогическая работа',
        'Сенсорная интеграция с детьми с особенностями развития'
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/79804c08-b19c-4c66-a4b0-d4c058a770b2.png" 
                alt="Всё Просто" 
                className="h-12 w-12 object-cover rounded-full"
              />
              <span className="text-2xl font-bold text-primary">Всё Просто</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#programs" className="text-foreground hover:text-primary transition-colors">Программы</a>
              <a href="#teachers" className="text-foreground hover:text-primary transition-colors">Педагоги</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:block">Записаться</Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Центр детского развития{' '}
                <span className="text-primary">Всё Просто</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Развиваем способности, раскрываем таланты и готовим к успешному будущему детей от 1 до 12 лет
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на пробное занятие
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/dbeae013-f7db-459a-ad5d-de456e4af517/files/ccb805f7-8cf7-4d59-9017-43f93404fbd4.jpg"
                alt="Дети в центре развития"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: 'Users', value: '500+', label: 'Выпускников' },
              { icon: 'Award', value: '15', label: 'Лет опыта' },
              { icon: 'Star', value: '4.9', label: 'Рейтинг' },
              { icon: 'Heart', value: '100%', label: 'Любви к детям' }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon as any} size={32} className="text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши программы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Индивидуальные и групповые занятия для развития каждого ребёнка
            </p>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="User" size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold">Индивидуальные программы</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {individualPrograms.map((program, index) => (
                <Card
                  key={index}
                  className={`${program.color} border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <Icon name={program.icon as any} size={28} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">{program.age}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold">Групповые программы</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {groupPrograms.map((program, index) => (
                <Card
                  key={index}
                  className={`${program.color} border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <Icon name={program.icon as any} size={28} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">{program.age}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border-2 border-primary/20 max-w-4xl">
              <div className="flex items-center gap-3">
                <Icon name="Gift" size={32} className="text-primary" />
                <p className="text-xl font-semibold text-primary">Первое занятие бесплатно!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-4 bg-gradient-to-b from-white to-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши педагоги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная команда с любовью к детям
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            {teachers.map((teacher, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <Avatar className="w-48 h-48 mx-auto border-4 border-primary/20">
                        <AvatarImage src={teacher.image} alt={teacher.name} className="object-cover" />
                        <AvatarFallback>{teacher.name[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-grow space-y-4">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{teacher.name}</h3>
                        <p className="text-lg text-muted-foreground mb-3">{teacher.position}</p>
                        <div className="flex items-center gap-2 text-primary font-medium mb-4">
                          <Icon name="Award" size={20} />
                          <span>{teacher.experience}</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="GraduationCap" size={20} className="text-primary" />
                          <h4 className="font-semibold">Образование</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{teacher.description}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="BookOpen" size={20} className="text-primary" />
                          <h4 className="font-semibold">Повышение квалификации</h4>
                        </div>
                        <ul className="space-y-1">
                          {teacher.education?.map((edu, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{edu}</span>
                            </li>
                          ))}
                        </ul>
                      </div>


                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Запишитесь на пробное занятие</h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами в ближайшее время
              </p>
            </div>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      placeholder="Как к вам обращаться?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий (необязательно)</label>
                    <Textarea
                      placeholder="Расскажите о вашем ребенке или задайте вопрос"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="text-base resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Телефоны</div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div><a href="tel:+79224308344" className="hover:text-primary transition-colors">8 (922) 430-83-44</a></div>
                        <div><a href="tel:+79286860545" className="hover:text-primary transition-colors">8 (928) 686-05-45</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Globe" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">ВКонтакте</div>
                      <div className="text-sm text-muted-foreground">
                        <a href="https://vk.com/vse_prosto_mzd" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                          vk.com/vse_prosto_mzd
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/79804c08-b19c-4c66-a4b0-d4c058a770b2.png" 
                  alt="Всё Просто" 
                  className="h-12 w-12 object-cover rounded-full"
                />
                <span className="text-2xl font-bold">Всё Просто</span>
              </div>
              <p className="text-white/80">Центр детского развития</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Программы</h4>
              <ul className="space-y-2 text-white/80">
                <li>Мама и малыш</li>
                <li>Подготовка к школе</li>
                <li>Логопедия</li>
                <li>Педагог-психолог</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="tel:+79224308344" className="hover:text-white transition-colors">8 (922) 430-83-44</a></li>
                <li><a href="tel:+79286860545" className="hover:text-white transition-colors">8 (928) 686-05-45</a></li>
                <li><a href="https://vk.com/vse_prosto_mzd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">vk.com/vse_prosto_mzd</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <a href="https://vk.com/vse_prosto_mzd" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="icon" className="rounded-full hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.02-1.49-1.16-1.744-1.16-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.491-.085.745-.576.745z"/>
                    </svg>
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 Центр детского развития "Всё Просто". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;