import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(value => value + 1);
  const decrement = () => setCount(value => Math.max(0, value - 1));
  const reset = () => setCount(0);

  return (
    <main className="page">
      <section className="counter-card" aria-labelledby="page-title">
        <div className="eyebrow"><span className="status-dot" /> REACT USESTATE PROJECT</div>
        <h1 id="page-title">Counter <span>Application</span></h1>
        <p className="subtitle">A simple way to understand React state.</p>
        <div className="count-panel" aria-live="polite">
          <span className="count-label">CURRENT COUNT</span>
          <div className="count-value">{count}</div>
          <div className={`count-state ${count === 0 ? 'at-minimum' : 'above-minimum'}`}>
            <span className="state-dot" />{count === 0 ? 'At minimum' : 'You can keep counting'}
          </div>
        </div>
        {count === 0 && <p className="limit-message" role="status">Minimum limit reached</p>}
        <div className="button-row">
          <button className="action-button decrement" onClick={decrement} disabled={count === 0}><span>−</span> Decrement</button>
          <button className="action-button increment" onClick={increment}><span>+</span> Increment</button>
        </div>
        <button className="reset-button" onClick={reset}><span>↺</span> Reset counter</button>
        <div className="card-footer"><span>Built with React</span><span className="footer-separator">•</span><span>useState hook</span></div>
      </section>
      <p className="page-note">State changes. Interface updates. That's React.</p>
    </main>
  );
}
export default App;
