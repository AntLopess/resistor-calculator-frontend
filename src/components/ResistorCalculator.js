import React, { useState, useEffect } from 'react';
import { resistorService } from '../services/api';
import '../styles/ResistorCalculator.css';

const COLORS = [
  'Preto', 'Marrom', 'Vermelho', 'Laranja', 'Amarelo',
  'Verde', 'Azul', 'Violeta', 'Cinza', 'Branco'
];

const MULTIPLIERS = [
  'Preto', 'Marrom', 'Vermelho', 'Laranja', 'Amarelo',
  'Verde', 'Azul', 'Violeta', 'Cinza', 'Branco', 'Ouro', 'Prata'
];

const TOLERANCES = ['Marrom', 'Vermelho', 'Dourado', 'Prata'];

function ResistorCalculator({ onBandsChange }) {
  const [bands, setBands] = useState({
    first: 'Marrom',
    second: 'Preto',
    multiplier: 'Preto',
    tolerance: 'Ouro',
  });

  const [resistanceValue, setResistanceValue] = useState(0);
  const [unit, setUnit] = useState('Ω');

  useEffect(() => {
    calculateResistance();
  }, [bands]);

  const calculateResistance = () => {
    const firstDigit = resistorService.decodeColor(bands.first);
    const secondDigit = resistorService.decodeColor(bands.second);
    const multiplierDigit = resistorService.decodeColor(bands.multiplier);

    if (firstDigit === -1 || secondDigit === -1 || multiplierDigit === -1) {
      setResistanceValue(0);
      return;
    }

    let value = (firstDigit * 10 + secondDigit) * Math.pow(10, multiplierDigit);
    let displayUnit = 'Ω';

    if (value >= 1000000) {
      value = value / 1000000;
      displayUnit = 'MΩ';
    } else if (value >= 1000) {
      value = value / 1000;
      displayUnit = 'kΩ';
    }

    setResistanceValue(value.toFixed(2));
    setUnit(displayUnit);
    onBandsChange(bands);
  };

  const handleBandChange = (bandName, color) => {
    setBands((prev) => ({ ...prev, [bandName]: color }));
  };

  return (
    <div className="calculator-container">
      <h2>Configurar Resistor</h2>

      <div className="calculation-result">
        <h3>Valor da Resistência</h3>
        <div className="resistance-display">
          <span className="value">{resistanceValue}</span>
          <span className="unit">{unit}</span>
        </div>
      </div>

      <div className="band-selector">
        <div className="band-group">
          <label>1ª Faixa (Primeiro Dígito)</label>
          <select
            value={bands.first}
            onChange={(e) => handleBandChange('first', e.target.value)}
          >
            {COLORS.map((color) => (
              <option key={color} value={color}>
                {color} ({resistorService.decodeColor(color)})
              </option>
            ))}
          </select>
          <div
            className="color-preview"
            style={{ backgroundColor: resistorService.getColorHex(bands.first) }}
          ></div>
        </div>

        <div className="band-group">
          <label>2ª Faixa (Segundo Dígito)</label>
          <select
            value={bands.second}
            onChange={(e) => handleBandChange('second', e.target.value)}
          >
            {COLORS.map((color) => (
              <option key={color} value={color}>
                {color} ({resistorService.decodeColor(color)})
              </option>
            ))}
          </select>
          <div
            className="color-preview"
            style={{ backgroundColor: resistorService.getColorHex(bands.second) }}
          ></div>
        </div>

        <div className="band-group">
          <label>3ª Faixa (Multiplicador)</label>
          <select
            value={bands.multiplier}
            onChange={(e) => handleBandChange('multiplier', e.target.value)}
          >
            {MULTIPLIERS.map((color) => {
              const digit = resistorService.decodeColor(color);
              const multiplier = digit !== -1 ? `×10^${digit}` : '×0.1 (Ouro) / ×0.01 (Prata)';
              return (
                <option key={color} value={color}>
                  {color} ({multiplier})
                </option>
              );
            })}
          </select>
          <div
            className="color-preview"
            style={{ backgroundColor: resistorService.getColorHex(bands.multiplier) }}
          ></div>
        </div>

        <div className="band-group">
          <label>4ª Faixa (Tolerância)</label>
          <select
            value={bands.tolerance}
            onChange={(e) => handleBandChange('tolerance', e.target.value)}
          >
            {TOLERANCES.map((color) => (
              <option key={color} value={color}>
                {color} ({resistorService.getToleranceValue(color)})
              </option>
            ))}
          </select>
          <div
            className="color-preview"
            style={{ backgroundColor: resistorService.getColorHex(bands.tolerance) }}
          ></div>
        </div>
      </div>

      <div className="info-box">
        <h4>Informações da Tolerância</h4>
        <p>{resistorService.getToleranceValue(bands.tolerance)}</p>
      </div>
    </div>
  );
}

export default ResistorCalculator;
