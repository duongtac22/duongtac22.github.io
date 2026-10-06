const EMAIL = "duongtac22@gmail.com";

const projects = [
  {
    name: "Bao Tin Manh Hai",
    img: "/projects/5-baotinmanhhai.jpg",
    url: "https://baotinmanhhai.vn/",
    company: "Bizfly",
    desc: "Gold & jewelry retailer site with a live gold price board — first built on WebSockets, then redesigned with Laravel scheduled jobs to fit the client's new requirements.",
    tags: ["Laravel", "WebSockets", "Cron jobs"],
  },
  {
    name: "An Phat PC — Build PC",
    img: "/projects/3-anphat-buildpc.jpg",
    url: "https://www.anphatpc.com.vn/buildpc",
    company: "Glee",
    desc: "\"Build your PC\" configurator: pick each component step by step and see the total price update instantly.",
    tags: ["JavaScript", "UX", "E-commerce"],
  },
  {
    name: "Phuc Anh",
    img: "/projects/4-phucanh.jpg",
    url: "https://www.phucanh.vn/",
    company: "Glee",
    desc: "Large computer retail site. Lazy loading of images and heavy data lifted Google PageSpeed from the 60s into the 80s.",
    tags: ["Performance", "Lazy loading", "HTML/CSS"],
  },
  {
    name: "Hacom",
    img: "/projects/2-hacom.jpg",
    url: "https://hacom.vn/",
    company: "Glee",
    desc: "Hanoi Computer storefront — pixel-perfect build from PSD and PageSpeed optimization to 90+ on desktop.",
    tags: ["Performance", "Responsive", "HTML/CSS"],
  },
  {
    name: "NTTU Admissions",
    img: "/projects/6-nttu-tuyensinh.jpg",
    url: "https://tuyensinh.ntt.edu.vn/",
    company: "Bizfly",
    desc: "Admissions portal for Nguyen Tat Thanh University: program listings, online registration and news.",
    tags: ["Laravel", "Responsive", "Figma to code"],
  },
  {
    name: "Xay To Am — Materials",
    img: "/projects/1-xaytoam.jpg",
    url: "https://xaytoam.vn/vat-lieu/",
    company: "Bizfly",
    desc: "Building-materials catalogue with product categories, quote requests and a mobile-first layout.",
    tags: ["Responsive", "Catalogue", "Figma to code"],
  },
];

const experience = [
  {
    role: "Frontend Developer",
    company: "Bizfly",
    period: "2020 — Present",
    points: [
      "Mentor and review code for a team of 3–4 developers.",
      "Build websites and web apps with ReactJS, Next.js, Vue.js, TypeScript and Laravel from Figma designs.",
      "Python data sync for 300,000+ users from a partner's Excel files and MySQL into Bizfly's dashboard — processing time cut from 1 day to 30 minutes.",
      "Clients include PC1, NTTU, Bao Tin Manh Hai, Mitsu, VRB and Bac A Bank; Zalo Mini Apps with Flutter.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Glee",
    period: "2018 — 2020",
    points: [
      "Raised PageSpeed for Phuc Anh, Hanoi Computer and An Phat from the 60s to the 80s.",
      "Reached 90+ on desktop and 80+ on mobile with lazy-loaded images and data.",
      "Built the \"Build Your PC\" configurator for computer retail sites.",
    ],
  },
  {
    role: "Freelance Magento Theme Developer",
    company: "ThemeForest (Envato)",
    period: "2017 — 2018",
    points: [
      "Created and sold 12 Magento / Magento 2 themes, up to 50 sales per theme.",
      "Built a custom Mega Menu plugin for Magento.",
    ],
  },
];

const skills = [
  { group: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "Zustand", "HTML5 / CSS3"] },
  { group: "Backend", items: ["Laravel", "PHP", "Python", "MySQL", "Magento 2"] },
  { group: "Performance", items: ["PageSpeed", "Core Web Vitals", "Lazy loading"] },
  { group: "Tools", items: ["Git", "Figma", "Photoshop", "VS Code", "Flutter (Zalo Mini App)"] },
];

const stats = [
  { value: "8+", label: "years building for the web" },
  { value: "300k+", label: "users in one data sync" },
  { value: "6x → 8x", label: "PageSpeed on retail sites" },
  { value: "3–4", label: "developers mentored" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6">
      {/* Nav */}
      <nav className="sticky top-0 z-10 -mx-4 flex items-center justify-between bg-[#0b0d12]/85 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6">
        <a href="#" className="font-mono text-sm text-emerald-400">duongtac22.github.io</a>
        <div className="flex gap-5 text-sm text-slate-400">
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pb-16 pt-16 sm:pt-24">
        <p className="font-mono text-sm text-emerald-400">Hello, I&apos;m</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-6xl">Truong Anh Duong</h1>
        <h2 className="mt-3 text-2xl font-semibold text-slate-300 sm:text-3xl">Senior Frontend Developer</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          I build fast, pixel-perfect websites for banks, universities and retailers in Vietnam — with
          React, Next.js, Vue.js and Laravel. Currently at Bizfly in Hanoi, mentoring a small team and
          growing toward a Tech Lead role.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="rounded-lg bg-emerald-500 px-5 py-2.5 font-medium text-black hover:bg-emerald-400">
            See my work
          </a>
          <a href={`mailto:${EMAIL}`} className="rounded-lg border border-slate-700 px-5 py-2.5 font-medium text-slate-200 hover:border-slate-500">
            Email me
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-20 py-16">
        <SectionTitle n="01" title="Selected work" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 transition hover:-translate-y-1 hover:border-emerald-500/50"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={`Screenshot of ${p.name}`}
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
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs text-emerald-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Also delivered for PC1, Mitsu, VRB and Bac A Bank. Client code is private; links go to the live sites.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-20 py-16">
        <SectionTitle n="02" title="Experience" />
        <ol className="mt-8 space-y-10 border-l border-slate-800 pl-6">
          {experience.map((e) => (
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
        <SectionTitle n="03" title="Skills" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {skills.map((s) => (
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
        <p className="mt-8 text-sm text-slate-500">
          Education: IT, Bach Khoa Hanoi College (2014) · Languages: Vietnamese (native), English (TOEIC 650)
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 py-24 text-center">
        <p className="font-mono text-sm text-emerald-400">04. What&apos;s next?</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Let&apos;s work together</h2>
        <p className="mx-auto mt-4 max-w-md text-slate-400">
          Open to Senior Frontend and Tech Lead roles in Hanoi or remote. My inbox is always open.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-8 inline-block rounded-lg bg-emerald-500 px-6 py-3 font-medium text-black hover:bg-emerald-400"
        >
          {EMAIL}
        </a>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center font-mono text-xs text-slate-600">
        © {new Date().getFullYear()} Truong Anh Duong · Built with Next.js &amp; Tailwind CSS
      </footer>
    </main>
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
