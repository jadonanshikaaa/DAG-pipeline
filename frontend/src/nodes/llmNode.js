// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-system`,
      style: { top: '33%' },
      background: '#8B5CF6'
    },
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-prompt`,
      style: { top: '66%' },
      background: '#8B5CF6'
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-response`,
      background: '#8B5CF6'
    }
  ];

  const renderContent = () => (
    <div style={{ 
      textAlign: 'center', 
      color: '#6B7280', 
      fontSize: '12px',
      padding: '8px 0'
    }}>
      <span>This is a LLM.</span>
    </div>
  );

  return (
    <BaseNode
      id={id}
      data={data}
      title="🤖 LLM"
      handles={handles}
      renderContent={renderContent}
      style={{ 
        backgroundColor: '#FAF5FF',
        borderColor: '#8B5CF6',
        minHeight: 100
      }}
    />
  );
}
