# Guia de Instalação - Passo a Passo

## 🔧 Requisitos do Sistema

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Java JDK 17+](https://www.oracle.com/java/technologies/downloads/)
- [Maven](https://maven.apache.org/download.cgi)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/)
- [Git](https://git-scm.com/)

## 📋 Passo 1: Clonar o Repositório

```bash
git clone https://github.com/AntLopess/resistor-calculator-frontend.git
cd resistor-calculator-frontend
```

## 🗄️ Passo 2: Configurar Banco de Dados

### Abrir MySQL

```bash
mysql -u root -p
```

### Executar Script SQL

```sql
CREATE DATABASE resistor_db;

USE resistor_db;

CREATE TABLE Usuario (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

EXIT;
```

## 🚀 Passo 3: Configurar e Rodar Backend

### 3.1 Abrir o arquivo de configuração

```bash
cd backend
```

Abra o arquivo: `backend/src/main/resources/application.properties`

### 3.2 Editar credenciais do MySQL

Localizar e alterar:

```properties
# Antes
spring.datasource.url=jdbc:mysql://localhost:3306/resistor_db?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=sua_senha

# Depois (com seus dados)
spring.datasource.url=jdbc:mysql://localhost:3306/resistor_db?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=sua_senha_mysql
```

### 3.3 Compilar o projeto

```bash
mvn clean install
```

### 3.4 Rodar o backend

```bash
mvn spring-boot:run
```

**Você deve ver:**
```
Tomcat started on port(s): 8080 (http)
```

### ✅ Backend está rodando!

Acesse: http://localhost:8080/api/usuarios/test

Você deve ver: `API funcionando corretamente!`

## 🎨 Passo 4: Configurar e Rodar Frontend

### 4.1 Abrir novo terminal

```bash
# Na raiz do projeto (resistor-calculator-frontend)
cd ..
```

### 4.2 Instalar dependências

```bash
npm install
```

### 4.3 Verificar arquivo .env

Garantir que `.env` contém:

```
REACT_APP_API_URL=http://localhost:8080/api
```

### 4.4 Rodar o frontend

```bash
npm start
```

**Você deve ver:**
```
Compiled successfully!
You can now view resistor-calculator in the browser.
Open http://localhost:3000 to view it in your browser.
```

### ✅ Frontend está rodando!

O navegador abrirá automaticamente em: http://localhost:3000

## 🧪 Testando a Aplicação

### Teste 1: Criar Conta

1. Clique em "Criar conta"
2. Digite:
   - **Usuário:** `teste123`
   - **Senha:** `Senha@123`
   - **Confirmar Senha:** `Senha@123`
3. Clique em "Criar Conta"
4. Deve redirecionar para login após 2 segundos

### Teste 2: Fazer Login

1. Digite:
   - **Usuário:** `teste123`
   - **Senha:** `Senha@123`
2. Clique em "Entrar"
3. Deve levar para o Dashboard

### Teste 3: Usar Calculadora

1. No Dashboard, selecione cores:
   - **1ª Faixa:** Marrom (1)
   - **2ª Faixa:** Preto (0)
   - **3ª Faixa:** Vermelho (×100)
   - **4ª Faixa:** Ouro (±5%)
2. Resultado deve aparecer: **1000Ω** ou **1kΩ**
3. O resistor visual deve mostrar as cores

## 🔍 Verificar se Tudo está Funcionando

### Backend

```bash
# Em outro terminal
curl http://localhost:8080/api/usuarios/test

# Resposta esperada:
API funcionando corretamente!
```

### Frontend

```
Acesse: http://localhost:3000
Você deve ver a página de login
```

## 📱 Portas Utilizadas

| Serviço | Porta | URL |
|---------|-------|-----|
| Frontend (React) | 3000 | http://localhost:3000 |
| Backend (Spring) | 8080 | http://localhost:8080/api |
| MySQL | 3306 | localhost |

## 🐛 Problemas Comuns

### Erro: "Cannot GET /api/usuarios/test"

**Solução:**
- Verifique se o backend está rodando
- Execute: `mvn spring-boot:run` na pasta `backend`

### Erro: "Access denied for user 'root'@'localhost'"

**Solução:**
- Verifique a senha do MySQL em `application.properties`
- Certifique-se de que MySQL está rodando

### Erro: "Database 'resistor_db' doesn't exist"

**Solução:**
- Execute o script SQL novamente:
  ```bash
  mysql -u root -p < database.sql
  ```

### Erro: "Cannot find module 'react'"

**Solução:**
- Execute: `npm install`
- Delete `node_modules` e `package-lock.json`, depois execute `npm install` novamente

## 🎓 Próximos Passos

1. **Explorar o código** na pasta `src/`
2. **Customizar as cores** em `src/services/api.js`
3. **Adicionar novos recursos** (salvar cálculos, histórico, etc.)
4. **Fazer deploy** em produção

## 📚 Documentação Adicional

- [React Documentation](https://react.dev)
- [Spring Boot Guide](https://spring.io/guides/gs/spring-boot/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [JWT Documentation](https://tools.ietf.org/html/rfc7519)

## ✅ Conclusão

Apareceu tudo conforme esperado? Parabéns! 🎉

Você tem agora uma aplicação completa de calculadora de resistores rodando localmente.

Para mais ajuda, abra uma issue no GitHub!
