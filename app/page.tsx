

import CompanionCard from '@/components/companion-card'
import CompanionsList from '@/components/companions-list'
import Cta from '@/components/cta'
import { recentSessions } from '@/constants'
import React from 'react'

export default function Page() {
  return (
    <main>
      <h1 className='text-2xl '>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
          id={"123"}
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration="45"
          color="#ffda6e" />
        <CompanionCard
          id={"124"}
          name="Lumi the Lighthearted Guide"
          topic="The Science of Light"
          subject="physics"
          duration="30"
          color="#ffda6e" />
        <CompanionCard
          id={"125"}
          name="Verba the Vocabulary Builder"
          topic="Introduction to Robotics"
          subject="language"
          duration="30"
          color="#e5d0ff" />
      </section>

      <section className='home-section'>
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full" />
        <Cta />
      </section>
    </main>
  )
}