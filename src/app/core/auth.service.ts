import { Injectable } from '@angular/core';

type AuthResponse = { sucesso: boolean; erro?: string; data?: unknown };

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  async login(email: string, senha: string): Promise<AuthResponse> {
    if (!email || !senha) {
      return { sucesso: false, erro: 'Credenciais inválidas' };
    }

    return { sucesso: true, data: { email } };
  }

  async register(dados: unknown): Promise<AuthResponse> {
    if (!dados) {
      return { sucesso: false, erro: 'Dados inválidos' };
    }

    return { sucesso: true, data: { user: { id: 'mock-user-id' } } };
  }

  async enviarRecuperacaoSenha(email: string): Promise<AuthResponse> {
    if (!email) {
      return { sucesso: false, erro: 'E-mail inválido' };
    }

    return { sucesso: true };
  }
}
