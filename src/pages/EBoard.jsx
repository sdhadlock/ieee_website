import { sectors } from '../data/eboard'
import SectorSection from '../components/SectorSection'

export default function EBoard() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page header */}
      <div className="mb-14">
        <h1 className="text-4xl font-bold text-white mb-4">Executive Board</h1>
        <div className="w-12 h-1 bg-ieee-blue rounded" />
        <p className="text-gray-400 mt-4 max-w-2xl">
          Meet the dedicated students leading Cornell IEEE's four committees. Each team works
          year-round to create value for our members and the broader engineering community.
        </p>
      </div>

      {/* Jump links */}
      <div className="flex flex-wrap gap-3 mb-16">
        {sectors.map(({ id, title }) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-sm px-4 py-1.5 rounded-full border border-ieee-border text-gray-400 hover:border-ieee-blue hover:text-ieee-blue transition-all duration-200"
          >
            {title}
          </a>
        ))}
      </div>

      {/* Sectors */}
      <div className="space-y-20">
        {sectors.map((sector) => (
          <SectorSection
            key={sector.id}
            id={sector.id}
            title={sector.title}
            description={sector.description}
            members={sector.members}
          />
        ))}
      </div>
    </main>
  )
}
