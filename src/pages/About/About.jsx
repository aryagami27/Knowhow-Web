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
            content="KnowHow is the leading platform driving change through collaboration and knowledge-sharing. Join us in creating a brighter, more connected future."
            imageSrc="https://via.placeholder.com/200x241"
          />
        </div>
        {/* AboutCard Left component */}
        <div className="mt-24">
          <AboutCardRight
            title="The Journey"
            content="KnowHow is the leading platform driving change through collaboration and knowledge-sharing. Join us in creating a brighter, more connected future."
            imageSrc="https://via.placeholder.com/200x241"
          />
        </div>

        {/* AboutCard Left Component */}
        <div className="mt-24">
          <AboutCard
            title="Unlock your potential with KnowHow"
            content="KnowHow is the leading platform driving change through collaboration and knowledge-sharing. Join us in creating a brighter, more connected future."
            imageSrc="https://via.placeholder.com/200x241"
          />
        </div>
      </div>
    </div>
  )
}

export default About
