# Olá, eu sou o Adan William 👋

**Desenvolvedor Java | Spring Boot | PostgreSQL | Docker**
Busco minha primeira oportunidade como **Desenvolvedor Java Júnior** ou **Full Stack Júnior**.

Mais de 5 anos em infraestrutura crítica de provedores de Internet (N2/N3, NOC) e hoje construo APIs e sistemas completos com foco em **regras de negócio, segurança e consistência de dados**. Meus projetos têm testes, Docker Compose para subir tudo com um comando e README com instruções para rodar.

🌐 [Portfólio](https://adanwilliamdev.github.io/) · 💼 [LinkedIn](https://www.linkedin.com/in/awosantos)

---

## 🛠️ Stack

| Área | Tecnologias |
| --- | --- |
| **Backend** | Java 17/21 · Spring Boot 3 · Spring Security (JWT, BCrypt, CSRF) · Spring Data JPA/Hibernate · Spring Cloud Gateway · Spring AI · WebSocket/STOMP |
| **Dados e infra** | PostgreSQL · Redis (Redisson) · Flyway · Docker · Docker Compose · GitHub Actions (CI/CD) · Maven |
| **Frontend** | React · TypeScript · Angular · Next.js · Vite · Tailwind CSS · Thymeleaf · Bootstrap |
| **Qualidade** | JUnit 5 · Mockito · Testcontainers · JaCoCo · Swagger/OpenAPI |
| **Também já usei** | Python (FastAPI) · Node.js (Express, Prisma) |

---

## ⭐ Projetos em destaque

### 🏦 [AWOS Bank](https://github.com/adanwilliamdev/awosbank)
Internet Banking com dashboard, extrato com filtros, chaves PIX e **histórico de auditoria append-only** (trigger do PostgreSQL bloqueia `UPDATE`/`DELETE`; tentativas que falham também ficam registradas). Migrations com Flyway, testes unitários e de integração (incluindo **concorrência em transferências** e **Testcontainers com PostgreSQL real**), cobertura com JaCoCo e **CI/CD com GitHub Actions** publicando a imagem no GHCR.
`Java 17` `Spring Boot` `Spring Security` `PostgreSQL` `Flyway` `Testcontainers` `GitHub Actions` `Docker`

### 🔧 [Torque Gestão](https://github.com/adanwilliamdev/Torque_Gestao)
Sistema de gestão para oficinas: clientes, veículos, orçamentos com aprovação, ordens de serviço com **fluxo de estados controlado** e estoque com movimentações rastreáveis. Acesso por perfil (admin, gerente, recepção, mecânico), **controle de concorrência otimista** no estoque, **JWT com refresh token rotativo** e CSRF na interface web, testes de integração com Testcontainers.
`Java 21` `Spring Boot` `Spring Security` `PostgreSQL` `Flyway` `Testcontainers` `Docker`

### 🎟️ [Ticketing System](https://github.com/adanwilliamdev/ticketing-system)
Sistema de reservas e pagamentos no estilo Ticketmaster, focado em **alta concorrência**: lock pessimista no banco, **lock distribuído com Redisson/Redis**, reserva temporária com expiração automática e **idempotência** em pagamentos. Testes unitários cobrindo reserva, expiração, idempotência e falha de gateway.
`Java 21` `Spring Boot` `PostgreSQL` `Redis` `Flyway` `Docker` `JUnit 5` `Mockito`

### 🛰️ [OrbNOC](https://github.com/adanwilliamdev/OrbNOC)
Plataforma de monitoramento de equipamentos de rede nascida da minha rotina de NOC: status em tempo real via WebSocket, latência/jitter/perda de pacotes, alertas, SLA, notificações no Telegram, diagnóstico de rede e relatórios CSV/XLSX. A primeira versão foi em Java e depois reescrita em Python.
`Python` `FastAPI` `PostgreSQL` `Redis` `WebSocket` `Next.js` `Docker`

---

## 📂 Outros projetos

- 🧩 **[TaskFlow (task-management)](https://github.com/adanwilliamdev/task-management)**: gerenciador de tarefas em **microsserviços** (API Gateway, Eureka, auth, usuários, tarefas e notificações), um banco por serviço e JWT validado localmente. `Spring Cloud` `React` `Docker Compose`
- 📦 **[Itaú Java AI Order System](https://github.com/adanwilliamdev/itau-java-ai-order-system)**: API de pedidos com **4 padrões de projeto** (State, Chain of Responsibility, Strategy, Observer) e comandos de voz via Spring AI. Desafio final do programa Itaú Java AI (DIO).
- 🍕 **[Burger & Pizza House ERP](https://github.com/adanwilliamdev/Burger-Pizza-House)**: ERP para pizzarias e hamburguerias, com pedidos em transação atômica e baixa automática de estoque. `Node.js` `Angular` `Prisma`
- 📚 **[Study Planner](https://github.com/adanwilliamdev/study-planner)**: organização da rotina de estudos com matérias, tarefas, cronograma, Pomodoro e **notificações em tempo real via WebSocket/STOMP**, autenticado por JWT. `Spring Boot` `React` `Vite`

---

## 🤖 Experimentos com IA

- 🗺️ **[Geo-Explorer](https://github.com/adanwilliamdev/Geo-Explorer)**: servidor MCP (Model Context Protocol) em TypeScript com ferramentas para trilhas de aprendizagem, desafios e certificados. Feito no Bootcamp IBM Bob.
- 📚 **[LivroCerto (assistente-virtual-ia)](https://github.com/adanwilliamdev/assistente-virtual-ia)**: assistente de recomendação de livros que só responde com base em uma base de conhecimento própria, com avaliação de métricas.
- 🎓 **[EstudoAtivo-NotebookLM](https://github.com/adanwilliamdev/EstudoAtivo-NotebookLM)**: estudo de finanças pessoais com IA fundamentada em fontes curadas e engenharia de prompt.

---

## 🎯 Foco atual

- Aprofundar Java e Spring Boot: segurança, testes de integração e mensageria (RabbitMQ/Kafka)
- Levar CI/CD (já em uso no AWOS Bank) para os demais projetos
- Encontrar uma equipe onde eu possa contribuir e aprender com profissionais mais experientes

---

📫 Vamos conversar? Me chame no [LinkedIn](https://www.linkedin.com/in/awosantos).
