import { useState } from 'react'

const process = {
  c41: { label: 'Colour negative (C-41)', price: 350 },
  bw: { label: 'Black and white', price: 400 },
  e6: { label: 'Colour slide (E-6)', price: 600 },
}
const scan = {
  none: { label: 'No scan, negatives only', price: 0 },
  std: { label: 'Standard scan (2000 px)', price: 250 },
  high: { label: 'High-res scan (4000 px)', price: 500 },
}
const format = {
  '35': { label: '35mm', mult: 1 },
  '120': { label: '120 medium format', mult: 1.2 },
}

export default function Prices() {
  const [p, setP] = useState('c41')
  const [s, setS] = useState('std')
  const [f, setF] = useState('35')
  const [rolls, setRolls] = useState(2)

  const perRoll = Math.round((process[p].price + scan[s].price) * format[f].mult)
  const total = perRoll * rolls

  return (
    <div className="wrap block">
      <h1 className="page-h">Prices</h1>
      <p className="lead">Pick your film and scan type. The total updates as you go.</p>

      <div className="calc">
        <div className="fields">
          <Select label="Film process" value={p} onChange={setP} options={process} />
          <Select label="Format" value={f} onChange={setF} options={format} />
          <Select label="Scanning" value={s} onChange={setS} options={scan} />
          <label>
            Number of rolls
            <input type="number" min="1" max="50" value={rolls}
              onChange={e => setRolls(Math.max(1, Math.min(50, Number(e.target.value) || 1)))} />
          </label>
        </div>

        <aside className="total" aria-live="polite">
          <span>Your total</span>
          <strong>₹{total.toLocaleString('en-IN')}</strong>
          <small>₹{perRoll} per roll, {rolls} {rolls === 1 ? 'roll' : 'rolls'}</small>
        </aside>
      </div>
    </div>
  )
}

function Select({ label, value, onChange, options }) {
  return (
    <label>
      {label}
      <select value={value} onChange={e => onChange(e.target.value)}>
        {Object.entries(options).map(([k, v]) => (
          <option key={k} value={k}>{v.label}</option>
        ))}
      </select>
    </label>
  )
}
