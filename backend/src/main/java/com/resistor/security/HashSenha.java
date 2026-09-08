package com.resistor.security;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Component;

@Component
public class HashSenha {

    public String gerarHash(String senha) {
        if (senha == null || senha.isBlank()) {
            throw new IllegalArgumentException("Senha inválida.");
        }
        return BCrypt.hashpw(senha, BCrypt.gensalt());
    }

    public boolean verificarSenha(String senha, String hash) {
        return BCrypt.checkpw(senha, hash);
    }
}
