/** “T” is for TRANSFORMATION and TESTIMONY

   The “T” in PASTOR stands for “Transformation and
   Testimony”. People are not buying the stuff you are selling;
   instead, they have an interest in the transformation they’ll get
   out of it. For example, a home workout DVD is not what a potential
   customer would want; they want a slim figure.

   For that, you have to provide social proof. 

   Testimonials are customer reviews or stories that you can use to
   demonstrate the effectiveness of a product or service. They help
   to create social proof and can be used to persuade potential
   customers to purchase from you. Testimonials can be in the form of
   written reviews, videos, or even audio recordings. Ensure they are
   genuine, honest accounts of customers’ experiences with your
   product or service. When used correctly, testimonials can help
   build trust and credibility with your audience.

   PASTOR の「T」は「変容と証言」の略です。人々はあなたが販売している
   商品を買うのではなく、それによって得られる変容に興味を持っています。

   たとえば、潜在的な顧客が求めているのは自宅でできるトレーニング DVD
   ではなく、スリムな体型です。そのためには、社会的証明を提供する必要
   があります。

   証言とは、製品やサービスの有効性を示すために使用できる顧客のレビュー
   やストーリーです。

   社会的証明を作成するのに役立ち、潜在的な顧客に購入を説得するために
   使用できます。

   証言は、書面によるレビュー、ビデオ、または音声録音の形式にすること
   ができます。製品やサービスに関する顧客の体験を正直に記述したものに
   してください。証言は、正しく使用すれば、オーディエンスとの信頼と信
   用を築くのに役立ちます。
*/

interface Testimonial {
  name: string;
  role: string;
  avatarSrc: string;
  socialUrl: string;
  quote: string;
};

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section id="Tesimonials" className='relative'>
      <div className="prose max-7xl mx-6 md:mx-auto">
        <div id="shadow yellow on lg" className='relative sm:left-5 -m-2 rounded-xl bg-yellow-400/20 lg:ring-1 lg:ring-yellow-500/50 lg:-m-4'>
          <div className='relative sm:top-5 sm:right-5 bg-gray-900 dark:bg-boxdark px-8 py-20 shadow-xl rounded-xl sm:py-4 sm:px-10 md:px-12 lg:px-20'>
            <h2 className="text-white">
              こんな喜びの言葉が届いています
            </h2>
            <p className="text-xs text-gray-600 dark:text-gray-200">個人情報保護のため、一部フェイクが入っています</p>
            <div className='relative flex flex-wrap gap-6 w-full mt-6 z-10 justify-between lg:mx-0'>
              {testimonials.map((testimonial, idx) => (
                <figure key={idx} className='w-full lg:w-1/4 box-content flex flex-col justify-between p-4 rounded-xl bg-gray-500/5 '>
                  <blockquote className='text-base text-white sm:text-md sm:leading-8'>
                    <p>{testimonial.quote}</p>
                  </blockquote>
                  <figcaption className='mt-6 text-sm text-white'>
                    <a href={testimonial.socialUrl} className='flex items-center gap-x-2'>
                      <img src={testimonial.avatarSrc} loading='lazy' className='h-12 w-12 rounded-full' />
                      <div>
                        <div className='text-white font-semibold hover:underline'>{testimonial.name}</div>
                        <div className='text-white mt-1'>{testimonial.role}</div>
                      </div>
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
