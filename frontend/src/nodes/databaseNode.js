// databaseNode.js
// Demonstrates BaseNode with database operations

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DatabaseNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'query');
  const [table, setTable] = useState(data?.table || '');

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-query`,
      style: { top: '33%' },
      background: '#F97316'
    },
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-params`,
      style: { top: '66%' },
      background: '#F97316'
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-result`,
      background: '#F97316'
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
          <option value="query">Query</option>
          <option value="insert">Insert</option>
          <option value="update">Update</option>
          <option value="delete">Delete</option>
        </select>
      </label>
      <label style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontWeight: '500' }}>Table:</span>
        <input 
          type="text" 
          value={table} 
          onChange={(e) => setTable(e.target.value)}
          placeholder="Table name..."
          style={{
            padding: '6px 8px',
            border: '1px solid #CBD5E0',
            borderRadius: '6px',
            fontSize: '12px'
          }}
        />
      </label>
    </div>
  );

  return (
    <BaseNode
      id={id}
      data={data}
      title="🗄️ Database"
      handles={handles}
      renderContent={renderContent}
      style={{ 
        backgroundColor: '#FFF7ED',
        borderColor: '#F97316',
        minHeight: 160
      }}
    />
  );
};
