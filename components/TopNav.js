import Link from 'next/link';

const navLinks = [
  { label: '首页', href: '/' },
  { label: '产品详情', href: '/product' },
  { label: '联系我们', href: '/#contact' },
];

export default function TopNav() {
  return (
    <header className="w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900 tracking-tight">YOUYIMEI</span>
            <span className="text-sm text-primary-600 font-semibold">悠伊美</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black transition-colors"
          >
            联系业务
          </Link>
        </div>
      </div>
    </header>
  );
}
