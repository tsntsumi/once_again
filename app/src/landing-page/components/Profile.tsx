/** Profile
 */
import alizzaFace from '../../client/static/alizza-face-7.webp';
import kikuoProfile from '../../client/static/profile.png';
import learnWithFun from '../../client/static/learn-with-fun.png';
import giantsshoulder from '../../client/static/giants-shoulder.png';
import idolota from '../../client/static/idol-ota.png'
import lazypg from '../../client/static/lazy-pg.png'
import brainai from '../../client/static/brain-ai.jpg'
import waitingforyou from '../../client/static/waiting-for-you.png'
import journey from '../../client/static/journey.png'
import mashup from '../../client/static/mashup.png'
import alizzasurfing from '../../client/static/surfing-alizza-4.jpg'

export default function Profile() {
  return (
    <section id="Profile" className='relative'>
      <TopGradient />
      <BottomGradient />
      <div className="prose max-7xl mx-6 md:mx-auto">
        <h2>
          講師プロフィール
        </h2>
        <h3>
          プログラミングと AI に明け暮れ、AI プログラマとして就職
        </h3>
        <div className="flex flex-wrap sm:flex-nowrap gap-x-4">
          <div className="order-first sm:order-last w-1/5 flex items-center mx-auto">
            <img
              src={kikuoProfile}
              alt="Kikuo のプロフィール写真"
              width={960}
              height={1280}
              className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
            />
          </div>
          <div className="w-full mx-auto">
            <p>
              講師の
              <ruby>堤<rp>(</rp><rt>つつみ</rt><rp>)</rp></ruby>
              <ruby>紀久夫<rp>(</rp><rt>きくお</rt><rp>)</rp></ruby>
              は、Windows 95 が発売される７年前に、
              AIシステムのプログラマとして就職します。
            </p>
            <p>
              入社してから、横浜の某製作所の研究所へ２年間派遣で出向し、
              AIシステムを開発することになります。
            </p>
            <p>
              実は、同期入社の同僚も AI 派遣を希望していました。
              わたしよりも優秀な男でした。
              しかし、わたしは大学で AI 研究していたというだけで選ばれました。
            </p>
            <p>
              いつの時代でも、経験は宝物です。免許証なんかでは表せない信頼感があります。
            </p>
          </div>
        </div>
        <h3>最初の試練</h3>
        <p>
          しかし、派遣が終わり地方都市にある本社に帰任したときに転機が訪れます。
          何につけマウントを取りたがる同僚や、パワハラをしてくる上司に悩まされることになるのです。
        </p>
        <p>
          それらのことから、独立・起業を夢見るようになります。
          ですが、決断がつかずに、我慢して働き続けてしまいます。
        </p>
        <p>それが、人生を大きく狂わせるとも知らずに。</p>
        <h3>
          うつ病で、人生をあきらめる
        </h3>
        <div className="flex flex-wrap sm:flex-nowrap gap-x-4">
          <div className="order-first sm:order-last w-1/5 flex items-center mx-auto">
            <img
              src={lazypg}
              alt="うつ病で人生を諦める"
              width={960}
              height={1280}
              className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
            />
          </div>
          <div className="w-full mx-auto">
            <p>
              我慢して働き続けるうちに、うつ病になってしまいます。
              そして、とうとう会社の産業医から、会社に通いながらの治療は無理と告げられるのです。
            </p>
            <p>
              結局、実家の近所にある精神病院で、作業療法に参加しながら治療をしていくことになります。
              それが、１０年も続くことになるとは・・・この頃にはもう完治は無理だと諦めてしまいます。
            </p>
          </div>
        </div>
        <h3>
          うつ病が、人生を終わらせる
        </h3>
        <div className="flex flex-wrap sm:flex-nowrap gap-x-4">
          <div className="order-first sm:order-last w-1/5 flex items-center mx-auto">
            <img
              src={idolota}
              alt="人生を終わらせたプログラマ"
              width={960}
              height={1280}
              className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
            />
          </div>
          <div className="w-full mx-auto">
            <p>
              ところがある時、新人の頃からの知り合いのＭ君の訃報を知ります。
              彼とは、派遣された研究所で一緒に AI システムを開発した仲です。
            </p>
            <p>
              彼は、会社の独身寮でビニール袋をかぶって自殺したのです。
              彼は自ら人生を終わらせました。
            </p>
            <p>
              わたしは、両親がなくなったとき以上のショックを受けます。
            </p>
            <p>
              実は、訃報を聞く半年前に、偶然出会って立ち話をしていたのです。
            </p>
          </div>
        </div>
        <p>
          関東地方から島根県まで、アイドルの追っかけに行ったこと。
          その際に財布を落としたこと。
          警察から見つかったと連絡があったこと。
          財布の中身より、取りに行く交通費のほうが高くて悩んでいること。
          そんなことを２〜３分くらい楽しそうに話していました。
        </p>
        <p>
          彼は本当に自分で人生を終わりにしたかったのでしょうか？
        </p>
        <p>
          それを考えた時、わたしにはまだまだやりたいこと、
          やれることがあると気づきます。
        </p>
        <p>
          そして、プログラマとしての復帰を決意するのです。
        </p>
        <h3>
          初心に返り、AIを学び直す
        </h3>
        <div className="flex flex-wrap sm:flex-nowrap gap-x-4">
          <div className="order-first sm:order-last w-1/5 flex items-center mx-auto">
            <img
              src={brainai}
              alt="人工知能を学び直す"
              width={960}
              height={1280}
              className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
            />
          </div>
          <div className="w-full mx-auto">
            <p>
              復帰を決意するに当たり、学生時代にプログラマを目指すきっかけとなった、
              AIを勉強し直すことにします。
            </p>
            <p>
              これには苦労しました。
            </p>
            <p>
              わたしが学んでいた頃の AI は、哲学と心理学の領域なのです。
              ある意味、文系の考え方をします。
            </p>
            <p>
              ところが、現在の AI は、脳の神経細胞のネットワークをシミュレートします。
              数値計算で行うため、それはもう理系の数学の領域です。
            </p>
          </div>
        </div>
        <p>
          しかも、その頃のわたしは、文系脳になっていました。
          うつ病の悩みや迷いや苦しみからの救いを、哲学や心理学に求めていたからです。
        </p>
        <p>
          そのため、最新の AI への理解がなかなかできません。
        </p>
        <h3>
          AI を学ぶのに、AIを学ばない邪道な方法
        </h3>
        <div className="flex flex-wrap sm:flex-nowrap gap-x-4">
          <div className="order-first sm:order-last w-1/5 flex items-center mx-auto">
            <img
              src={giantsshoulder}
              alt="巨人の肩に乗る"
              width={960}
              height={1280}
              className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
            />
          </div>
          <div className="w-full mx-auto">
            <p>
              わたしは視点を変えることにします。
              ニュートンのいう「巨人の肩の上に」立って、遠くを見る方です。
            </p>
            <p>
              すでに完成されている AI システムを、自分のプログラムから操作したり、
              組み合わせたりして、独自の AI システムを作成することを思いつきます。
              マッシュアップという、５〜10 年くらい前に流行した手法です。
            </p>
            <p>
              幸いなことに、少なくないAIシステムが、別のプログラムから操作するための API を公開しています。
              これなら、深層学習などの知識がなくても、AIシステムを作ることができます。
            </p>
          </div>
        </div>
        <h3>
          邪道かもしれないけど、わたしには近道
        </h3>
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-4">
          <div className="order-first sm:order-last w-1/5 flex items-center mx-auto">
            <img
              src={alizzasurfing}
              alt="波に運ばれる"
              width={960}
              height={1280}
              className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
            />
          </div>
          <div className="w-full mx-auto">
            <p>
              深層学習や機械学習といったコアから AI システムを開発するのが目的の人からすると
              <span className="font-black">邪道</span>かもしれません。
            </p>
            <p>しかし、わたしはうつ病のこともあって、当時はすでに、体力も気力もありません。
              最新の研究では、うつ病になると脳の神経細胞が物理的にダメージを受けるそうです。
              うつ病は、精神的な病ではなく、怪我をしているのと同じで無理は禁物です。
            </p>
            <p>
              それに、ユーザーの生活を便利にするのが目的であれば
              邪道な方法を取るのは、ある意味 <span className="font-black">近道</span>といえます。
            </p>
            <p>
              わたしは、重い荷物を背負いながら長く険しい山道を登っていくのではなく、
              波にのって楽々目的地に運ばれていく近道を選んだのです。
            </p>
          </div>
        </div>
        <h3>
          勇者ヒンメルならそうした
        </h3>
        <div className="flex flex-wrap sm:flex-nowrap gap-x-4">
          <div className="order-first w-1/5 flex items-center mx-auto ">
            <img
              src={journey}
              alt="楽しい旅がしたいんだ"
              width={960}
              height={1280}
              className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
            />
          </div>
          <div className="w-full mx-auto">
            <blockquote className="px-8 py-2 italic w-fit">
              <p>アイゼンは、辛く苦しい旅がしたいのかい？</p>
              <p>ぼくはね、終わった後にくだらなかったって笑い飛ばせるような、
                楽しい旅がしたいんだ。</p>
              <p className="text-right">-- 勇者ヒンメル（葬送のフリーレン　第６話）</p>
            </blockquote>
          </div>
        </div>
        <p>
          楽々と AI プログラミングを学んで、
          プログラマとしてのキャリア再生の道を楽しく旅していきましょう。
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
