import { features, faqs, footerNavigation, testimonials } from './contentSections'
import Hero from './components/Hero'
import Features from './components/Features'
import Problem from './components/Probrem'
import Amplify from './components/Amplify'
import Solution from './components/Solution'
import Profile from './components/Profile'
import Testimonials from './components/Testimonials'
import Offer from './components/Offer'
import Response from './components/Response'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function LandingPage() {
  return (
    <>
      <div className='bg-white dark:text-white dark:bg-boxdark-2'>
        <main className='isolate dark:bg-boxdark-2 text-justify'>
          <Hero />
          <Problem />
          <Amplify />
          <Solution />
          <Profile />
          <Testimonials testimonials={testimonials} />
          <Offer />
          <Response />
          <Features features={features} />
          <FAQ faqs={faqs} />
        </main>
    <Footer footerNavigation={footerNavigation} />
    </div>
    </>
  );
}
