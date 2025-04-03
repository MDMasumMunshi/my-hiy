import Friend from "./friend"
import { use } from "react"
export default function Friends ({friendPromise}){
     const friends = use(friendPromise)
     return(
          <div className="card">
               <h3>Friends: {friends.length}
                    {
                         friends.map(friend => <Friend key={friend.id} friend ={friend}></Friend>)
                    }
               </h3>
          </div>
     )
}

/* sstep 1 fetch 
const fetchFriends = async () => {
const res = await fetch("https://jsonplaceholder.typicode.com/posts")
return res.json()
}
*/ 

/* Second step call the function

3 component make.
4 c
promise ke component er vitore pathano 
*/ 