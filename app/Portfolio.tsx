import { content, EMAIL, type Lang } from "./content";

export default function Portfolio({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <main lang={lang} className="mx-auto max-w-5xl px-4 sm:px-6">
      {/* Nav */}
      <nav className="sticky top-0 z-10 -mx-4 flex items-center justify-between gap-4 bg-[#0b0d12]/85 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6">
        <a href="#" className="hidden font-mono text-sm text-emerald-400 sm:block">duongtac22.github.io</a>
        <div className="flex flex-1 items-center justify-end gap-4 text-sm text-slate-400 sm:gap-5">
          <a href="#work" className="hover:text-white">{t.nav.work}</a>
          <a href="#experience" className="hover:text-white">{t.nav.experience}</a>
          <a href="#contact" className="hover:text-white">{t.nav.contact}</a>
          <LangSwitch current={lang} />
        </div>
      </nav>

      {/* Hero */}
      <section className="pb-16 pt-16 sm:pt-24">
        <p className="font-mono text-sm text-emerald-400">{t.hero.hello}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {lang === "vi" ? "Trương Anh Dương" : "Truong Anh Duong"}
        </h1>
        <h2 className="mt-3 text-2xl font-semibold text-slate-300 sm:text-3xl">{t.hero.role}</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">{t.hero.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="rounded-lg bg-emerald-500 px-5 py-2.5 font-medium text-black hover:bg-emerald-400">
            {t.hero.seeWork}
          </a>
          <a href={`mailto:${EMAIL}`} className="rounded-lg border border-slate-700 px-5 py-2.5 font-medium text-slate-200 hover:border-slate-500">
            {t.hero.email}
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-20 py-16">
        <SectionTitle n="01" title={t.sections.work} />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {t.projects.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 transition hover:-translate-y-1 hover:border-emerald-500/50"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={`${t.screenshotOf} ${p.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-semibold text-white group-hover:text-emerald-400">{p.name} ↗</h3>
                  <span className="shrink-0 font-mono text-xs text-slate-500">@ {p.company}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs text-emerald-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">{t.alsoDelivered}</p>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-20 py-16">
        <SectionTitle n="02" title={t.sections.experience} />
        <ol className="mt-8 space-y-10 border-l border-slate-800 pl-6">
          {t.experience.map((e) => (
            <li key={e.company} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-emerald-400 bg-[#0b0d12]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {e.role} <span className="text-emerald-400">· {e.company}</span>
                </h3>
                <span className="font-mono text-sm text-slate-500">{e.period}</span>
              </div>
              <ul className="mt-3 space-y-2 text-slate-400">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="text-emerald-500">▹</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className="py-16">
        <SectionTitle n="03" title={t.sections.skills} />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {t.skills.map((s) => (
            <div key={s.group}>
              <h3 className="font-mono text-sm text-slate-500">{s.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="rounded-md border border-slate-800 bg-slate-900/60 px-3 py-1 text-sm text-slate-200">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500">{t.education}</p>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 py-24 text-center">
        <p className="font-mono text-sm text-emerald-400">04. {t.sections.next}</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{t.sections.together}</h2>
        <p className="mx-auto mt-4 max-w-md text-slate-400">{t.contactText}</p>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-8 inline-block rounded-lg bg-emerald-500 px-6 py-3 font-medium text-black hover:bg-emerald-400"
        >
          {EMAIL}
        </a>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center font-mono text-xs text-slate-600">
        © {new Date().getFullYear()} {lang === "vi" ? "Trương Anh Dương" : "Truong Anh Duong"} · {t.footer}
      </footer>
    </main>
  );
}

function LangSwitch({ current }: { current: Lang }) {
  const item = (lang: Lang, href: string, label: string) =>
    current === lang ? (
      <span className="rounded px-2 py-0.5 font-mono text-xs font-semibold text-black bg-emerald-400">{label}</span>
    ) : (
      <a href={href} hrefLang={lang} className="rounded px-2 py-0.5 font-mono text-xs text-slate-300 hover:text-white">
        {label}
      </a>
    );

  return (
    <div className="flex items-center rounded-md border border-slate-700 p-0.5" aria-label="Language">
      {item("en", "/", "EN")}
      {item("vi", "/vi/", "VI")}
    </div>
  );
}

function SectionTitle({ n, title }: { n: string; title: string }) {
  return (
    <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
      <span className="font-mono text-base text-emerald-400">{n}.</span>
      {title}
      <span className="ml-2 h-px flex-1 bg-slate-800" />
    </h2>
  );
}
