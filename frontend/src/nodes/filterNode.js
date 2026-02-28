// filterNode.js
// Demonstrates BaseNode with conditional logic

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'contains');
  const [value, setValue] = useState(data?.value || '');

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-input`,
      background: '#EC4899'
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-match`,
      style: { top: '40%' },
      background: '#10B981'
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-nomatch`,
      style: { top: '60%' },
      background: '#EF4444'
    }
  ];

  const renderContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontWeight: '500' }}>Condition:</span>
        <select 
          value={condition} 
          onChange={(e) => setCondition(e.target.value)}
          style={{
            padding: '6px 8px',
            border: '1px solid #CBD5E0',
            borderRadius: '6px',
            fontSize: '12px'
          }}
        >
          <option value="contains">Contains</option>
          <option value="equals">Equals</option>
          <option value="startsWith">Starts With</option>
          <option value="endsWith">Ends With</option>
        </select>
      </label>
      <label style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontWeight: '500' }}>Value:</span>
        <input 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)}
          placeholder="Filter value..."
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
      title="🔍 Filter"
      handles={handles}
      renderContent={renderContent}
      style={{ 
        backgroundColor: '#FCE7F3',
        borderColor: '#EC4899',
        minHeight: 160
      }}
    />
  );
};
