export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">
              佰氏健康集团
              <span className="block text-sm text-gray-400 font-normal">Baishi Health Group</span>
            </h3>
            <h4 className="text-2xl font-bold mb-4 text-primary-400">
              YOUYIMEI 悠伊美
              <span className="block text-sm text-gray-300 font-normal mt-1">Medical Compress Mask Brand</span>
            </h4>
            <p className="text-gray-400 mb-4">
              Professional medical cold compress mask solutions for B2B partners worldwide.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Medical Cold Compress</li>
              <li>Skincare Solutions</li>
              <li>Professional Grade</li>
              <li>Wholesale Options</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#product" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Product Details
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@youyimei.com</li>
              <li>B2B Inquiries Welcome</li>
              <li>Response within 24 hours</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} 佰氏健康集团 (Baishi Health Group) - YOUYIMEI Brand. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                B2B Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
