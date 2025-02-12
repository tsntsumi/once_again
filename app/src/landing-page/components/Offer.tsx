/** “O” is for OFFER

   The “O” stands for “offer”, which refers to the solution or product
   that your copy should be promoting. The offer section is where you
   provide the details of the solution that you are offering and
   explain how it can benefit the reader. Ultimately, in the offer
   section, you should provide a compelling argument for why the
   reader should invest in your product.

   「O」は OFFER の略です。
   
   「O」は「オファー」の略で、コピーで宣伝するソリューションまたは製品
   を指します。オファー セクションでは、提供するソリューションの詳細を
   提供し、それが読者にどのようなメリットをもたらすかを説明します。最
   終的に、オファー セクションでは、読者があなたの製品に投資すべき理由
   を説得力を持って説明する必要があります。
 */
/* import openSaasBannerWebp from '../../client/static/open-saas-banner.webp';
 * import { DocsUrl } from '../../shared/common'; */
import alizzaFace from '../../client/static/alizza-face-9.webp';
import exclusiveBook from '../../client/static/instant-prompt-template.png';

export default function Offer() {
  return (
    <section id="Offer" className='relative'>
      <TopGradient />
      <BottomGradient />
      <div className="prose max-7xl mx-6 md:mx-auto">
        <h2>
          わたしたちの無料メール講座を、体験してみませんか？
        </h2>
        <div className="flex flex-col items-center sm:items-start justify-between sm:flex-row gap-x-4">
          <div className="order-first sm:order-last w-1/2">
            <img
              src={exclusiveBook}
              alt="限定特典「真似してはかどる ChatGPT & Gemini インスタント・テンプレ」"
              width={960}
              height={1280}
              className="rounded-lg m-0 p-0 shadow-lg shadow-primary ring-2 -mt-4"
            />
            <div className="text-center -mt-4 mb-4 font-sans text-xs">[受講特典：無料電子書籍]</div>
          </div>
          <div className="w-full mx-auto">
            <p>
              この無料メール講座は、自分のペースで学ぶことができます。
              場所や時間に関わらず学習を進めることができます。
            </p>
            <p>
              「AI とは何か」などの、まどろっこしい能書きは抜きで、実践的なスキルをすぐに学ぶことができます。
            </p>
            <p>
              もちろん、わからないところがあったら、メールにて質問してください。
              追加の講座が必要であれば、リクエストしてください。
            </p>
          </div>
        </div>
        <div className='relative'>
          <TopGradient />
          <BottomGradient />
        </div>
        <h3 className="my-2 pt-4 text-lg font-bold">
          受講特典：「真似してはかどる ChatGPT & Gemini インスタント・テンプレ」電子書籍無料ダウンロード
        </h3>

        <div className="flex flex-wrap sm:flex-nowrap justify-between gap-x-2 ">
          <div className="order-first sm:order-last pt-2 w-1/5 mx-auto flex items-center">
            <img
              src={alizzaFace}
              alt="Alizza's note"
              width={960}
              height={1280}
              className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
            />
          </div>
          <div className="w-full mx-auto text-left">
            <p>
              応募していただいた方には、限定特典として、
            </p>
            <div className="py-4 mx-4 text-xl">
              『真似してはかどる ChatGPT & Gemini インスタント・テンプレ』, 堤・Ｈ・アリザ, 堤紀久夫 共著
            </div>
            <p>
              をプレゼントしています。
            </p>
            <p>
              友達が ChatGPT の使い方を勉強している間に、
              500 以上のプロンプトの事例を真似して結果を出してください。
            </p>
          </div>
        </div>
        <h3>
          お申し込み方法は
        </h3>
        <p>
          講座のお申し込み方法は、以下のボタンを押してメールアドレスを登録するだけです。
          LINE でお友達登録して個人情報を抜かれる心配はありません。
        </p>
        <div className="flex flex-nowrap items-center justify-center mt-6">
          <a className="btn btn-primary bg-gradient-to-b from-amber-100 to-amber-400 text-black" href="/signup">
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
