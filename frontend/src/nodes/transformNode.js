// transformNode.js
// Demonstrates BaseNode with data transformation

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'uppercase');

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-input`,
      background: '#14B8A6'
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
      background: '#14B8A6'
    }
  ];

  const renderContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontWeight: '500' }}>Operation:</span>
        <select 
          value={operation} 
          onChange={(e) => setOperation(e.target.value)}
          style={{
            padding: '6px 8px',
            border: '1px solid #CBD5E0',
            borderRadius: '6px',
            fontSize: '12px'
          }}
        >
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="trim">Trim</option>
          <option value="reverse">Reverse</option>
          <option value="json">Parse JSON</option>
        </select>
      </label>
      <div style={{ 
        fontSize: '11px', 
        color: '#6B7280',
        fontStyle: 'italic',
        textAlign: 'center',
        padding: '4px'
      }}>
        Transforms input data
      </div>
    </div>
  );

  return (
    <BaseNode
      id={id}
      data={data}
      title="⚡ Transform"
      handles={handles}
      renderContent={renderContent}
      style={{ 
        backgroundColor: '#F0FDFA',
        borderColor: '#14B8A6',
        minHeight: 130
      }}
    />
  );
};
