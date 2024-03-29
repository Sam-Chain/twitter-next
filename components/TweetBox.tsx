import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'
import { useState } from 'react'

const TweetBox = () => {
  const [input, setInput] = useState<string>('')
  return (
    <div className="flex space-x-2 p-5">
      <div className="relative h-14 w-14">
        <Image
          alt=""
          src="https://links.papareact.com/gll"
          className="rounded-full"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-1 items-center pl-2 ">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-24 w-full text-xl outline-none placeholder:text-xl "
            type="text"
            placeholder="What's Happening?"
          />
          <div className="flex items-center ">
            <div className="flex flex-1  space-x-2 text-twitter ">
              <PhotographIcon
                className="h-5 w-5 cursor-pointer transition-transform duration-150
              ease-out hover:scale-150 "
              />
              <SearchCircleIcon
                className="h-5 w-5 cursor-pointer transition-transform duration-150
              ease-out hover:scale-150 "
              />
              <EmojiHappyIcon
                className="h-5 w-5 cursor-pointer transition-transform duration-150
              ease-out hover:scale-150 "
              />
              <CalendarIcon
                className="h-5 w-5 cursor-pointer transition-transform duration-150
              ease-out hover:scale-150 "
              />
              <LocationMarkerIcon
                className="h-5 w-5 cursor-pointer transition-transform duration-150
              ease-out hover:scale-150 "
              />
            </div>
            <button
              disabled={!input}
              className="rounded-full bg-twitter px-5 py-2 font-bold text-white
              disabled:opacity-40 "
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox
