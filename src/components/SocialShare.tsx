'use client'
import React from 'react'
import { FacebookShareButton, FacebookIcon } from "next-share";

const SocialShare = () => {
  return (
    <FacebookShareButton
        url={"https://github.com/next-share"}
        quote={"next-share is a social share buttons for your next React apps."}
        hashtag={"#nextshare"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
  )
}

export default SocialShare