<div class="container">
  <form class="form" (ngSubmit)="cadastrar()" #registerForm="ngForm">
    <h1 class="title">Criar conta</h1>

    <input
      type="text"
      name="nome"
      placeholder="Nome completo"
      [(ngModel)]="nome"
      (input)="onNomeInput()"
      (blur)="onNomeBlur()"
      [class.input-error]="nomeInvalido"
      maxlength="100"
      autocomplete="name"
      aria-label="Nome completo"
    />
    <p class="error-message" *ngIf="nomeInvalido">{{ mensagemErroNome }}</p>

    <input
      type="email"
      name="email"
      placeholder="E-mail"
      [(ngModel)]="email"
      (input)="onEmailInput()"
      (blur)="onEmailBlur()"
      [class.input-error]="emailInvalido"
      maxlength="150"
      autocomplete="email"
      aria-label="E-mail"
    />
    <p class="error-message" *ngIf="emailInvalido">{{ mensagemErroEmail }}</p>

    <input
      type="tel"
      name="telefone"
      placeholder="Telefone"
      [(ngModel)]="telefone"
      (input)="onTelefoneInput()"
      (blur)="onTelefoneBlur()"
      [class.input-error]="telefoneInvalido"
      maxlength="15"
      autocomplete="tel"
      aria-label="Telefone"
    />
    <p class="error-message" *ngIf="telefoneInvalido">
      {{ mensagemErroTelefone }}
    </p>

    <input
      type="password"
      name="senha"
      placeholder="Senha"
      [(ngModel)]="senha"
      (blur)="onSenhaBlur()"
      [class.input-error]="senhaInvalida"
      maxlength="60"
      autocomplete="new-password"
      aria-label="Senha"
    />
    <p class="error-message" *ngIf="senhaInvalida">{{ mensagemErroSenha }}</p>

    <input
      type="password"
      name="confirmarSenha"
      placeholder="Confirmar senha"
      [(ngModel)]="confirmarSenha"
      (blur)="onConfirmarSenhaBlur()"
      [class.input-error]="confirmarSenhaInvalida"
      maxlength="60"
      autocomplete="new-password"
      aria-label="Confirmar senha"
    />
    <p class="error-message" *ngIf="confirmarSenhaInvalida">
      {{ mensagemErroConfirmarSenha }}
    </p>

    <label class="checkbox-row" [class.checkbox-error]="termosInvalidos">
      <input
        type="checkbox"
        name="aceitouTermos"
        [(ngModel)]="aceitouTermos"
        (change)="onTermosChange()"
        aria-label="Aceitar termos de uso"
      />
      <span>
        Li e aceito os
        <a href="/termos-de-uso" target="_blank" rel="noopener noreferrer">
          Termos de Uso
        </a>
      </span>
    </label>
    <p class="error-message" *ngIf="termosInvalidos">{{ mensagemErroTermos }}</p>

    <label class="checkbox-row" [class.checkbox-error]="lgpdInvalido">
      <input
        type="checkbox"
        name="aceitouLgpd"
        [(ngModel)]="aceitouLgpd"
        (change)="onLgpdChange()"
        aria-label="Aceitar política de privacidade"
      />
      <span>
        Li e concordo com a
        <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer">
          Política de Privacidade
        </a>
        e tratamento de dados conforme a LGPD
      </span>
    </label>
    <p class="error-message" *ngIf="lgpdInvalido">{{ mensagemErroLgpd }}</p>

    <p class="error-message global-message" *ngIf="mensagemErro">
      {{ mensagemErro }}
    </p>

    <p class="success-message global-message" *ngIf="mensagemSucesso">
      {{ mensagemSucesso }}
    </p>

    <button type="submit" class="btn" [disabled]="loading">
      {{ loading ? 'Cadastrando...' : 'Criar conta' }}
    </button>
  </form>
</div>