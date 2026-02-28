// apiNode.js
// Demonstrates BaseNode with API integration

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
  const [method, setMethod] = useState(data?.method || 'GET');
  const [endpoint, setEndpoint] = useState(data?.endpoint || '');

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-headers`,
      style: { top: '33%' },
      background: '#06B6D4'
    },
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-body`,
      style: { top: '66%' },
      background: '#06B6D4'
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-response`,
      style: { top: '40%' },
      background: '#10B981'
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-error`,
      style: { top: '60%' },
      background: '#EF4444'
    }
  ];

  const renderContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontWeight: '500' }}>Method:</span>
        <select 
          value={method} 
          onChange={(e) => setMethod(e.target.value)}
          style={{
            padding: '6px 8px',
            border: '1px solid #CBD5E0',
            borderRadius: '6px',
            fontSize: '12px'
          }}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </label>
      <label style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontWeight: '500' }}>Endpoint:</span>
        <input 
          type="text" 
          value={endpoint} 
          onChange={(e) => setEndpoint(e.target.value)}
          placeholder="/api/endpoint"
          style={{
            padding: '6px 8px',
            border: '1px solid #CBD5E0',
            borderRadius: '6px',
            fontSize: '12px',
            fontFamily: 'monospace'
          }}
        />
      </label>
    </div>
  );

  return (
    <BaseNode
      id={id}
      data={data}
      title="🌐 API"
      handles={handles}
      renderContent={renderContent}
      style={{ 
        backgroundColor: '#ECFEFF',
        borderColor: '#06B6D4',
        minHeight: 160
      }}
    />
  );
};
