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

export default function Solutin() {
  return (
    <div className='relative pt-8 w-full'>
      <TopGradient />
      <BottomGradient />
      <div className="w-5/6 mx-auto">
        <div className='sm:py-4'>
          <h2 className="text-3xl font-bold py-4" id="Solution">
            AI プログラミングを学んでみませんか？
          </h2>
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
                このホームページでは、AI プログラミングが学べる無料メール講座の受講者を募集しています。
              </p>
              <p className="pt-2">
                今 AI を取り巻く状況は、1999年の ADSL によるインターネットブーム、
                2017年の第２次ビットコインブームに似ています。
              </p>
              <p className="pt-2">
                ブームというと一過性の一発屋のようにきこえます。
                ですがインターネットは、ブームが過ぎ去った後には、社会インフラになりました。
                AI も同じ道をたどることは明白です。
              </p>
              <p className="pt-2">
                10 年前に約４万円で購入したビットコインは、
                2024 年には 1,000 万円と250倍に値上がりしています。
              </p>
              <p className="pt-2">
                インターネットやビットコインと同様に、今から AI プログラミングを学んで
                技術投資しておけば、大きなリターンが得られます。
              </p>
              <h3 className="pt-4 pb-2 text-xl font-bold">
                簡単に、気軽に学べます
              </h3>
              <p className="pt-2">
                メール講座なので、自分のペースでスキマ時間に学べて簡単です。
                無料なので、気軽に始められます。
                スキルアップをしながら、同時にキャリアアップ（経験値アップ）もできてしまいます。
              </p>
            </div>
          </div>
          <h3 className="pt-4 pb-2 text-xl font-bold">
            でも、AIプログラミングって難しいんでしょう？
          </h3>
          <div className="float-right w-1/5 pl-4 pt-4">
            <img
              src={learnEasily}
              alt="努力なしで学ぶ"
              width={960}
              height={1280}
              className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
            />
          </div>
          <p className="pt-2">
            AIプログラミングは<span className="font-bold">難しそう・・・</span>
            多くのプログラマはそう考えています。
          </p>
          <p className="pt-2">
            たしかに、そうです。深層学習や、機械学習、ニューラルネットなどのコア技術は、
            理解するのが難しくて習得するまでに時間がかかります。
          </p>
          <h4 className="pt-4 pb-2 text-lg font-bold">
            みんなが敬遠するからこそ、そこにチャンスがあります
          </h4>
          <p className="pt-2">
            もし、それらの難しい AI のコア技術を学ぶことなしに、
            AIシステムを作れたとしたらどうでしょう。
            難易度がグッと下がって、敬遠している人たちを出し抜くことができると思いませんか？
          </p>
          <h4 className="pt-4 pb-2 text-lg font-bold">
            まるで、裏口から入門して AI を学ぶようなイメージ
          </h4>
          <p className="pt-2">
            難しいとされるAIのコア技術は学びません。
          </p>
          <p className="pt-2">
            すでに完成しているAIシステムを、自分のプログラムから呼び出して、
            独自のAIシステムを新しく構築する方法を学びます。
          </p>
          <h4 className="pt-4 pb-2 text-lg font-bold">
            料理にたとえてみましょう
          </h4>
          <p className="pt-2">
            卵料理を作るとき、卵を用意するのに、
            ひよこを育てるところからはじめて卵を産ませようなんてしませんよね。
            お店で卵のパックを買ってくるのが普通です。
          </p>
          <p className="pt-2">
            それでも、<ruby>美味しい卵料理<rp>(</rp><rt>AI システム</rt><rp>)</rp></ruby>を作るには、
            <ruby>卵の調理方法<rp>(</rp><rt>プログラミング</rt><rp>)</rp></ruby>を
            十分に理解していなければなりません。
            あなたなら、どうやって理解しますか？
          </p>
          <p className="pt-2">
            実際に作ってみるのに勝る方法はありませんよね。
          </p>
          <p className="pt-2">
            それと同じです。この講座でAIシステムを利用する方法を学べば、
            AIシステムを理解することができます。
          </p>
          <div className='relative pt-8 w-full'>
            <TopGradient />
            <BottomGradient />
          </div>
          <div className='relative pt-0 mt-0 w-full'>
            <TopGradient />
            <BottomGradient />
          </div>
          <h3 className="pt-4 pb-2 text-xl font-bold">
            この講座を受講すれば、就職や案件獲得が有利になる
          </h3>
          <div className="float-right w-1/5 pl-2 pt-4">
            <img
              src={learnWithFun}
              alt="楽しく学ぶ"
              width={960}
              height={1280}
              className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
            />
          </div>
          <p className="pt-2">
            この講座で作った AI システムをポートフォリオとして公開すれば、就職や案件獲得に有利に働きます。
          </p>
          <p className="pt-2">
            今は、多くの企業が経験者を優遇しているからです。
            50年前とは違って、普通の企業は人材を育てている余裕がありません。
            即戦力が求められています。
          </p>
          <h3 className="pt-4 pb-2 text-xl font-bold">
            この講座は、あなたの都合に合わせて学べる
          </h3>
          <p className="pt-2">
            この講座は、３ヶ月間、１週間に２〜３回、
            10〜15分くらいのスキマ時間で学べるコンテンツで解説していきます。
          </p>
          <h3 className="pt-4 pb-2 text-xl font-bold">
            この講座の講師について
          </h3>
          <p className="pt-2">
            講師は、最近まで現場でシステムを開発してきた経験豊富なフルスタックのプログラマです。
            AIシステムの黎明期から約 35 年間、開発に携わってきました。
            開発したのは、エキスパートシステム、ファジィシステム、ニューロシステムなどです。
          </p>
          <p className="pt-2">
            仕事を通じて部下を育ててきた経験もあります。
          </p>
          <p className="pt-2">
            講師の<a href="#Profile" className="text-blue-800 underline">プロフィール</a>
            にもある通り、自分自身がウツを経験したこともあります。
            その経験に基づいて、モチベーションコントロールの相談も受け付けています。
          </p>
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
