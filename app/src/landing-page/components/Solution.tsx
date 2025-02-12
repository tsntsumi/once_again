/** “S” is for STORY and SOLUTION
   The “S” in this acronym stands for ‘‘solution’’. This step involves
   providing a solution to the problem you identified in the first
   step. Next, you’ll want to explain the solution and why it’s the
   best option. This is also an excellent opportunity to showcase your
   expertise and establish yourself as an authority. Once you’ve
   provided the solution, you can move on to the next step of the
   formula.

   この頭字語の「S」は「ソリューション」を意味します。このステップでは、
   最初のステップで特定した問題に対するソリューションを提供します。次
   に、ソリューションとそれが最善の選択肢である理由を説明します。これ
   は、専門知識を披露し、権威を確立する絶好の機会でもあります。ソリュー
   ションを提供したら、フォーミュラの次のステップに進むことができます。
 */
/* import openSaasBannerWebp from '../../client/static/open-saas-banner.webp';
 * import { DocsUrl } from '../../shared/common'; */
import alizzaFace from '../../client/static/alizza-face-5.webp';
import learnEasily from '../../client/static/easy-learning.png';
import learnWithFun from '../../client/static/learn-with-fun.png';
import programmingAsCooking from '../../client/static/programing-is-coocking.png';
import waitForYou from '../../client/static/someone-wait-for-you.png';
import wheelChair from '../../client/static/wheelchair.png';

export default function Solution() {
  return (
    <section id="Solution" className='relative'>
      <TopGradient />
      <BottomGradient />
      <div className="prose max-7xl mx-6 md:mx-auto">
        <h2 id="Solution">
          AI プログラミングを学んでスキルアップしよう
        </h2>
        <div className="flex flex-wrap sm:flex-nowrap gap-x-4">
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
            <p>もし、キャリアアップを目指して、スキルアップしたいと思っているならグッドニュースです。</p>
            <p>
              このホームページでは、AI プログラミングが学べる無料メール講座の受講者を募集しています。
            </p>
          </div>
        </div>
        <div className="flex flex-nowrap items-center justify-center my-6">
          <a className="btn btn-primary bg-gradient-to-b from-amber-100 to-amber-400 text-black" href="/signup">
            今すぐスキルアップ
          </a>
        </div>
        <h3 className="">
          でも、AIプログラミングって難しいんでしょう？
        </h3>
        <div className="flex flex-wrap sm:flex-nowrap gap-x-4">
          <div className="horder-first sm:order-last w-1/5 flex items-center mx-auto">
            <img
              src={learnEasily}
              alt="努力なしで学ぶ"
              width={960}
              height={1280}
              className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
            />
          </div>
          <div className="w-full mx-auto">
            <p>
              AIプログラミングは<span className="font-bold">難しそう・・・</span>
              多くのプログラマはそう考えています。
            </p>
            <p>
              たしかに、そうです。深層学習や、機械学習、ニューラルネットワークなどのコアとなる技術や、
              データベース、ビッグデータ、クラウドへのシステム構築などの周辺の技術は、
              習得するまでに時間がかかります。
            </p>
            <h4 className="pt-4 pb-2 text-lg font-bold">
              みんなが敬遠するからこそ、そこにチャンスがあります
            </h4>
            <p>
              もし、それらの難しい AI のコア技術を学ぶことなしに、
              AI システムを作れるとしたらどうでしょう。
              難易度がグッと下がって、敬遠している人たちを出し抜くことができると思いませんか？
            </p>
          </div>
        </div>
        <h4 className="pt-4 pb-2 text-lg font-bold">
          裏口から入門して AI プログラミングを学ぶ
        </h4>
        <p>
          この講座では、難しいとされるAIのコアとなる技術は学びません。
        </p>
        <p>
          すでにある AI システムを呼び出して、
          独自のAIシステムをプログラムする方法を実践的に学びます。
        </p>
        <p>
          「AI をどのように<strong>開発するか</strong>」からではなく、
          「AI をどのように<strong>使うか</strong>」からアプローチします。
        </p>
        <p>
          なぜなら、AI を開発す会社の数よりも、AI を使うユーザーの数のほうが多く、
          需要が伸びるからです。
        </p>
        <div className='relative pt-8 w-full'>
          <TopGradient />
          <BottomGradient />
        </div>
        <div className='relative pt-0 mt-0 w-full'>
          <TopGradient />
          <BottomGradient />
        </div>
        <h3>
          この講座で学べば、就職や案件獲得が有利に！
        </h3>
        <div className="flex flex-wrap sm:flex-nowrap gap-x-4">
          <div className="order-first sm:order-last w-1/5 flex items-center mx-auto">
            <img
              src={learnWithFun}
              alt="楽しく学ぶ"
              width={960}
              height={1280}
              className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
            />
          </div>
          <div className="w-full mx-auto">
            <p>
              この講座で作った AI システムをポートフォリオとして公開すれば、就職や案件獲得に有利に働きます。
            </p>
            <p>
              AI の仕事をしたいと夢を語る人と、すでに行動して AI システムを開発したことのある人、
              どちらの人が即戦力になると思いますか？
            </p>
            <p>
              今は、多くの企業が即戦力を求めています。
              バブルの頃と違って、普通の企業は人材を育てている余裕がありません。
            </p>
          </div>
        </div>
        <div className="flex flex-nowrap items-center justify-center my-6">
          <a href="/signup"
             className="btn btn-primary bg-gradient-to-b from-amber-100 to-amber-400 text-black mb-6"
          >
            今すぐスキルアップ
          </a>
        </div>
        <h3 className="pt-4 pb-2 text-xl font-bold">
          あなたの都合に合わせて学べます
        </h3>
        <p>
          この講座は、３ヶ月n間、１週間に２〜３回、
          10〜15分くらいのスキマ時間で学べるコンテンツで解説していきます。
        </p>
        <p>だから、モチベーションが維持しやすく、最後まで学習を進めることができます。。</p>
        <div className="flex flex-nowrap items-center justify-center">
          <a href="/signup"
             className="btn btn-primary bg-gradient-to-b from-amber-100 to-amber-400 text-black my-6"
          >
            今すぐスキルアップ
          </a>
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
