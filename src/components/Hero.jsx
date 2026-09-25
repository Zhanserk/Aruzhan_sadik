import { FACTS, KINDERGARTEN, PHOTOS } from '../data/site';
import { Horn, Shanyrak, Wave } from './Ornament';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Shanyrak className="hero-shanyrak" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="kicker"><Horn className="kicker-horn" /> {KINDERGARTEN.city}</p>
          <h1>
            Мұнда бала <em>күліп</em> келеді, <span className="underline">қуанып</span> қайтады
          </h1>
          <p className="lead">
            «{KINDERGARTEN.short}» — кішкентайларға арналған жайлы әлем. Мейірімді тәрбиешілер,
            жарық бөлмелер және ұлттық тәрбиеге негізделген күн ырғағы.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-clay">Балабақшаға келіп көру</a>
            <a href="#groups" className="btn btn-ghost">Топтармен танысу →</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="arch arch-main">
            <img src={PHOTOS.play} alt="Ойыншықтарға толы ойын бөлмесі" />
          </div>
          <div className="arch arch-small">
            <img src={PHOTOS.yard} alt="Балабақша ауласы" />
          </div>
          <div className="spin-badge" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs>
                <path id="circle" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
              </defs>
              <text>
                <textPath href="#circle">АРУЖАН • ЖЫЛУЛЫҚ • ҚАМҚОРЛЫҚ • ТӘРБИЕ •</textPath>
              </text>
            </svg>
            <span>☀</span>
          </div>
          <div className="hours-chip">
            <b>07:30–18:00</b>
            <span>дүйсенбі — жұма</span>
          </div>
        </div>
      </div>

      <div className="wrap">
        <ul className="facts">
          {FACTS.map((f) => (
            <li key={f.label}><b>{f.big}</b><span>{f.label}</span></li>
          ))}
        </ul>
      </div>
      <Wave className="wave-cream" />
    </section>
  );
}
