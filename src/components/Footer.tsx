import { Globe, Mail, Video } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Recipe', href: '/recipe' },
  { label: 'Vlog', href: '/vlog' }
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 text-slate-400 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-400">Stay nourished</p>
          <p className="max-w-md text-lg font-semibold text-white">
            Trusted guidance and mindful recipes crafted by Shallini Goswami.
          </p>
          <p className="text-sm text-slate-500">Email: hello@shalinigoswami.com</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Explore</p>
            <div className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Connect</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <a href="mailto:hello@shalinigoswami.com" className="transition hover:text-white flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@shalinigoswami.com
              </a>
              <a href="https://instagram.com" className="transition hover:text-white flex items-center gap-2">
                <Globe className="h-4 w-4" /> Instagram
              </a>
              <a href="https://youtube.com" className="transition hover:text-white flex items-center gap-2">
                <Video className="h-4 w-4" /> YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        © 2026 Shallini Goswami. Crafted with modern wellness design.
      </div>
    </footer>
  )
}
