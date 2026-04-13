# CarboTech Questões — Frontend Angular

## Documento oficial do projeto (fase frontend)
Este README é a **referência principal obrigatória** para evolução do projeto nesta fase.

> Todas as próximas mudanças de frontend devem respeitar as diretrizes descritas aqui (estrutura, nomenclatura, padrões visuais e organização).

---

## 1) Visão geral do produto
A CarboTech Questões é uma plataforma focada em prática para concursos, com trilha por matérias, resolução de questões e gestão de planos.

Nesta etapa atual, o foco é **100% frontend**:
- telas refinadas e navegáveis;
- consistência visual;
- organização do código;
- base pronta para integração futura com backend.

---

## 2) Stack atual e stack futura
### Stack atual (implementada)
- **Frontend:** Angular 20 (standalone components)
- **Linguagens:** TypeScript, HTML, CSS
- **Gerenciamento de estado:** estado local em componentes (dados simulados)

### Stack futura (planejada)
- **Backend:** PocketBase
- **Banco:** PocketBase embutido
- **Hospedagem backend:** VPS
- **Domínio:** Hostinger

> **Importante:** nesta fase ainda **não existe integração real com backend**.

---

## 3) Telas existentes
Rotas mantidas no projeto:
- `/` → Splash
- `/login` → Login
- `/register` → Cadastro
- `/forgot-password` → Recuperar senha
- `/home` → Home
- `/materias` → Matérias
- `/questoes` → Questões
- `/planos` → Planos

### Estado funcional atual
- Navegação ponta a ponta entre todas as telas
- Formulários públicos preservados (login, cadastro, recuperar senha)
- Área logada com telas estruturadas e dados simulados

---

## 4) Navegação temporária global (desenvolvimento)
Existe um **menu global temporário** visível em todas as telas para acelerar validação de fluxo.

### Características
- Implementado no shell da aplicação (`App`)
- Presente em todas as rotas
- Links para todas as telas do sistema
- Destaque visual da rota atual com `routerLinkActive`

### Links do menu
- Splash
- Login
- Cadastro
- Recuperar senha
- Home
- Matérias
- Questões
- Planos

> Essa navegação é temporária para construção. Na fase de produto final, poderá ser substituída por navegação definitiva.

---

## 5) Regras de frontend (obrigatórias nesta fase)
1. **Não integrar backend real agora**.
2. **Não implementar regra final de negócio** nesta etapa.
3. Manter interface limpa, profissional e consistente.
4. Evitar excesso de efeitos e poluição visual.
5. Priorizar clareza de navegação e feedback dos estados.
6. Preservar rotas e fluxos já estáveis ao refinar telas.
7. Toda evolução deve manter compatibilidade com componentes standalone.

---

## 6) Convenção de nomenclatura
### Diretriz geral
Priorizar português sempre que possível (componentes, propriedades, textos de interface e variáveis auxiliares).

### Exceções permitidas
Manter termos em inglês quando forem exigidos por:
- APIs do Angular (`RouterLink`, `CommonModule`, etc.);
- convenções técnicas de framework;
- caminhos/arquivos já consolidados cuja mudança possa quebrar a aplicação.

### Convenção adotada nesta fase
- Estrutura base atual (`pages`, `core`) foi preservada por estabilidade.
- Padronização em português foi reforçada principalmente em:
  - textos de interface;
  - nomes de propriedades/métodos auxiliares;
  - organização semântica dos blocos visuais.

---

## 7) Organização atual do projeto
```text
src/
  app/
    core/
      auth.service.ts
    pages/
      splash/
      login/
      register/
      forgot-password/
      home/
      materias/
      questoes/
      planos/
    app.ts
    app.html
    app.css
    app.routes.ts
  styles.css
```

### Observação estrutural
Como objetivo de curto prazo é estabilidade e entrega do frontend, **não foi feita migração agressiva de pastas** para evitar quebra de imports/rotas.

Na próxima fase, se necessário, podemos planejar uma migração controlada para diretórios 100% em português (ex.: `paginas`, `servicos`, `compartilhado`).

---

## 8) Critérios visuais e UX adotados
- Hierarquia clara de títulos e subtítulos
- Espaçamento consistente entre seções
- Cartões com borda suave e leitura confortável
- Botões principais com contraste adequado
- Estados de desabilitado visíveis e sem ambiguidade
- Feedback de acerto/erro na tela de questões
- Consistência de linguagem e tom em todas as telas

---

## 9) Dados simulados (mock)
Para esta etapa, telas internas usam dados simulados:
- Home: usuário, assinatura e uso diário
- Matérias: lista de disciplinas
- Questões: enunciado, alternativas, resposta correta e feedback
- Planos: catálogo de planos e chamadas de conversão

> Esses dados serão substituídos por integração real com PocketBase na próxima etapa.

---

## 10) Como executar o projeto
### Pré-requisitos
- Node.js 20+
- npm 10+

### Instalação
```bash
npm install
```

### Ambiente de desenvolvimento
```bash
npm start
```

### Build de produção
```bash
npm run build
```

### Testes unitários
```bash
npm test
```

---

## 11) Próximos passos (fase backend)
1. Definir modelo de dados no PocketBase (usuários, matérias, questões, planos, progresso).
2. Conectar autenticação real com backend.
3. Substituir mocks por serviços HTTP.
4. Implementar regras de produto (limites, trilhas, progresso persistente).
5. Evoluir navegação temporária para navegação definitiva do produto.

---

## 12) Status da etapa atual
✅ Frontend Angular refinado, navegável e consistente.  
✅ README atualizado como base oficial do projeto.  
⏳ Integração real com PocketBase fica para a próxima etapa.
