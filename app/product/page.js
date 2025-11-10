import Link from 'next/link';
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';

const highlights = [
  {
    title: 'Medical-Grade Materials',
    description: 'Sterile cold compress membrane paired with Pro-Xylane essence for rapid skin recovery.',
  },
  {
    title: 'Clinical-Level Hydration',
    description: '30ml essence per sheet delivers deep hydration and reinforces the skin barrier.',
  },
  {
    title: 'Multi-Scenario Relief',
    description: 'Calms acne-prone, sensitive, and post-treatment skin with soothing cooling care.',
  },
];

const specs = [
  { label: 'Product Name', value: 'YOUYIMEI Medical Cold Compress Sheet Mask' },
  { label: 'Certification', value: 'Registered Medical Device (Class I)' },
  { label: 'Essence Volume', value: '30ml / piece' },
  { label: 'Material', value: 'Medical cold compress hydrogel membrane' },
  { label: 'Shelf Life', value: '24 months' },
  { label: 'Packaging', value: 'Individual sterile pouch, 5 pcs / box' },
];

const steps = [
  'Cleanse skin and gently pat dry.',
  'Apply sheet mask and smooth out air bubbles.',
  'Leave on for 15-20 minutes for full absorption.',
  'Remove mask and massage remaining essence into skin.',
];

const detailShots = [
  {
    title: '独立无菌封装',
    description: '采用医用级铝箔材质，阻隔光线与杂质，确保 30ml 精华稳定度。',
    image: '/images/product-detail/O1CN01CQ6reI1OmdMd2iV3H_!!3940151748.png',
  },
  {
    title: '膜布贴合度',
    description: '加厚水凝胶膜布可紧密贴合 180° 面部曲线，术后也能舒适服帖。',
    image: '/images/product-detail/O1CN01GW04pm1OmdNAV44Ne_!!3940151748.png',
  },
  {
    title: '专业护理组合',
    description: '配合院线冷喷/射频等项目使用，帮助门店打造标准化修护 SOP。',
    image: '/images/product-detail/O1CN01Mdjasp1OmdMe1pAar_!!3940151748.png',
  },
];

const userStories = [
  {
    title: '用户产品分享片段',
    platform: '用户分享 · UGC 小视频',
    description: '简单展示产品包装与质感的短视频，来源于真实用户的分享。',
    stats: 'UGC 分享 · 产品展示',
    videoSrc: '/video/customer-product-review.mp4',
    poster: '/images/customer-review/O1CN01Audv1z1kJFMzBxLSf_!!938464662.jpg_.avif',
  },
];

const relatedProducts = [
  {
    name: 'PRO-XYLANE 医用冷敷贴 (加厚款)',
    tag: '新品',
    description: '更高吸液量设计，适合光电术后与大面积晒后修护。',
    image: '/images/SaveTik.co_7449682472507428122_1.jpeg',
  },
  {
    name: '蓝铜胜肽医用精华液',
    tag: '热销',
    description: '可与冷敷贴搭配售卖，主打屏障修护与紧致弹性。',
    image: '/images/SaveTik.co_7449682472507428122_2.jpeg',
  },
  {
    name: '医用冷敷眼膜',
    tag: '新客专供',
    description: '针对眼周干敏与术后微肿，15 分钟快速舒缓。',
    image: '/images/SaveTik.co_7449682472507428122_3.jpeg',
  },
  {
    name: '医美院线舒缓面膜礼盒',
    tag: '限定',
    description: '门店节日礼包配置，含 10 片冷敷贴与护理教程。',
    image: '/images/SaveTik.co_7449682472507428122_4.jpeg',
  },
];

export default function ProductDetailPage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-gray-50 pb-20">
        <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary-600 font-semibold uppercase text-sm tracking-widest mb-4">
              Product Detail
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              YOUYIMEI Medical Cold Compress Sheet Mask
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Designed for professional clinics and beauty institutions, the YOUYIMEI mask delivers immediate soothing,
              cooling, and repairing benefits after dermatological treatments, laser procedures, or daily sensitive-skin
              flare ups.
            </p>
            <div className="grid gap-6">
              {highlights.map(({ title, description }) => (
                <div key={title} className="p-5 bg-white rounded-2xl shadow-sm border border-primary-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-600 text-white font-semibold transition hover:bg-primary-700"
              >
                Contact Sales
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-primary-200 text-primary-700 font-semibold hover:border-primary-400"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-primary-100 overflow-hidden">
            <div className="aspect-[4/5] relative">
              <img
                src="/images/O1CN01HpJ6l71yV47CeP7mL_!!1815456583.jpg_.avif"
                alt="YOUYIMEI medical mask packaging"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-6 right-6 bg-white/90 text-primary-700 text-sm font-bold px-4 py-2 rounded-full shadow">
                Medical Device Certified
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 p-4 bg-gray-50">
              {['O1CN01dBcSQ42JF8OE9Qthm_!!0-item_pic.jpg_.avif', '226209f211906870.jpg', '8fad62bd53f8ab83.jpg'].map(
                (image) => (
                  <div key={image} className="aspect-square rounded-xl overflow-hidden bg-white shadow">
                    <img src={`/images/${image}`} alt="YOUYIMEI product detail" className="w-full h-full object-cover" />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-primary-600 font-semibold uppercase text-sm tracking-widest">Product Detail Shots</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">更多产品细节图</h2>
          <p className="text-gray-600 mt-3">
            新增高清素材，可用于线上商城、招商手册、以及门店培训课件，支持无版权限制使用。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {detailShots.map(({ title, description, image }) => (
            <article key={title} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
              <div className="relative">
                <img src={image} alt={title} className="w-full h-56 object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600 mt-3 flex-1">{description}</p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 mt-6"
                >
                  联系我们了解更多
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {specs.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-sm text-gray-500">{label}</dt>
                <dd className="text-lg font-semibold text-gray-900">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Usage</h2>
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white font-semibold">
                  {index + 1}
                </span>
                <p className="text-gray-700 text-base leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 p-4 rounded-2xl bg-primary-50 text-primary-800 text-sm sm:text-base">
            Suitable for use after medical aesthetic treatments, daily calming routines, or as a retail SKU for beauty
            salons seeking professional-level aftercare solutions.
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-primary-600 font-semibold uppercase text-sm tracking-widest">用户真实分享</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">内容种草与术后反馈视频</h2>
          <p className="text-gray-600 mt-3">
            这里展示的是用户自发录制的短视频分享，突出真实使用感受，而非官方医疗案例。
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-10">
          {userStories.map(({ title, platform, description, stats, videoSrc, poster }) => (
            <article
              key={title}
              className="bg-gray-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-gray-800"
            >
              <div className="relative aspect-video bg-black">
                <video
                  controls
                  playsInline
                  poster={poster}
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src={videoSrc} type="video/mp4" />
                  您的浏览器暂不支持视频播放。
                </video>
                <div className="absolute top-4 left-4 bg-gray-900/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  {platform}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="text-gray-300 mt-2">{description}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-sm text-primary-100 font-semibold uppercase tracking-widest">{stats}</span>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center text-sm font-semibold text-white/90 hover:text-white transition"
                  >
                    联系我们了解更多
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-primary-600 font-semibold uppercase text-sm tracking-widest">新品矩阵</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">搭配销售的相关产品</h2>
          <p className="text-gray-600 mt-3">
            支持 OEM / 私标定制，门店打包铺货可获得陈列物料、UGC 素材及培训方案。
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {relatedProducts.map(({ name, tag, description, image }) => (
            <article key={name} className="bg-white border border-gray-100 rounded-3xl shadow-lg overflow-hidden flex flex-col">
              <div className="relative">
                <img src={image} alt={name} className="w-full h-56 object-cover" />
                <span className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                <p className="text-gray-600 mt-3 flex-1">{description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary-700">支持小批量试单</span>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition"
                  >
                    联系我们了解更多
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
