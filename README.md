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
- **Gerenciamento de estado:** estado local em componentes + serviços em memória (dados simulados)

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
- `/provas` → Provas (nova página)
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
- Provas
- Planos

> Essa navegação é temporária para construção. Na fase de produto final, poderá ser substituída por navegação definitiva.

---

## 5) Regras de frontend (obrigatórias nesta fase)
1. **Não integrar backend real agora**.
2. **Não conectar PocketBase nesta etapa**.
3. Manter interface limpa, profissional e consistente.
4. Evitar excesso de efeitos e poluição visual.
5. Priorizar clareza de navegação e feedback dos estados.
6. Preservar rotas e fluxos já estáveis ao refinar telas.
7. Toda evolução deve manter compatibilidade com componentes standalone.
8. Tudo continua simulado em frontend local (sem persistência real).

---

## 6) Fluxo de questões (lógica simulada atual)
### Regra das 10 questões diárias
- O limite diário é de **10 acertos únicos por dia**.
- **Apenas acertos contam** no limite diário.
- Erros repetidos da mesma questão **não consomem** limite.
- A mesma questão só é contabilizada **uma única vez** após o primeiro acerto.

### Estrutura obrigatória da questão
Cada questão é preparada com os campos:
- questão
- cargo
- ano
- estado
- banca
- enunciado
- alternativas
- resposta correta
- explicação

### Alternativas padronizadas
Todas as questões usam **exatamente 5 alternativas**:
- A
- B
- C
- D
- E

### Feedback de tentativa
- O aluno seleciona uma alternativa e clica em **Responder**.
- O sistema avalia aquela tentativa.
- O feedback (acerto/erro e explicação) fica **congelado** para a tentativa avaliada.
- Trocar alternativa após responder **não altera o feedback** automaticamente.

### Navegação entre questões
- Botão **Questão anterior**.
- Botão **Próxima questão**.
- O aluno pode avançar e retornar entre questões de forma contínua.

---

## 7) Página de provas (nova)
Nova rota `/provas` para experiência inicial de prova completa simulada.

### Nesta etapa, a tela de provas permite:
- listar provas disponíveis;
- exibir nome da prova, cargo, ano, estado, banca e quantidade de questões;
- iniciar prova pelo botão **Iniciar prova**;
- navegar para a tela de questões com contexto de prova simulado.

> Ainda não há resultado final, gabarito completo ou timer real. A estrutura foi preparada para evolução futura.

---

## 8) Home e progresso diário
A Home reflete a nova lógica de contagem:
- exibe: **“Você acertou X de 10 questões hoje”**;
- usa a mesma base simulada de progresso da tela de questões;
- não contabiliza erros repetidos da mesma questão.

---

## 9) Organização atual do projeto
```text
src/
  app/
    core/
      auth.service.ts
      progresso-questoes.service.ts
      questoes-data.service.ts
    pages/
      splash/
      login/
      register/
      forgot-password/
      home/
      materias/
      questoes/
      provas/
      planos/
    app.ts
    app.html
    app.css
    app.routes.ts
  styles.css
```

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
1. Definir modelo de dados no PocketBase (usuários, matérias, questões, provas, planos, progresso).
2. Conectar autenticação real com backend.
3. Substituir mocks por serviços HTTP.
4. Implementar persistência de progresso diário e histórico de tentativas.
5. Evoluir modo prova (resultado final, gabarito, cronômetro e retomada).

---

## 12) Status da etapa atual
✅ Frontend Angular refinado, navegável e consistente.  
✅ Fluxo de questões com regra de acerto diário aplicada em frontend simulado.  
✅ Página de provas adicionada e integrada ao fluxo.  
⏳ Integração real com PocketBase fica para a próxima etapa.

---

## 13) Sincronização da base
- Última revisão técnica do frontend: **2026-04-13**.
- Build validado com sucesso antes de preparar PR.
- Branch local mantida alinhada para continuidade da fase frontend.
