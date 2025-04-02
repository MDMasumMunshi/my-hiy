import { useState } from "react"

export default function Batsman (){
     const [sixes, setSixes] = useState(0)
     const [runs, setRuns] = useState(0);
     // handle single
     const handleSingle = ()=>{
const updateRuns = runs + 1;
setRuns(updateRuns)
     }
     // handle double
     const handleDouble = () =>{
          const updateRuns =runs +2;
          setRuns(updateRuns)
     }
// handle four
const handleFour = () =>{
     const updateRuns =runs +4;
     setRuns(updateRuns)
}
// handle 6;
const handleSix = () =>{
     const updateRuns =runs +6;
     
     const updateSixes = sixes + 1;
     setRuns(updateRuns);
     setSixes(updateSixes)
}
     return(
          <div>
<h3>
     Player: Shakib Al- Hasan
</h3>
<h1>Score: {runs}</h1>

<p><small> Six: {sixes}</small></p>
{ runs > 50 && <p>Coungratulations . You have scored 50</p> }
<button onClick={handleSingle}>Single</button>
<button onClick={handleDouble}>Double</button>
<button onClick={handleFour}>Four</button>
<button onClick={handleSix}>Six</button>

          </div>
     )
}