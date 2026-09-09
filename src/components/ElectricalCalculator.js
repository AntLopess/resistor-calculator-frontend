import React, { useState, useEffect } from 'react';
import '../styles/ElectricalCalculator.css';

function ElectricalCalculator() {
  const [values, setValues] = useState({
    V: '', // Tensão (Volts)
    I: '', // Corrente (Amperes)
    R: '', // Resistência (Ohms)
    P: '', // Potência (Watts)
  });

  const [lastEdited, setLastEdited] = useState(null);
  const [history, setHistory] = useState([]);

  // Fórmulas
  const formulas = {
    V: 'V = R × I',
    I: 'I = V ÷ R',
    R: 'R = V ÷ I',
    P: 'P = V × I',
  };

  const descriptions = {
    V: 'Tensão em Volts (V)',
    I: 'Corrente em Amperes (A)',
    R: 'Resistência em Ohms (Ω)',
    P: 'Potência em Watts (W)',
  };

  // Calcular valores baseado no último editado
  useEffect(() => {
    if (!lastEdited) return;

    const { V, I, R, P } = values;
    const V_num = parseFloat(V);
    const I_num = parseFloat(I);
    const R_num = parseFloat(R);
    const P_num = parseFloat(P);

    let newValues = { V, I, R, P };

    try {
      if (lastEdited === 'V' && V_num > 0) {
        // V foi editado
        if (I_num > 0) {
          newValues.R = (V_num / I_num).toFixed(4);
          newValues.P = (V_num * I_num).toFixed(4);
        } else if (R_num > 0) {
          newValues.I = (V_num / R_num).toFixed(4);
          newValues.P = (V_num * V_num / R_num).toFixed(4);
        }
      } else if (lastEdited === 'I' && I_num > 0) {
        // I foi editado
        if (V_num > 0) {
          newValues.R = (V_num / I_num).toFixed(4);
          newValues.P = (V_num * I_num).toFixed(4);
        } else if (P_num > 0) {
          newValues.V = (P_num / I_num).toFixed(4);
          newValues.R = newValues.V / I_num;
        } else if (R_num > 0) {
          newValues.V = (I_num * R_num).toFixed(4);
          newValues.P = (I_num * I_num * R_num).toFixed(4);
        }
      } else if (lastEdited === 'R' && R_num > 0) {
        // R foi editado
        if (V_num > 0) {
          newValues.I = (V_num / R_num).toFixed(4);
          newValues.P = (V_num * V_num / R_num).toFixed(4);
        } else if (I_num > 0) {
          newValues.V = (I_num * R_num).toFixed(4);
          newValues.P = (I_num * I_num * R_num).toFixed(4);
        } else if (P_num > 0) {
          newValues.I = Math.sqrt(P_num / R_num).toFixed(4);
          newValues.V = (newValues.I * R_num).toFixed(4);
        }
      } else if (lastEdited === 'P' && P_num > 0) {
        // P foi editado
        if (V_num > 0) {
          newValues.I = (P_num / V_num).toFixed(4);
          newValues.R = (V_num * V_num / P_num).toFixed(4);
        } else if (I_num > 0) {
          newValues.V = (P_num / I_num).toFixed(4);
          newValues.R = (newValues.V / I_num).toFixed(4);
        } else if (R_num > 0) {
          newValues.I = Math.sqrt(P_num / R_num).toFixed(4);
          newValues.V = (newValues.I * R_num).toFixed(4);
        }
      }

      setValues(newValues);
    } catch (error) {
      console.error('Erro ao calcular:', error);
    }
  }, [lastEdited, values]);

  const handleInputChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setLastEdited(field);
  };

  const handleClear = () => {
    setValues({ V: '', I: '', R: '', P: '' });
    setLastEdited(null);
  };

  const handleAddToHistory = () => {
    if (values.V && values.I && values.R && values.P) {
      const entry = {
        id: Date.now(),
        V: values.V,
        I: values.I,
        R: values.R,
        P: values.P,
        timestamp: new Date().toLocaleTimeString(),
      };
      setHistory((prev) => [entry, ...prev]);
    }
  };

  const handleDeleteFromHistory = (id) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const handleLoadFromHistory = (entry) => {
    setValues({
      V: entry.V,
      I: entry.I,
      R: entry.R,
      P: entry.P,
    });
    setLastEdited(null);
  };

  return (
    <div className="electrical-calculator-wrapper">
      <div className="electrical-calculator-container">
        <h2>⚡ Calculadora de Grandezas Elétricas</h2>
        <p className="calculator-description">
          Digite qualquer dois valores e os outros serão calculados automaticamente
        </p>

        {/* Grid de Inputs */}
        <div className="electrical-grid">
          {/* Tensão (V) */}
          <div className="electrical-card input-card">
            <div className="card-header">
              <h3>Tensão</h3>
              <span className="unit">V</span>
            </div>
            <div className="formula-box">{formulas.V}</div>
            <input
              type="number"
              placeholder="0"
              value={values.V}
              onChange={(e) => handleInputChange('V', e.target.value)}
              className="electrical-input"
            />
            <p className="description">{descriptions.V}</p>
          </div>

          {/* Corrente (I) */}
          <div className="electrical-card input-card">
            <div className="card-header">
              <h3>Corrente</h3>
              <span className="unit">A</span>
            </div>
            <div className="formula-box">{formulas.I}</div>
            <input
              type="number"
              placeholder="0"
              value={values.I}
              onChange={(e) => handleInputChange('I', e.target.value)}
              className="electrical-input"
            />
            <p className="description">{descriptions.I}</p>
          </div>

          {/* Resistência (R) */}
          <div className="electrical-card input-card">
            <div className="card-header">
              <h3>Resistência</h3>
              <span className="unit">Ω</span>
            </div>
            <div className="formula-box">{formulas.R}</div>
            <input
              type="number"
              placeholder="0"
              value={values.R}
              onChange={(e) => handleInputChange('R', e.target.value)}
              className="electrical-input"
            />
            <p className="description">{descriptions.R}</p>
          </div>

          {/* Potência (P) */}
          <div className="electrical-card input-card">
            <div className="card-header">
              <h3>Potência</h3>
              <span className="unit">W</span>
            </div>
            <div className="formula-box">{formulas.P}</div>
            <input
              type="number"
              placeholder="0"
              value={values.P}
              onChange={(e) => handleInputChange('P', e.target.value)}
              className="electrical-input"
            />
            <p className="description">{descriptions.P}</p>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="action-buttons">
          <button onClick={handleClear} className="btn-clear">
            🗑️ Limpar
          </button>
          <button
            onClick={handleAddToHistory}
            className="btn-history"
            disabled={!values.V || !values.I || !values.R || !values.P}
          >
            💾 Salvar no Histórico
          </button>
        </div>

        {/* Fórmulas de Referência */}
        <div className="formulas-reference">
          <h3>📐 Fórmulas Utilizadas</h3>
          <div className="formulas-grid">
            <div className="formula-item">
              <strong>Tensão:</strong>
              <code>V = R × I</code>
            </div>
            <div className="formula-item">
              <strong>Corrente:</strong>
              <code>I = V ÷ R</code>
            </div>
            <div className="formula-item">
              <strong>Resistência:</strong>
              <code>R = V ÷ I</code>
            </div>
            <div className="formula-item">
              <strong>Potência:</strong>
              <code>P = V × I</code>
            </div>
            <div className="formula-item">
              <strong>Potência (R):</strong>
              <code>P = I² × R</code>
            </div>
            <div className="formula-item">
              <strong>Potência (V):</strong>
              <code>P = V² ÷ R</code>
            </div>
          </div>
        </div>
      </div>

      {/* Histórico */}
      {history.length > 0 && (
        <div className="history-container">
          <h3>📋 Histórico de Cálculos</h3>
          <div className="history-list">
            {history.map((entry) => (
              <div key={entry.id} className="history-item">
                <div className="history-values">
                  <span className="history-value">
                    <strong>V:</strong> {entry.V}V
                  </span>
                  <span className="history-value">
                    <strong>I:</strong> {entry.I}A
                  </span>
                  <span className="history-value">
                    <strong>R:</strong> {entry.R}Ω
                  </span>
                  <span className="history-value">
                    <strong>P:</strong> {entry.P}W
                  </span>
                </div>
                <div className="history-time">{entry.timestamp}</div>
                <div className="history-actions">
                  <button
                    onClick={() => handleLoadFromHistory(entry)}
                    className="btn-load"
                  >
                    📂 Carregar
                  </button>
                  <button
                    onClick={() => handleDeleteFromHistory(entry.id)}
                    className="btn-delete"
                  >
                    ✕ Deletar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ElectricalCalculator;
