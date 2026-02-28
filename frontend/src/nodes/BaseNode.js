// BaseNode.js
// A flexible abstraction for creating nodes with different configurations

import { Handle, Position } from 'reactflow';

/**
 * BaseNode - A reusable node component that accepts configuration
 * @param {Object} props
 * @param {string} props.id - Node ID
 * @param {Object} props.data - Node data
 * @param {string} props.title - Node title/label
 * @param {Array} props.handles - Array of handle configurations
 * @param {Function} props.renderContent - Function to render node content
 * @param {Object} props.style - Custom styles for the node wrapper
 */
export const BaseNode = ({ 
  id, 
  data, 
  title, 
  handles = [], 
  renderContent, 
  style = {} 
}) => {
  const defaultStyle = {
    width: style.width || 200,
    height: style.height || 'auto',
    minHeight: style.minHeight || 80,
    border: style.border || '2px solid #4A5568',
    borderRadius: style.borderRadius || '12px',
    padding: style.padding || '12px',
    backgroundColor: style.backgroundColor || '#FFFFFF',
    boxShadow: style.boxShadow || '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: style.transition || 'all 0.2s ease',
  };

  return (
    <div style={defaultStyle} className="base-node">
      {/* Render handles */}
      {handles.map((handle, index) => (
        <Handle
          key={`${id}-${handle.id || index}`}
          type={handle.type}
          position={handle.position}
          id={handle.id || `${id}-${handle.type}-${index}`}
          style={{
            background: handle.background || '#555',
            width: handle.width || 12,
            height: handle.height || 12,
            border: handle.border || '2px solid #fff',
            ...handle.style
          }}
        />
      ))}
      
      {/* Title section */}
      {title && (
        <div style={{
          fontWeight: 'bold',
          fontSize: '14px',
          marginBottom: '8px',
          color: '#2D3748',
          textAlign: 'center',
          borderBottom: '1px solid #E2E8F0',
          paddingBottom: '8px',
        }}>
          {title}
        </div>
      )}
      
      {/* Content section */}
      {renderContent && (
        <div style={{ marginTop: '8px' }}>
          {renderContent()}
        </div>
      )}
    </div>
  );
};
