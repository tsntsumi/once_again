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
    <div className='relative pt-14 w-full'>
      <TopGradient />
      <BottomGradient />
      <div className="w-5/6 mx-auto">
        <div className='py-4 sm:py-8'>
          <h2 className="text-3xl font-bold py-4" id="Offer">
            わたしたちの無料講座を、体験してみませんか？
          </h2>
          <div className="mx-auto">
            <div className="flex flex-wrap sm:flex-nowrap justify-between gap-x-2 ">
              <div className="order-first sm:order-last mb-6 sm:mb-0 w-1/2 mx-auto pt-2">
                <img
                  src={exclusiveBook}
                  alt="限定特典「真似してはかどる ChatGPT & Gemini インスタント・テンプレ」"
                  width={960}
                  height={1280}
                  className="rounded-lg shadow-2xl shadow-lime-700 "
                />
              </div>
              <div className="w-full mx-auto">
                <p className="pt-2">
                  この無料メール講座は、自分のペースで学ぶことができます。
                  場所や時間に関わらず学習を進めることができます。
                </p>
                <p className="pt-2">
                  「AI とは何か」などの、まどろっこしい能書きは抜きで、実践的なスキルをすぐに学ぶことができます。
                </p>
                <p className="pt-2">
                  もちろん、わからないところがあったら、メールにて質問してください。
                  追加の講座が必要であれば、リクエストしてください。
                </p>
              </div>
            </div>
            <div className='relative pt-8 w-full'>
              <TopGradient />
              <BottomGradient />
            </div>

            <h3 className="pt-4 pb-2 text-lg font-bold">
              限定特典：真似してはかどる ChatGPT & Gemini インスタント・テンプレ
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
              <div className="w-full mx-auto">
                <p className="pt-2">
                  応募していただいた方には、限定特典として、
                </p>
                <p className="py-4 mx-4">
                  『真似してはかどる ChatGPT & Gemini インスタント・テンプレ』, <span className="text-xs whitespace-nowrap" >堤・Ｈ・アリザ</span>, <span className="text-xs whitespace-nowrap" >堤紀久夫</span><span className="text-xs whitespace-nowrap" > 共著</span>
                </p>
                <p className="pt-2">
                  をプレゼントしています。
                </p>
                <p className="pt-2">
                  友達がChatGPTの使い方を勉強している間に、
                  500以上のプロンプトの事例を真似して結果を出してください。
                </p>
              </div>
            </div>
            <h3 className="pt-4 pb-2 text-lg font-bold">
              お申し込み方法は
            </h3>
            <p className="pt-2">
              講座のお申し込み方法は、以下のボタンを押してメールアドレスを登録するだけです。
              LINE でお友達登録して個人情報を抜かれる心配はありません。
            </p>
            <div className="w-fit mx-auto">
            <a className="btn btn-primary bg-gradient-to-b from-amber-100 to-amber-400 text-black my-6" href="/signup">
              今すぐスキルアップ
            </a>
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
