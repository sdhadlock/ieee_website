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
  academic: '📚',
  social: '🤝',
  publicity: '📣',
  corporate: '💼',
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ieee-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 text-ieee-blue text-sm font-medium px-4 py-1.5 rounded-full border border-ieee-blue/30 bg-ieee-blue/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-ieee-blue animate-pulse" />
            Cornell Student Branch
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Cornell{' '}
            <span className="text-ieee-blue">IEEE</span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl mt-6 max-w-xl mx-auto leading-relaxed">
            Advancing technology for the benefit of humanity — one engineer at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              to="/eboard"
              className="px-6 py-3 rounded-lg bg-ieee-blue text-white font-semibold hover:bg-ieee-blue/80 transition-all duration-200"
            >
              Meet the E-Board
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 rounded-lg border border-ieee-border text-gray-300 font-semibold hover:border-ieee-blue hover:text-white transition-all duration-200"
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
            <h2 className="text-3xl font-bold text-white mb-6">
              More than a club.{' '}
              <span className="text-ieee-blue">A community.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Cornell IEEE is a student chapter of the world's largest technical professional
              organization. We host workshops, industry events, and social gatherings that prepare
              engineers for careers at the frontier of technology.
            </p>
            <Link
              to="/about"
              className="text-ieee-blue font-medium hover:underline underline-offset-4"
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
                className="bg-ieee-dark-card border border-ieee-border rounded-xl p-5 text-center"
              >
                <p className="text-2xl font-bold text-ieee-blue">{stat}</p>
                <p className="text-gray-400 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming events teaser */}
      {events.filter((e) => !isPast(e.date)).length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
            <Link to="/events" className="text-ieee-blue text-sm font-medium hover:underline underline-offset-4">
              View all →
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {events.filter((e) => !isPast(e.date)).slice(0, 2).map((e) => {
              const [year, month, day] = e.date.split('-').map(Number)
              const dateLabel = new Date(year, month - 1, day).toLocaleDateString('en-US', {
                weekday: 'short', month: 'short', day: 'numeric',
              })
              return (
                <Link
                  key={e.id}
                  to="/events"
                  className="bg-ieee-dark-card border border-ieee-border rounded-xl px-6 py-4 flex items-center gap-6 hover:border-ieee-blue/50 hover:shadow-ieee-glow transition-all duration-200"
                >
                  <div className="text-center min-w-[56px]">
                    <p className="text-ieee-blue font-bold text-lg leading-none">
                      {new Date(year, month - 1, day).toLocaleDateString('en-US', { day: 'numeric' })}
                    </p>
                    <p className="text-gray-500 text-xs uppercase tracking-wide">
                      {new Date(year, month - 1, day).toLocaleDateString('en-US', { month: 'short' })}
                    </p>
                  </div>
                  <div className="w-px h-10 bg-ieee-border" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold truncate">{e.title}</p>
                    <p className="text-gray-400 text-sm">{e.time} · {e.location}</p>
                  </div>
                  {e.tag && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-ieee-blue/10 text-ieee-blue border border-ieee-blue/30 hidden sm:block">
                      {e.tag}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* Sector cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Our Committees</h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto">
            Four specialized teams working together to serve Cornell's engineering community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.filter(({ id }) => id !== 'leadership').map(({ id, title, description }) => (
            <Link
              key={id}
              to={`/eboard#${id}`}
              className="group bg-ieee-dark-card border border-ieee-border rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-ieee-glow hover:border-ieee-blue/50"
            >
              <span className="text-3xl">{sectorIcons[id]}</span>
              <h3 className="text-white font-semibold group-hover:text-ieee-blue transition-colors">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
              <span className="text-ieee-blue text-sm font-medium">Meet the team →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ieee-dark-card border-y border-ieee-border py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get involved?</h2>
          <p className="text-gray-400 mb-8">
            Join Cornell IEEE and connect with engineers who are shaping the future of technology.
          </p>
          <a
            href="https://cornellieee.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg bg-ieee-blue text-white font-semibold hover:bg-ieee-blue/80 transition-all duration-200"
          >
            Join Cornell IEEE
          </a>
        </div>
      </section>
    </main>
  )
}
