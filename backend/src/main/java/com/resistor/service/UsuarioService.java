package com.resistor.service;

import com.resistor.dto.LoginRequest;
import com.resistor.dto.LoginResponse;
import com.resistor.dto.RegisterRequest;
import com.resistor.model.Usuario;
import com.resistor.repository.UsuarioRepository;
import com.resistor.security.HashSenha;
import com.resistor.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private HashSenha hashSenha;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    public LoginResponse cadastrarUsuario(RegisterRequest request) {
        // Validações
        if (request.getNome() == null || request.getNome().isBlank()) {
            throw new IllegalArgumentException("Erro de Validação: O nome não pode estar vazio.");
        }

        if (!request.getSenha().matches("^(?=.*[A-Z])(?=.*\\d).{8,}$")) {
            throw new IllegalArgumentException("Erro de Validação: A senha deve ter 8+ caracteres, com maiúscula e número.");
        }

        if (usuarioRepository.existsByNome(request.getNome())) {
            throw new IllegalArgumentException("Usuário já existe.");
        }

        // Criar novo usuário
        Usuario usuario = new Usuario();
        usuario.setNome(request.getNome());
        usuario.setSenha(hashSenha.gerarHash(request.getSenha()));

        usuarioRepository.save(usuario);

        String token = jwtTokenProvider.generateToken(usuario.getNome());
        return new LoginResponse(usuario.getNome(), token);
    }

    public LoginResponse login(LoginRequest request) {
        Usuario usuario = usuarioRepository.findByNome(request.getNome())
                .orElseThrow(() -> new IllegalArgumentException("Usuário inexistente."));

        if (!hashSenha.verificarSenha(request.getSenha(), usuario.getSenha())) {
            throw new IllegalArgumentException("A senha está incorreta.");
        }

        String token = jwtTokenProvider.generateToken(usuario.getNome());
        return new LoginResponse(usuario.getNome(), token);
    }
}
