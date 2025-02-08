import alizzaFace from '../../client/static/alizza-face-10.webp';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  href?: string;
};

export default function FAQ({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className='mt-32 mx-auto max-w-2xl divide-y divide-gray-900/10 dark:divide-gray-200/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:py-32'>
      <h2 className='text-3xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white'>
        Frequently asked questions (FAQ)
      </h2>
      <div className="flex flex-nowrap justify-between gap-x-2">
        <div className="h-full w-full flex items-center">

        </div>
        <div className="w-1/5">
          <img
            src={alizzaFace}
            alt="Alizza's note"
            width={960}
            height={1280}
            className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
          />
        </div>
      </div>
      <dl className='mt-10 space-y-8 divide-y divide-gray-900/10'>
        {faqs.map((faq) => (
          <div key={faq.id} className='pt-8 lg:grid lg:grid-cols-12 lg:gap-8'>
            <dt className='text-base font-semibold leading-7 text-gray-900 lg:col-span-5 dark:text-white'>
              {faq.question}
            </dt>
            <dd className='flex items-center justify-start gap-2 mt-4 lg:col-span-7 lg:mt-0'>
              <p className='text-base leading-7 text-gray-600 dark:text-white'>{faq.answer}</p>
              {faq.href && (
                <a href={faq.href} className='text-base leading-7 text-yellow-500 hover:text-yellow-600'>
                  Learn more →
                </a>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
