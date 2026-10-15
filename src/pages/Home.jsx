import { Link } from 'react-router-dom'

const tones = [
  'linear-gradient(160deg,#f5c06b,#b4531a)',
  'linear-gradient(160deg,#7fb0b8,#1d4b5a)',
  'linear-gradient(160deg,#e9d8a6,#7a8f4b)',
  'linear-gradient(160deg,#d98c8c,#4a2a45)',
  'linear-gradient(160deg,#a9c4d6,#2f4f7a)',
  'linear-gradient(160deg,#f0a12b,#6b2d12)',
]

const steps = [
  ['Send your rolls', 'Post them or drop them off. Include a note with the film type.'],
  ['We develop by hand', 'Fresh chemistry, timed to the second, never rushed through a machine.'],
  ['We scan each frame', 'Every negative is dusted and scanned one at a time.'],
  ['You get a download link', 'Negatives go back by post. Scans arrive within five working days.'],
]

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <h1>Film developed slowly and scanned with care.</h1>
        <p>
          Grain &amp; Light is a small darkroom lab for 35mm and 120 film.
          Send your rolls and get back clean negatives and honest scans.
        </p>
        <Link className="btn" to="/prices">Price your rolls</Link>
      </section>

      <div className="strip" aria-hidden="true">
        <div className="reel">
          {[...tones, ...tones].map((bg, i) => (
            <div className="frame" key={i} style={{ background: bg }} />
          ))}
        </div>
      </div>

      <section className="wrap block">
        <h2>How it works</h2>
        <ol className="steps">
          {steps.map(([title, text]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap block">
        <h2>What we develop</h2>
        <div className="cols">
          <p>Colour negative (C-41), black and white, and colour slide film (E-6), in 35mm and 120 formats.</p>
          <p>We do not process motion picture film or expired film with unknown history. Ask us first if you are unsure.</p>
        </div>
      </section>
    </>
  )
}
