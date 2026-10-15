import { useState } from 'react'

const hours = [
  ['Monday to Friday', '10:00 to 18:00'],
  ['Saturday', '11:00 to 16:00'],
  ['Sunday', 'Closed'],
]

export default function Visit() {
  const [name, setName] = useState('')
  const [note, setNote] = useState('')

  // Static site hai, isliye form mail app kholta hai
  const href = `mailto:hello@example.com?subject=${encodeURIComponent('Film order from ' + name)}&body=${encodeURIComponent(note)}`

  return (
    <div className="wrap block">
      <h1 className="page-h">Visit or send us film</h1>
      <div className="cols">
        <div>
          <h2>Opening hours</h2>
          <dl className="hours">
            {hours.map(([d, t]) => (
              <div key={d}><dt>{d}</dt><dd>{t}</dd></div>
            ))}
          </dl>
          <p className="muted">12 Example Lane, Your City. Replace this with your real address.</p>
        </div>

        <div>
          <h2>Tell us about your order</h2>
          <div className="form">
            <label>Your name
              <input value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>What are you sending?
              <textarea value={note} onChange={e => setNote(e.target.value)}
                placeholder="e.g. 3 rolls of Kodak Gold 200, 35mm" />
            </label>
            <a className="btn" href={href}>Send by email</a>
          </div>
        </div>
      </div>
    </div>
  )
}
