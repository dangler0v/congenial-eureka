:root {
  --bg: #0f172a;
  --panel: #111827;
  --panel-2: #1f2937;
  --accent: #8b5cf6;
  --accent-2: #3b82f6;
  --text: #e5e7eb;
  --muted: #94a3b8;
  --danger: #ef4444;
  --shadow: rgba(15, 23, 42, 0.4);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #0f172a, #111827 50%, #172554);
  font-family: Arial, Helvetica, sans-serif;
  color: var(--text);
}

.calculator {
  width: min(90vw, 360px);
  background: rgba(17, 24, 39, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 24px 50px var(--shadow);
  backdrop-filter: blur(8px);
}

.display-wrap {
  background: rgba(15, 23, 42, 0.8);
  border-radius: 18px;
  padding: 16px 14px;
  margin-bottom: 18px;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 8px;
  border: 1px solid rgba(148, 163, 184, 0.1);
}

.expression,
.result {
  width: 100%;
  text-align: right;
  overflow-wrap: anywhere;
}

.expression {
  color: var(--muted);
  min-height: 22px;
  font-size: 1rem;
}

.result {
  font-size: clamp(2rem, 7vw, 2.5rem);
  font-weight: 700;
  min-height: 52px;
  letter-spacing: 0.04em;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.btn {
  border: none;
  border-radius: 16px;
  background: var(--panel-2);
  color: var(--text);
  font-size: 1.2rem;
  font-weight: 700;
  min-height: 64px;
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.2s ease, background 0.2s ease;
}

.btn:hover {
  filter: brightness(1.08);
}

.btn:active {
  transform: translateY(1px) scale(0.99);
}

.btn-operator {
  background: rgba(59, 130, 246, 0.15);
  color: #bfdbfe;
}

.btn-ac {
  background: rgba(239, 68, 68, 0.18);
  color: #fecaca;
}

.btn-equals {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: white;
}

.btn-zero {
  grid-column: span 2;
}
