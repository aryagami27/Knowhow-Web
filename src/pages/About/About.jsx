import React from 'react'
import AboutCardRight from '../../components/AboutCards/AboutCardRight'
import AboutCard from '../../components/AboutCards/AboutCard'
import Events from '../Events/Events'

function About() {
  return (
    <div>
        <Events />
      <div className="col-span-2 mt-12">
        
        <h2 className="text-4xl font-bold text-white">
          About <span className="text-[#AF66DF]">KnowHow</span>
        </h2>
        {/* AboutCard Left Component */}
        <div className="mt-24">
          <AboutCard
            title="The Spark"
            content="Every idea begins as a spark—fueled by curiosity, shaped by experience, and driven by a desire to learn. KnowHow was born from that very spark, a vision to create a space where knowledge flows freely and solutions take form."
            imageSrc="https://via.placeholder.com/200x241"
          />
        </div>
        {/* AboutCard Left component */}
        <div className="mt-24">
          <AboutCardRight
            title="The Journey"
            content="Like a path winding through uncharted territory, we guide the seekers—the innovators, the problem solvers—on their quest for answers. With each step, new doors open, leading to discovery, growth, and mastery."
            imageSrc="https://via.placeholder.com/200x241"
          />
        </div>

        {/* AboutCard Left Component */}
        <div className="mt-24">
          <AboutCard
            title="Unlock your potential with KnowHow"
            content="At KnowHow, we provide the tools, resources, and community to turn your curiosity into action. Whether you're looking to learn, share, or innovate, KnowHow is where your next big idea begins."
            imageSrc="https://via.placeholder.com/200x241"
          />
        </div>
      </div>
    </div>
  )
}

export default About
