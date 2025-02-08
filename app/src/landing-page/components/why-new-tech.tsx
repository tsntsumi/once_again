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
import alizzasBanner from '../../client/static/open-saas-banner.webp'
import alizzasAnswer1 from '../../client/static/alizza-face-1.webp';
import alizzasAnswer2 from '../../client/static/alizza-face-4.webp';
import alizzasAnswer3 from '../../client/static/alizza-face-3.webp';
import { DocsUrl } from '../../shared/common';

function TopBg() {
  return (
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
  )
}

function MiddleBg() {
  return (
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
  )
}

function BottomBg() {
  return (
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
  )
}

function Hero() {
  return (
    <div className="relative pt-4 w-full ">
    <TopBg />
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
              プログラマが最新の技術を使いたがるのは、ただの自己満足のわがままですか？
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
                いいえ。最新技術を使うことで、人々を幸せにできるからです。
                <span className="font-mono">&lt;3</span> <span className="text-3xl">👍</span></p>
              <dl className="pl-4">
                <dt className="mt-4 font-bold">新しい技術は、より効率的で、生産性の高い開発ができます。</dt>
                <dd>開発を効率化できて、生産性が高くなり、開発費を安くできます。</dd>
                <dt className="mt-4 font-bold">新しいツールやライブラリは、コードの品質向上やバグの減少に役立ちます。</dt>
	              <dd>バグを減らすことで、システム実行時の改修費・保守費を安くできます。</dd>
                <dt className="mt-4 font-bold">
                  新しい技術によって、今までできなかったことを実現できます。</dt>
                <dd>それによって、より優れたユーザー体験を提供できるようになります。</dd>
              </dl>
            </div>
            <div className="mt-8 ">
              <div className="float-left w-1/3 rounded-xl lg:rounded-2xl m-2 mr-8">
                <img
                  src={alizzasAnswer2}
                  alt="Alizza's Answer"
                  width={960}
                  height={1280}
                  className="rounded-full shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
              <dl>
                <dt className="mt-4 font-bold">
                  新しい技術によって、スケーラブルで柔軟なシステムを構築できます。
                </dt>
                <dd>
                  <ul className="list-disc list-outside pl-12">
	                  <li>スケーラブルなシステムは、システムのユーザー増加など、ビジネスの成長に対応できます。</li>
                    <li>                  
	                    データーが膨大になっても、システムが効率的にデータを処理できます。
                    </li>
                    <li>
	                    ビジネスモデルや、サービス内容が変化した場合でも、システムを柔軟に改修でき、迅速な対応が可能になります。
                    </li>
                    <li>
	                    需要に応じてリソースを動的に調整できるため、無駄なコストを抑えられます。
                    </li>
                    <li>
	                    プログラムを他のシステムに部品として転用することが容易になり、開発コストを削減できます。</li>
                    <li>
	                    システムの一部に、障害が発生した場合でも、他の部分に影響が及ばないように分離することが可能になるので信頼性が向上します。システム全体を停止することなくサービスを継続できるからです。
                    </li>
                    <li>
	                    加えて、システムを迅速に市場に投入できるため、競合他社との差別化をはかることができます。
                    </li>
                    <li>
	                    このように、常に進化し続けるシステムは、エンドユーザーの期待に応え、満足度を高めることができます。
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
            <div>
              <div className="float-right w-1/3 rounded-xl lg:rounded-2xl m-4">
                <img
                  src={alizzasAnswer3}
                  alt="Alizza's Answer"
                  width={960}
                  height={1280}
                  className="rounded-full shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
              <dl>
                <dt className="mt-4 font-bold">
                  もちろん、全てクライアントや、エンドユーザーのためばかりではありません。
                  プログラマ自身にもメリットがあります。
                </dt>
                <dd>
                  新しい技術に対する好奇心を満たせ、キャリアアップにもつながります。
                </dd>
              </dl>
              <p className="my-8">このように、最新技術を使うことで、
                みンなが幸せになれるンです。</p>
            </div>
          </div>
        </div>
        <div className="clear-both">
        </div>
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

export default function WhyNewTechPage() {
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
