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

const WHATSAPP_NUMBER = "5541987818621";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Delmack%20Consultoria.`;

interface Section {
  id: string;
  title: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const formRef = useRef<HTMLFormElement>(null);

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
      category: "Análise",
      url: "https://claude.ai",
    },
    {
      name: "Gemini",
      description: "Modelo multimodal do Google para análise e criação de conteúdo",
      category: "Multimodal",
      url: "https://gemini.google.com",
    },
    {
      name: "Midjourney",
      description: "Geração de imagens de alta qualidade com IA",
      category: "Imagens",
      url: "https://midjourney.com",
    },
    {
      name: "Perplexity AI",
      description: "Mecanismo de busca com IA para pesquisa e análise",
      category: "Pesquisa",
      url: "https://perplexity.ai",
    },
  ];

  // Dados dos diferenciais
  const differentials = [
    {
      title: "Expertise Comprovada",
      description: "Mais de 10 anos de experiência em consultoria empresarial e transformação digital",
      icon: Award,
    },
    {
      title: "Soluções Personalizadas",
      description: "Cada projeto é único. Desenvolvemos estratégias sob medida para seu negócio",
      icon: Lightbulb,
    },
    {
      title: "Tecnologia de Ponta",
      description: "Utilizamos as melhores ferramentas e metodologias do mercado",
      icon: Cpu,
    },
  ];

  // Dados dos sistemas
  const systems = [
    {
      name: "RH Lize",
      description: "Sistema completo de gestão de recursos humanos com inteligência artificial. Análise de turnover, sugestões de retenção e insights preditivos para otimizar sua equipe.",
      status: "Live",
      url: "https://www.rhlize.com.br",
      images: ["/images/rhlize-real-painel.png", "/images/rhlize-real-central-ajuda.png"],
      benefits: ["Relatórios com IA", "Análise de Turnover", "Gestão de Ponto", "Sugestões de Retenção"]
    },
    {
      name: "Pipeline de Vendas",
      description: "Plataforma inteligente para gestão de vendas com indicadores em tempo real. Acompanhe suas metas, comissões e desempenho da equipe com dashboards interativos.",
      status: "Live",
      url: "https://delmack-rei-fwqutmfh.manus.space/",
      images: ["/images/pipeline-vendas-real-indicadores.png", "/images/pipeline-vendas-real-ranking.png", "/images/pipeline-vendas-real-homepage.png"],
      benefits: ["Indicadores em Tempo Real", "Gestão de Comissões", "Ranking de Vendas", "Relatórios Detalhados"]
    },
    {
      name: "Alugue-se",
      description: "Solução completa para gestão de aluguéis e propriedades. Automatize contratos, pagamentos e comunicação com inquilinos em uma única plataforma.",
      status: "Em Breve",
      url: "#",
      images: [],
      benefits: ["Gestão de Contratos", "Controle de Pagamentos", "Comunicação Automatizada", "Relatórios Financeiros"]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navegação */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={APP_LOGO} alt="Logo" className="h-8 w-8" />
              <span className="font-bold text-gray-900 hidden sm:inline">{APP_TITLE}</span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-8">
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

            {/* Botão WhatsApp e Menu Mobile */}
            <div className="flex items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors items-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              {/* Menu Mobile */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-700 hover:text-blue-600"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Menu Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-gray-200">
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
        className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
              Começar Transformação Digital
            </a>
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Search size={20} />
              Ver Benefícios
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
                  className="p-6 hover:shadow-xl transition-all duration-300 card-hover border-0 overflow-hidden"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <IconComponent size={32} className="text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">{service.description}</p>
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
          <div className="grid md:grid-cols-3 gap-8">
            {systems.map((system, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Imagem */}
                  {system.images && system.images.length > 0 && (
                    <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      <img
                        src={system.images[currentImageIndex[index] || 0]}
                        alt={`${system.name} - Preview`}
                        className="w-full h-full object-contain object-center p-4 group-hover:scale-105 transition-transform duration-700 bg-white"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Indicadores de Imagens */}
                      {system.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {system.images.map((_, imgIndex) => (
                            <div
                              key={imgIndex}
                              onClick={() => setCurrentImageIndex(prev => ({ ...prev, [index]: imgIndex }))}
                              className={`w-2 h-2 rounded-full shadow-md cursor-pointer transition-all ${(currentImageIndex[index] || 0) === imgIndex ? "bg-white w-6" : "bg-white opacity-60"}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Conteúdo */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{system.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm">{system.description}</p>
                    
                    {system.benefits && system.benefits.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-widest">Benefícios</h4>
                        <ul className="space-y-2">
                          {system.benefits.map((benefit, bIndex) => (
                            <li key={bIndex} className="flex items-start gap-3 text-gray-700 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <a
                      href={system.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg w-full button-glow ${
                        system.name === "RH Lize"
                          ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                          : system.name === "Pipeline de Vendas"
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                          : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                      }`}
                    >
                      {system.name === "RH Lize"
                        ? "Começar agora"
                        : system.name === "Pipeline de Vendas"
                        ? "Solicitar Demo"
                        : "Conhecer Plataforma"}
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section ref={contactRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="p-8 sm:p-12 shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
              <form
                ref={formRef}
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(formRef.current!);
                  try {
                    await fetch("https://formspree.io/f/xkoonzpp", {
                      method: "POST",
                      body: formData,
                    });
                    setShowConfirmation(true);
                    formRef.current?.reset();
                    setTimeout(() => setShowConfirmation(false), 3000);
                  } catch (error) {
                    setShowConfirmation(true);
                    formRef.current?.reset();
                    setTimeout(() => setShowConfirmation(false), 3000);
                  }
                }}
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
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold hover:from-green-600 hover:to-green-700 hover:shadow-lg transition-all duration-300 button-glow"
                >
                  Fale com Nosso Time
                </Button>
              </form>

              {showConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn" onClick={() => setShowConfirmation(false)}>
                  <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full animate-scaleIn" onClick={(e) => e.stopPropagation()}>
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                      <p className="text-gray-600 mb-6">Obrigado por entrar em contato. Responderemos em breve.</p>
                      <button
                        onClick={() => setShowConfirmation(false)}
                        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            <div className="space-y-8">
              <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-blue-50 to-white">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Email</h3>
                <a
                  href="mailto:delmackconsultoria@gmail.com"
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
                >
                  delmackconsultoria@gmail.com
                </a>
              </Card>
              <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-green-50 to-white">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">WhatsApp</h3>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 inline-flex items-center gap-2 font-semibold transition-colors duration-300"
                >
                  <MessageCircle size={18} />
                  55 (41) 98781-8621
                </a>
              </Card>
            </div>
          </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iaTools.map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 card-hover border-0 overflow-hidden h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{tool.name}</h3>
                    <ArrowRight size={20} className="text-blue-600 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{tool.description}</p>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {tool.category}
                  </span>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 text-lg">Delmack Consultoria</h3>
              <p className="text-gray-400 text-sm">Transformando negócios através de estratégia, tecnologia e inovação.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sistemas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Contato</h3>
              <p className="text-gray-400 text-sm mb-2">Email: delmackconsultoria@gmail.com</p>
              <p className="text-gray-400 text-sm">WhatsApp: 55 (41) 98781-8621</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Delmack Consultoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
