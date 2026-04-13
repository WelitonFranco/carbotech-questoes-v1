import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { ForgotPassword } from './forgot-password';
import { AuthService } from '../../core/auth.service';

describe('ForgotPassword', () => {
  let component: ForgotPassword;
  let fixture: ComponentFixture<ForgotPassword>;
  let authServiceSpy: { enviarRecuperacaoSenha: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    authServiceSpy = {
      enviarRecuperacaoSenha: vi.fn().mockResolvedValue({ sucesso: true }),
    };

    await TestBed.configureTestingModule({
      imports: [ForgotPassword],
      providers: [
        provideRouter([]),
        { provide: AuthService, useValue: authServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir erro para e-mail inválido', async () => {
    component.email = 'invalido';

    await component.enviar();

    expect(component.mensagemErro).toBe('Informe um e-mail válido');
    expect(authServiceSpy.enviarRecuperacaoSenha).not.toHaveBeenCalled();
  });

  it('deve enviar recuperação para e-mail válido', async () => {
    component.email = 'Usuario@Email.com';

    await component.enviar();

    expect(authServiceSpy.enviarRecuperacaoSenha).toHaveBeenCalledWith('usuario@email.com');
    expect(component.enviado).toBe(true);
  });
});
