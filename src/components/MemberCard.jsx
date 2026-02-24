export default function MemberCard({ name, role, major, year }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <div className="bg-ieee-dark-card border border-ieee-border rounded-xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-ieee-glow hover:border-ieee-blue/50">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-ieee-blue/20 border-2 border-ieee-blue/50 flex items-center justify-center text-ieee-blue font-bold text-xl">
        {initials}
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="text-white font-semibold text-lg leading-tight">{name}</h3>
        <p className="text-ieee-blue text-sm font-medium mt-1">{role}</p>
        <p className="text-gray-400 text-xs mt-2">{major}</p>
        <p className="text-gray-500 text-xs">Class of {year}</p>
      </div>
    </div>
  )
}
