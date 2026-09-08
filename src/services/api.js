import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adiciona token ao header se existir
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  register: (nome, senha) => api.post('/usuarios/cadastro', { nome, senha }),
  login: (nome, senha) => api.post('/usuarios/login', { nome, senha }),
};

export const resistorService = {
  calculateOhm: (firstBand, secondBand, multiplierBand) => {
    const value = (firstBand * 10 + secondBand) * Math.pow(10, multiplierBand);
    return value;
  },
  
  decodeColor: (color) => {
    const colorMap = {
      'Preto': 0,
      'Marrom': 1,
      'Vermelho': 2,
      'Laranja': 3,
      'Amarelo': 4,
      'Verde': 5,
      'Azul': 6,
      'Violeta': 7,
      'Cinza': 8,
      'Branco': 9,
    };
    return colorMap[color] !== undefined ? colorMap[color] : -1;
  },

  encodeColor: (digit) => {
    const colorArray = [
      'Preto', 'Marrom', 'Vermelho', 'Laranja', 'Amarelo',
      'Verde', 'Azul', 'Violeta', 'Cinza', 'Branco'
    ];
    return colorArray[digit] || 'Desconhecido';
  },

  getColorHex: (colorName) => {
    const hexMap = {
      'Preto': '#000000',
      'Marrom': '#8B4513',
      'Vermelho': '#FF0000',
      'Laranja': '#FFA500',
      'Amarelo': '#FFFF00',
      'Verde': '#00AA00',
      'Azul': '#0000FF',
      'Violeta': '#EE82EE',
      'Cinza': '#808080',
      'Branco': '#FFFFFF',
      'Ouro': '#FFD700',
      'Prata': '#C0C0C0',
    };
    return hexMap[colorName] || '#CCCCCC';
  },

  getToleranceValue: (color) => {
    const toleranceMap = {
      'Marrom': '±1%',
      'Vermelho': '±2%',
      'Dourado': '±5%',
      'Prata': '±10%',
    };
    return toleranceMap[color] || '±20%';
  },
};

export default api;
