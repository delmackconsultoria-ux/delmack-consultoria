import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Menu,
  X,
  Search,
  MessageCircle,
  ExternalLink,
  ArrowRight,
  BarChart3,
  Zap,
  Layers,
  Cog,
  Award,
  Lightbulb,
  Cpu,
} from "lucide-react";
import { APP_LOGO, APP_TITLE } from "@/const";

const WHATSAPP_NUMBER = "5541995134690";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Delmack%20Consultoria.`;

interface Section {
  id: string;
  title: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Seções para navegação
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const systemsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const toolsRef = useRef<HTMLDivElement | null>(null);

  const sections: Section[] = [
    { id: "inicio", title: "Início", ref: heroRef },
    { id: "sobre", title: "Sobre", ref: aboutRef },
    { id: "servicos", title: "Serviços", ref: servicesRef },
    { id: "sistemas", title: "Sistemas", ref: systemsRef },
    { id: "contato", title: "Contato", ref: contactRef },
    { id: "ferramentas", title: "Ferramentas de IA", ref: toolsRef },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  // Dados dos serviços (apenas 4 agora)
  const services = [
    {
      title: "Consultoria Estratégica",
      description: "Planejamento estratégico e análise de negócios para PMEs",
      icon: BarChart3,
    },
    {
      title: "Transformação Digital",
      description: "Implementação de soluções digitais e modernização de processos",
      icon: Zap,
    },
    {
      title: "Gestão de Projetos",
      description: "Metodologias ágeis e gerenciamento eficiente de projetos",
      icon: Layers,
    },
    {
      title: "Automações (RPA)",
      description: "Robotic Process Automation para otimizar processos repetitivos",
      icon: Cog,
    },
  ];

  // Dados das ferramentas de IA
  const iaTools = [
    {
      name: "ChatGPT",
      description: "Assistente de IA para escrita, análise e brainstorming",
      category: "Assistente",
      url: "https://chatgpt.com",
    },
    {
      name: "Copilot",
      description: "Assistente de código e produtividade integrado ao Office",
      category: "Produtividade",
      url: "https://copilot.microsoft.com",
    },
    {
      name: "Claude",
      description: "IA avançada para análise complexa e redação profissional",
      category: "Assistente",
      url: "https://claude.ai",
    },
    {
      name: "Midjourney",
      description: "Geração de imagens de alta qualidade com IA",
      category: "Imagem",
      url: "https://www.midjourney.com",
    },
    {
      name: "DALL-E",
      description: "Criação de imagens personalizadas a partir de descrições",
      category: "Imagem",
      url: "https://openai.com/dall-e-3",
    },
    {
      name: "Manus",
      description: "Plataforma de automação e desenvolvimento de aplicações",
      category: "Automação",
      url: "https://manus.im/invitation/Y1AQAAK2FAJXU",
      isReferral: true,
    },
    {
      name: "Jasper",
      description: "Ferramenta de escrita com IA para marketing e conteúdo",
      category: "Conteúdo",
      url: "https://www.jasper.ai",
    },
    {
      name: "Synthesia",
      description: "Criação de vídeos com avatares de IA",
      category: "Vídeo",
      url: "https://www.synthesia.io",
    },
    {
      name: "Typeform",
      description: "Criação de formulários inteligentes com IA",
      category: "Formulários",
      url: "https://www.typeform.com",
    },
  ];

  // Filtrar ferramentas de IA baseado na busca
  const filteredTools = iaTools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Dados dos sistemas
  const systems = [
    {
      name: "Sales Management System",
      description: "Sistema de gestão de vendas para controle de pipeline e clientes",
      status: "Live",
      url: "https://delmack-rei-fwqutmfh.manus.space/",
      image: "/strategy.png",
    },
    {
      name: "ImobRH",
      description: "Sistema de gestão de recursos humanos para imobiliárias",
      status: "Live",
      url: "https://8080-ijjvh4zducxcjkgeckt5h-d771589c.manusvm.computer/imobrh-landing.html",
      image: "/imobRH.png",
    },
  ];

  // Diferenciais da empresa
  const differentials = [
    {
      title: "Expertise Comprovada",
      description: "Mais de 10 anos de experiência em consultoria empresarial",
      icon: Award,
    },
    {
      title: "Soluções Personalizadas",
      description: "Cada solução é adaptada às necessidades específicas do seu negócio",
      icon: Lightbulb,
    },
    {
      title: "Tecnologia de Ponta",
      description: "Utilizamos as melhores ferramentas e tecnologias disponíveis",
      icon: Cpu,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navegação */}
      <nav className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/delmack-logo.png" alt="Delmack" className="h-12 w-auto" />
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.ref)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                >
                  {section.title}
                </button>
              ))}
            </div>

            {/* WhatsApp Button Desktop */}
            <div className="hidden md:block">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300 button-glow"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            {/* Menu Mobile */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Menu Mobile Expandido */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t animate-fade-in">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.ref)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {section.title}
                </button>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-4 py-2 text-green-500 font-medium hover:bg-green-50"
              >
                WhatsApp
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Seção Hero */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Efeito de fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in">
            Consultoria Empresarial de Excelência
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100 animate-fade-in">
            Transformamos negócios através de estratégia, tecnologia e inovação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl button-glow"
            >
              <MessageCircle size={20} />
              Consultoria Gratuita
            </a>
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Search size={20} />
              Conheça Nossos Serviços
            </button>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
              Por que escolher nossa consultoria?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((diff, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 card-hover border-0 overflow-hidden"
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-blue-100 rounded-full">
                    {(() => {
                      const IconComponent = diff.icon;
                      return <IconComponent size={48} className="text-blue-600" />;
                    })()}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 text-center">{diff.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{diff.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Serviços */}
      <section ref={servicesRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
              Nossos Serviços
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-2xl transition-all duration-300 card-hover border-l-4 border-blue-600 overflow-hidden bg-gradient-to-br from-white to-gray-50 flex flex-col"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-blue-100 rounded-full">
                      <IconComponent size={40} className="text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-center flex-grow">{service.description}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center gap-2 transition-colors duration-300 justify-center"
                  >
                    Saiba mais
                    <ArrowRight size={16} />
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção Sistemas */}
      <section ref={systemsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
              Nossos Sistemas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {systems.map((system, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 card-hover overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 flex flex-col"
              >
                <div className="mb-6 h-48 overflow-hidden rounded-xl image-overlay">
                  <img
                    src={system.image}
                    alt={system.name}
                    className="w-full h-full object-contain bg-gray-100 transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{system.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{system.description}</p>
                <div className="flex items-center gap-2 mb-6">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      system.status === "Live"
                        ? "bg-green-100 text-green-800 shadow-md"
                        : "bg-yellow-100 text-yellow-800 shadow-md"
                    }`}
                  >
                    {system.status}
                  </span>
                </div>
                <a
                  href={system.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl button-glow inline-flex items-center justify-center gap-2"
                >
                  Acessar Sistema
                  <ExternalLink size={16} />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section ref={contactRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>

          <Card className="p-8 sm:p-12 shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="(41) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Assunto
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Sua mensagem aqui..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 button-glow"
              >
                Enviar Mensagem
              </Button>
            </form>

            <div className="mt-10 pt-10 border-t-2 border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Email</h3>
                  <a
                    href="mailto:delmackconsultoria@gmail.com"
                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
                  >
                    delmackconsultoria@gmail.com
                  </a>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">WhatsApp</h3>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 inline-flex items-center gap-2 font-semibold transition-colors duration-300"
                  >
                    <MessageCircle size={18} />
                    (41) 99513-4690
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Seção Ferramentas de IA */}
      <section ref={toolsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text-tech">
              Ferramentas de IA
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sugestões curadas de ferramentas de inteligência artificial para potencializar seu negócio
            </p>
          </div>

          {/* Barra de Busca */}
          <div className="mb-12">
            <div className="relative max-w-md mx-auto">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="Buscar ferramentas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-3 w-full border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Grid de Ferramentas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool, index) => (
                <Card
                  key={index}
                  className="p-8 transition-all duration-300 card-tech flex flex-col border-0 shimmer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 flex-1">{tool.name}</h3>
                    <div className="flex gap-2 ml-2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                        Sugestão
                      </span>
                      {tool.isReferral && (
                        <span className="bg-gradient-to-r from-pink-600 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                          Referral
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-blue-600 font-semibold mb-3">{tool.category}</p>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {tool.description}
                  </p>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-4 py-2 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-purple-700 inline-flex items-center justify-center gap-2 transition-all duration-300 w-full"
                  >
                    Conhecer
                    <ExternalLink size={16} />
                  </a>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                <Search size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg">Nenhuma ferramenta encontrada para "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Delmack Consultoria</h3>
              <p className="text-gray-400 leading-relaxed">
                Transformando negócios através de consultoria estratégica e tecnologia
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Navegação Rápida</h3>
              <ul className="space-y-2 text-gray-400">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.ref)}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <p className="text-gray-400 mb-2">
                Email: delmackconsultoria@gmail.com
              </p>
              <p className="text-gray-400 mb-4">CNPJ: 61.887.193/0001-39</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 inline-flex items-center gap-2 transition-colors duration-300"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Delmack Consultoria. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
