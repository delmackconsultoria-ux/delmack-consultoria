import { useState, useRef } from "react";
import { Menu, X, ExternalLink, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  const formRef = useRef<HTMLFormElement | null>(null);
  
  const handleNextImage = (systemIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [systemIndex]: ((prev[systemIndex] || 0) + 1) % totalImages
    }));
  };
  
  const handlePrevImage = (systemIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [systemIndex]: (prev[systemIndex] || 0) === 0 ? totalImages - 1 : (prev[systemIndex] || 0) - 1
    }));
  };

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
    { id: "ferramentas", title: "Ferramentas de IA", ref: toolsRef },
    { id: "contato", title: "Contato", ref: contactRef },
  ];

  const services = [
    {
      title: "Consultoria Estratégica",
      description: "Análise profunda do seu negócio para identificar oportunidades de crescimento e otimização operacional."
    },
    {
      title: "Implementação de Sistemas",
      description: "Implantação e customização de soluções tecnológicas alinhadas com seus objetivos empresariais."
    },
    {
      title: "Treinamento e Suporte",
      description: "Capacitação de equipes e suporte contínuo para garantir o máximo aproveitamento das ferramentas."
    },
    {
      title: "Análise de Dados",
      description: "Transforme dados em insights acionáveis para decisões mais inteligentes e baseadas em evidências."
    }
  ];

  const systems = [
    {
      name: "Pipeline de vendas",
      description: "Sistema de gerenciamento de meta, vendas e comissões para acompanhamento e organização do corretor, gerente e financeiro. Visualize indicadores em tempo real, rankings de desempenho e comissões com precisão.",
      status: "Live",
      url: "https://delmack-rei-fwqutmfh.manus.space/",
      images: ["/images/pipeline-vendas-real-indicadores.png"],
      benefits: ["Dashboard em tempo real", "Ranking de vendas", "Cálculo automático de comissões", "Relatórios detalhados"]
    },
    {
      name: "RH Lize",
      description: "Sistema completo de gestão de recursos humanos com inteligência artificial. Análise de turnover, sugestões de retenção e insights preditivos para otimizar sua equipe.",
      status: "Live",
      url: "https://www.rhlize.com.br",
      images: ["/images/rhlize-real-dashboard.png", "/images/pipeline-vendas-real-homepage.png"],
      benefits: ["Relatórios com IA", "Análise de Turnover", "Gestão de Ponto", "Sugestões de Retenção"]
    },
    {
      name: "Alugue-se",
      description: "Plataforma de locação que conecta empresas e pessoas reduzindo o desperdício e inspirando novas formas de renda e consumo.",
      status: "Em breve",
      url: "#",
      images: [],
      benefits: ["Marketplace de aluguel", "Conexão B2B", "Sustentabilidade", "Novas receitas"]
    }
  ];

  const tools = [
    {
      title: "ChatGPT",
      description: "Assistente de IA para automação de tarefas, geração de conteúdo e análise de dados em tempo real."
    },
    {
      title: "Claude",
      description: "IA avançada para análise complexa, redação técnica e resolução de problemas estratégicos."
    },
    {
      title: "Gemini",
      description: "Ferramenta multimodal para processamento de imagens, textos e dados estruturados simultaneamente."
    },
    {
      title: "Copilot",
      description: "Assistente integrado ao Microsoft 365 para produtividade e automação de fluxos de trabalho."
    }
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="font-bold text-lg text-gray-900">Delmack</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.ref)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {section.title}
              </button>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
            <nav className="flex flex-col gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.ref)}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-left"
                >
                  {section.title}
                </button>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold text-center"
              >
                💬 WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Consultoria Empresarial de Excelência
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100 leading-relaxed">
            Transformamos negócios através de estratégia, tecnologia e inovação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              💬 Consultoria Gratuita
            </a>
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              🔍 Conheça Nossos Serviços
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
              Por que escolher nossa consultoria?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Experiência Comprovada</h3>
              <p className="text-gray-600 leading-relaxed">
                Mais de 10 anos ajudando empresas a crescer através de soluções tecnológicas estratégicas e inovadoras.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Soluções Personalizadas</h3>
              <p className="text-gray-600 leading-relaxed">
                Cada negócio é único. Desenvolvemos estratégias customizadas que se alinham perfeitamente com seus objetivos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Resultados Mensuráveis</h3>
              <p className="text-gray-600 leading-relaxed">
                Focamos em KPIs reais e entregas tangíveis que impactam diretamente no crescimento do seu negócio.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Parceria de Longo Prazo</h3>
              <p className="text-gray-600 leading-relaxed">
                Não somos apenas consultores, somos parceiros comprometidos com o sucesso contínuo da sua empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 mb-2">Soluções completas para transformar seu negócio</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-center flex-grow">{service.description}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center gap-2 transition-colors duration-300 justify-center"
                  >
                    Saiba mais
                    <ExternalLink size={16} />
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção Sistemas */}
      <section ref={systemsRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text">
              Nossos Sistemas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Soluções integradas e inteligentes para potencializar seu negócio</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {systems.map((system, index) => (
              <div key={index} className="group">
                {/* Card Container */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Imagem */}
                  {system.images && system.images.length > 0 && (
                    <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      <img
                        src={system.images[currentImageIndex[index] || 0]}
                        alt={`${system.name} - Preview`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                            system.status === "Live"
                              ? "bg-green-500 text-white"
                              : "bg-yellow-500 text-white"
                          }`}
                        >
                          {system.status}
                        </span>
                      </div>
                      
                      {/* Indicadores de Imagens */}
                      {system.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {system.images.map((_, imgIndex) => (
                            <div
                              key={imgIndex}
                              onClick={() => setCurrentImageIndex(prev => ({ ...prev, [index]: imgIndex }))}
                              className={`w-2 h-2 rounded-full shadow-md cursor-pointer transition-all ${
                                (currentImageIndex[index] || 0) === imgIndex ? "bg-white w-6" : "bg-white opacity-60"
                              }`}
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
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-md hover:shadow-lg w-full button-glow"
                    >
                      Acessar Sistema
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ferramentas IA Section */}
      <section ref={toolsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
              Ferramentas de IA
            </h2>
            <p className="text-xl text-gray-600 mb-2">Potencialize seu negócio com inteligência artificial</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => {
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{tool.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-center flex-grow">{tool.description}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center gap-2 transition-colors duration-300 justify-center"
                  >
                    Saiba mais
                    <ExternalLink size={16} />
                  </a>
                </Card>
              );
            })}
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

          <Card className="p-8 sm:p-12 shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 max-w-3xl mx-auto">
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
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Enviar Mensagem
              </Button>
            </form>

            {showConfirmation && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg text-center font-semibold">
                ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="font-bold text-lg text-white">Delmack</span>
              </div>
              <p className="text-sm">Consultoria empresarial de excelência em tecnologia.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Serviços</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Sistemas</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Sistemas</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://delmack-rei-fwqutmfh.manus.space/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Pipeline de Vendas</a></li>
                <li><a href="https://www.rhlize.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">RH Lize</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Alugue-se</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">WhatsApp: (41) 98781-8621</a></li>
                <li><a href="mailto:contato@delmack.com.br" className="hover:text-blue-400 transition-colors">Email: contato@delmack.com.br</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Delmack Consultoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
