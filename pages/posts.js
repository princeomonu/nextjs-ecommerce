import {useEffect, useState} from 'react'
import os from 'os'
import fs from 'fs'
import {join} from 'path'

export default function Posts({posts}){
    return <div>
        {posts.length? <div>
            <h1>Posts</h1>
            <hr></hr>
            <ul>
            {posts.map((post,i)=><li key={i}>{post.title}</li>)}
            </ul>
        </div>:<>no posts</>}
    </div>
}


export async function getServerSideProps(context){

    const params = context.query
    console.log({params})

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await  response.json()
    console.log({homedir: os.homedir()})
    return {
        props: {posts}
    }
}