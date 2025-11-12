import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Menu, X, Search, MessageCircle, ExternalLink } from "lucide-react";
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
  const toolsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const sections: Section[] = [
    { id: "inicio", title: "Início", ref: heroRef },
    { id: "sobre", title: "Sobre", ref: aboutRef },
    { id: "servicos", title: "Serviços", ref: servicesRef },
    { id: "sistemas", title: "Sistemas", ref: systemsRef },
    { id: "ferramentas", title: "Ferramentas de IA", ref: toolsRef },
    { id: "contato", title: "Contato", ref: contactRef },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  // Dados dos serviços
  const services = [
    {
      title: "Consultoria Estratégica",
      description: "Planejamento estratégico e análise de negócios para PMEs",
      icon: "📊",
    },
    {
      title: "Transformação Digital",
      description: "Implementação de soluções digitais e modernização de processos",
      icon: "🚀",
    },
    {
      title: "Gestão de Projetos",
      description: "Metodologias ágeis e gerenciamento eficiente de projetos",
      icon: "📋",
    },
    {
      title: "Consultoria Financeira",
      description: "Análise financeira, planejamento e otimização de custos",
      icon: "💰",
    },
    {
      title: "Recursos Humanos",
      description: "Gestão de pessoas, recrutamento e desenvolvimento de equipes",
      icon: "👥",
    },
    {
      title: "Automações (RPA)",
      description: "Robotic Process Automation para otimizar processos repetitivos",
      icon: "⚙️",
    },
  ];

  // Dados das ferramentas de IA
  const iaTools = [
    {
      name: "ChatGPT",
      description: "Assistente de IA para escrita, análise e brainstorming",
      category: "Assistente",
    },
    {
      name: "Copilot",
      description: "Assistente de código e produtividade integrado ao Office",
      category: "Produtividade",
    },
    {
      name: "Claude",
      description: "IA avançada para análise complexa e redação profissional",
      category: "Assistente",
    },
    {
      name: "Midjourney",
      description: "Geração de imagens de alta qualidade com IA",
      category: "Imagem",
    },
    {
      name: "DALL-E",
      description: "Criação de imagens personalizadas a partir de descrições",
      category: "Imagem",
    },
    {
      name: "Manus",
      description: "Plataforma de automação e desenvolvimento de aplicações",
      category: "Automação",
      url: "https://manus.im/invitation/Y1AQAAK2FAJXU",
    },
    {
      name: "Jasper",
      description: "Ferramenta de escrita com IA para marketing e conteúdo",
      category: "Conteúdo",
    },
    {
      name: "Synthesia",
      description: "Criação de vídeos com avatares de IA",
      category: "Vídeo",
    },
    {
      name: "Typeform",
      description: "Criação de formulários inteligentes com IA",
      category: "Formulários",
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
      icon: "📈",
    },
    {
      name: "ImobRH",
      description: "Sistema de gestão de recursos humanos para imobiliárias",
      status: "Em Desenvolvimento",
      url: "#",
      icon: "👔",
    },
  ];

  // Diferenciais da empresa
  const differentials = [
    {
      title: "Expertise Comprovada",
      description: "Mais de 10 anos de experiência em consultoria empresarial",
      icon: "🎯",
    },
    {
      title: "Soluções Personalizadas",
      description: "Cada solução é adaptada às necessidades específicas do seu negócio",
      icon: "🔧",
    },
    {
      title: "Tecnologia de Ponta",
      description: "Utilizamos as melhores ferramentas e tecnologias disponíveis",
      icon: "💻",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navegação */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src={APP_LOGO} alt="Delmack" className="h-10 w-auto" />
              <span className="ml-2 text-lg font-bold text-gray-900">
                Delmack
              </span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.ref)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
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
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
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
            <div className="md:hidden pb-4 border-t">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.ref)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {section.title}
                </button>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-4 py-2 text-green-500 font-medium hover:bg-gray-100"
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
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Consultoria Empresarial de Excelência
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Transformamos negócios através de estratégia, tecnologia e inovação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Consultoria Gratuita
            </a>
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Search size={20} />
              Conheça Nossos Serviços
            </button>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section ref={aboutRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Por que escolher nossa consultoria?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((diff, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{diff.icon}</div>
                <h3 className="text-xl font-bold mb-3">{diff.title}</h3>
                <p className="text-gray-600">{diff.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Serviços */}
      <section ref={servicesRef} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-600"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center gap-2"
                >
                  Saiba mais →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Sistemas */}
      <section ref={systemsRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Nossos Sistemas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {systems.map((system, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{system.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{system.name}</h3>
                <p className="text-gray-600 mb-4">{system.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      system.status === "Live"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {system.status}
                  </span>
                </div>
                {system.status === "Live" && (
                  <a
                    href={system.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Acessar Sistema
                    <ExternalLink size={16} />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Ferramentas de IA */}
      <section ref={toolsRef} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Ferramentas de IA para PMEs
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Curadoria de ferramentas de inteligência artificial para potencializar seu negócio
          </p>

          {/* Barra de Busca */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="Buscar ferramentas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Grid de Ferramentas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow flex flex-col"
                >
                  <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{tool.category}</p>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {tool.description}
                  </p>
                  {tool.url && tool.url !== "#" ? (
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center gap-2"
                    >
                      Conhecer →
                    </a>
                  ) : (
                    <span className="text-gray-400 font-semibold">
                      Em breve →
                    </span>
                  )}
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-8 text-gray-500">
                Nenhuma ferramenta encontrada para "{searchTerm}"
              </div>
            )}
          </div>

          {/* Referral Link Manus */}
          <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-3">Conheça a Plataforma Manus</h3>
            <p className="text-gray-600 mb-4">
              Automação e desenvolvimento de aplicações sem código
            </p>
            <a
              href="https://manus.im/invitation/Y1AQAAK2FAJXU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Acessar Manus
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section ref={contactRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Entre em Contato
          </h2>

          <Card className="p-8">
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="(41) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Sua mensagem aqui..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Enviar Mensagem
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:delmackconsultoria@gmail.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    delmackconsultoria@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 inline-flex items-center gap-2"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Delmack Consultoria</h3>
              <p className="text-gray-400">
                Transformando negócios através de consultoria estratégica e tecnologia
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Navegação Rápida</h3>
              <ul className="space-y-2 text-gray-400">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.ref)}
                      className="hover:text-white transition-colors"
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <p className="text-gray-400 mb-2">
                Email: delmackconsultoria@gmail.com
              </p>
              <p className="text-gray-400 mb-2">CNPJ: 61.887.193/0001-39</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 inline-flex items-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Delmack Consultoria. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
