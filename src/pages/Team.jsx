import VisualBlock from '../components/VisualBlock'

const members = [
  ['Tomojit Mondal', 'team-b'],
  ['Biswajit Mondal', 'team-c'],
]

export default function Team() {
  return (
    <section className="team-section py-page">
      <div className="container">
        <div className="principal-card">
          <VisualBlock tone="team-a" label="Principal Architect portrait" portrait />
        </div>
        <div className="woner-details">
          <h5 className="home-titleheader">Pranshav Singh</h5>
          <p>Principal Architect @ Archwell Architecture</p>
        </div>

        <h2 className="team-heading">Team Members</h2>
        <div className="team-grid">
          {members.map(([name, tone]) => (
            <article className="project-card hr-role-box team-card" key={name}>
              <VisualBlock tone={tone} label={name} portrait />
              <div className="project-content">
                <h5>{name}</h5>
                <p></p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
