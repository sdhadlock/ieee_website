export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page header */}
      <div className="mb-14">
        <h1 className="text-4xl font-bold text-ieee-navy mb-4">About Us</h1>
        <div className="w-12 h-1 bg-ieee-teal rounded" />
      </div>

      {/* Mission block */}
      <section className="mb-14">
        <blockquote className="border-l-4 border-ieee-teal pl-6 py-3 bg-ieee-card rounded-r-lg">
          <p className="text-xl text-ieee-navy italic leading-relaxed">
            "Advancing technology for the benefit of humanity."
          </p>
          <footer className="text-ieee-teal text-sm mt-2 font-medium">— IEEE Mission</footer>
        </blockquote>
      </section>

      {/* What is IEEE */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-ieee-navy mb-4 pl-4 border-l-4 border-ieee-teal">
          What is IEEE?
        </h2>
        <div className="space-y-4 text-gray-500 leading-relaxed">
          <p>
            The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest
            technical professional organization, with over 460,000 members across 160+ countries.
            IEEE drives innovation in electrical engineering, computer science, and adjacent fields
            through publications, conferences, standards, and community programs.
          </p>
          <p>
            From developing the Wi-Fi standard (IEEE 802.11) to shaping the future of AI and
            quantum computing, IEEE has been at the forefront of every major technological advance
            for over a century.
          </p>
        </div>
      </section>

      {/* Cornell Chapter */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-ieee-navy mb-4 pl-4 border-l-4 border-ieee-teal">
          Cornell Student Branch
        </h2>
        <div className="space-y-4 text-gray-500 leading-relaxed">
          <p>
            The Cornell IEEE Student Branch is one of the most active technical organizations on
            campus. We bridge the gap between classroom learning and real-world engineering practice
            by providing academic resources, industry connections, and a community of driven engineers.
          </p>
          <p>
            Our committees span academic support, corporate outreach, social events, and marketing —
            giving every member the chance to contribute in a way that matches their interests and
            strengthens their professional profile.
          </p>
        </div>
      </section>

      {/* Stats row */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { stat: '500+', label: 'Members' },
            { stat: '20+', label: 'Annual Events' },
            { stat: '50+', label: 'Industry Partners' },
          ].map(({ stat, label }) => (
            <div
              key={label}
              className="bg-ieee-card border border-ieee-border rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-ieee-teal">{stat}</p>
              <p className="text-gray-500 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
