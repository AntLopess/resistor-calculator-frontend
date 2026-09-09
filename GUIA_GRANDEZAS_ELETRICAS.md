# Guia de Uso - Calculadora de Grandezas Elétricas

## 🆕 O que há de novo?

Agora a aplicação possui uma **Calculadora de Grandezas Elétricas** completa com as principais fórmulas da eletricidade.

## 🎯 Acessando a Calculadora de Grandezas Elétricas

### Passo 1: Faça Login
1. Abra http://localhost:3000
2. Digite suas credenciais
3. Clique em "Entrar"

### Passo 2: No Dashboard
1. Você verá 2 abas no topo:
   - 🔴 **Calculadora de Resistores** (padrão)
   - ⚡ **Grandezas Elétricas** (NOVO!)
2. Clique em "⚡ Grandezas Elétricas"

## 📊 Usando a Calculadora

### Sistema Inteligente de Cálculo

A calculadora usa um sistema inteligente onde:
- **Digite qualquer 2 valores**
- **Os outros 2 serão calculados automaticamente**
- A calculadora detecta qual valor você editou

### Campos Disponíveis

#### 1. Tensão (V) - Volts
- **Símbolo:** V
- **Unidade:** Volts
- **Fórmula:** V = R × I
- **Exemplo:** 12 Volts

#### 2. Corrente (I) - Amperes
- **Símbolo:** I (ou A)
- **Unidade:** Amperes
- **Fórmula:** I = V ÷ R
- **Exemplo:** 2 Amperes

#### 3. Resistência (R) - Ohms
- **Símbolo:** R
- **Unidade:** Ohms (Ω)
- **Fórmula:** R = V ÷ I
- **Exemplo:** 6 Ohms

#### 4. Potência (P) - Watts
- **Símbolo:** P
- **Unidade:** Watts (W)
- **Fórmula:** P = V × I
- **Exemplo:** 24 Watts

## 📝 Exemplos Práticos

### Exemplo 1: Encontrar Resistência

**Dados conhecidos:**
- Tensão: 12V
- Corrente: 2A

**Passos:**
1. Digite "12" no campo V (Tensão)
2. Digite "2" no campo I (Corrente)
3. Veja os campos R e P serem preenchidos automaticamente

**Resultados:**
- R = 6Ω (Ohms)
- P = 24W (Watts)

### Exemplo 2: Encontrar Corrente

**Dados conhecidos:**
- Tensão: 24V
- Resistência: 8Ω

**Passos:**
1. Digite "24" no campo V
2. Digite "8" no campo R
3. Veja os campos I e P serem preenchidos

**Resultados:**
- I = 3A (Amperes)
- P = 72W (Watts)

### Exemplo 3: Encontrar Potência

**Dados conhecidos:**
- Corrente: 5A
- Resistência: 10Ω

**Passos:**
1. Digite "5" no campo I
2. Digite "10" no campo R
3. Veja os campos V e P serem preenchidos

**Resultados:**
- V = 50V (Volts)
- P = 250W (Watts)

## 💾 Histórico de Cálculos

### Salvar um Cálculo

1. Preencha todos os 4 campos (V, I, R, P)
2. Clique no botão **"💾 Salvar no Histórico"**
3. O cálculo será adicionado à lista de histórico abaixo

### Carregar um Cálculo Anterior

1. Localize o cálculo na lista de histórico
2. Clique em **"📂 Carregar"**
3. Os valores serão restaurados nos campos

### Deletar um Cálculo

1. Localize o cálculo na lista
2. Clique em **"✕ Deletar"**
3. O cálculo será removido do histórico

## 📐 Fórmulas de Referência

Todas as fórmulas estão visíveis na seção **"📖 Fórmulas Utilizadas"**:

### Lei de Ohm
```
V = R × I        (Tensão = Resistência vezes Corrente)
I = V ÷ R        (Corrente = Tensão dividido Resistência)
R = V ÷ I        (Resistência = Tensão dividido Corrente)
```

### Potência Elétrica
```
P = V × I        (Potência = Tensão vezes Corrente)
P = I² × R       (Potência = Corrente ao quadrado vezes Resistência)
P = V² ÷ R       (Potência = Tensão ao quadrado dividido Resistência)
```

## 🔄 Casos de Uso Comuns

### Caso 1: Dimensionar Fonte de Alimentação

**Problema:** Você tem um LED que funciona com 3V e 0.02A. Qual potência da fonte?

**Solução:**
1. V = 3, I = 0.02
2. P = 0.06W

### Caso 2: Encontrar Resistor para LED

**Problema:** Você tem 5V disponíveis e quer 20mA (0.02A) no LED.

**Solução:**
1. V = 5, I = 0.02
2. R = 250Ω

### Caso 3: Verificar Aquecimento de Resistor

**Problema:** Um resistor de 100Ω está com 1A passando. Quanto de calor gera?

**Solução:**
1. R = 100, I = 1
2. P = 100W (alto risco de queimadura!)

## ⚙️ Botões Disponíveis

| Botão | Função | Atalho |
|-------|--------|--------|
| 🗑️ Limpar | Limpa todos os campos | - |
| 💾 Salvar no Histórico | Salva o cálculo atual | Habilitado quando todos 4 valores estão preenchidos |
| 📂 Carregar | Carrega um cálculo salvo | Clique no item do histórico |
| ✕ Deletar | Remove do histórico | Clique no item do histórico |

## 🎓 Aprendizado

### Dica 1: Lei de Ohm é Fundamental
Toda a eletricidade básica gira em torno de V = R × I. Memorize isso!

### Dica 2: Potência e Aquecimento
Quanto maior a potência, mais calor gera. Por isso componentes de alta potência precisam de dissipadores térmicos.

### Dica 3: Sempre use 2 valores conhecidos
Nunca tente calcular com apenas 1 valor. Você precisa de pelo menos 2 para encontrar os outros.

### Dica 4: Unidades importam
Sempre trabalhe com Volts, Amperes, Ohms e Watts. Não misture com milivolts, miliamperes, etc.

## 📱 Responsividade

A calculadora funciona perfeitamente em:
- 💻 Desktop (tela grande)
- 📱 Tablet (tela média)
- 📲 Smartphone (tela pequena)

## 🆘 Troubleshooting

### "Por que o campo não calcula?"
**Resposta:** Digite em 2 campos diferentes para ativar o cálculo automático.

### "Os valores estão errados?"
**Resposta:** Verifique as unidades (V em Volts, I em Amperes, R em Ohms, P em Watts).

### "Como carregar do histórico?"
**Resposta:** Clique no botão "📂 Carregar" no item do histórico que deseja.

## 💡 Próximos Passos

1. Salve seus cálculos frequentes
2. Use como referência para seus projetos
3. Compartilhe com colegas
4. Estude as fórmulas fornecidas

---

**Desenvolvido para facilitar o cálculo de grandezas elétricas! ⚡**
