import { TEAM } from '../data/site';
import { Horn } from './Ornament';

const initials = (name) => name.split(' ').map((w) => w[0]).join('');

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="wrap team-grid">
        <div className="section-title left">
          <p className="kicker">Ұжым</p>
          <h2>Балаларға жүрегін берген <em>жандар</em></h2>
          <p>
            Педагогтарымыз үнемі біліктілігін арттырып, әдістемелік кеңестерге қатысады.
            Бала бақылаусыз бір минут та қалмайды.
          </p>
        </div>
        <div className="team-cards">
          {TEAM.map((t) => (
            <article key={t.name} className="person">
              <div className="person-avatar">
                <Horn className="person-horn" />
                <span>{initials(t.name)}</span>
              </div>
              <p className="person-role">{t.role}</p>
              <h3>{t.name}</h3>
              <p className="person-note">{t.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
