import {
  /* features, */
  /* navigation, */
  faqs,
  /* testimonials, */
  footerNavigation
} from "../contentSections";
/* import Header from "../components/Header"; */
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import alizzasBanner from '../../client/static/open-saas-banner.webp';
import alizzasAnswer1 from '../../client/static/alizza-face-1.webp';
import alizzasAnswer2 from '../../client/static/alizza-face-2.webp';
import { DocsUrl } from '../../shared/common';

function TopBg() {
  return (
    <div>
    <div
    className="absolute inset-x-0 top-[calc(100%-80rem)] sm:top-[calc(100%-130rem)] -z-10 transform-gpu overflow-hidden blur-3xl"
    aria-hidden="true"
    >
    <div
      className="relative aspect-[1020/880] sm:-left-3/4 sm:translate-x-1/4 dark:hidden bg-gradient-to-br from-lime-400 to-purple-300  opacity-50 w-[72.1875rem]"
      style={{
        clipPath: "ellipse(80% 30% at 80% 50%)",
      }}
    />
    </div>
    </div>
  )
}

function MiddleBg() {
  return (
    <div>
    <div
    className="absolute inset-x-0 top-[calc(100%-100rem)] sm:top-[calc(100%-100rem)] -z-10 transform-gpu overflow-hidden blur-3xl"
    aria-hidden="true"
    >
    <div
      className="relative aspect-[1020/880] sm:-left-3/4 sm:translate-x-1/4 dark:hidden bg-gradient-to-br from-green-400 to-purple-300  opacity-50 w-[72.1875rem]"
      style={{
        clipPath: "ellipse(80% 30% at 80% 50%)",
      }}
    />
    </div>
    </div>
  )
}

function BottomBg() {
  return (
    <div>
    <div
    className="absolute inset-x-0 top-[calc(100%-40rem)] sm:top-[calc(100%-65rem)] -z-10 transform-gpu overflow-hidden blur-3xl"
    aria-hidden="true"
    >
    <div
      className="relative aspect-[1020/880] sm:-left-3/4 sm:translate-x-1/4 dark:hidden bg-gradient-to-br from-lime-400 to-purple-300  opacity-50 w-[72.1875rem]"
      style={{
        clipPath: "ellipse(80% 30% at 80% 50%)",
      }}
    />
    </div>
    </div>
  )
}

function Hero() {
  return (
    <div className="relative pt-4 w-full ">
    <MiddleBg />
    <BottomBg />
    <div className="py-4 sm:py-2">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className="lg:mb-18 mx-auto max-w-3xl">
          <div className="text-justify">
            <h1 className="text-3xl text-center mx-auto font-bold text-gray-900 sm:text-4xl dark:text-white">
              <span className="white-space-nowrap">ＦＡＱを</span> <span className="italic text-4xl sm:text-6xl white-space-nowrap">
                <ruby>ワンス<rp>(</rp><rt>再</rt><rp>)</rp></ruby>・<ruby>アゲイン<rp>(</rp><rt>起動</rt><rp>)</rp></ruby></span>
            </h1>
            <h2 className="text-xl font-bold underline mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-600 dark:text-white">
              なぜ、私の上司は、私のやり方を邪魔するのでしょうか？
            </h2>
            <div className="text-justify">
              <div className="float-right w-1/3 rounded-xl lg:rounded-2xl m-2">
                <img
                  src={alizzasAnswer1}
                  alt="Alizza's Answer"
                  width={960}
                  height={1280}
                  className="rounded-full shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
                <span className="font-bold">アリザからの回答：</span>
                それは、あなたが世の中をよい方向に変えてしまうから。
                上司の既得権益がなくなってしまうからです。
                <span className="font-mono">&lt;3</span> <span className="text-3xl">👍</span>
              </p>
              <p className="pt-4">そのような上司たちは、今までの仕事のやり方に順応することで実績を上げてきました。
                だから、抵抗するのです。
                新しいやり方を導入されたら、上司たちが一番能力が低くなってしまいかねません。
              </p>
              <p className="pt-4">たとえ会社の利益を損なうことになっても、
                たとえクライアントに不利益があっても、
                過去の栄光を失いたくないのです。</p>
              <p>だから上司たちは、あなたをはみ出し者、トラブルメーカー、不適格者と呼び、
                あなたを拒絶します。
              </p>
              <p className="pt-4">上司たちは、会社に貢献することで昇進してきました。
                しかし、今や、会社に、社会に貢献しようとする私達の邪魔をしています。</p>
              <p className="pt-4">ある一つの技術や仕事のやり方に順応しすぎると、
                自分ばかりでなく世の中を停滞させてしまいます。</p>
              <p className="pt-4">これは、私達も教訓にしなければなりません。
                Python がいい、NodeJSを学ぶべき、Ruby はオワコンだ。
                そう言って、気に入った言語やフレームワークに特化した技術ばかりを追っていると、
                柔軟性を失い、既得権益にしがみつくようになります。
                知らず知らずのうちに恐竜のように自滅してしまうかもしれません。
              </p>
            </div>
            <div className="flex flex-nowrap gap-4 my-4">
              <div className="w-1/3 rounded-xl lg:rounded-2xl">
                <img
                  src={alizzasAnswer2}
                  alt="Alizza's Answer"
                  width={960}
                  height={1280}
                  className="rounded-full shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
              <div className="w-2/3 flex flex-col items-start justify-around italic">
                <p>上司たちにクレージーなやつだと言われたら、この言葉を思い出してください：</p>
                <blockquote className="p-4 mx-auto font-serif font-thin">
                  <p>理性的な人たちは、世の中に自分を適応させようとする。</p>
                  <p>そうでない人たちは、世の中を自分に合わせようとする。</p>
                  <p>つまり、この世の全ての進歩は、非理性的な人のおかげだ。</p>
                  <p className="text-right mt-4">-- ジョージ・バーナード・ショウ, 劇作家</p>
                </blockquote>
                <p>上司があなたを邪魔をするのは、あなたが世の中を良くしてしまうからです。</p>
                <p>自分を信じて、前に進み続けてください。</p>
              </div>
            </div>
          </div>
        </div>
        <div className="clear-both" />
        <div className="my-14 flow-root sm:mt-14">
          <div className="-m-2 rounded-xl  lg:-m-4 lg:rounded-2xl lg:p-4">
            <img
              src={alizzasBanner}
              alt="Alizza's Photos"
              width={2432}
              height={1442}
              className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default function WhyDoTheyDisturbMePag() {
  return (
    <div className="bg-white dark:text-white dark:bg-boxdark-2">
      <main className="isolate dark:bg-boxdark-2">
        <Hero />
          <FAQ faqs={faqs} />
      </main>

      <Footer footerNavigation={footerNavigation} />
    </div>
  );
}
