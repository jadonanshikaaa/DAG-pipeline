// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.target.style.transform = 'scale(1.05)';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    const onDragEnd = (event) => {
      event.target.style.cursor = 'grab';
      event.target.style.transform = 'scale(1)';
    };

    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={onDragEnd}
        style={{ 
          cursor: 'grab', 
          minWidth: '100px', 
          height: '60px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '10px',
          backgroundColor: '#374151',
          justifyContent: 'center', 
          flexDirection: 'column',
          border: '2px solid #4B5563',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.2s ease',
          userSelect: 'none'
        }} 
        draggable
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#4B5563';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          if (e.currentTarget.style.cursor !== 'grabbing') {
            e.currentTarget.style.backgroundColor = '#374151';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
          }
        }}
      >
          <span style={{ 
            color: '#F9FAFB',
            fontWeight: '600',
            fontSize: '13px'
          }}>
            {label}
          </span>
      </div>
    );
  };
  