import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    const year = new Date().getFullYear()
  return (
    <footer className="w-full h-[60px]  flex justify-center items-center">
        <h3>© {year} dimeji-code. All rights reserved.</h3>
    </footer>
  )
}

export default Footer