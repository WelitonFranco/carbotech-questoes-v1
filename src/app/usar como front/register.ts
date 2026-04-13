import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { Register } from './register';
import { AuthService } from '../../core/auth.service';

describe('Register', () => {
  let component: Register;
  let fixture: ComponentFixture<Register>;
  let authServiceSpy: { register: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    authServiceSpy = {
      register: vi.fn().mockResolvedValue({ sucesso: true, data: { user: { id: 'fake-user-id' } } }),
    };

    await TestBed.configureTestingModule({
      imports: [Register],
      providers: [
        provideRouter([]),
        { provide: AuthService, useValue: authServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Register);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve normalizar espaços durante a digitação do nome', () => {
    component.nome = '   Weliton    Franco';
    component.onNomeInput();

    expect(component.nome).toBe('Weliton Franco');
  });

  it('deve normalizar completamente o nome ao sair do campo', () => {
    component.nome = '   Ana    Maria   ';
    component.onNomeBlur();

    expect(component.nome).toBe('Ana Maria');
    expect(component.nomeTouched).toBe(true);
  });

  it('deve invalidar nome vazio', () => {
    component.nome = '   ';

    expect(component.nomeValido).toBe(false);
    expect(component.mensagemErroNome).toBe('Informe seu nome');
  });

  it('deve invalidar nome com menos de 2 caracteres', () => {
    component.nome = 'A';

    expect(component.nomeValido).toBe(false);
    expect(component.mensagemErroNome).toBe(
      'Nome deve ter pelo menos 2 caracteres'
    );
  });

  it('deve invalidar nome com conteúdo suspeito', () => {
    component.nome = '<script>alert(1)</script>';

    expect(component.nomeValido).toBe(false);
    expect(component.mensagemErroNome).toBe(
      'Nome contém caracteres inválidos'
    );
  });

  it('deve aceitar nome válido', () => {
    component.nome = 'Ana Maria';

    expect(component.nomeValido).toBe(true);
  });

  it('deve invalidar e-mail vazio', () => {
    component.email = '';

    expect(component.emailValido).toBe(false);
    expect(component.mensagemErroEmail).toBe('Informe seu e-mail');
  });

  it('deve invalidar e-mail com formato incorreto', () => {
    component.email = 'teste@';

    expect(component.emailValido).toBe(false);
    expect(component.mensagemErroEmail).toBe('Informe um e-mail válido');
  });

  it('deve aceitar e-mail válido', () => {
    component.email = 'teste@gmail.com';

    expect(component.emailValido).toBe(true);
  });

  it('deve invalidar e-mail com conteúdo suspeito', () => {
    component.email = '<script>@gmail.com';

    expect(component.emailValido).toBe(false);
    expect(component.mensagemErroEmail).toBe(
      'E-mail contém caracteres inválidos'
    );
  });

  it('deve invalidar telefone vazio', () => {
    component.telefone = '';

    expect(component.telefoneValido).toBe(false);
    expect(component.mensagemErroTelefone).toBe('Informe seu telefone');
  });

  it('deve invalidar telefone sem DDD', () => {
    component.telefone = '99999999';

    expect(component.telefoneValido).toBe(false);
    expect(component.mensagemErroTelefone).toBe(
      'Informe um telefone válido com DDD'
    );
  });

  it('deve aceitar telefone válido com 11 dígitos', () => {
    component.telefone = '51999998888';

    expect(component.telefoneValido).toBe(true);
  });

  it('deve formatar telefone corretamente', () => {
    component.telefone = '51999998888';
    component.onTelefoneInput();

    expect(component.telefone).toBe('(51) 99999-8888');
  });

  it('deve invalidar senha vazia', () => {
    component.senha = '';

    expect(component.senhaValida).toBe(false);
    expect(component.mensagemErroSenha).toBe('Informe sua senha');
  });

  it('deve invalidar senha curta', () => {
    component.senha = '123';

    expect(component.senhaValida).toBe(false);
    expect(component.mensagemErroSenha).toBe(
      'A senha deve ter pelo menos 8 caracteres'
    );
  });

  it('deve aceitar senha válida', () => {
    component.senha = 'Senha123';

    expect(component.senhaValida).toBe(true);
  });

  it('deve invalidar confirmação de senha vazia', () => {
    component.confirmarSenha = '';

    expect(component.confirmarSenhaValida).toBe(false);
    expect(component.mensagemErroConfirmarSenha).toBe('Confirme sua senha');
  });

  it('deve invalidar quando as senhas não coincidem', () => {
    component.senha = 'Senha123';
    component.confirmarSenha = 'Senha456';

    expect(component.confirmarSenhaValida).toBe(false);
    expect(component.mensagemErroConfirmarSenha).toBe(
      'As senhas não coincidem'
    );
  });

  it('deve aceitar confirmação de senha válida', () => {
    component.senha = 'Senha123';
    component.confirmarSenha = 'Senha123';

    expect(component.confirmarSenhaValida).toBe(true);
  });

  it('deve marcar tentativa de envio ao cadastrar', async () => {
    component.nome = ' ';
    await component.cadastrar();

    expect(component.tentouEnviar).toBe(true);
    expect(component.nomeTouched).toBe(true);
  });

  it('deve mostrar erro quando termos não forem aceitos', async () => {
    component.nome = 'Ana Maria';
    component.email = 'teste@gmail.com';
    component.telefone = '51999998888';
    component.senha = 'Senha123';
    component.confirmarSenha = 'Senha123';
    component.aceitouTermos = false;
    component.aceitouLgpd = true;

    await component.cadastrar();

    expect(component.mensagemErro).toBe(
      'Você precisa aceitar os Termos de Uso'
    );
    expect(authServiceSpy.register).not.toHaveBeenCalled();
  });

  it('deve mostrar erro quando lgpd não for aceita', async () => {
    component.nome = 'Ana Maria';
    component.email = 'teste@gmail.com';
    component.telefone = '51999998888';
    component.senha = 'Senha123';
    component.confirmarSenha = 'Senha123';
    component.aceitouTermos = true;
    component.aceitouLgpd = false;

    await component.cadastrar();

    expect(component.mensagemErro).toBe(
      'Você precisa concordar com a Política de Privacidade'
    );
    expect(authServiceSpy.register).not.toHaveBeenCalled();
  });

  it('deve chamar o serviço de cadastro quando o formulário estiver válido', async () => {
    component.nome = 'Ana Maria';
    component.email = 'teste@gmail.com';
    component.telefone = '51999998888';
    component.senha = 'Senha123';
    component.confirmarSenha = 'Senha123';
    component.aceitouTermos = true;
    component.aceitouLgpd = true;

    await component.cadastrar();

    expect(authServiceSpy.register).toHaveBeenCalledWith({
      nome: 'Ana Maria',
      email: 'teste@gmail.com',
      telefone: '(51) 99999-8888',
      senha: 'Senha123',
      aceitou_termos: true,
      aceitou_lgpd: true,
    });
  });

  it('deve mostrar mensagem de sucesso ao cadastrar com sucesso', async () => {
    component.nome = 'Ana Maria';
    component.email = 'teste@gmail.com';
    component.telefone = '51999998888';
    component.senha = 'Senha123';
    component.confirmarSenha = 'Senha123';
    component.aceitouTermos = true;
    component.aceitouLgpd = true;

    await component.cadastrar();

    expect(component.mensagemSucesso).toBe('Conta criada com sucesso!');
    expect(component.mensagemErro).toBe('');
  });

  it('deve limpar o formulário após cadastro com sucesso', async () => {
    component.nome = 'Ana Maria';
    component.email = 'teste@gmail.com';
    component.telefone = '51999998888';
    component.senha = 'Senha123';
    component.confirmarSenha = 'Senha123';
    component.aceitouTermos = true;
    component.aceitouLgpd = true;

    await component.cadastrar();

    expect(component.nome).toBe('');
    expect(component.email).toBe('');
    expect(component.telefone).toBe('');
    expect(component.senha).toBe('');
    expect(component.confirmarSenha).toBe('');
    expect(component.aceitouTermos).toBe(false);
    expect(component.aceitouLgpd).toBe(false);
  });

  it('deve exibir erro retornado pelo serviço', async () => {
    authServiceSpy.register.mockRejectedValueOnce(
      new Error('E-mail já cadastrado')
    );

    component.nome = 'Ana Maria';
    component.email = 'teste@gmail.com';
    component.telefone = '51999998888';
    component.senha = 'Senha123';
    component.confirmarSenha = 'Senha123';
    component.aceitouTermos = true;
    component.aceitouLgpd = true;

    await component.cadastrar();

    expect(component.mensagemErro).toBe('E-mail já cadastrado');
    expect(component.mensagemSucesso).toBe('');
  });

  it('deve desligar o loading ao final do cadastro', async () => {
    component.nome = 'Ana Maria';
    component.email = 'teste@gmail.com';
    component.telefone = '51999998888';
    component.senha = 'Senha123';
    component.confirmarSenha = 'Senha123';
    component.aceitouTermos = true;
    component.aceitouLgpd = true;

    await component.cadastrar();

    expect(component.loading).toBe(false);
  });
});