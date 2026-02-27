import MemberCard from './MemberCard'

export default function SectorSection({ id, title, description, members }) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-ieee-navy pl-4 border-l-4 border-ieee-teal">
          {title}
        </h2>
        {description && (
          <p className="text-gray-500 mt-3 pl-5">{description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <MemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            major={member.major}
            year={member.year}
          />
        ))}
      </div>
    </section>
  )
}
