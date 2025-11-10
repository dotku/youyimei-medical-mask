export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/images/SaveTik.co_7449682472507428122_1.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#00ada810_1px,transparent_1px),linear-gradient(to_bottom,#00ada810_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              YOUYIMEI
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-primary-600">悠伊美</span>
            </h1>
            <div className="w-32 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm">
            Medical Cold Compress Sheet Mask
          </h2>
          <p className="text-xl sm:text-2xl text-gray-800 font-semibold mb-4 drop-shadow-sm">
            医用冷敷型片状面膜
          </p>

          {/* Tagline */}
          <p className="text-2xl sm:text-3xl font-bold text-primary-700 mb-8 drop-shadow-sm">
            深层护理 重现水光肌
          </p>
          <p className="text-lg sm:text-xl text-gray-700 font-medium mb-12 max-w-3xl mx-auto drop-shadow-sm">
            Soothing and Moisturizing • Professional-Grade Skincare Solution
          </p>

          {/* Trust Badge */}
          <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg mb-12">
            <p className="text-3xl font-bold text-primary-600">真实好评 100%</p>
            <p className="text-sm text-gray-600">Authentic Customer Satisfaction</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-gray-900 hover:bg-black text-white font-extrabold px-10 py-5 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-gray-700 text-lg tracking-wide"
            >
              REQUEST B2B PARTNERSHIP
            </a>
            <a
              href="#features"
              className="bg-white hover:bg-gray-50 text-gray-900 font-extrabold px-10 py-5 rounded-xl shadow-xl border-4 border-gray-900 transition-all duration-300 transform hover:scale-105 text-lg tracking-wide"
            >
              LEARN MORE
            </a>
          </div>

          {/* Key Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-4xl font-bold text-primary-600 mb-2">100%</p>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-4xl font-bold text-primary-600 mb-2">Medical</p>
              <p className="text-gray-600">Grade Quality</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-4xl font-bold text-primary-600 mb-2">B2B</p>
              <p className="text-gray-600">Partnership Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
