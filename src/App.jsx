import React, { useState } from 'react';
import { 
  Menu, X, Monitor, Wifi, Shield, 
  Settings, MessageCircle, ChevronRight, Phone, Mail, MapPin 
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  const services = [
    {
      title: 'Suporte Técnico',
      description: 'Atendimento remoto e presencial rápido para resolver problemas no seu sistema ou hardware com máxima eficiência.',
      icon: <Monitor className="w-10 h-10 text-blue-600" />
    },
    {
      title: 'Redes e Wi-Fi',
      description: 'Configuração, otimização e estruturação de redes para garantir uma conexão rápida, estável e sem quedas.',
      icon: <Wifi className="w-10 h-10 text-blue-600" />
    },
    {
      title: 'Segurança Digital',
      description: 'Implementação de firewall, antivírus e backup de dados para proteger suas informações contra ameaças virtuais.',
      icon: <Shield className="w-10 h-10 text-blue-600" />
    },
    {
      title: 'Manutenção de Computadores',
      description: 'Limpeza preventiva, formatação, troca de peças e upgrades para deixar sua máquina como nova.',
      icon: <Settings className="w-10 h-10 text-blue-600" />
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      
      {/* HEADER & NAVIGATION */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Aumentei a altura do menu aqui (h-24) */}
          <div className="flex justify-between items-center h-24">
            
            {/* Logo - Aumentado usando scale-125 para compensar o espaço em branco da imagem */}
            <div className="flex-shrink-0 flex items-center cursor-pointer py-2" onClick={() => window.scrollTo(0,0)}>
              <img 
                src="logo.png" 
                alt="Muniz Informática e Tecnologia" 
                className="h-20 sm:h-24 w-auto object-contain transform scale-[1.35] origin-left ml-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Ctext x='10' y='40' font-family='Arial' font-size='24' font-weight='bold' fill='%231e3a8a'%3EMuniz Tech%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <a 
                href="#contato"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Fale Conosco
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-md font-semibold"
              >
                <MessageCircle size={18} />
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION - Adicionado scroll-mt-24 para não esconder atrás do header */}
      <section id="inicio" className="pt-32 pb-20 bg-gray-900 text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center min-h-[85vh]">
          
          <div className="md:w-1/2 pt-16 pb-12 md:py-0 md:pr-12 z-10">
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Excelência em Tecnologia
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Problemas com <span className="text-blue-500">Internet</span> ou <span className="text-blue-500">Computador?</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
              Suporte técnico rápido e especializado para sua casa ou empresa. Não deixe a tecnologia travar o seu dia a dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contato"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
              >
                Solicitar Orçamento
                <ChevronRight size={20} />
              </a>
              <a 
                href="#servicos"
                className="bg-transparent border border-gray-500 hover:border-white text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center text-center"
              >
                Ver Serviços
              </a>
            </div>
          </div>

          <div className="md:w-1/2 w-full h-64 md:h-[85vh] relative hidden md:block rounded-l-2xl overflow-hidden bg-gray-800">
            {/* Image Overlay/Gradient for smooth blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent z-10"></div>
            {/* Importante: Mudei o "alt" para vazio para não aparecer aquele texto falhado caso a imagem não carregue */}
            <img 
              src="munizinformatica.jpg" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Adicionado scroll-mt-24 */}
      <section id="servicos" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Nossas Soluções</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Serviços de TI Especializados</h3>
            <p className="text-gray-600 text-lg">
              Oferecemos uma gama completa de serviços para garantir que sua tecnologia funcione a seu favor, sem dores de cabeça.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Adicionado scroll-mt-24 */}
      <section id="sobre" className="py-24 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform translate-x-4 translate-y-4 opacity-20"></div>
              <img 
                src="post1.jpg" 
                alt="Especialista Muniz Informática trabalhando" 
                className="relative rounded-2xl shadow-2xl z-10 w-full object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">100%</p>
                    <p className="text-gray-600 font-medium text-sm">Satisfação Garantida</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Sobre Nós</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Sua parceira de confiança em soluções tecnológicas
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                A <strong>Muniz Informática & Tecnologia</strong> nasceu com o propósito de simplificar a relação das pessoas e empresas com a tecnologia. Entendemos que quando os equipamentos param, o seu dia a dia também para.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Nossa equipe é formada por profissionais altamente capacitados, prontos para oferecer um atendimento humanizado, transparente e focado em resolver a raiz do problema, seja ele de hardware, software ou redes.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Atendimento rápido e eficiente',
                  'Profissionais qualificados',
                  'Garantia em todos os serviços',
                  'Orçamento transparente'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-800 font-medium">
                    <div className="mr-3 bg-blue-100 text-blue-600 rounded-full p-1">
                      <ChevronRight size={16} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA / CONTACT SECTION - Adicionado scroll-mt-24 */}
      <section id="contato" className="py-20 bg-blue-600 text-white relative overflow-hidden scroll-mt-24">
        {/* Abstract Background shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-700 opacity-50 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Seu computador travou? A rede caiu?
          </h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Não perca mais tempo. Fale agora com um de nossos especialistas pelo WhatsApp e agende uma visita técnica ou atendimento remoto.
          </p>
          <a 
            href="https://api.whatsapp.com/send/?phone=5512997900535&text=Ol%C3%A1%21+Gostaria+de+solicitar+um+suporte+t%C3%A9cnico.&type=phone_number&app_absent=0" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-xl shadow-green-500/30 hover:-translate-y-1"
          >
            <MessageCircle size={28} />
            Falar no WhatsApp
          </a>
          <p className="mt-4 text-blue-200 text-sm">Atendimento rápido em horário comercial.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Brand */}
            <div>
              <img 
                src="logo.png" 
                alt="Muniz Logo" 
                className="h-16 w-auto object-contain mb-6 filter brightness-0 invert opacity-90 transform scale-125 origin-left"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <p className="text-gray-400 leading-relaxed mb-6">
                Soluções completas em Informática e Tecnologia. Cuidamos dos seus equipamentos para você cuidar do seu negócio.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-blue-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>(12) 99790-0535</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>muniztecnologia.sjc@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Atendimento Presencial e Remoto</span>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} Muniz Informática & Tecnologia. Todos os direitos reservados.</p>
            <div className="mt-4 md:mt-0">
              <p>Desenvolvido com excelência.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}