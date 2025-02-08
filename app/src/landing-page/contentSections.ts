import type { NavigationItem } from '../client/components/NavBar/NavBar';
import { routes } from 'wasp/client/router';
import { DocsUrl, BlogUrl } from '../shared/common';
import daBoiAvatar from '../client/static/da-bou.webp';
import fuwaAvatar from '../client/static/fuba.webp';
import emiAvatar from '../client/static/emi.webp';
import avatarPlaceholder from '../client/static/avatar-placeholder.webp';

export const landingPageNavigationItems: NavigationItem[] = [
  { name: 'Features', to: '#features' },
  { name: 'Pricing', to: routes.PricingPageRoute.to },
  { name: 'Documentation', to: DocsUrl },
  { name: 'Blog', to: BlogUrl },
];
export const features = [
  {
    name: 'AI との対話：Webページデザイン',
    description: '準備中。Webページの内容を設計する際に、AIとブレインストーミングしたときの記録',
    icon: '🧠',
    href: "#",
  },
  {
    name: 'AI との対話：ロゴデザイン',
    description: '準備中。Webサイトのロゴ、アイコン、ファビコンのデザインを、AIに依頼したときの記録',
    icon: '🎨',
    href: "#",
  },
  {
    name: 'カミングスーン #3',
    description: '準備中',
    icon: '🥞',
    href: "#",
  },
  {
    name: 'カミングスーン #4',
    description: '準備中',
    icon: '💸',
    href: "#",
  },
];
export const testimonials = [
  {
    name: 'だあ坊（仮名）',
    role: '中間管理職',
    avatarSrc: daBoiAvatar,
    socialUrl: '#',
    quote: "こんなふうにコーディングするなんて知らなかったなァ",
  },
  {
    name: '不破（仮名）',
    role: 'フリーランスエンジニア',
    avatarSrc: fuwaAvatar,
    socialUrl: '#',
    quote: '今までやってたのよりクールだゼ',
  },
  {
    name: 'エミコ（仮名）',
    role: 'ハッピーパート',
    avatarSrc: emiAvatar,
    socialUrl: '#',
    quote: 'うちの仔も気に入ってます!',
  },
];

export const faqs = [
  {
    id: 1,
    question: '"FAQ" はどう発音すればいいですか？',
    answer: '政治的に正しく発音するなら、「エフ・エー・キュー」です。しかし、1991年頃は、「何度も何度も繰り返し同じ質問をされてこう言いたくなる」という意味を込めて「ファ＊キュー」(FU*K YOU)と呼ばれていました。',
    href: '',
  },
  {
    id: 2,
    question: 'プログラマが最新の技術を使いたがるのは、ただの自己満足のわがままですか？',
    answer: 'いいえ。最新技術を使うことで、人々を幸せにできるからです。',
    href: '/components/why-new-tech',
  },
  {
    id: 3,
    question: 'なぜ、私の上司は、私のやり方を邪魔するのでしょうか？',
    answer: 'それは、あなたが世の中をよい方向に変えてしまうから。上司の既得権益がなくなってしまうからです。',
    href: '/components/why-do-they-disturb-me',
  },
  {
    id: 99,
    question: '人生の意味は?',
    answer: '42.',
    href: 'https://en.wikipedia.org/wiki/42_(number)',
  },
];

export const footerNavigation = {
  app: [
    { name: 'Documentation', href: DocsUrl },
    { name: 'Blog', href: BlogUrl },
  ],
  company: [
    { name: 'About', href: 'https://wasp-lang.dev' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};
