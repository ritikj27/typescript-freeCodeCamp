import React from 'react'

type heading = {
    title:string
}

export const Heading = ({title}:heading) => {
  return (
    <div>{title}</div>
  )
}

