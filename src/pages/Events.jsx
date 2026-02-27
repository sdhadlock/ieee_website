import { events } from '../data/events'

const tagColors = {
  Social:    'bg-purple-50 text-purple-700 border-purple-200',
  Academic:  'bg-blue-50 text-ieee-dark border-ieee-border',
  Corporate: 'bg-green-50 text-green-700 border-green-200',
  Publicity: 'bg-pink-50 text-pink-700 border-pink-200',
  General:   'bg-ieee-pale/40 text-ieee-teal border-ieee-border',
}

function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function isPast(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number)
  const eventDate = new Date(year, month - 1, day)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return eventDate < today
}

function EventCard({ event, highlight }) {
  const tagClass = tagColors[event.tag] ?? tagColors.General
  return (
    <div
      className={`bg-white border rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-ieee-glow ${
        highlight ? 'border-ieee-teal/50' : 'border-ieee-border'
      }`}
    >
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <h3 className="text-ieee-navy font-bold text-xl">{event.title}</h3>
        <div className="flex items-center gap-2 flex-wrap">
          {highlight && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-ieee-teal text-white">
              Upcoming
            </span>
          )}
          {event.tag && (
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${tagClass}`}>
              {event.tag}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-ieee-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {formatDate(event.date)}
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-ieee-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {event.time}
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-ieee-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {event.location}
        </div>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed">{event.description}</p>
    </div>
  )
}

export default function Events() {
  const upcoming = events.filter((e) => !isPast(e.date))
  const past     = events.filter((e) =>  isPast(e.date))

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-14">
        <h1 className="text-4xl font-bold text-ieee-navy mb-4">Events</h1>
        <div className="w-12 h-1 bg-ieee-teal rounded" />
        <p className="text-gray-500 mt-4">
          Everything happening with Cornell IEEE — workshops, socials, industry nights, and more.
        </p>
      </div>

      {/* Upcoming */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-ieee-navy mb-6 pl-4 border-l-4 border-ieee-teal">
          Upcoming Events
        </h2>
        {upcoming.length > 0 ? (
          <div className="flex flex-col gap-6">
            {upcoming.map((e) => (
              <EventCard key={e.id} event={e} highlight={e.featured} />
            ))}
          </div>
        ) : (
          <div className="bg-ieee-card border border-ieee-border rounded-xl p-8 text-center text-gray-400">
            No upcoming events right now — check back soon!
          </div>
        )}
      </section>

      {/* Past */}
      {past.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-ieee-navy mb-6 pl-4 border-l-4 border-ieee-gray">
            Past Events
          </h2>
          <div className="flex flex-col gap-6 opacity-60">
            {past.map((e) => (
              <EventCard key={e.id} event={e} highlight={false} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
