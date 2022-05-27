import React, {useState} from 'react'

export default function App() {
  const [butto, setReadMore4] = useState(true);
  const [queq, quechange] = useState(0);

  function quechange1(){
    if (isha.length<=queq+1){
      alert("Questions Finish")
      return
    }
    quechange(queq+1)

  }
  function ishahh(is){
    if (is.name==is.ans){
      alert("Correct Solution")
      quechange1()
      return
    }
    
    alert("InCorrect Solution")
    quechange1()
  }
  var isha=[
    {
      que: "Who is ishan",
      option: [
        "A Gentle Men",
        "A Bad Boy",
        "A Person With Ethics",
        "All Of Above",
      ],
      answer: "All Of Above"
    },
    {
      que: "Bast Quality Of ishan is ishan",
      option: [
        "Hepocrate",
        "Money Mind",
        "Friiend Of friends",
        "Harami",
      ],
      answer: "Friiend Of friends"
    }
  ]

  var sin= isha[queq];

  return (
    <div>
      <h1>Induced KBC</h1>
      <div>
    <h3>{sin.que}</h3>
      <div>
        <button onClick={()=> ishahh({name:sin.option[0], ans: sin.answer })}>{sin.option[0]}</button>
        {butto && <button >{sin.option[1]}</button>}
      </div>
      <div>
        {butto && <button >{sin.option[2]}</button>}
        <button >{sin.option[3]}</button>
      </div>

  </div>
      <br/>
      <br/>
      <button onClick={()=> setReadMore4(!butto)}>50/50</button>
      <button onClick={()=> quechange1()}>Next</button>

    </div>
  )
}

