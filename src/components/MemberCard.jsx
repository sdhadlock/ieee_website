export default function MemberCard({ name, role }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <div className="bg-white border border-ieee-border rounded-xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-ieee-glow hover:border-ieee-teal/40">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-ieee-pale/60 border-2 border-ieee-teal/40 flex items-center justify-center text-ieee-teal font-bold text-xl">
        {initials}
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="text-ieee-navy font-semibold text-lg leading-tight">{name}</h3>
        <p className="text-ieee-teal text-sm font-medium mt-1">{role}</p>
      </div>
    </div>
  )
}
