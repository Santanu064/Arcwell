export default function VisualBlock({ tone, label, portrait = false }) {
  return (
    <div className={`visual-block ${tone} ${portrait ? 'portrait-block' : ''}`} aria-label={label} role="img">
      <span />
      <i />
      <b />
    </div>
  )
}
