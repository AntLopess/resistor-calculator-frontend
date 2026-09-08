import React from 'react';
import { resistorService } from '../services/api';
import '../styles/ResistorVisualizer.css';

function ResistorVisualizer({ bands }) {
  const getColorHex = (color) => resistorService.getColorHex(color);

  return (
    <div className="visualizer-container">
      <h2>Visualização do Resistor</h2>
      
      <div className="resistor-visual">
        <div className="resistor-body">
          <div className="resistor-content">
            {/* Faixa 1 */}
            <div
              className="band band-1"
              style={{ backgroundColor: getColorHex(bands.first) }}
              title={`${bands.first}: ${resistorService.decodeColor(bands.first)}`}
            ></div>
            
            {/* Faixa 2 */}
            <div
              className="band band-2"
              style={{ backgroundColor: getColorHex(bands.second) }}
              title={`${bands.second}: ${resistorService.decodeColor(bands.second)}`}
            ></div>
            
            {/* Faixa 3 (Multiplicador) */}
            <div
              className="band band-3"
              style={{ backgroundColor: getColorHex(bands.multiplier) }}
              title={`${bands.multiplier}: Multiplicador`}
            ></div>
            
            {/* Faixa 4 (Tolerância) */}
            <div
              className="band band-4"
              style={{ backgroundColor: getColorHex(bands.tolerance) }}
              title={`${bands.tolerance}: ${resistorService.getToleranceValue(bands.tolerance)}`}
            ></div>
          </div>
          
          {/* Terminais */}
          <div className="terminal terminal-left"></div>
          <div className="terminal terminal-right"></div>
        </div>
      </div>
      
      <div className="band-legend">
        <div className="legend-item">
          <span className="legend-label">1ª Faixa:</span>
          <span className="legend-value">{bands.first} ({resistorService.decodeColor(bands.first)})</span>
        </div>
        <div className="legend-item">
          <span className="legend-label">2ª Faixa:</span>
          <span className="legend-value">{bands.second} ({resistorService.decodeColor(bands.second)})</span>
        </div>
        <div className="legend-item">
          <span className="legend-label">3ª Faixa (Mult):</span>
          <span className="legend-value">{bands.multiplier} (×10^{resistorService.decodeColor(bands.multiplier)})</span>
        </div>
        <div className="legend-item">
          <span className="legend-label">4ª Faixa (Tol):</span>
          <span className="legend-value">{bands.tolerance} ({resistorService.getToleranceValue(bands.tolerance)})</span>
        </div>
      </div>
    </div>
  );
}

export default ResistorVisualizer;
