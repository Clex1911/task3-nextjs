import React, { Suspense } from 'react'
import RepoList from './sectionrepo'


async function getDataUsers(param:string){
  const res = await fetch(`https://api.github.com/users/${param}`)
  return res.json()
}

export default async function DetailSearch({params}:{params:{slug:string}}) {
  const dataUser = await getDataUsers(params.slug)

  return (
    <div> 
      <p>Detail User: {params.slug}</p>
      <div>
        {JSON.stringify(dataUser)}
      </div>


      <div style={{marginTop:"10px"}}>
      <Suspense fallback={<div>Sedang load Reposirity..</div>}>
        <RepoList slug={params.slug}/>
       </Suspense>
      </div>
    </div>
  )
}
