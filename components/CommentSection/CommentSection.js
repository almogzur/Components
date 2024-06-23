

import { useSession } from 'next-auth/react'
import {useEffect,useState} from 'react'
import { useRouter } from 'next/router'
import { CommentSection } from 'replyke';


const ComSection=()=>{

  const router = useRouter()
  const { data: session ,status ,update} = useSession()

  useEffect(()=>{ })

        const loginClickCallback = (e) => {}
        const commentAuthorClickCallback = (e) => {}
        const currentUserClickCallback = (e) => {}
      


    if (status === 'loading') {
     return <h1 style={{textAlign:'center'}}>Loading...</h1>
}

return (
    <CommentSection
    
    apiBaseUrl="http://localhost:3000"
    articleId="UNIQUE_ARTICLE_ID"
    callbacks={{
      loginClickCallback: loginClickCallback,
      commentAuthorClickCallback: commentAuthorClickCallback,
      currentUserClickCallback: currentUserClickCallback
  }}
  
  
 
/>
) 
}

export default ComSection