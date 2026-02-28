// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handles = [
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-value`,
      background: '#10B981'
    }
  ];

  const renderContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontWeight: '500' }}>Name:</span>
        <input 
          type="text" 
          value={currName} 
          onChange={handleNameChange}
          style={{
            padding: '6px 8px',
            border: '1px solid #CBD5E0',
            borderRadius: '6px',
            fontSize: '12px'
          }}
        />
      </label>
      <label style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontWeight: '500' }}>Type:</span>
        <select 
          value={inputType} 
          onChange={handleTypeChange}
          style={{
            padding: '6px 8px',
            border: '1px solid #CBD5E0',
            borderRadius: '6px',
            fontSize: '12px'
          }}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </div>
  );

  return (
    <BaseNode
      id={id}
      data={data}
      title="📥 Input"
      handles={handles}
      renderContent={renderContent}
      style={{ 
        backgroundColor: '#F0FDF4',
        borderColor: '#10B981',
        minHeight: 150
      }}
    />
  );
}
