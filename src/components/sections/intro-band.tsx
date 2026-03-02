const items = [
  "No crew, just Mike",
  "Free quotes always",
  "Pay when you're happy",
  "Adams County local"
]

export function IntroBand() {
  return (
    <section className="bg-wood-dark py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6">
        {items.map((item, i) => (
          <div 
            key={i}
            className="font-body text-[13px] tracking-[2.5px] uppercase text-accent-green flex items-center gap-3"
          >
            <span className="w-1 h-1 rounded-full bg-accent-green flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
