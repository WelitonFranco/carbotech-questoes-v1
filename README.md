# CarboTech Questões — Plataforma Web de Questões para Concursos

Este repositório define o **escopo oficial do novo produto**, com foco em uma base limpa, profissional, vendável e preparada para integração com **PocketBase**.

> Objetivo: construir um frontend moderno em Next.js para uma plataforma de questões de concursos, com autenticação, controle por assinatura, correção imediata e limite diário para usuários gratuitos.

---

## 1) Visão geral do produto

A plataforma permitirá que candidatos estudem por questões, com experiência simples e direta:

- cadastro e login;
- acesso a matérias;
- resolução de questões com alternativas;
- correção imediata;
- exibição da alternativa correta;
- explicação da resposta;
- bloqueio por limite diário no plano gratuito;
- acesso ilimitado para usuários com assinatura ativa.

---

## 2) Escopo funcional (frontend)

### Público visitante
- Visualiza página inicial.
- Visualiza página de planos.
- Pode navegar para login e cadastro.
- **Não pode responder questões**.

### Usuário autenticado sem assinatura ativa
- Pode acessar área interna e matérias.
- Pode responder **até 10 questões por dia**.
- Ao atingir o limite diário, recebe bloqueio amigável com chamada para assinatura.

### Usuário autenticado com assinatura ativa
- Acesso sem limite diário de respostas.
- Acesso completo às matérias e questões.

### Administrador (preparação futura)
- A estrutura deve estar pronta para futura administração de matérias e questões.
- Não é obrigatório criar painel administrativo nesta fase.

---

## 3) Regras de negócio obrigatórias

1. Visitante não responde questões.
2. Usuário logado sem assinatura pode responder até 10 questões por dia.
3. O limite diário é calculado com base em `respostas_usuario` do dia atual.
4. Ao atingir 10 respostas no dia sem assinatura ativa, novas respostas devem ser bloqueadas.
5. O bloqueio deve exibir mensagem clara e amigável + CTA para planos.
6. Usuário com assinatura ativa responde sem limite.
7. Após responder, o sistema deve mostrar:
   - se acertou ou errou;
   - alternativa correta;
   - explicação da questão (quando houver).
8. Toda resposta deve ser registrada em `respostas_usuario`.
9. Deve haver proteção contra envio duplicado enquanto a resposta está em processamento.

---

## 4) Telas mínimas do MVP

1. **Página inicial pública**
   - apresentação da plataforma;
   - benefícios;
   - botões: cadastro, ver planos e login.

2. **Login**
   - email, senha;
   - botão entrar;
   - link para cadastro;
   - mensagens de erro amigáveis.

3. **Cadastro**
   - nome, email, telefone;
   - senha e confirmação;
   - aceite de termos;
   - aceite LGPD;
   - botão cadastrar.

4. **Início da área logada**
   - saudação com nome;
   - status da assinatura;
   - contador de uso diário para plano gratuito;
   - atalhos para matérias;
   - chamada para assinatura quando necessário.

5. **Matérias**
   - cards/lista com nome e descrição;
   - botão acessar.

6. **Questões**
   - enunciado;
   - alternativas;
   - botão responder;
   - resultado (acerto/erro);
   - alternativa correta;
   - explicação;
   - botão próxima questão;
   - tratamento de limite diário.

7. **Planos**
   - lista de planos;
   - nome, descrição, valor;
   - botão assinar.

8. **Navegação interna**
   - início;
   - matérias;
   - planos;
   - sair.

---

## 5) Coleções do PocketBase (modelo de dados)

### `usuarios`
- `nome`
- `email`
- `telefone`
- `tipo_usuario`
- `ativo`

### `consentimentos`
- `usuario`
- `aceitou_termos`
- `aceitou_lgpd`
- `data_aceite`
- `versao_termos`

### `materias`
- `nome`
- `slug`
- `descricao`
- `ativo`
- `ordem_exibicao`

### `questoes`
- `materia`
- `enunciado`
- `explicacao`
- `nivel`
- `banca`
- `cargo`
- `ano`
- `ativa`
- `imagem`
- `tipo_questao`

### `alternativas`
- `questao`
- `texto`
- `ordem`
- `correta`

### `respostas_usuario`
- `usuario`
- `questao`
- `alternativa`
- `acertou`
- `respondida_em`
- `tempo_resposta_segundos`

### `planos`
- `nome`
- `descricao`
- `valor`
- `duracao_dias`
- `ativo`

### `assinaturas`
- `usuario`
- `plano`
- `status`
- `data_inicio`
- `data_fim`

---

## 6) Arquitetura sugerida do frontend

Manter organização em português sempre que possível:

```bash
src/
  paginas/
  componentes/
  servicos/
  utilitarios/
  estilos/
  tipos/
```

### Camada de serviços (preparada para PocketBase)
- cliente central do PocketBase;
- autenticação;
- matérias;
- questões;
- respostas;
- assinaturas.

> Pode usar dados simulados temporários, desde que a troca para PocketBase real seja simples e direta.

---

## 7) Stack oficial do projeto

## Frontend
- **Next.js** (base principal do frontend).

## Backend + banco
- **PocketBase** (API, autenticação e banco embutido).

## Hospedagem do backend
- **VPS Hostinger** (sugestão inicial: KVM 1).

## Deploy do frontend
- **Vercel** (plano gratuito no início).

## Domínio
- **Hostinger** (`.com.br` ou equivalente).

---

## 8) Arquitetura de infraestrutura

```text
Usuário (navegador)
        ↓
Frontend (Vercel - Next.js)
        ↓
API (PocketBase - VPS Hostinger)
        ↓
Banco (PocketBase embutido)
```

---

## 9) Custos estimados

### Mensal
- VPS: ~R$30 a R$50/mês
- Domínio proporcional mensal: ~R$3 a R$5/mês

**Estimativa total:** ~R$35 a R$55/mês

---

## 10) Diretrizes de UX/UI

### Deve ter
- visual limpo, moderno e profissional;
- excelente legibilidade;
- espaçamento consistente;
- feedback claro de acerto, erro e bloqueio;
- navegação simples.

### Evitar
- excesso de efeitos;
- aparência improvisada;
- poluição visual;
- interface confusa.

---

## 11) Prioridade de implementação

1. Estrutura nova do projeto
2. Páginas públicas
3. Autenticação
4. Área interna
5. Matérias
6. Fluxo de questões
7. Regra das 10 questões por dia
8. Integração PocketBase
9. Revisão visual e organizacional

---

## 12) Critérios de pronto (MVP)

O MVP será considerado pronto quando:

- todas as telas mínimas estiverem implementadas;
- o fluxo de resposta de questão estiver funcional;
- a regra de limite diário estiver ativa para usuários gratuitos;
- a experiência de assinatura (status e CTA) estiver clara;
- o frontend estiver preparado para integração completa com PocketBase.

---

## 13) Próximos passos recomendados

1. Criar o projeto Next.js com estrutura em português.
2. Implementar layout-base (público e autenticado).
3. Construir serviços com interface para PocketBase.
4. Entregar primeiro fluxo completo: login → matéria → questão → resposta.
5. Implementar bloqueio das 10 questões/dia.
6. Integrar planos/assinatura.
7. Publicar frontend na Vercel e backend na VPS.

---

## 14) Resumo executivo

Esta documentação define um produto enxuto, de baixo custo e pronto para vender como MVP:

- **Stack:** Next.js + PocketBase + VPS Hostinger + Vercel.
- **Modelo:** gratuito com limite diário + assinatura ilimitada.
- **Foco:** simplicidade, organização, escalabilidade inicial e integração limpa.

Se você quiser, o próximo passo é transformar este escopo em **plano técnico de execução por sprints** (Sprint 1, Sprint 2, Sprint 3) com backlog detalhado.
