import { Header } from '@/components/landing/header'
import { HeroSection } from '@/components/landing/hero-section'
import { ProcessSection } from '@/components/landing/process-section'
import { ShowcaseSection } from '@/components/landing/showcase-section'
import { MetricsSection } from '@/components/landing/metrics-section'
import { BlogSection } from '@/components/landing/blog-section'
import { CTASection } from '@/components/landing/cta-section'
import { Footer } from '@/components/landing/footer'
import { getLatestPosts } from '@/lib/posts'

export default async function Home() {
  const latestPosts = await getLatestPosts(3)

  return (
    <>
      <Header />
      <main className="bg-slate-900">
        <HeroSection />
        <ProcessSection />
        <ShowcaseSection />
        <MetricsSection />
        <BlogSection posts={latestPosts} />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
