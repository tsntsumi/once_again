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
    <section id="Problem" className='relative'>
      <TopGradient />
      <BottomGradient />
      <div className='prose max-7xl mx-6 md:mx-auto'>
        <h2>
          <div className="inline-block text-xs w-[5em] mr-2">私たちの調査によると</div>
          ほとんどの入社４年目のプログラマは、こんなことを悩んでいます
        </h2>
        <div className="flex flex-col items-center justify-between sm:flex-row gap-x-4">
          <div className="order-first sm:order-last w-1/5 -my-6 flex items-center">
            <img
              src={alizzaFace}
              alt="Alizza's note"
              width={960}
              height={1280}
              className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
            />
          </div>
          <div>
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
          </div>
        </div>

        <ul className="list-none px-4 py-2 text-sm rounded-lg bg-gray-700/30">
          <li className="list-['\1F4A1'] indent-1">
            才能があるプログラマほど、スキルアップ、キャリアアップの機会を
            活かせずに悩んでいます。</li>
          <li>優秀なプログラマほど、仕事が集中してしまうからです。
            自分のための時間が作れず、疲弊して、消耗しています。
          </li>
          <li>スキルアップに停滞感を感じているなら、大丈夫。
            あなたには伸びしろがあります。</li>
        </ul>
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
