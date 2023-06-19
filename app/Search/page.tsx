"use client"
import React, { useState } from 'react'
import Result from './result'

export default function page() {

    const [query,setQuery] = useState('')

    const onSearch=(e:any)=>{
        e.preventDefault()
        const Query = e.target[0].value;
        setQuery(Query)
    }

  return (
    <div>
        <form onSubmit={onSearch}>
            <input placeholder='Search People' />
            <button>Search</button>
        </form>
      {query && <Result query={query}/>}
    </div>
  )
}
