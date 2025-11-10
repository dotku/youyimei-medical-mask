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
          {/* Product Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-100 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-square bg-white rounded-xl shadow-lg overflow-hidden relative">
                {/* Main Product Image - Using placeholder */}
                <img
                  src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop&q=80"
                  alt="YOUYIMEI Medical Cold Compress Mask"
                  className="w-full h-full object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold shadow-xl border-2 border-yellow-600">
                  ⭐ 外贸款
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                  <p className="text-white text-xl font-bold drop-shadow-lg">YOUYIMEI 悠伊美</p>
                  <p className="text-white text-sm font-medium drop-shadow-md">Medical Cold Compress Mask</p>
                </div>
              </div>

              {/* Small thumbnail gallery */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1556228841-a92c4c05078e?w=200&h=200&fit=crop&q=80"
                    alt="Product packaging"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&h=200&fit=crop&q=80"
                    alt="Product detail"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&h=200&fit=crop&q=80"
                    alt="Product application"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
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
