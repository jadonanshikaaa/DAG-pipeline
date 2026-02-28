// conditionNode.js
// Demonstrates BaseNode with branching logic

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [operator, setOperator] = useState(data?.operator || '==');
  const [compareValue, setCompareValue] = useState(data?.compareValue || '');

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-input`,
      background: '#A855F7'
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-true`,
      style: { top: '40%' },
      background: '#10B981'
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-false`,
      style: { top: '60%' },
      background: '#EF4444'
    }
  ];

  const renderContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontWeight: '500' }}>Operator:</span>
        <select 
          value={operator} 
          onChange={(e) => setOperator(e.target.value)}
          style={{
            padding: '6px 8px',
            border: '1px solid #CBD5E0',
            borderRadius: '6px',
            fontSize: '12px'
          }}
        >
          <option value="==">Equals (==)</option>
          <option value="!=">Not Equals (!=)</option>
          <option value=">">Greater Than (&gt;)</option>
          <option value="<">Less Than (&lt;)</option>
          <option value=">=">Greater or Equal (&gt;=)</option>
          <option value="<=">Less or Equal (&lt;=)</option>
        </select>
      </label>
      <label style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontWeight: '500' }}>Compare Value:</span>
        <input 
          type="text" 
          value={compareValue} 
          onChange={(e) => setCompareValue(e.target.value)}
          placeholder="Value to compare..."
          style={{
            padding: '6px 8px',
            border: '1px solid #CBD5E0',
            borderRadius: '6px',
            fontSize: '12px'
          }}
        />
      </label>
      <div style={{ 
        fontSize: '10px', 
        color: '#6B7280',
        textAlign: 'center',
        padding: '4px',
        borderTop: '1px solid #E5E7EB'
      }}>
        ✓ True | ✗ False
      </div>
    </div>
  );

  return (
    <BaseNode
      id={id}
      data={data}
      title="🔀 Condition"
      handles={handles}
      renderContent={renderContent}
      style={{ 
        backgroundColor: '#FAF5FF',
        borderColor: '#A855F7',
        minHeight: 180
      }}
    />
  );
};
