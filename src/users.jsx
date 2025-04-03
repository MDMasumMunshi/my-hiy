
import { use } from "react";
export default function Users({fetchUsers}){

     const users = use(fetchUsers);
     
     return (
          <div className="card">
               <h3>Users: {users.length}</h3>
          </div>
     )
}
/*
first steps

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
*/ 

/*

<Suspense fallback={<h3> Loading...</h3>}>
      <Users fetchUsers ={fetchUsers}></Users>
    </Suspense>*/ 
