/** “A” is for AMPLIFY
   The “A” in the formula stands for “amplify”. This is the part of
   the message where you highlight the problem you are addressing and
   the audience feels the intensity of the problem. You can do this
   through vivid language, stories, facts, and statistics that
   emphasize the pain points of the problem and make the audience feel
   unsettled and motivated to seek a solution. When done effectively,
   this stage of the formula will make a powerful emotional impression
   on the audience and move them to take action.

   「A」は「増幅」を意味します。これは、対処する問題を強調し、聴衆に問
   題の深刻さを感じさせるメッセージの部分です。これは、問題の問題点を
   強調し、聴衆に不安を感じさせ、解決策を探す意欲を起こさせるような、
   生き生きとした言葉、物語、事実、統計を通じて行うことができます。効
   果的に実行されれば、PASTORフォーミュラのこの段階は聴衆に強い感情的
   な印象を与え、行動を起こすよう促します。
 */
/* import openSaasBannerWebp from '../../client/static/open-saas-banner.webp';
 * import { DocsUrl } from '../../shared/common'; */
import alizzaFace from '../../client/static/alizza-face-11.webp';

export default function Amplify() {
  return (
    <div className='relative pt-8 w-full'>
      <TopGradient />
      <BottomGradient />
      <div className="w-5/6 mx-auto">
        <div className='sm:py-8'>
          <h2 className="text-3xl font-bold py-4" id="Amplify">
            学ぶ機会を逃してしまうと、差が広がっていくばかり
          </h2>
          <div className="mx-auto">
            <div className="flex flex-wrap sm:flex-nowrap gap-x-2">
              <div className="order-first sm:order-last w-1/5 flex items-center mx-auto">
                <img
                  src={alizzaFace}
                  alt="Alizza's note"
                  width={960}
                  height={1280}
                  className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
                />
              </div>
              <div className="w-full mx-auto">
                <p className="pt-2">
                  常に最新の技術を学んでいなければ、スキルは陳腐化し、他のエンジニアとの差が開いてしまいます。
                </p>
                <p className="pt-2">
                  現在ほど、スキルを磨くことが大切な時代はありません。
                </p>
                <p className="pt-2">
                  どんな大きな企業で働いていても、会社が倒産して失職する可能性はゼロではないからです。
                  2024年には、あの「技術の日産」でさえ、危うく倒産するところでした。
                </p>
                <p className="pt-2">
                  そんなときに、他のエンジニアからスキルで差をつけられていたら、再就職もままなりません。
                </p>
                <p className="pt-2">
                  キャリアアップどころか、<strong className="underline decoration-wavy">
                  キャリアエンド</strong>になってしまいかねません。
                </p>
              </div>
            </div>
          </div>
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
