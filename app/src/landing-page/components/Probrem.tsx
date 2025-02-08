/** "P" is for PROBLEM
   The ‘P’ in PASTOR stands for “problem”. This is where you define
   the problem that your audience is facing and explain why it needs
   to be solved. It is essential to ensure the problem is relevant and
   relatable to your target audience. This will help hook them into
   your message and make them more likely to take action.

   PASTOR の「P」は「問題」を意味します。ここでは、対象者が直面してい
   る問題を定義し、その問題を解決する必要がある理由を説明します。問題
   が対象者にとって関連性があり、共感できるものであることを確認するこ
   とが重要です。これにより、対象者がメッセージに引き込まれ、行動を起
   こす可能性が高まります。
 */
/* import openSaasBannerWebp from '../../client/static/open-saas-banner.webp';
 * import { DocsUrl } from '../../shared/common'; */
import alizzaFace from '../../client/static/alizza-face-7.webp';

export default function Problem() {
  return (
    <div className='relative pt-8 w-full'>
      <TopGradient />
      <BottomGradient />
      <div className="w-5/6 mx-auto">
        <div className='sm:py-8'>
          <h2 className="text-3xl font-bold py-4" id="Problem">
            <div className="inline-block text-xs w-[5em] mr-2">私たちの調査によると</div>
            ほとんどの入社４年目のプログラマは、こんなことを悩んでいます
          </h2>
          <div className=" mx-auto">
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
              <div className="w-full mx-auto">
                <ul className="list-disc px-4 py-1 flex flex-wrap items-around text-sm md:text-base">
                  <li>
                    新しい技術を学ぶ機会も時間もない、忙しい
                  </li>
                  <li>
                    いつまでブラック労働が続くかわからない、体力が持たない
                  </li>
                  <li>
                    枯れた技術しか使えない、上司に理解がない
                  </li>
                  <li>
                    新技術を学んだところで使う機会がない、入る会社を間違えた
                  </li>
                  <li>
                    このままではキャリアアップできず年収があがらない、老後が怖い
                  </li>
                </ul>
                <ul className="list-['\1F4A1'] px-4 py-1 flex flex-wrap items-around text-sm font-thin">
                  <li>
                    <p>才能があるプログラマほど、スキルアップ、キャリアアップの機会を
                      活かせずに悩んでいます。</p>
                    <p>もしあなたが、スキルアップに停滞感を感じているなら、
                      あなたにはポテンシャルがあります。</p>
                    <p>たとえば、応用情報技術者試験の、2022年度の合格率は 25％、4人に１人程度です。</p>
                    <p>なぜなら優秀なプログラマのところには仕事が集中し、
                      深夜残業や休日出勤で疲弊しているため、
                      試験日に受験できないのが原因だといわれています。</p>
                  </li>
                </ul>
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
