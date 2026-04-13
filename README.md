# CarboTech Questões — Frontend Angular

## Documento oficial do projeto (fase frontend)
Este README é a base principal da etapa atual. Mudanças futuras devem seguir estas diretrizes para manter consistência visual, navegação e organização.

---

## 1) Visão geral
Plataforma de estudos para concursos com foco em:
- prática de questões,
- organização por matérias,
- evolução por plano.

Nesta fase, o foco é **frontend finalizado primeiro** (sem backend real conectado).

---

## 2) Stack atual e stack futura
### Atual
- Frontend: **Angular 20** (componentes standalone)
- Linguagens: TypeScript, HTML, CSS

### Futuro (planejado)
- Backend: PocketBase
- Banco: PocketBase embutido
- Hospedagem do backend: VPS
- Domínio: Hostinger

> Ainda não há integração real com backend nesta etapa.

---

## 3) Rotas e navegação temporária
Rotas ativas:
- `/` → Splash
- `/login` → Login
- `/register` → Cadastro
- `/forgot-password` → Recuperar senha
- `/home` → Home
- `/materias` → Matérias
- `/questoes` → Questões
- `/planos` → Planos

Navegação global temporária de desenvolvimento:
- simples e discreta;
- presente para circular entre todas as páginas;
- mantém fluxo de validação de frontend sem backend.

---

## 4) Definições de conteúdo (fase frontend)
### Planos exibidos no frontend
1. Gratuito — acesso limitado (até 10 questões por dia)
2. Mensal — acesso ilimitado (R$ 14,90)
3. Vitalício — acesso ilimitado permanente (R$ 29,90)

### Matérias exibidas no frontend
- Língua Portuguesa: 20 questões
- Raciocínio Lógico: 10 questões
- Informática: 10 questões
- Legislação Aplicada / Direito: 30 questões
- Legislação da Polícia Penal: 10 questões
- Conhecimentos Gerais: 10 questões para Policial Penal / 0 a 10 em alguns casos conforme edital

### Submatérias (organização visual)
- Direito Penal (Parte Geral e Parte Especial)
- Direito Processual Penal
- Direitos Humanos e Estatuto do Idoso
- Lei de Execução Penal, Regimento Interno e Legislação da Polícia Penal
- Informática básica e avançada
- Raciocínio Lógico e Matemática básica aplicada a questões de concursos
- Língua Portuguesa (interpretação, gramática e redação prática)

### Regras da tela de questões
- Frontend com **pelo menos 5 questões simuladas**.
- A explicação aparece **somente após clicar em “Responder”**.
- Antes de responder, não exibir explicação.
- Após responder:
  - indicar acerto/erro;
  - mostrar explicação;
  - bloquear alteração da alternativa naquela tentativa.
- Botão “Próxima questão” permanece ativo para navegação entre questões.

---

## 5) Diretrizes visuais
- Manter layout amplo, sem aparência encolhida.
- Evitar “card pequeno perdido no centro”.
- Preservar estética limpa, profissional e vendável.
- Melhorar distribuição e proporção de conteúdo nas telas.
- Não fazer refatoração agressiva sem necessidade.

---

## 6) Convenções de nome
- Priorizar português em textos e nomes de propriedades auxiliares.
- Manter termos técnicos do Angular quando necessários (`CommonModule`, `FormsModule`, `RouterLink`, etc.).

---

## 7) Estrutura atual
```text
src/
  app/
    core/
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
```

---

## 8) Comandos de execução
Instalação:
```bash
npm install
```

Desenvolvimento:
```bash
npm start
```

Build:
```bash
npm run build
```

Testes:
```bash
npm test
```

---

## 9) Próxima etapa
Após concluir frontend:
1. integrar autenticação e dados com PocketBase;
2. substituir dados simulados por dados reais;
3. implementar regras finais de negócio.
