import './App.css';

function Rainbow({ className }) {
  const colors = ['#ff4b4b', '#ff9d4b', '#ffe14b', '#5ad45a', '#4bb3ff', '#7a5cff'];
  return (
    <svg
      className={className}
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {colors.map((color, i) => {
        const r = 95 - i * 11;
        return (
          <path
            key={color}
            d={`M ${100 - r} 100 A ${r} ${r} 0 0 1 ${100 + r} 100`}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function Dragonfly({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g className="dragonfly-wings">
        <ellipse cx="45" cy="18" rx="26" ry="9" fill="#9be7ff" opacity="0.8" />
        <ellipse cx="75" cy="18" rx="26" ry="9" fill="#9be7ff" opacity="0.8" />
        <ellipse cx="45" cy="42" rx="20" ry="7" fill="#7fd8ff" opacity="0.7" />
        <ellipse cx="75" cy="42" rx="20" ry="7" fill="#7fd8ff" opacity="0.7" />
      </g>
      <ellipse cx="60" cy="30" rx="6" ry="4" fill="#2f8f5b" />
      <rect x="56" y="30" width="8" height="26" rx="4" fill="#3bbf7e" />
      <circle cx="60" cy="26" r="5" fill="#2f8f5b" />
    </svg>
  );
}

function App() {
  return (
    <div className="App">
      <div className="sky">
        <Rainbow className="rainbow rainbow-1" />
        <Rainbow className="rainbow rainbow-2" />
        <Rainbow className="rainbow rainbow-3" />

        <Dragonfly className="dragonfly dragonfly-1" />
        <Dragonfly className="dragonfly dragonfly-2" />
        <Dragonfly className="dragonfly dragonfly-3" />

        <main className="greeting">
          <h1>Hi Grammy Sue Sue! 🌈</h1>
          <p>We love you so much!</p>
        </main>
      </div>
    </div>
  );
}

export default App;
