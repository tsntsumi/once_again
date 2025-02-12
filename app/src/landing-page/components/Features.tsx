import alizzaFaceImage from '../../client/static/alizza-face.webp';

interface Feature {
  name: string;
  description: string;
  icon: string;
  href: string;
};

export default function Features({ features }: { features: Feature[] }) {
  return (
    <section id="Features" className="relative">
      <TopGradient />
      <BottomGradient />
      <div className='prose max-7xl mx-6 md:mx-auto'>
        <h2>
          <ruby>The <span className='text-accent'>Best</span> Features
            <rp>(</rp>
            <rt>イチ<span className='text-accent'>推し</span>コンテンツ</rt>
            <rp>)</rp>
          </ruby>
        </h2>
        <div className="flex flex-nowrap items-center justify-center gap-x-4">
          <div className="order-first w-1/5 flex items-center">
            <img src={alizzaFaceImage}
                 alt="Alizza's notes"
                 width={960}
                 height={1280}
                 loading='lazy'
                 className='rounded-full shadow-2xl ring-1 ring-gray-900/10'
            />
          </div>
          <div className="whitespace-nowrap">
            <p>カコクな労働、イラないナ :-/</p>
            <p>カシコく労働、イイだよネ ;-)</p>
          </div>
        </div>
        <div className='max-w-2xl lg:max-w-4xl'>
          <dl>
            {features.map((feature) => (
              <div  key={feature.name} className='relative pl-12'>
                <dt className='font-semibold text-gray-900 dark:text-white'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center border border-yellow-400 bg-yellow-100/50 dark:bg-boxdark rounded-lg'>
                    <div className='text-2xl'>{feature.icon}</div>
                  </div>
                  <a href={feature.href}>{feature.name}</a>
                </dt>
                <dd className='mt-2 pl-0 text-gray-600 dark:text-white indent-4 leading-[1.2rem]'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
)
}

function TopGradient() {
  return (
    <div
    className='absolute top-0 right-0 -z-10 transform-gpu overflow-hidden w-full blur-3xl sm:top-0'
    aria-hidden='true'
    >
    <div
      className='aspect-[1020/880] w-[55rem] flex-none sm:right-1/4 sm:translate-x-1/2 dark:hidden bg-gradient-to-tr from-teal-400 to-indigo-100 opacity-40'
      style={{
        clipPath: 'polygon(80% 20%, 90% 55%, 50% 100%, 70% 30%, 20% 50%, 50% 0)',
      }}
    />
    </div>
  );
}

function BottomGradient() {
  return (
    <div
    className='absolute inset-x-0 top-[calc(100%-40rem)] sm:top-[calc(100%-65rem)] -z-10 transform-gpu overflow-hidden blur-3xl'
    aria-hidden='true'
    >
    <div
      className='relative aspect-[1020/880] sm:-left-3/4 sm:translate-x-1/4 dark:hidden bg-gradient-to-br from-lime-400 to-teal-200  opacity-50 w-[72.1875rem]'
      style={{
        clipPath: 'ellipse(80% 30% at 80% 50%)',
      }}
    />
    </div>
  );
}
