// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div style={{ 
            padding: '16px',
            backgroundColor: '#1F2937',
            borderBottom: '2px solid #374151',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
        }}>
            <div style={{ 
                marginBottom: '12px',
                color: '#F9FAFB',
                fontSize: '18px',
                fontWeight: 'bold'
            }}>
                Node Palette
            </div>
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '12px'
            }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='transform' label='Transform' />
                <DraggableNode type='database' label='Database' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='condition' label='Condition' />
            </div>
        </div>
    );
};
