/** Profile
 */
import alizzaFace from '../../client/static/alizza-face-7.webp';
import kikuoProfile from '../../client/static/profile.png';

export default function Profile() {
  return (
    <div className='relative pt-8 w-full'>
      <TopGradient />
      <BottomGradient />
      <div className="w-5/6 mx-auto">
        <div className='sm:py-8'>
          <h2 className="text-3xl font-bold py-4" id="Profile">
            講師プロフィール
          </h2>
          <div className=" mx-auto">
            <div className="flex flex-wrap sm:flex-nowrap mx-auto gap-x-2">
              <div className="order-first sm:order-last w-1/5 mx-auto my-4 flex items-center">
                <img
                  src={kikuoProfile}
                  alt="Kikuo's Profile"
                  width={960}
                  height={1280}
                  className="rounded-full shadow-2xl shadow-lime-700 ring-1 ring-gray-900/10"
                />
              </div>
              <div className="w-full sm:w-4/5 mx-auto text-sm">
                <h3 className="text-xl font-medium mt-4">
                  学生時代、プログラミングと AI に熱中し、AI プログラマとして就職
                </h3>
                <p className="pt-2">
                  講師の堤紀久夫は、Windows 95 が発売される７年前に、
                  AIシステムを開発する AI プログラマとして就職します。
                </p>
                <p className="pt-2">
                  入社してから、横浜の某製作所の研究所へ２年間派遣に出され、
                  AIシステムを開発することになります。
                </p>
                <p className="pt-2">
                  実は、同地入社の同僚も AI 派遣を希望していました。
                  しかし、大学で AI 研究していた経験があるというだけで、わたしだけが選ばれました。
                </p>
                <p className="pt-2">
                  やはり、いつの時代でも経験がモノを言います。
                </p>
                <p className="pt-2">
                  しかし、派遣が終わり地方都市にある本社に帰任すると、
                  何につけマウントを取りたがる同僚や、パワハラをしてくる上司に悩まされることになります。
                </p>
                <p className="pt-2">
                  それらのことから、独立・起業を夢見るようになります。
                  ですが、決断がつかずに、我慢して働き続けてしまいます。
                </p>
              </div>
            </div>
            <div className="w-full mx-auto text-sm">                
              <h3 className="text-xl font-medium mt-4">
                うつ病になり、人生をあきらめかける
              </h3>
              <p className="pt-2">
                我慢して働き続けるうちに、うつ病になってしまいます。
                そして、とうとう会社の産業医から、会社に通いながらの治療は無理と告げられるのです。
              </p>
              <p className="pt-2">
                結局、実家の近所にある精神病院で、作業療法をしながら治療が始まります。
                ですが、この頃にはもう完治することを諦めてしまいます。
              </p>
              <p className="pt-2">
                あんなに好きで、天職と思っていたプログラミングに興味が持てないのです。
              </p>
              <h3 className="text-xl font-medium mt-4">
                うつ病が、人生を終わらせる
              </h3>
              <p className="pt-2">
                ところがある時、新人の頃からの知り合いのＭ君の訃報を聞きます。
                新人のときに派遣された研究所からの知り合いです。
              </p>
              <p className="pt-2">
                彼は、会社の独身寮でビニール袋をかぶって自殺したのです。
                彼は自ら自分の人生を終わらせました。
              </p>
              <p className="pt-2">
                わたしは、両親がなくなったとき以上のショックを受けます。
              </p>
              <p className="pt-2">
                実は、訃報を聞く半年前に、偶然出会って立ち話をしていたのです。
              </p>
              <p className="pt-2">
                関東地方から島根県まで、アイドルの追っかけに行ったこと。
                その際に財布を落としたこと。
                警察から見つかったと連絡があったこと。
                財布の中身より、取りに行く交通費のほうが高くて悩んでいること。
                そんなことを２〜３分くらい話しました
              </p>
              <p className="pt-2">
                彼は本当に自ら人生を終わりにしたかったのでしょうか？
              </p>
              <p className="pt-2">
                その時、わたしにはまだまだやりたいこと、やれることが残っていると気付きます。
              </p>
              <p className="pt-2">
                そして、プログラマとしての復帰を決意するのです。
              </p>
              <h3 className="text-xl font-medium mt-4">
                初心に返り、AIを学び直す
              </h3>
              <p className="pt-2">
                復帰を決意するに当たり、学生時代にプログラマを目指すきっかけとなった、
                AIを勉強し直すことにします。
              </p>
              <p className="pt-2">
                これには苦労しました。
              </p>
              <p className="pt-2">
                わたしが学んでいた頃の AI は、哲学と心理学の領域なのです。
                ある意味、文系の考え方をします。
              </p>
              <p className="pt-2">
                ところが、現在の AI は、脳の神経細胞をシミュレートします。
                数値計算によってシミューレートするため、それはもう数学の領域です。
              </p>
              <p className="pt-2">
                しかし、その頃のわたしは、文系脳になっていました。
                うつ病の悩みや迷いや苦しみからの救いを、哲学や心理学に求めていたからです。
              </p>
              <p className="pt-2">
                そのため、最新の AI への理解がなかなかできません。
              </p>
              <h3 className="text-xl font-medium mt-4">
                視点の変更は、IQ 80 に相当する価値がある<span className="text-sm">（アラン・ケイ）</span>
              </h3>
              <p className="pt-2">
                そこで、わたしは視点を変えることにします。
              </p>
              <p className="pt-2">
                つまり、すでに完成されたAIシステムを、自分のプログラムから操作したり、
                いくつかのAIシステムを組み合わせて、あらたなAIシステムを作成することを思いつきます。
              </p>
              <p className="pt-2">
                幸いなことに、少なくないAIシステムが、別のプログラムから操作するための API を公開しています。
                これなら、深層学習などの知識がなくても、AIシステムを作ることができます。
              </p>
              <p className="pt-2">
                わたしは、ニュートンのいう「巨人の肩の上に立つ」方法で視点を変更します。
                偉大な実績やシステムの肩に乗れば、遠くまで見渡すことができるのです。
              </p>
              <p className="pt-2">
                もし何かに行き詰まったときには、あなたも巨人の肩の上に乗ってみてください。
                巨人の方に乗らなくても、うつむいた顔を上げて前を向くだけで、
                視点を変えことができます。
              </p>
              <h3 className="text-xl font-medium mt-4">
                誰かにとっては邪道だが、わたしにとっては近道
              </h3>
              <p className="pt-2">
                深層学習や機械学習といった、AI のコアも含めて AI システムを開発するのが目的の人からすると
                <span className="font-black">邪道</span>かもしれません。
              </p>
              <p className="pt-2">
                でも、ユーザーの生活を便利にするプログラムを開発する、ということが目的であれば
                <span className="font-black">近道</span>といえます。
              </p>
              <p className="pt-2">
                重い荷物を背負いながら険しい山道を登っていくのではなく、
                波にのって楽々目的地に運ばれていく方法を選んだのです。
              </p>
              <p className="pt-2">
                あなたも、目的を達成するために、波にのってみませんか？
              </p>
              <blockquote className="pl-4 pt-4 pb-2 italic w-3/4 mx-auto">
                <p className="pt-2">アイゼンは、辛く苦しい旅がしたいのかい？</p>
                <p className="pt-2">ぼくはね、終わった後に、くだらなかったって笑い飛ばせるような
                  楽しい旅がしたいんだ。</p>
                <p className="pt-2 text-right">-- 勇者ヒンメル（葬送のフリーレン　第６話）</p>
              </blockquote>
              <p className="pt-2">
                楽しく AI プログラミングを学んで、プログラマとしてのキャリア再生の道を旅していきましょう。
              </p>
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
