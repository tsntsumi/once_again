import alizzaFace from '../../client/static/alizza-face-10.webp';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  href?: string;
};

export default function FAQ({ faqs }: { faqs: FAQ[] }) {
  return (
    <section id="FAQ" className="relative">
      <TopGradient />
      <BottomGradient />
      <div className="prose max-7xl mx-6 md:mx-auto">
        <h2 className="text-left">
          <ruby>
            <span className='text-accent'>Frequently</span> Asked Questions
            <rp>(</rp><rt>よくある質問 (FAQ)</rt><rp>)</rp>
          </ruby>
        </h2>
        <div className="flex flex-nowrap items-center justify-center">
          <div className="order-first w-1/5 flex items-center">
            <img
              src={alizzaFace}
              alt="Alizza's note"
              width={960}
              height={1280}
              className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
            />
          </div>
        </div>
        <dl className='space-y-8 divide-y divide-gray-900/10'>
          {faqs.map((faq) => (
            <div key={faq.id} className='lg:grid lg:grid-cols-12 lg:gap-8'>
              <dt className='lg:col-span-5'>
                {faq.question}
              </dt>
              <dd className='lg:col-span-7'>
                <p>{faq.answer.split('。').map((s) => s && <p>{s}。</p>)}</p>
                {faq.href && (
                  <a href={faq.href}>
                    Learn more →
                  </a>
                )}
              </dd>
            </div>
          ))}
        </dl>
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
