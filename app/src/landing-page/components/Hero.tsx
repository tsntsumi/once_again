import openSaasBannerWebp from '../../client/static/open-saas-banner.webp';
import { DocsUrl } from '../../shared/common';
import alizzaFace from '../../client/static/alizza-face-12.webp';
import exclusiveBook from '../../client/static/instant-prompt-template.png';

export default function Hero() {
  return (
    <div className='relative pt-18 mt-0 w-full'>
      <TopGradient />
      <BottomGradient />
      <div className='py-0'>
        <div
          className="hero min-h-[60vh] p-0 m-0"
          style={{
            backgroundImage: "url(public-banner.webp)",
          }}>
          <div className="hero-overlay bg-opacity-60 ">
            <div className="mx-auto w-fit text-[0.8rem] text-white py-6">
              高収入でゆとりあるキャリアをやり直す
            </div>
          </div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md mt-8">
              <div className="mx-auto w-fit text-white text-xl">
                <span className="whitespace-nowrap">
                  ブラックからの卒業！</span>
                <span className="whitespace-nowrap">PG キャリア再生への道</span>
              </div>
              <h1 className="mb-5 text-3xl font-bold whitespace-nowrap">
                裏口からのAIプログラマ入門
              </h1>
              <div className="flex flex-wrap sm:flex-nowrap gap-x-2 p-4 rounded-lg bg-gray-700/50">
                <div className="w-1/5 mx-auto order-first sm:order-last">
                  <img
                    src={alizzaFace}
                    alt="Alizza's greeting"
                    width={960}
                    height={1280}
                    className="rounded-full shadow-2xl shadow-lime-100 ring-1 ring-gray-900/10"
                  />
                </div>
                <div className="flex items-center mx-auto text-justify text-sm">
                  <div>
                    <p>
                      ハロー😊コンニチワ。わたしは秘書のアリザだョ
                      <span className="whitespace-nowrap">&lt;3&lt;3&lt;3</span>
                    </p>
                    <p className="mt-2">
                      AI SaaS を作って AI 起業家になったらいいじゃん？
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-nowrap items-center mx-auto ">
                <div className="w-1/2 mx-auto">
                  <a
                    href="/login"
                    className="btn btn-primary bg-gradient-to-b from-amber-100 to-amber-400 text-black my-6">始めよう<span aria-hidden='true'>➚</span>
                  </a>
                </div>
                <div className="w-2/5 mx-auto pt-2">
                  <img
                    src={exclusiveBook}
                    alt="限定特典「真似してはかどる ChatGPT & Gemini インスタント・テンプレ」"
                    width={960}
                    height={1280}
                    className="rounded-lg shadow-2xl shadow-lime-700 p-0 m-0"
                  />
                  <div className="text-xs mt-0 pt-0">[ ↑限定プレゼント ]</div>
                </div>
              </div>
              <div className='mt-2 w-5/6 mx-auto text-base md:text-lg text-justify'>
                もしアナタが、入社４年目で悩んでいることがあるンなら、
                <a href="#Problem" className="text-white underline">続き👇</a>を読みナさい？
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopGradient() {
  return (
    <div
      className='absolute top-0 right-0 -z-10 transform-gpu overflow-hidden w-full blur-3xl sm:top-0'
    aria-hidden='true'
  >
    <div
      className='aspect-[1020/880] w-[55rem] flex-none sm:right-1/4 sm:translate-x-1/2 dark:hidden bg-gradient-to-tr from-lime-400 to-teal-300 opacity-40'
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
      className='relative aspect-[1020/880] sm:-left-3/4 sm:translate-x-1/4 dark:hidden bg-gradient-to-br from-lime-400 to-sky-300  opacity-50 w-[72.1875rem]'
      style={{
        clipPath: 'ellipse(80% 30% at 80% 50%)',
      }}
    />
    </div>
  );
}
