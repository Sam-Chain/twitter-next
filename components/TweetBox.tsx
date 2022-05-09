import Image from 'next/image'
import React from 'react'

const TweetBox = () => {
  return (
    <div className="relative">
      <Image
        className="h-14 w-14 rounded-full object-cover"
        alt=""
        src="https://links.papareact.com/gll"
        // objectFit="cover"
        // width={14}
        // height={14}
        // layout="responsive"
        // or
        layout="fill"
      />
    </div>
  )
}

export default TweetBox
