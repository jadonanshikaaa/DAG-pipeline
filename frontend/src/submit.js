// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {
        try {
            // Prepare the pipeline data
            const pipelineData = {
                nodes: nodes,
                edges: edges
            };

            // Send POST request to backend
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pipelineData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            // Display result in a user-friendly alert
            const dagStatus = result.is_dag ? '✓ Yes' : '✗ No';
            const message = `
Pipeline Analysis Results:
━━━━━━━━━━━━━━━━━━━━━━━━
📊 Number of Nodes: ${result.num_nodes}
🔗 Number of Edges: ${result.num_edges}
🔄 Is DAG (Directed Acyclic Graph): ${dagStatus}

${result.is_dag 
    ? '✅ Your pipeline is valid and has no cycles!' 
    : '⚠️ Warning: Your pipeline contains cycles and may cause infinite loops.'}
            `.trim();

            alert(message);
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert(`❌ Error: Failed to submit pipeline.\n\n${error.message}\n\nMake sure the backend server is running on http://localhost:8000`);
        }
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            backgroundColor: '#1F2937',
            borderTop: '2px solid #374151',
            boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.15)'
        }}>
            <button 
                type="submit"
                onClick={handleSubmit}
                style={{
                    padding: '12px 32px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                    backgroundColor: '#3B82F6',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px rgba(59, 130, 246, 0.3)',
                    transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#2563EB';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 12px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#3B82F6';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 6px rgba(59, 130, 246, 0.3)';
                }}
                onMouseDown={(e) => {
                    e.target.style.transform = 'translateY(0)';
                }}
            >
                Submit Pipeline
            </button>
        </div>
    );
}
