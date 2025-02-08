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
    <div className='relative pt-14 w-full'>
      <TopGradient />
      <BottomGradient />
      <div className="w-5/6 mx-auto">
        <div className='sm:py-8'>
          <h2 className="text-3xl font-bold py-4" id="Response">
            今すぐ AI プログラミングを体験する
          </h2>
          <div className="mx-auto">
            <div className="flex flex-wrap sm:flex-nowrap mx-auto gap-x-2">
              <div className="order-first sm:order-last w-1/5 mx-auto flex items-center">
                <img
                  src={alizzaFace}
                  alt="Alizza's note"
                  width={960}
                  height={1280}
                  className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
                />
              </div>
              <div className="pt-0 w-full mx-auto">
                <p className="pt-2">
                  今すぐ無料の AI プログラミング体験レッスンに応募してください。
                </p>
                <p className="pt-2">
                  受講された方には、以下のようなチャンスが待っています。
                </p>
                <ul className="list-disc my-4 ml-10 ">
                  <li>最新の技術でWebアプリを開発するスキルを獲得し、キャリアアップを実現できる</li>
                  <li>AIエンジニアへの第一歩を踏み出すことができる</li>
                  <li>プログラマーとしてのスキルアップを加速させることができる</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 w-full mx-auto">
          現在、準備中です。
          準備ができ次第、募集を再開します。
        </div>
      </div>
    </div>
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
