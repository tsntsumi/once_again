import openSaasBannerWebp from '../../client/static/open-saas-banner.webp';
import { DocsUrl } from '../../shared/common';
import alizzaFace from '../../client/static/alizza-face-12.webp';
import exclusiveBook from '../../client/static/instant-prompt-template.png';

export default function Hero() {
  return (
    <section id="Hero" className='relative'>
      <div
        className="hero prose min-h-[60vh] text-white min-w-[100vw]"
        style={{
          backgroundImage: "url(public-banner.webp)",
        }}>
        <div className="hero-overlay bg-opacity-60 ">
        </div>
        <div className="hero-content text-neutral-content text-center flex-col">
            <div className="text-[0.7rem] sm:text-[1.1rem]">
              高収入でゆとりあるキャリアをもう一度やり直す
            </div>
            <div className="text-white text-[0.9rem] sm:text-[1.6rem] leading-[1.1rem]">
              ブラックからの卒業！ PG キャリア再生への道
            </div>
            <h1 className="text-white">
              裏口からのAIプログラマ入門
            </h1>
            <div className="w-5/6 flex flex-col sm:flex-row items-center justify-center gap-x-4 py-2 px-4 sm:px-6 rounded-lg bg-gray-700/50">
              <div className="w-1/5 order-first sm:order-last m-0">
                <img
                  src={alizzaFace}
                  alt="Alizza's greeting"
                  width={960}
                  height={1280}
                  className="rounded-full shadow-lg sm:shadow-xl my-4 sm:my-6 p-0 shadow-lime-100 ring-1 ring-gray-900/10"
                />
              </div>
              <div>
                <p>
                  ハロー😊コンニチワ。わたしは秘書のアリザだョ
                  <span className="whitespace-nowrap">&lt;3&lt;3&lt;3</span>
                </p>
                <p>
                  AI SaaS 作って AI 起業家になればいいじゃん？
                </p>
              </div>
            </div>
            <div className="w-5/6 flex flex-nowrap items-center justify-around mx-auto ">
              <div className="w-1/2">
                <a href="/login"
                   className="btn btn-primary my-6">
                  始めよう<span aria-hidden='true'>➚</span>
                </a>
              </div>
              <div className="w-1/2">
                <img
                  src={exclusiveBook}
                  alt="限定特典「真似してはかどる ChatGPT & Gemini インスタント・テンプレ」"
                  width={960}
                  height={1280}
                  className="rounded-lg shadow-2xl shadow-lime-700 p-0 m-0"
                />
                <div className="text-xs -mt-6 mb-4 pt-0">[ ↑限定プレゼント ]</div>
              </div>
            </div>
            <div className='mt-0 w-5/6 mx-auto text-base md:text-lg text-justify'>
              もしアナタが、入社４年目で、悩んでることがあるだったら、
              <a href="#Problem" className="text-white underline">続き👇</a>を読みナさい？
            </div>
        </div>
      </div>
    </section>
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
