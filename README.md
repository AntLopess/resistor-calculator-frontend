# ⚡ Calculadora de Resistores com Código de Cores

Um aplicativo completo para calcular e visualizar resistores usando código de cores. Desenvolvido com **React** (frontend) e **Spring Boot** (backend), com autenticação de usuários e banco de dados MySQL.

## 📋 Funcionalidades

✅ **Autenticação de Usuários**
- Registro com validação de senha forte
- Login seguro com tokens JWT
- Autenticação persistente

✅ **Calculadora de Resistores**
- Seleção de faixas de cores (1ª, 2ª, 3ª e 4ª faixas)
- Cálculo automático do valor da resistência
- Exibição em Ohm (Ω), Quilohm (kΩ) e Megohm (MΩ)
- Tolerância de resistência visual

✅ **Visualização 3D**
- Resistor visual com cores reais
- Terminais dourados
- Legenda interativa com valores
- Responsivo em todos os dispositivos

✅ **Interface Moderna**
- Design responsivo e intuitivo
- Gradientes visuais atraentes
- Modo claro e limpo

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** - Biblioteca UI
- **React Router v6** - Roteamento
- **Axios** - Cliente HTTP
- **CSS3** - Estilização

### Backend
- **Spring Boot 3.1** - Framework Java
- **Spring Data JPA** - ORM
- **JWT** - Autenticação
- **BCrypt** - Hash de Senhas
- **HikariCP** - Pool de Conexões

### Banco de Dados
- **MySQL 8.0**

## 📦 Instalação

### Pré-requisitos
- **Node.js** 16+ (para React)
- **Java 17+** (para Spring Boot)
- **Maven** (para compilar o backend)
- **MySQL Server** rodando

### 1. Configuração do Banco de Dados

```sql
CREATE DATABASE resistor_db;

USE resistor_db;

CREATE TABLE Usuario (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Instalação do Backend (Spring Boot)

```bash
cd backend

# Editar arquivo de configuração
# Abra: src/main/resources/application.properties
# Altere os dados de conexão do MySQL:
spring.datasource.url=jdbc:mysql://localhost:3306/resistor_db?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=sua_senha_mysql

# Gerar a chave JWT (opcional, mude em produção)
jwt.secret=your-secret-key-change-this-in-production-with-a-long-random-string

# Compilar e rodar
mvn clean install
mvn spring-boot:run

# O backend estará disponível em: http://localhost:8080/api
```

### 3. Instalação do Frontend (React)

```bash
# Instalar dependências
npm install

# Criar arquivo .env (já existe, mas verifique)
# O arquivo .env já está configurado para:
REACT_APP_API_URL=http://localhost:8080/api

# Iniciar o servidor de desenvolvimento
npm start

# A aplicação abrirá em: http://localhost:3000
```

## 🚀 Como Usar

### 1. Criar Conta
1. Clique em "Criar conta"
2. Digite um nome de usuário
3. Crie uma senha com:
   - Mínimo 8 caracteres
   - Pelo menos 1 letra maiúscula
   - Pelo menos 1 número
4. Clique em "Criar Conta"

### 2. Fazer Login
1. Digite seu nome de usuário
2. Digite sua senha
3. Clique em "Entrar"

### 3. Usar a Calculadora

1. **Selecionar Cores das Faixas:**
   - **1ª Faixa** (Primeiro Dígito): Escolha a cor do primeiro dígito
   - **2ª Faixa** (Segundo Dígito): Escolha a cor do segundo dígito
   - **3ª Faixa** (Multiplicador): Escolha a cor do multiplicador (×10^n)
   - **4ª Faixa** (Tolerância): Escolha a tolerância em %

2. **Visualizar:**
   - O valor da resistência é calculado automaticamente
   - Um resistor visual mostra as cores selecionadas
   - A legenda exibe informações detalhadas

### Exemplo de Cálculo

**Cores: Marrom - Preto - Vermelho - Dourado**
- 1ª Faixa (Marrom) = 1
- 2ª Faixa (Preto) = 0
- 3ª Faixa (Vermelho) = ×10² = ×100
- 4ª Faixa (Dourado) = ±5%

**Cálculo:** (10) × 100 = **1000 Ω** ou **1 kΩ ±5%**

## 📊 Mapa de Cores de Resistores

| Cor | Dígito | Multiplicador | Tolerância |
|-----|--------|---------------|-------------|
| Preto | 0 | ×10⁰ | - |
| Marrom | 1 | ×10¹ | ±1% |
| Vermelho | 2 | ×10² | ±2% |
| Laranja | 3 | ×10³ | - |
| Amarelo | 4 | ×10⁴ | - |
| Verde | 5 | ×10⁵ | - |
| Azul | 6 | ×10⁶ | - |
| Violeta | 7 | ×10⁷ | - |
| Cinza | 8 | ×10⁸ | - |
| Branco | 9 | ×10⁹ | - |
| Ouro | - | ×10⁻¹ | ±5% |
| Prata | - | ×10⁻² | ±10% |

## 🔐 Segurança

- ✅ Senhas com hash BCrypt
- ✅ Autenticação via JWT
- ✅ CORS configurado
- ✅ Validação de entrada no frontend e backend
- ✅ Tokens armazenados em localStorage

## 📁 Estrutura do Projeto

```
resistor-calculator-frontend/
├── backend/
│   ├── src/main/java/com/resistor/
│   │   ├── controller/     # Endpoints REST
│   │   ├── service/        # Lógica de negócio
│   │   ├── model/          # Entidades JPA
│   │   ├── repository/     # Acesso a dados
│   │   ├── security/       # JWT e BCrypt
│   │   └── dto/            # Data Transfer Objects
│   ├── src/main/resources/
│   │   └── application.properties  # Configurações
│   └── pom.xml             # Dependências Maven
│
├── src/
│   ├── components/         # Componentes React
│   │   ├── ResistorCalculator.js
│   │   └── ResistorVisualizer.js
│   ├── pages/              # Páginas
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── Dashboard.js
│   ├── services/           # APIs e Serviços
│   │   └── api.js
│   ├── styles/             # Estilos CSS
│   ├── App.js              # Componente principal
│   └── index.js            # Entry point
│
├── public/
│   └── index.html          # HTML base
├── .env                    # Variáveis de ambiente
├── package.json            # Dependências npm
└── README.md               # Este arquivo
```

## 🔄 Fluxo de Dados

```
┌─────────────┐
│   React     │ (Frontend)
│  (Port 3000)│
└──────┬──────┘
       │ HTTP/REST
       ▼
┌──────────────────┐
│  Spring Boot     │ (Backend)
│  (Port 8080/api) │
└──────┬───────────┘
       │ JDBC
       ▼
┌──────────────┐
│    MySQL     │ (Banco de Dados)
│ resistor_db  │
└──────────────┘
```

## 🐛 Troubleshooting

### Backend não conecta ao MySQL
```
Verifique:
1. MySQL está rodando? (sudo service mysql status)
2. Banco de dados foi criado? (CREATE DATABASE resistor_db;)
3. Credenciais no application.properties estão corretas?
```

### Frontend não conecta ao Backend
```
Verifique:
1. Backend está rodando em http://localhost:8080/api?
2. CORS está habilitado no application.properties?
3. .env contém: REACT_APP_API_URL=http://localhost:8080/api
```

### Erro na senha
```
A senha deve:
- Ter mínimo 8 caracteres
- Conter pelo menos 1 letra maiúscula
- Conter pelo menos 1 número
Exemplo válido: Senha123
```

## 📝 Endpoints da API

### Autenticação

**POST** `/api/usuarios/cadastro`
```json
{
  "nome": "usuario",
  "senha": "Senha123"
}
```

**POST** `/api/usuarios/login`
```json
{
  "nome": "usuario",
  "senha": "Senha123"
}
```

**GET** `/api/usuarios/test`
- Testa se a API está funcionando

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas! Por favor:
1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

Criado por **AntLopess**

## 📞 Suporte

Tem dúvidas ou encontrou um bug? Abra uma issue no GitHub!

---

**Desenvolvido com ❤️ usando React + Spring Boot**
