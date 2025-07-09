import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller/>
      <div className="my-20 bg-gray-100 rounded-2xl overflow-hidden p-6 md:p-12 grid md:grid-cols-2 gap-8 items-center group">
        {/* Left: Scrap to Art Image */}
        <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden rounded-lg shadow-md">
  <img
  src="/artist-images/scrap_before.jpg"
  alt="Scrap Before"
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
/>
<img
  src="/artist-images/scrap_after.jpg"
  alt="Art After"
  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-700"
/>

</div>


        {/* Right: Text and Link */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Meet the Artists</h2>
          <p className="text-gray-600 mb-6">
            Discover how skilled artists transform discarded scrap into high-value decorative masterpieces.
          </p>
          <Link
            to="/artists"
            className="inline-block bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition"
          >
            Explore Artists
          </Link>
        </div>
      </div>

     
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
