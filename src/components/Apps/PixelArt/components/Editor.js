import React, { useState, useRef } from 'react';
import '../styles/editor.scss';
import { CirclePicker } from 'react-color'
import DrawingPanel from './DrawingPanel'
import { exportComponentAsPNG } from 'react-component-export-image';

function Editor() {

  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState('start drawing');
  const [selectedColor, setColor] = useState("#f44336");

  const panelRef = useRef();

  const initializeDrawingPanel = () => {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel)

    buttonText === 'start drawing'
      ? setButtonText('reset')
      : setButtonText('start drawing');
  }

  const changeColor = (color) => {
    setColor(color.hex)
  }
  const pickerColors =
    ["#f44336", "#e91e63", "#9c27b0", "#673ab7",
      "#3f51b5", "#2196f3", "#00bcd4", "#009688",
      "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b",
      "#ff9800", "#ff5722", "#795548", "#607d8b"]

  return (
    <div id="editor">
      {hideDrawingPanel && <div className="optionsPanel">
        <h1>Pixel Editor</h1>
        {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
        {hideDrawingPanel && <div id='options'>
          <div className="option">
            <input
              type="number"
              className='panelInput'
              defaultValue={panelWidth}
              onChange={e => setPanelWidth(e.target.value)}
            />
            <span>Width</span>
          </div>
          <div className="option">
            <input
              type="number"
              className='panelInput'
              defaultValue={panelHeight}
              onChange={e => setPanelHeight(e.target.value)}
            />
            <span>Height</span>
          </div>
        </div>
        }
        <button className='button' onClick={initializeDrawingPanel}>Start drawing</button>
      </div>}
      {hideOptions && <div className="workingPanel">
        <div className="drawing">
          <DrawingPanel
            width={panelWidth}
            height={panelHeight}
            selectedColor={selectedColor}
            panelRef={panelRef}
          />
        </div>
        <div className="settingsPanel">
          <CirclePicker
            className='colorPicker'
            color={selectedColor}
            onChange={changeColor}
            circleSize={18}
            width={'150px'}
            colors={pickerColors}
          />
          <button onClick={() => exportComponentAsPNG(panelRef)} className='button'>Export as PNG</button>
          <button className='button reset' onClick={initializeDrawingPanel}>reset</button>
        </div>
      </div>}
    </div>
  );
}

export default Editor;
