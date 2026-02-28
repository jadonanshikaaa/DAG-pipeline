// textNode.js

import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 250, height: 'auto' });
  const textAreaRef = useRef(null);

  // Extract variables from text (e.g., {{variableName}})
  useEffect(() => {
    const regex = /\{\{(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*)\}\}/g;
    const matches = [];
    let match;
    
    while ((match = regex.exec(currText)) !== null) {
      const varName = match[1].trim();
      if (!matches.includes(varName)) {
        matches.push(varName);
      }
    }
    
    setVariables(matches);
  }, [currText]);

  // Dynamically adjust dimensions based on content
  useEffect(() => {
    if (textAreaRef.current) {
      const lineCount = currText.split('\n').length;
      const textLength = currText.length;
      
      // Calculate width based on text length
      const newWidth = Math.max(250, Math.min(500, 250 + Math.floor(textLength / 3)));
      
      // Calculate height based on line count and content
      const newHeight = Math.max(120, 120 + (lineCount - 1) * 20);
      
      setDimensions({ width: newWidth, height: newHeight });
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Create handles: one source handle + dynamic target handles for variables
  const handles = [
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
      background: '#3B82F6'
    },
    // Dynamic handles for each variable
    ...variables.map((varName, index) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-${varName}`,
      style: { 
        top: `${(100 / (variables.length + 1)) * (index + 1)}%`
      },
      background: '#F59E0B'
    }))
  ];

  const renderContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontWeight: '500' }}>Text:</span>
        <textarea
          ref={textAreaRef}
          value={currText}
          onChange={handleTextChange}
          style={{
            padding: '8px',
            border: '1px solid #CBD5E0',
            borderRadius: '6px',
            fontSize: '12px',
            fontFamily: 'monospace',
            resize: 'none',
            minHeight: '60px',
            width: '100%'
          }}
          rows={Math.max(3, currText.split('\n').length)}
        />
      </label>
      {variables.length > 0 && (
        <div style={{ 
          fontSize: '11px', 
          color: '#6B7280',
          borderTop: '1px solid #E5E7EB',
          paddingTop: '8px'
        }}>
          <div style={{ fontWeight: '500', marginBottom: '4px' }}>Variables:</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {variables.map((varName, index) => (
              <span 
                key={index}
                style={{
                  backgroundColor: '#FEF3C7',
                  color: '#92400E',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontSize: '10px',
                  fontFamily: 'monospace'
                }}
              >
                {varName}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <BaseNode
      id={id}
      data={data}
      title="📝 Text"
      handles={handles}
      renderContent={renderContent}
      style={{ 
        backgroundColor: '#EFF6FF',
        borderColor: '#3B82F6',
        width: dimensions.width,
        height: dimensions.height,
        minHeight: 120
      }}
    />
  );
}
