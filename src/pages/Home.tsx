import Hero from '../components/Hero'
import Achievements from '../components/Achievements'
import Experience from '../components/Experience'
import Services from '../components/Services'
import Contact from '../components/Contact'
import SEO from '../components/SEO'

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://mordach.com/#organization",
        "name": "Oleh Mordach, PMP",
        "url": "https://mordach.com",
        "sameAs": [
          "https://www.linkedin.com/in/oleh-mordach/"
        ],
        "description": "Senior Technical Program Manager providing mentorship, courses, and consultation for IT professionals."
      },
      {
        "@type": "WebSite",
        "@id": "https://mordach.com/#website",
        "url": "https://mordach.com",
        "name": "Oleh Mordach, PMP — Senior Technical Program Manager",
        "publisher": {
          "@id": "https://mordach.com/#organization"
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Oleh Mordach, PMP — Senior Technical Program Manager"
        description="Oleh Mordach, PMP — Senior Technical Program Manager. Mentorship, courses, and consultation for IT professionals. Building predictable systems in complex environments."
        canonical="https://mordach.com/"
        schema={schema}
      />
      <Hero />
      <Achievements />
      <Experience />
      <Services />
      <Contact />
    </>
  )
}
