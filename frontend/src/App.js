import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#111827',
      overflow: 'hidden'
    }}>
      <PipelineToolbar />
      <div style={{ flex: 1, position: 'relative' }}>
        <PipelineUI />
      </div>
      <SubmitButton />
    </div>
  );
}

export default App;
