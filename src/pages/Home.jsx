import { Link } from 'react-router-dom'
import { sectors } from '../data/eboard'
import { events } from '../data/events'

function isPast(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number)
  const d = new Date(year, month - 1, day)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return d < today
}

const sectorIcons = {
  academic:  '📚',
  social:    '🤝',
  publicity: '📣',
  corporate: '💼',
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-ieee-navy">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-ieee-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-ieee-royal/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 animate-fade-up">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src={`${import.meta.env.BASE_URL}logos/ieee-white-logo.png`}
              alt="IEEE at Cornell"
              className="h-20 sm:h-24"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-ieee-light text-sm font-medium px-4 py-1.5 rounded-full border border-ieee-light/30 bg-ieee-light/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-ieee-light animate-pulse" />
            Cornell Student Branch
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Engineering the{' '}
            <span className="text-ieee-light">future</span>{' '}
            at Cornell
          </h1>

          <p className="text-ieee-pale/70 text-lg sm:text-xl mt-6 max-w-xl mx-auto leading-relaxed">
            A student-led community within Cornell's ECE department — building connections,
            hosting events, and advancing technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              to="/eboard"
              className="px-6 py-3 rounded-lg bg-ieee-teal text-white font-semibold hover:bg-ieee-dark transition-all duration-200"
            >
              Meet the E-Board
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 rounded-lg border border-ieee-pale/30 text-ieee-pale font-semibold hover:border-ieee-light hover:text-white transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-ieee-navy mb-6">
              More than a club.{' '}
              <span className="text-ieee-teal">A community.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Cornell IEEE is a student chapter of the world's largest technical professional
              organization. We host workshops, industry events, and social gatherings that prepare
              engineers for careers at the frontier of technology.
            </p>
            <Link
              to="/about"
              className="text-ieee-teal font-medium hover:underline underline-offset-4"
            >
              Our story →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: '500+', label: 'Members' },
              { stat: '20+', label: 'Annual Events' },
              { stat: '50+', label: 'Industry Partners' },
              { stat: '10+', label: 'Years Active' },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="bg-ieee-card border border-ieee-border rounded-xl p-5 text-center"
              >
                <p className="text-2xl font-bold text-ieee-teal">{stat}</p>
                <p className="text-gray-500 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming events teaser */}
      {events.filter((e) => !isPast(e.date)).length > 0 && (
        <section className="bg-ieee-card border-y border-ieee-border py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-ieee-navy">Upcoming Events</h2>
              <Link to="/events" className="text-ieee-teal text-sm font-medium hover:underline underline-offset-4">
                View all →
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {events.filter((e) => !isPast(e.date)).slice(0, 2).map((e) => {
                const [year, month, day] = e.date.split('-').map(Number)
                return (
                  <Link
                    key={e.id}
                    to="/events"
                    className="bg-white border border-ieee-border rounded-xl px-6 py-4 flex items-center gap-6 hover:border-ieee-teal/50 hover:shadow-ieee-glow transition-all duration-200"
                  >
                    <div className="text-center min-w-[56px]">
                      <p className="text-ieee-teal font-bold text-lg leading-none">
                        {new Date(year, month - 1, day).toLocaleDateString('en-US', { day: 'numeric' })}
                      </p>
                      <p className="text-gray-400 text-xs uppercase tracking-wide">
                        {new Date(year, month - 1, day).toLocaleDateString('en-US', { month: 'short' })}
                      </p>
                    </div>
                    <div className="w-px h-10 bg-ieee-border" />
                    <div className="flex-1 min-w-0">
                      <p className="text-ieee-navy font-semibold truncate">{e.title}</p>
                      <p className="text-gray-400 text-sm">{e.time} · {e.location}</p>
                    </div>
                    {e.tag && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-ieee-pale/50 text-ieee-teal border border-ieee-border hidden sm:block">
                        {e.tag}
                      </span>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Sector cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ieee-navy">Our Committees</h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Four specialized teams working together to serve Cornell's engineering community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.filter(({ id }) => id !== 'leadership').map(({ id, title, description }) => (
            <Link
              key={id}
              to={`/eboard#${id}`}
              className="group bg-white border border-ieee-border rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-ieee-glow hover:border-ieee-teal/40"
            >
              <span className="text-3xl">{sectorIcons[id]}</span>
              <h3 className="text-ieee-navy font-semibold group-hover:text-ieee-teal transition-colors">
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
              <span className="text-ieee-teal text-sm font-medium">Meet the team →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ieee-teal py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get involved?</h2>
          <p className="text-ieee-pale/80 mb-8">
            Join Cornell IEEE and connect with engineers who are shaping the future of technology.
          </p>
          <a
            href="https://cornellieee.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg bg-white text-ieee-teal font-semibold hover:bg-ieee-pale transition-all duration-200"
          >
            Join Cornell IEEE
          </a>
        </div>
      </section>
    </main>
  )
}
