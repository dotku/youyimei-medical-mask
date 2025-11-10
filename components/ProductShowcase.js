export default function ProductShowcase() {
  return (
    <section id="product" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Premium Medical Cold Compress
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            高性价比医用冷敷面膜 • Professional skincare solution trusted by medical professionals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image Placeholder */}
          <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-12 shadow-2xl">
            <div className="aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary-500 to-primary-400 rounded-lg shadow-xl mb-6 flex items-center justify-center">
                  <div className="text-white">
                    <svg className="w-32 h-32 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
                <p className="text-2xl font-bold text-primary-600">YOUYIMEI</p>
                <p className="text-lg text-gray-600">Medical Cold Compress</p>
                <p className="text-sm text-gray-500 mt-2">医用冷敷型</p>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-8">
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                外贸款 • PRO-XYLANE
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Medical Skin Soothing Solution
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Professional-grade cold compress mask designed for deep hydration and skin recovery.
                Trusted by medical professionals and beauty experts.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">清痘淡印</h4>
                  <p className="text-gray-600 text-sm">Acne clearing and lightening • Reduces inflammation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">术后修复</h4>
                  <p className="text-gray-600 text-sm">Postoperative repair • Accelerates healing process</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">过敏救护</h4>
                  <p className="text-gray-600 text-sm">Allergy rescue • Soothes sensitive skin</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">深层补水</h4>
                  <p className="text-gray-600 text-sm">Deep water replenishment • Long-lasting hydration</p>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="mt-8 p-6 bg-primary-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Product Specifications</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Type:</p>
                  <p className="font-semibold text-gray-900">Medical Grade</p>
                </div>
                <div>
                  <p className="text-gray-600">Volume:</p>
                  <p className="font-semibold text-gray-900">30ml/piece</p>
                </div>
                <div>
                  <p className="text-gray-600">Certification:</p>
                  <p className="font-semibold text-gray-900">Medical Device</p>
                </div>
                <div>
                  <p className="text-gray-600">Packaging:</p>
                  <p className="font-semibold text-gray-900">Individual Sealed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
