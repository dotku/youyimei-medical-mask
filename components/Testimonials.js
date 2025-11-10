export default function Testimonials() {
  const testimonials = [
    {
      name: "Customer Review",
      role: "Verified User",
      content: "So much better! Yeah, skin definitely needs that medication. I'm a customer myself, with a lot of money on my face. It's all experience.",
      rating: 5,
      highlight: "Skin showed significant improvement",
    },
    {
      name: "Grace",
      role: "Regular Customer",
      content: "I've been using the mask daily. Keep doing this for six months and your skin will improve. Everything healthy and stable.",
      rating: 5,
      highlight: "Visible results within months",
    },
    {
      name: "Verified Customer",
      role: "Retail Partner",
      content: "Yes! And the Botox treatment I did in my forehead has lasted double the time because of the way you did it. I'm also using Brimoprost to grow back my eyebrows.",
      rating: 5,
      highlight: "Enhanced treatment results",
    },
    {
      name: "Beauty Clinic Owner",
      role: "Medical Professional",
      content: "Your mask is very useful. The acne lightened a lot after using it. Much better effect than others I bought before.",
      rating: 5,
      highlight: "Professional recommendation",
    },
    {
      name: "Customer Feedback",
      role: "Repeat Buyer",
      content: "Very moisturizing. On the second day, the complexion is much better. The one I bought before had no effect.",
      rating: 5,
      highlight: "Immediate visible improvement",
    },
    {
      name: "Satisfied Customer",
      role: "Long-term User",
      content: "The mask is really good. Whitening, brightening, and hydrating all in one. After using it for half a month, I looked in the mirror again and saw the difference!",
      rating: 5,
      highlight: "Complete skincare solution",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-lg font-bold mb-6">
            真实好评 100% • Authentic Customer Reviews
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from real customers who have experienced the YOUYIMEI difference
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Highlight */}
              <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold inline-block mb-4">
                {testimonial.highlight}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-extrabold mb-3 drop-shadow-lg">100%</p>
              <p className="text-white/95 font-semibold text-base">Positive Reviews</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold mb-3 drop-shadow-lg">10,000+</p>
              <p className="text-white/95 font-semibold text-base">Happy Customers</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold mb-3 drop-shadow-lg">95%</p>
              <p className="text-white/95 font-semibold text-base">Repeat Purchase Rate</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold mb-3 drop-shadow-lg">Medical</p>
              <p className="text-white/95 font-semibold text-base">Grade Certified</p>
            </div>
          </div>
        </div>

        {/* Customer Success Stories */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Real Results from Real People</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-primary-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">Day 1-3</div>
              <p className="text-gray-700">Skin feels more hydrated and soothed. Reduced redness and irritation.</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">Week 1-2</div>
              <p className="text-gray-700">Visible improvement in skin texture. Acne marks begin to fade.</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">Month 1+</div>
              <p className="text-gray-700">Dramatic transformation. Glowing, healthy skin with lasting results.</p>
            </div>
          </div>

          {/* Before/After Visual Gallery */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Transformation Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=300&fit=crop&q=80"
                  alt="Sheet mask product"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
                  <p className="text-white font-bold text-lg drop-shadow-lg">Sheet Mask Treatment</p>
                </div>
              </div>
              <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=300&fit=crop&q=80"
                  alt="Sheet mask application"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
                  <p className="text-white font-bold text-lg drop-shadow-lg">Professional Application</p>
                </div>
              </div>
              <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=300&fit=crop&q=80"
                  alt="Medical grade sheet mask"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
                  <p className="text-white font-bold text-lg drop-shadow-lg">Medical Grade Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
