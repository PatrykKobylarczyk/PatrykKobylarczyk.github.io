import React from 'react';
import '../styles/drawingPanel.scss';
import Row from './Row';


function DrawingPanel(props) {
  const { width, height, selectedColor, panelRef } = props;

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />)
  }

  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>{rows}</div>
    </div>
  );
}

export default DrawingPanel;
