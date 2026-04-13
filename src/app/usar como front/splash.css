import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  // =========================
  // CAMPOS DO FORMULÁRIO
  // =========================

  nome = '';
  email = '';
  telefone = '';
  senha = '';
  confirmarSenha = '';

  aceitouTermos = false;
  aceitouLgpd = false;

  // =========================
  // CONTROLE DE UX
  // =========================

  tentouEnviar = false;
  loading = false;

  mensagemErro = '';
  mensagemSucesso = '';

  nomeTouched = false;
  emailTouched = false;
  telefoneTouched = false;
  senhaTouched = false;
  confirmarSenhaTouched = false;
  termosTouched = false;
  lgpdTouched = false;

  constructor(private authService: AuthService) {}

  private mapearErroCadastro(mensagem: string): string {
    const msg = mensagem.toLowerCase();

    if (msg.includes('429') || msg.includes('too many requests')) {
      return 'Muitas tentativas em sequência. Aguarde alguns minutos e tente novamente.';
    }

    if (msg.includes('already registered') || msg.includes('user already registered')) {
      return 'Este e-mail já está cadastrado.';
    }

    if (msg.includes('já cadastrado')) {
      return 'E-mail já cadastrado';
    }

    if (msg.includes('invalid email')) {
      return 'Informe um e-mail válido.';
    }

    return 'Não foi possível concluir o cadastro. Tente novamente em instantes.';
  }

  // =========================
  // EVENTOS DOS CAMPOS
  // =========================

  onNomeInput(): void {
    this.nome = this.normalizarTextoDuranteDigitacao(this.nome);
  }

  onNomeBlur(): void {
    this.nomeTouched = true;
    this.nome = this.normalizarTextoFinal(this.nome);
  }

  onEmailInput(): void {
    this.email = this.normalizarEmailDuranteDigitacao(this.email);
  }

  onEmailBlur(): void {
    this.emailTouched = true;
    this.email = this.normalizarEmailFinal(this.email);
  }

  onTelefoneInput(): void {
    this.telefone = this.formatarTelefone(this.telefone);
  }

  onTelefoneBlur(): void {
    this.telefoneTouched = true;
    this.telefone = this.formatarTelefone(this.telefone);
  }

  onSenhaBlur(): void {
    this.senhaTouched = true;
    this.senha = this.normalizarTextoFinal(this.senha);
  }

  onConfirmarSenhaBlur(): void {
    this.confirmarSenhaTouched = true;
    this.confirmarSenha = this.normalizarTextoFinal(this.confirmarSenha);
  }

  onTermosChange(): void {
    this.termosTouched = true;
  }

  onLgpdChange(): void {
    this.lgpdTouched = true;
  }

  // =========================
  // FUNÇÕES GENÉRICAS
  // =========================

  normalizarTextoDuranteDigitacao(valor: string): string {
    return valor.replace(/\s+/g, ' ').trimStart();
  }

  normalizarTextoFinal(valor: string): string {
    return valor.replace(/\s+/g, ' ').trim();
  }

  normalizarEmailDuranteDigitacao(valor: string): string {
    return valor.trimStart().toLowerCase();
  }

  normalizarEmailFinal(valor: string): string {
    return valor.trim().toLowerCase();
  }

  somenteNumeros(valor: string): string {
    return valor.replace(/\D/g, '');
  }

  formatarTelefone(valor: string): string {
    const numeros = this.somenteNumeros(valor).slice(0, 11);

    if (numeros.length <= 2) {
      return numeros.length ? `(${numeros}` : '';
    }

    if (numeros.length <= 6) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    }

    if (numeros.length <= 10) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`;
    }

    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
  }

  temCaracterePerigoso(valor: string): boolean {
    const regexCaracteresPerigosos = /[<>{}\[\];=|\\`"]/;
    return regexCaracteresPerigosos.test(valor);
  }

  temPadraoSuspeito(valor: string): boolean {
    const texto = valor.toLowerCase();

    const padroes = [
      '<script',
      'javascript:',
      'onerror=',
      'onload=',
      'alert(',
      'document.cookie',
      'eval(',
      'iframe',
      'drop table',
      'select * from',
      'insert into',
      'delete from',
      'update set',
      '--',
      '/*',
      '*/',
    ];

    return padroes.some((padrao) => texto.includes(padrao));
  }

  temConteudoSuspeito(valor: string): boolean {
    const texto = this.normalizarTextoFinal(valor);
    return this.temCaracterePerigoso(texto) || this.temPadraoSuspeito(texto);
  }

  emailTemFormatoValido(valor: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(valor);
  }

  // =========================
  // NOME
  // =========================

  get nomeLimpo(): string {
    return this.normalizarTextoFinal(this.nome);
  }

  get nomeEstaVazio(): boolean {
    return this.nomeLimpo.length === 0;
  }

  get nomeMenorQueMinimo(): boolean {
    return !this.nomeEstaVazio && this.nomeLimpo.length < 2;
  }

  get nomeMaiorQueMaximo(): boolean {
    return this.nomeLimpo.length > 100;
  }

  get nomeTemConteudoSuspeito(): boolean {
    return this.temConteudoSuspeito(this.nomeLimpo);
  }

  get nomeValido(): boolean {
    return (
      !this.nomeEstaVazio &&
      !this.nomeMenorQueMinimo &&
      !this.nomeMaiorQueMaximo &&
      !this.nomeTemConteudoSuspeito
    );
  }

  get nomeInvalido(): boolean {
    return (this.nomeTouched || this.tentouEnviar) && !this.nomeValido;
  }

  get mensagemErroNome(): string {
    if (this.nomeEstaVazio) {
      return 'Informe seu nome';
    }

    if (this.nomeMenorQueMinimo) {
      return 'Nome deve ter pelo menos 2 caracteres';
    }

    if (this.nomeMaiorQueMaximo) {
      return 'Nome deve ter no máximo 100 caracteres';
    }

    if (this.nomeTemConteudoSuspeito) {
      return 'Nome contém caracteres inválidos';
    }

    return '';
  }

  // =========================
  // EMAIL
  // =========================

  get emailLimpo(): string {
    return this.normalizarEmailFinal(this.email);
  }

  get emailEstaVazio(): boolean {
    return this.emailLimpo.length === 0;
  }

  get emailMaiorQueMaximo(): boolean {
    return this.emailLimpo.length > 150;
  }

  get emailTemConteudoSuspeito(): boolean {
    return this.temConteudoSuspeito(this.emailLimpo);
  }

  get emailFormatoInvalido(): boolean {
    return (
      !this.emailEstaVazio &&
      !this.emailTemConteudoSuspeito &&
      !this.emailMaiorQueMaximo &&
      !this.emailTemFormatoValido(this.emailLimpo)
    );
  }

  get emailValido(): boolean {
    return (
      !this.emailEstaVazio &&
      !this.emailMaiorQueMaximo &&
      !this.emailTemConteudoSuspeito &&
      !this.emailFormatoInvalido
    );
  }

  get emailInvalido(): boolean {
    return (this.emailTouched || this.tentouEnviar) && !this.emailValido;
  }

  get mensagemErroEmail(): string {
    if (this.emailEstaVazio) {
      return 'Informe seu e-mail';
    }

    if (this.emailMaiorQueMaximo) {
      return 'E-mail deve ter no máximo 150 caracteres';
    }

    if (this.emailTemConteudoSuspeito) {
      return 'E-mail contém caracteres inválidos';
    }

    if (this.emailFormatoInvalido) {
      return 'Informe um e-mail válido';
    }

    return '';
  }

  // =========================
  // TELEFONE
  // =========================

  get telefoneLimpo(): string {
    return this.normalizarTextoFinal(this.telefone);
  }

  get telefoneNumeros(): string {
    return this.somenteNumeros(this.telefone);
  }

  get telefoneEstaVazio(): boolean {
    return this.telefoneNumeros.length === 0;
  }

  get telefoneTemConteudoSuspeito(): boolean {
    return this.temConteudoSuspeito(this.telefoneLimpo);
  }

  get telefoneFormatoInvalido(): boolean {
    const tamanho = this.telefoneNumeros.length;
    return !this.telefoneEstaVazio && !(tamanho === 10 || tamanho === 11);
  }

  get telefoneValido(): boolean {
    return (
      !this.telefoneEstaVazio &&
      !this.telefoneTemConteudoSuspeito &&
      !this.telefoneFormatoInvalido
    );
  }

  get telefoneInvalido(): boolean {
    return (this.telefoneTouched || this.tentouEnviar) && !this.telefoneValido;
  }

  get mensagemErroTelefone(): string {
    if (this.telefoneEstaVazio) {
      return 'Informe seu telefone';
    }

    if (this.telefoneTemConteudoSuspeito) {
      return 'Telefone contém caracteres inválidos';
    }

    if (this.telefoneFormatoInvalido) {
      return 'Informe um telefone válido com DDD';
    }

    return '';
  }

  // =========================
  // SENHA
  // =========================

  get senhaLimpa(): string {
    return this.normalizarTextoFinal(this.senha);
  }

  get senhaEstaVazia(): boolean {
    return this.senhaLimpa.length === 0;
  }

  get senhaMenorQueMinimo(): boolean {
    return !this.senhaEstaVazia && this.senhaLimpa.length < 8;
  }

  get senhaMaiorQueMaximo(): boolean {
    return this.senhaLimpa.length > 60;
  }

  get senhaTemConteudoSuspeito(): boolean {
    return this.temConteudoSuspeito(this.senhaLimpa);
  }

  get senhaValida(): boolean {
    return (
      !this.senhaEstaVazia &&
      !this.senhaMenorQueMinimo &&
      !this.senhaMaiorQueMaximo &&
      !this.senhaTemConteudoSuspeito
    );
  }

  get senhaInvalida(): boolean {
    return (this.senhaTouched || this.tentouEnviar) && !this.senhaValida;
  }

  get mensagemErroSenha(): string {
    if (this.senhaEstaVazia) {
      return 'Informe sua senha';
    }

    if (this.senhaMenorQueMinimo) {
      return 'A senha deve ter pelo menos 8 caracteres';
    }

    if (this.senhaMaiorQueMaximo) {
      return 'A senha deve ter no máximo 60 caracteres';
    }

    if (this.senhaTemConteudoSuspeito) {
      return 'Senha contém caracteres inválidos';
    }

    return '';
  }

  // =========================
  // CONFIRMAR SENHA
  // =========================

  get confirmarSenhaLimpa(): string {
    return this.normalizarTextoFinal(this.confirmarSenha);
  }

  get confirmarSenhaEstaVazia(): boolean {
    return this.confirmarSenhaLimpa.length === 0;
  }

  get confirmarSenhaTemConteudoSuspeito(): boolean {
    return this.temConteudoSuspeito(this.confirmarSenhaLimpa);
  }

  get confirmarSenhaDiferente(): boolean {
    return (
      !this.confirmarSenhaEstaVazia &&
      !this.confirmarSenhaTemConteudoSuspeito &&
      this.confirmarSenhaLimpa !== this.senhaLimpa
    );
  }

  get confirmarSenhaValida(): boolean {
    return (
      !this.confirmarSenhaEstaVazia &&
      !this.confirmarSenhaTemConteudoSuspeito &&
      !this.confirmarSenhaDiferente
    );
  }

  get confirmarSenhaInvalida(): boolean {
    return (
      (this.confirmarSenhaTouched || this.tentouEnviar) &&
      !this.confirmarSenhaValida
    );
  }

  get mensagemErroConfirmarSenha(): string {
    if (this.confirmarSenhaEstaVazia) {
      return 'Confirme sua senha';
    }

    if (this.confirmarSenhaTemConteudoSuspeito) {
      return 'Confirmação de senha contém caracteres inválidos';
    }

    if (this.confirmarSenhaDiferente) {
      return 'As senhas não coincidem';
    }

    return '';
  }

  // =========================
  // TERMOS E LGPD
  // =========================

  get termosInvalidos(): boolean {
    return (this.termosTouched || this.tentouEnviar) && !this.aceitouTermos;
  }

  get lgpdInvalido(): boolean {
    return (this.lgpdTouched || this.tentouEnviar) && !this.aceitouLgpd;
  }

  get mensagemErroTermos(): string {
    return this.termosInvalidos ? 'Você precisa aceitar os Termos de Uso' : '';
  }

  get mensagemErroLgpd(): string {
    return this.lgpdInvalido
      ? 'Você precisa concordar com a Política de Privacidade'
      : '';
  }

  // =========================
  // ENVIO
  // =========================

  async cadastrar(): Promise<void> {
    if (this.loading) {
      return;
    }

    this.tentouEnviar = true;
    this.mensagemErro = '';
    this.mensagemSucesso = '';

    this.nomeTouched = true;
    this.emailTouched = true;
    this.telefoneTouched = true;
    this.senhaTouched = true;
    this.confirmarSenhaTouched = true;
    this.termosTouched = true;
    this.lgpdTouched = true;

    this.nome = this.normalizarTextoFinal(this.nome);
    this.email = this.normalizarEmailFinal(this.email);
    this.telefone = this.formatarTelefone(this.telefone);
    this.senha = this.normalizarTextoFinal(this.senha);
    this.confirmarSenha = this.normalizarTextoFinal(this.confirmarSenha);

    if (!this.nomeValido) {
      this.mensagemErro = this.mensagemErroNome;
      return;
    }

    if (!this.emailValido) {
      this.mensagemErro = this.mensagemErroEmail;
      return;
    }

    if (!this.telefoneValido) {
      this.mensagemErro = this.mensagemErroTelefone;
      return;
    }

    if (!this.senhaValida) {
      this.mensagemErro = this.mensagemErroSenha;
      return;
    }

    if (!this.confirmarSenhaValida) {
      this.mensagemErro = this.mensagemErroConfirmarSenha;
      return;
    }

    if (!this.aceitouTermos) {
      this.mensagemErro = 'Você precisa aceitar os Termos de Uso';
      return;
    }

    if (!this.aceitouLgpd) {
      this.mensagemErro = 'Você precisa concordar com a Política de Privacidade';
      return;
    }

    this.loading = true;

    try {
      const resposta = await this.authService.register({
        nome: this.nome,
        email: this.email,
        telefone: this.telefone,
        senha: this.senha,
        aceitou_termos: this.aceitouTermos,
        aceitou_lgpd: this.aceitouLgpd,
      });

      if (!resposta?.sucesso) {
        throw new Error(resposta?.erro || 'Erro ao cadastrar usuário');
      }

      this.mensagemSucesso = 'Conta criada com sucesso!';

      this.nome = '';
      this.email = '';
      this.telefone = '';
      this.senha = '';
      this.confirmarSenha = '';
      this.aceitouTermos = false;
      this.aceitouLgpd = false;

      this.tentouEnviar = false;
      this.nomeTouched = false;
      this.emailTouched = false;
      this.telefoneTouched = false;
      this.senhaTouched = false;
      this.confirmarSenhaTouched = false;
      this.termosTouched = false;
      this.lgpdTouched = false;
    } catch (error: unknown) {
      const mensagem =
        error instanceof Error ? error.message : 'Erro ao cadastrar usuário';

      this.mensagemErro = this.mapearErroCadastro(mensagem);

      console.error('Erro no cadastro:', error);
    } finally {
      this.loading = false;
    }
  }
}
