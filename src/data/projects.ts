export interface Project {
  title: string;
  icon: string;
  kind: "main" | "ai";
  problem: string;
  solution: string;
  metrics: string;
  tech: string[];
  link: string;
  demo: string | null;
  architecture: string;
}

export const projects: Project[] = [
  {
    title: "Ticketing System",
    icon: "🎟️",
    kind: "main",
    problem: "Sistemas de venda de ingressos precisam lidar com muitos usuários disputando o mesmo assento sem gerar overbooking nem pagamento duplicado.",
    solution: "Sistema de reservas e pagamentos no estilo Ticketmaster, pensado para alta concorrência: reserva temporária de 10 minutos (configurável) com expiração automática por job agendado.",
    metrics: "Lock distribuído com Redisson/Redis somado a pessimistic locking no banco, pagamentos com chave de idempotência e testes unitários (JUnit 5 e Mockito) cobrindo reserva, expiração, idempotência e falha de gateway.",
    tech: ["Java 21", "Spring Boot 3", "PostgreSQL", "Redis (Redisson)", "Flyway", "Docker", "JUnit 5", "Mockito"],
    link: "https://github.com/adanwilliamdev/ticketing-system",
    demo: null,
    architecture: "Controller → Service → Redisson (lock distribuído) → PostgreSQL (pessimistic locking)",
  },
  {
    title: "TaskFlow",
    icon: "🧩",
    kind: "main",
    problem: "Dividir um sistema em serviços independentes exige resolver descoberta de serviços, roteamento e autenticação sem acoplar tudo.",
    solution: "Gerenciador de tarefas em arquitetura de microsserviços: API Gateway, Service Discovery com Eureka e serviços separados de autenticação, usuários, tarefas e notificações, com frontend em React.",
    metrics: "Um banco por serviço no mesmo PostgreSQL, JWT (HS256) validado localmente em cada serviço por filtro, sem chamada de rede entre serviços, e ambiente completo com um único docker compose up.",
    tech: ["Java", "Spring Boot", "Spring Cloud Gateway", "Eureka", "Spring Security", "PostgreSQL", "React", "TypeScript", "Docker Compose"],
    link: "https://github.com/adanwilliamdev/task-management",
    demo: null,
    architecture: "React → API Gateway → Auth / User / Task / Notification (Eureka) → PostgreSQL (1 banco por serviço)",
  },
  {
    title: "Torque Gestão",
    icon: "🔧",
    kind: "main",
    problem: "Oficinas mecânicas costumam operar com planilhas e processos manuais para clientes, veículos, orçamentos e estoque, o que dificulta controle e rastreabilidade.",
    solution: "Gestão de oficinas 100% em Java: clientes, veículos, mecânicos, orçamentos com aprovação, ordens de serviço com fluxo de estados controlado e estoque com movimentações rastreáveis. Acesso por perfil: admin, gerente, recepção e mecânico.",
    metrics: "Controle de concorrência otimista no estoque (409 em conflito), JWT com refresh token rotativo e CSRF na interface web, migrations com Flyway, testes de integração com Testcontainers e API documentada com Swagger.",
    tech: ["Java 21", "Spring Boot 3.3", "Spring Security", "JPA/Hibernate", "PostgreSQL", "Flyway", "Thymeleaf", "Testcontainers", "Docker"],
    link: "https://github.com/adanwilliamdev/Torque_Gestao",
    demo: null,
    architecture: "Thymeleaf / REST → Controllers → Services (regras de negócio) → JPA → PostgreSQL",
  },
  {
    title: "OrbNOC",
    icon: "🛰️",
    kind: "main",
    problem: "Equipes de NOC de provedores de internet precisam de uma visão única e em tempo real da saúde da rede, hoje espalhada entre várias ferramentas.",
    solution: "Monitoramento de equipamentos de rede em tempo real: latência, jitter, perda de pacotes, alertas, SLA por janelas de 24h, 7d e 30d, diagnóstico (ping, traceroute, DNS), notificações no Telegram, mapa, wallboard e relatórios CSV/XLSX. Nasceu da minha rotina de NOC: a primeira versão foi em Java e depois foi reescrita em Python.",
    metrics: "Worker Python independente com ICMP e fallback automático para TCP, WebSocket com Redis Pub/Sub, Argon2, JWT em cookie httpOnly, rate limit de login, comandos de diagnóstico sem shell, testes com PostgreSQL e Redis reais e CI.",
    tech: ["Python", "FastAPI", "SQLAlchemy async", "PostgreSQL", "Redis", "WebSocket", "Next.js", "TypeScript", "Docker"],
    link: "https://github.com/adanwilliamdev/OrbNOC",
    demo: null,
    architecture: "Next.js → WebSocket / REST → FastAPI → PostgreSQL / Redis ← Worker (ICMP/TCP)",
  },
  {
    title: "Itaú Java AI Order System",
    icon: "📦",
    kind: "main",
    problem: "Regras de pedido (ciclo de vida, validações, frete e notificações) viram um emaranhado de if/else quando não têm uma estrutura clara.",
    solution: "API de pedidos construída sobre quatro padrões de projeto (State, Chain of Responsibility, Strategy e Observer), com comandos de voz via Spring AI: transcrição de áudio e identificação de intenção. Desafio final do programa Itaú Java AI (DIO).",
    metrics: "Ciclo de vida PENDENTE → PAGO → ENVIADO → ENTREGUE, validações encadeadas (estoque, pagamento, frete), três estratégias de frete e notificações por e-mail, SMS e push.",
    tech: ["Java 17", "Spring Boot 3.2", "Spring AI", "OpenAI Whisper", "JPA", "H2", "Swagger"],
    link: "https://github.com/adanwilliamdev/itau-java-ai-order-system",
    demo: null,
    architecture: "Controller → Chain (validações) → Strategy (frete) → State (pedido) → Observer (notificações)",
  },
  {
    title: "Burger & Pizza House ERP",
    icon: "🍕",
    kind: "main",
    problem: "Pizzarias e hamburguerias controlam pedidos e ingredientes à mão, o que causa pedido aceito sem estoque e dificulta o controle financeiro.",
    solution: "ERP full stack para pizzarias e hamburguerias: pedidos com transições de status validadas, estoque de ingredientes com alerta de nível crítico, dashboard de faturamento e autenticação segura.",
    metrics: "Criação de pedido em transação atômica (checagem de estoque e baixa de ingredientes juntas), validação com Zod, JWT em cookie httpOnly, rate limit de login e 30 testes automatizados com Jest.",
    tech: ["Node.js", "Express", "TypeScript", "Prisma", "SQLite", "Angular 20", "Tailwind CSS", "Jest"],
    link: "https://github.com/adanwilliamdev/Burger-Pizza-House",
    demo: null,
    architecture: "Angular 20 → Express (Zod, JWT) → Prisma → SQLite",
  },
  {
    title: "Geo-Explorer",
    icon: "🗺️",
    kind: "ai",
    problem: "Assistentes de IA precisam de ferramentas padronizadas para consultar dados e executar ações além do texto.",
    solution: "Servidor MCP (Model Context Protocol) em TypeScript com ferramentas para trilhas de aprendizagem, desafios práticos e emissão, verificação e revogação de certificados. Feito no Bootcamp IBM Bob.",
    metrics: "Camada MCP separada dos serviços de domínio, comunicação via stdio e testes automatizados com Jest.",
    tech: ["TypeScript", "Node.js", "MCP SDK", "Jest", "ESLint"],
    link: "https://github.com/adanwilliamdev/Geo-Explorer",
    demo: null,
    architecture: "Cliente MCP / IA → MCP Server (stdio) → Services → trails.json",
  },
  {
    title: "LivroCerto",
    icon: "📚",
    kind: "ai",
    problem: "Assistentes de recomendação tendem a inventar respostas fora do que realmente conhecem.",
    solution: "Assistente de recomendação de livros que só responde com base em uma base de conhecimento própria e recusa pedidos fora de escopo. Funciona offline e aceita um modelo Claude de forma opcional.",
    metrics: "Avaliação com 10 perguntas de teste: hit@1 de 75% para 82% e recusas corretas de 50% para 100% entre versões.",
    tech: ["Python", "Claude API", "Prompt engineering", "Avaliação de métricas"],
    link: "https://github.com/adanwilliamdev/assistente-virtual-ia",
    demo: null,
    architecture: "Pergunta → Busca na base local → (opcional) LLM só com os livros filtrados",
  },
  {
    title: "EstudoAtivo",
    icon: "🎓",
    kind: "ai",
    problem: "Estudar finanças pessoais com IA genérica mistura fontes de qualidade variável.",
    solution: "Estudo de finanças pessoais com IA fundamentada em fontes curadas (NotebookLM) e engenharia de prompt.",
    metrics: "Respostas ancoradas em fontes selecionadas, em vez de conhecimento genérico do modelo.",
    tech: ["NotebookLM", "Prompt engineering"],
    link: "https://github.com/adanwilliamdev/EstudoAtivo-NotebookLM",
    demo: null,
    architecture: "Fontes curadas → NotebookLM → Perguntas guiadas por prompt",
  },
];
