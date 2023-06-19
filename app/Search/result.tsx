import { error } from 'console'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
const fetcher = (url:string) => fetch(url).then(res => res.json())

interface Props{ 
    query:string
}

export default function Result({query}:Props) {
    const {data, error}=useSWR(`https://api.github.com/search/users?q=${query}`,fetcher)
    var load = !data && !error
  return (
    <div style={{marginTop:"10px"}}>
        <p>Search Result: {query}</p>
        <div>
            {load && "Loading.."}
            {data && data.items.map((user:any,index:number)=>{
                return <ul key={index}>
                    <li><Link href={`/Search/${user.login}`}>{user.login}</Link></li>
                    <li><Link href={user.repos_url}>Reporsitry</Link></li>
                </ul>
            })}
        </div>
    </div>
  )
}
