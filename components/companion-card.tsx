import { CompanionCardProps } from '@/types/interface'
import { Presentation } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { Button } from './ui/button'


function CompanionCard({ id, name, topic, subject, duration, color }: CompanionCardProps) {
  return (
    <article className='companion-card' style={{ backgroundColor: color }}>
      <div className='flex justify-between items-center'>
        <div className='subject-badge'>{subject}</div>
        <button className='companion-bookmark'>
          <Image src='/icons/bookmark.svg' alt='Bookmark' width={12.5} height={15} />
        </button>
      </div>

      <h2 className='text-xl font-semibold'>{name}</h2>
      <p className='text-sm'>{topic}</p>
      <div className='flex items-center gap-2'>
        <Image src="/icons/clock.svg" alt="Clock" width={16} height={16} />
        <span className='text-sm'>{duration} minutes</span>
      </div>

      <Link href={`/companions/${id}`} className='w-full'>
        <Button className='btn-primary w-full justify-center bg-black'>
          <Presentation />
          <span>Launch Lesson</span>
        </Button>
      </Link>
    </article>
  )
}

export default CompanionCard
