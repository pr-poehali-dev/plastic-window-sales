import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [width, setWidth] = useState('1200');
  const [height, setHeight] = useState('1400');
  const [profile, setProfile] = useState('standard');
  const [glass, setGlass] = useState('double');
  const [activeSection, setActiveSection] = useState('home');

  const calculatePrice = () => {
    const area = (parseInt(width) * parseInt(height)) / 1000000;
    const basePrice = 5000;
    const profileMultiplier = profile === 'premium' ? 1.5 : profile === 'energy' ? 1.3 : 1;
    const glassMultiplier = glass === 'triple' ? 1.4 : glass === 'energy' ? 1.6 : 1;
    return Math.round(area * basePrice * profileMultiplier * glassMultiplier);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Home" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-primary">ОкнаПро</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О нас' },
                { id: 'catalog', label: 'Каталог' },
                { id: 'calculator', label: 'Калькулятор' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'faq', label: 'FAQ' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <Button size="lg" className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Пластиковые окна <span className="text-primary">премиум</span> качества
              </h2>
              <p className="text-xl text-muted-foreground">
                Энергоэффективные окна с гарантией 10 лет. Производство и установка за 3 дня.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('calculator')}>
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('catalog')}>
                  Смотреть каталог
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { icon: 'Award', label: '10 лет гарантии' },
                  { icon: 'Truck', label: 'Установка за 3 дня' },
                  { icon: 'ThumbsUp', label: '2000+ довольных клиентов' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <Icon name={item.icon} className="text-primary mx-auto mb-2" size={32} />
                    <p className="text-sm font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/f7f19a07-6313-4993-b909-4361add7e97f/files/fd9ed278-b0af-45a6-9100-348549fd74e9.jpg"
                alt="Современные пластиковые окна"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">-25%</div>
                <div className="text-sm">Скидка до конца месяца</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">О компании</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы производим и устанавливаем качественные пластиковые окна с 2010 года
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Building2', title: 'Собственное производство', desc: 'Контроль качества на всех этапах' },
              { icon: 'Users', title: 'Профессиональная команда', desc: 'Опытные мастера с сертификатами' },
              { icon: 'Shield', title: 'Гарантия качества', desc: '10 лет гарантии на все изделия' },
              { icon: 'Zap', title: 'Быстрый монтаж', desc: 'Установка за 1-3 дня' },
            ].map((item, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <Icon name={item.icon} className="text-primary mx-auto mb-4" size={48} />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог окон</h2>
            <p className="text-xl text-muted-foreground">Выберите идеальное окно для вашего дома</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Стандарт',
                price: 'от 5 000 ₽/м²',
                features: ['3-камерный профиль', 'Двухкамерный стеклопакет', 'Базовая фурнитура', 'Белый цвет'],
                popular: false,
              },
              {
                title: 'Премиум',
                price: 'от 7 500 ₽/м²',
                features: ['5-камерный профиль', 'Энергосберегающий стеклопакет', 'Премиум фурнитура', 'Любой цвет'],
                popular: true,
              },
              {
                title: 'Энерго',
                price: 'от 8 000 ₽/м²',
                features: ['7-камерный профиль', 'Трехкамерный стеклопакет', 'Лучшая теплоизоляция', 'Шумоизоляция'],
                popular: false,
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className={`relative hover:shadow-xl transition-all hover:-translate-y-2 ${
                  item.popular ? 'border-primary border-2' : ''
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">{item.price}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={item.popular ? 'default' : 'outline'}>
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-muted-foreground">Рассчитайте стоимость окна за 1 минуту</p>
          </div>
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Параметры окна</CardTitle>
              <CardDescription>Укажите размеры и характеристики</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="width">Ширина (мм)</Label>
                  <Input
                    id="width"
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder="1200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Высота (мм)</Label>
                  <Input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="1400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile">Тип профиля</Label>
                <Select value={profile} onValueChange={setProfile}>
                  <SelectTrigger id="profile">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Стандарт (3-камерный)</SelectItem>
                    <SelectItem value="premium">Премиум (5-камерный)</SelectItem>
                    <SelectItem value="energy">Энерго (7-камерный)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="glass">Тип стеклопакета</Label>
                <Select value={glass} onValueChange={setGlass}>
                  <SelectTrigger id="glass">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="double">Двухкамерный</SelectItem>
                    <SelectItem value="triple">Трехкамерный</SelectItem>
                    <SelectItem value="energy">Энергосберегающий</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-90">Ориентировочная стоимость:</div>
                    <div className="text-4xl font-bold">{calculatePrice().toLocaleString('ru-RU')} ₽</div>
                    <div className="text-sm opacity-90 mt-1">
                      Площадь: {((parseInt(width) * parseInt(height)) / 1000000).toFixed(2)} м²
                    </div>
                  </div>
                  <Icon name="Calculator" size={64} className="opacity-20" />
                </div>
              </div>

              <Button size="lg" className="w-full" variant="secondary">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать замер
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground">Более 2000 реализованных проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative overflow-hidden">
                  <img
                    src={
                      idx % 2 === 0
                        ? 'https://cdn.poehali.dev/projects/f7f19a07-6313-4993-b909-4361add7e97f/files/fd9ed278-b0af-45a6-9100-348549fd74e9.jpg'
                        : 'https://cdn.poehali.dev/projects/f7f19a07-6313-4993-b909-4361add7e97f/files/c0160c91-8b3d-4b46-ad1e-45c98c59d099.jpg'
                    }
                    alt={`Проект ${idx}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <div className="font-semibold">Проект №{idx}</div>
                      <div className="text-sm opacity-90">Установка окон в квартире</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна Петрова',
                text: 'Отличное качество окон! Установили быстро, работали аккуратно. Очень довольна результатом.',
                rating: 5,
              },
              {
                name: 'Михаил Иванов',
                text: 'Заказывал окна для загородного дома. Профессиональный подход, качественные материалы. Рекомендую!',
                rating: 5,
              },
              {
                name: 'Елена Смирнова',
                text: 'Прекрасное соотношение цены и качества. Окна теплые, шум с улицы практически не слышно.',
                rating: 5,
              },
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-base">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="fill-secondary text-secondary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Сколько времени занимает установка окон?',
                a: 'Стандартная установка окон занимает от 1 до 3 дней в зависимости от количества окон и сложности проекта.',
              },
              {
                q: 'Какая гарантия на окна?',
                a: 'Мы предоставляем гарантию 10 лет на все пластиковые окна и 2 года на монтажные работы.',
              },
              {
                q: 'Можно ли установить окна зимой?',
                a: 'Да, установка окон возможна круглый год при температуре не ниже -15°C. Используем специальную морозостойкую монтажную пену.',
              },
              {
                q: 'Какие способы оплаты доступны?',
                a: 'Принимаем наличные, безналичный расчет, оплату картой. Возможна рассрочка на 6-12 месяцев без переплаты.',
              },
              {
                q: 'Нужно ли делать замер перед заказом?',
                a: 'Да, точный замер обязателен для правильного изготовления окон. Наши специалисты выполняют замер бесплатно.',
              },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl opacity-90">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: 'Phone', title: 'Телефон', value: '+7 (999) 123-45-67' },
              { icon: 'Mail', title: 'Email', value: 'info@oknapro.ru' },
              { icon: 'MapPin', title: 'Адрес', value: 'г. Москва, ул. Примерная, д. 10' },
            ].map((item, idx) => (
              <Card key={idx} className="text-center bg-white/10 backdrop-blur border-white/20 text-white">
                <CardHeader>
                  <Icon name={item.icon} className="mx-auto mb-3" size={40} />
                  <CardTitle className="text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Home" size={28} />
            <span className="text-2xl font-bold">ОкнаПро</span>
          </div>
          <p className="text-white/70 mb-6">Качественные окна для вашего комфорта</p>
          <div className="flex justify-center gap-6 mb-6">
            {['Facebook', 'Instagram', 'Youtube'].map((social) => (
              <button key={social} className="hover:text-primary transition-colors">
                <Icon name={social} size={24} />
              </button>
            ))}
          </div>
          <Separator className="my-6 bg-white/20" />
          <p className="text-sm text-white/60">© 2024 ОкнаПро. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
