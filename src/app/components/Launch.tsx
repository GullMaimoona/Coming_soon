import Countdown from './Countdown'


export default function ComingSoon() {
  return (
    <div className="flex flex-col min-h-screen bg-center justify-center items-center py-16" style={{backgroundImage: "url('/bgg.webp')", backgroundSize: "cover"}}>
      <Countdown />
      <div>
        <title>Olivia - Coming Soon</title>
        <meta name="description" content="We're launching our new website soon!" />
      </div>

      <h1 className="text-4xl md:text-6xl font-semibold text-white mb-12 mt-12">Olivia</h1>

      <main className="container mx-auto px-5 text-center text-white text-4xl">
        <h1 className="mb-5">WE'RE LAUNCHING</h1>
        <h1 className="mb-5">OUR</h1>
          <h1 className="font-semibold">NEW WEBSITE</h1>
        
        <p className="text-lg text-gray-200 mt-10">
          We're coming soon! This template is here to present your future website. We're working hard to give you the best experience!
        </p>
      </main>
    </div>
  )
}