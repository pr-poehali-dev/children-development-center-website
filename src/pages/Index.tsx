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

  const programs = [
    {
      title: 'Группа "Мама и малыш"',
      age: '6 мес - 2 года',
      description: 'Совместные занятия для мам и малышей: развитие через контакт, музыку и тактильные игры',
      icon: 'Heart',
      color: 'bg-pink-50 border-pink-200'
    },
    {
      title: 'Раннее развитие',
      age: '1-3 года',
      description: 'Развитие моторики, речи и творческих способностей через игру и музыку',
      icon: 'Baby',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Подготовка к школе',
      age: '5-7 лет',
      description: 'Комплексная подготовка: чтение, математика, логика и эмоциональный интеллект',
      icon: 'BookOpen',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Творческие занятия',
      age: '3-10 лет',
      description: 'Рисование, лепка, аппликация и конструирование для развития воображения',
      icon: 'Palette',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      title: 'Психолог',
      age: '3-12 лет',
      description: 'Индивидуальные консультации и групповые занятия по эмоциональному развитию',
      icon: 'Brain',
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      title: 'Логопедия',
      age: '2-10 лет',
      description: 'Коррекция речевых нарушений, постановка звуков, развитие речи',
      icon: 'MessageSquare',
      color: 'bg-orange-50 border-orange-200'
    }
  ];

  const teachers = [
    {
      name: 'Анна Петрова',
      position: 'Педагог раннего развития',
      experience: '8 лет опыта',
      image: 'https://cdn.poehali.dev/projects/dbeae013-f7db-459a-ad5d-de456e4af517/files/d3fb8169-a699-4c94-8ea5-c1cb041c9c4e.jpg',
      description: 'Специалист по методике Монтессори'
    },
    {
      name: 'Мария Сидорова',
      position: 'Логопед-дефектолог',
      experience: '12 лет опыта',
      image: 'https://cdn.poehali.dev/projects/dbeae013-f7db-459a-ad5d-de456e4af517/files/112d6305-fc07-4bd1-9229-d6ce645fde47.jpg',
      description: 'Кандидат педагогических наук'
    },
    {
      name: 'Елена Иванова',
      position: 'Преподаватель английского',
      experience: '10 лет опыта',
      image: 'https://cdn.poehali.dev/projects/dbeae013-f7db-459a-ad5d-de456e4af517/files/d3fb8169-a699-4c94-8ea5-c1cb041c9c4e.jpg',
      description: 'Сертификат CELTA, Cambridge'
    }
  ];

  const reviews = [
    {
      name: 'Ольга М.',
      text: 'Мой сын ходит в центр уже полгода, и я вижу огромный прогресс! Педагоги внимательные, а атмосфера очень тёплая.',
      rating: 5
    },
    {
      name: 'Дмитрий К.',
      text: 'Отличная подготовка к школе! Дочка с удовольствием бежит на занятия, стала более уверенной и самостоятельной.',
      rating: 5
    },
    {
      name: 'Наталья В.',
      text: 'Профессиональные педагоги, современные методики и удобное расписание. Рекомендую всем родителям!',
      rating: 5
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
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-primary">Всё Просто</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#programs" className="text-foreground hover:text-primary transition-colors">Программы</a>
              <a href="#teachers" className="text-foreground hover:text-primary transition-colors">Педагоги</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
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
              Комплексные программы развития для детей разного возраста
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
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
      </section>

      <section id="teachers" className="py-20 px-4 bg-gradient-to-b from-white to-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши педагоги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная команда с любовью к детям
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary/20">
                    <AvatarImage src={teacher.image} alt={teacher.name} />
                    <AvatarFallback>{teacher.name[0]}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-2xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-base">{teacher.position}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-primary font-medium">
                    <Icon name="Award" size={18} />
                    <span>{teacher.experience}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{teacher.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы родителей</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Нам доверяют самое ценное — детей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed italic">"{review.text}"</p>
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
                <div className="mt-8 pt-8 border-t grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Адрес</div>
                      <div className="text-sm text-muted-foreground">г. Москва, ул. Примерная, д. 10</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Телефон</div>
                      <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Режим работы</div>
                      <div className="text-sm text-muted-foreground">Пн-Вс: 9:00 - 20:00</div>
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
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-primary" />
                </div>
                <span className="text-2xl font-bold">Всё Просто</span>
              </div>
              <p className="text-white/80">Центр детского развития</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Программы</h4>
              <ul className="space-y-2 text-white/80">
                <li>Раннее развитие</li>
                <li>Подготовка к школе</li>
                <li>Творческие занятия</li>
                <li>Английский язык</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@vseprosто.ru</li>
                <li>г. Москва, ул. Примерная, 10</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="MessageCircle" size={20} />
                </Button>
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