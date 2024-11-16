import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './App.module.css';

function App() {
  const [value, setValue] = useState('');
  return (
    <div className={styles.main}>
      <h1>React Quill Demo</h1>
      <ReactQuill theme='snow' value={value} onChange={setValue} />
    </div>
  );
}

export default App;
