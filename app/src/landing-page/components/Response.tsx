/** “R” is for RESPONSE
   The letter “R” in the acronym stands for “response”, which refers
   to the call-to-action or response you want the reader to take after
   reading your copy. It could be anything from subscribing to a
   newsletter to buying a product or service. By crafting an effective
   response, you can maximize the effectiveness of your copywriting
   and get more people to take action.

   「R」はレスポンス（応答）を表します

   頭字語の「R」は「レスポンス」を意味し、コピーを読んだ後に読者に取っ
   てもらいたい行動喚起または応答を指します。ニュースレターの購読から
   製品やサービスの購入まで、何でもかまいません。効果的な応答を作成す
   ることで、コピーライティングの効果を最大限に高め、より多くの人々に
   行動を起こさせることができます。
 */
/* import openSaasBannerWebp from '../../client/static/open-saas-banner.webp';
 * import { DocsUrl } from '../../shared/common'; */
import alizzaFace from '../../client/static/alizza-face-8.webp';

export default function Problem() {
  return (
    <section id="Response" className='relative'>
      <TopGradient />
      <BottomGradient />
      <div className="prose max-7xl mx-6 md:mx-auto">
        <h2>
          AI プログラミングでスキルアップ
        </h2>
        <p>
          今すぐ無料の AI プログラミングメール講座に応募してください。
        </p>
        <p>
          受講された方には、以下のようなチャンスが待っています。
        </p>
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-4">
          <div className="order-first sm:order-last w-1/5 mx-auto -mb-4 flex items-center">
            <img
              src={alizzaFace}
              alt="Alizza's note"
              width={960}
              height={1280}
              className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
            />
          </div>
          <div className="ml-4 my-4">
            <ul className="leading-tight">
              <li>最新の技術で Web アプリを開発するスキルを学び、キャリアアップを実現できる</li>
              <li>高収入が期待できる AI エンジニアへの第一歩を踏み出すことができる</li>
              <li>プログラマーとしてのスキルアップを加速させ、キャリアアップに繋げられる</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto">
        </div>
      </div>
      <div className="flex flex-nowrap items-center justify-center">
        <a href="/login"
           className="btn btn-primary bg-gradient-to-b from-amber-100 to-amber-400 text-black">
          今すぐスキルアップ
        </a>
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
