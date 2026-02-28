// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-value`,
      background: '#EF4444'
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
          value={outputType} 
          onChange={handleTypeChange}
          style={{
            padding: '6px 8px',
            border: '1px solid #CBD5E0',
            borderRadius: '6px',
            fontSize: '12px'
          }}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </div>
  );

  return (
    <BaseNode
      id={id}
      data={data}
      title="📤 Output"
      handles={handles}
      renderContent={renderContent}
      style={{ 
        backgroundColor: '#FEF2F2',
        borderColor: '#EF4444',
        minHeight: 150
      }}
    />
  );
}
