interface SectionHeadingProps {
  title: string
  description: string
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-400">{title}</p>
      <p className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{description}</p>
    </div>
  )
}
