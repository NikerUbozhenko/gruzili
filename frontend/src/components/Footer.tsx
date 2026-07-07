import { Phone, MapPin, Clock, Send } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold font-manrope mb-4">
              <span className="text-accent">GRUZILI</span> GOMEL
            </h3>
            <p className="text-gray-400 mb-4">
              Профессиональные грузчики и грузоперевозки в Гомеле. 
              Работаем качественно, быстро и недорого с 2014 года.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-manrope">Навигация</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#главная" className="hover:text-accent transition-colors">Главная</a></li>
              <li><a href="#услуги" className="hover:text-accent transition-colors">Услуги</a></li>
              <li><a href="#цены" className="hover:text-accent transition-colors">Цены</a></li>
              <li><a href="#преимущества" className="hover:text-accent transition-colors">Преимущества</a></li>
              <li><a href="#отзывы" className="hover:text-accent transition-colors">Отзывы</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-manrope">Основные услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#услуги" className="hover:text-accent transition-colors">Грузоперевозки</a></li>
              <li><a href="#услуги" className="hover:text-accent transition-colors">Квартирные переезды</a></li>
              <li><a href="#услуги" className="hover:text-accent transition-colors">Офисные переезды</a></li>
              <li><a href="#услуги" className="hover:text-accent transition-colors">Услуги грузчиков</a></li>
              <li><a href="#услуги" className="hover:text-accent transition-colors">Вывоз мусора</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-manrope">Контакты</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+375295990782" className="hover:text-accent transition-colors block">
                    +375295990782
                  </a>
                  
                </div>
              </li>
            
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <span>г. Гомель, ул. Советская, 1<br />Работаем по всему городу и области</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="text-accent font-semibold">Ежедневно</div>
                  <div>08:00 - 22:00 (без выходных)</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} GRUZILI GOMEL. Все права защищены.
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-accent transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer