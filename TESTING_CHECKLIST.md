# Delmack Consultoria - Checklist de Testes

## Testes de Navegação

- [x] Menu de navegação visível e acessível
- [x] Todos os 6 links do menu presentes (Início, Sobre, Serviços, Sistemas, Ferramentas de IA, Contato)
- [x] Menu responsivo em dispositivos móveis (hamburger menu)
- [x] Botão WhatsApp visível no menu desktop
- [x] Botão WhatsApp visível no menu mobile

## Testes de Seções

### Seção Hero
- [x] Título "Consultoria Empresarial de Excelência" exibido
- [x] Subtítulo presente
- [x] Botão "Consultoria Gratuita" (verde) presente
- [x] Botão "Conheça Nossos Serviços" (branco) presente
- [x] Ícone de lupa no botão "Conheça Nossos Serviços"

### Seção Sobre
- [x] Título "Por que escolher nossa consultoria?" exibido
- [x] 3 diferenciais presentes (Expertise Comprovada, Soluções Personalizadas, Tecnologia de Ponta)
- [x] Cards com ícones e descrições
- [x] Layout responsivo em mobile

### Seção Serviços
- [x] Título "Nossos Serviços" exibido
- [x] 6 serviços presentes:
  - [x] Consultoria Estratégica
  - [x] Transformação Digital
  - [x] Gestão de Projetos
  - [x] Consultoria Financeira
  - [x] Recursos Humanos
  - [x] Automações (RPA)
- [x] Cards com ícones, títulos e descrições
- [x] Links "Saiba mais" em cada card
- [x] Layout responsivo em mobile

### Seção Sistemas
- [x] Título "Nossos Sistemas" exibido
- [x] Sales Management System presente com status "Live"
- [x] ImobRH presente com status "Em Desenvolvimento"
- [x] Botão "Acessar Sistema" no Sales Management System
- [x] Link correto para https://delmack-rei-fwqutmfh.manus.space/
- [x] Layout responsivo em mobile

### Seção Ferramentas de IA
- [x] Título "Ferramentas de IA para PMEs" exibido
- [x] Descrição presente
- [x] Barra de busca funcional
- [x] 9 ferramentas presentes:
  - [x] ChatGPT
  - [x] Copilot
  - [x] Claude
  - [x] Midjourney
  - [x] DALL-E
  - [x] Manus
  - [x] Jasper
  - [x] Synthesia
  - [x] Typeform
- [x] Cards com nome, categoria e descrição
- [x] Seção "Conheça a Plataforma Manus" com link de referral
- [x] Link correto para https://manus.im/invitation/Y1AQAAK2FAJXU

### Seção Contato
- [x] Título "Entre em Contato" exibido
- [x] Formulário com campos:
  - [x] Nome
  - [x] Email
  - [x] Telefone
  - [x] Assunto
  - [x] Mensagem
- [x] Botão "Enviar Mensagem"
- [x] Informações de contato (Email e WhatsApp)
- [x] Email: delmackconsultoria@gmail.com
- [x] WhatsApp: (41) 99513-4690

### Footer
- [x] Logo e nome da empresa
- [x] Descrição da empresa
- [x] Links de navegação rápida
- [x] Informações de contato (Email, CNPJ, WhatsApp)
- [x] Copyright notice

## Testes de Funcionalidades Interativas

### Navegação Smooth Scroll
- [ ] Clicar em "Início" faz scroll para hero
- [ ] Clicar em "Sobre" faz scroll para seção sobre
- [ ] Clicar em "Serviços" faz scroll para seção serviços
- [ ] Clicar em "Sistemas" faz scroll para seção sistemas
- [ ] Clicar em "Ferramentas de IA" faz scroll para seção ferramentas
- [ ] Clicar em "Contato" faz scroll para seção contato
- [ ] Menu mobile fecha após clicar em um link

### Integração WhatsApp
- [ ] Botão "Consultoria Gratuita" abre WhatsApp com mensagem pré-preenchida
- [ ] Botão WhatsApp no menu abre WhatsApp
- [ ] Links "Saiba mais" nos serviços abrem WhatsApp
- [ ] Link WhatsApp no footer abre WhatsApp
- [ ] Número correto: (41) 99513-4690

### Busca de Ferramentas de IA
- [ ] Buscar "ChatGPT" filtra apenas ChatGPT
- [ ] Buscar "IA" mostra múltiplas ferramentas
- [ ] Buscar "Imagem" mostra Midjourney e DALL-E
- [ ] Buscar texto não encontrado mostra mensagem "Nenhuma ferramenta encontrada"
- [ ] Limpar busca mostra todas as ferramentas novamente

### Formulário de Contato
- [ ] Todos os campos são obrigatórios (exceto telefone)
- [ ] Validação de email funciona
- [ ] Formulário envia para Formspree (será configurado com ID correto)
- [ ] Confirmação pop-up após envio (sem redirecionamento)

### Links Externos
- [ ] Link "Acessar Sistema" no Sales Management System abre em nova aba
- [ ] Link "Acessar Manus" abre em nova aba
- [ ] Todos os links externos abrem em nova aba (target="_blank")

## Testes de Responsividade

### Desktop (1920px+)
- [ ] Layout completo visível
- [ ] Menu horizontal com todos os links
- [ ] Grid de 3 colunas para serviços
- [ ] Grid de 3 colunas para ferramentas de IA

### Tablet (768px - 1024px)
- [ ] Layout se adapta corretamente
- [ ] Menu responsivo funciona
- [ ] Grid de 2 colunas para serviços
- [ ] Grid de 2 colunas para ferramentas de IA

### Mobile (320px - 767px)
- [ ] Menu hamburger funciona
- [ ] Layout em coluna única
- [ ] Todos os elementos legíveis
- [ ] Botões com tamanho adequado para toque
- [ ] Imagens se redimensionam corretamente

## Testes de Performance

- [ ] Página carrega rapidamente
- [ ] Busca de ferramentas é responsiva
- [ ] Scroll suave sem travamentos
- [ ] Sem erros no console do navegador

## Testes de Acessibilidade

- [ ] Todos os botões têm labels claros
- [ ] Contraste de cores adequado
- [ ] Links são distinguíveis
- [ ] Formulário é navegável por teclado

## Status Final

- [ ] Todos os testes passaram
- [ ] Site pronto para implantação
