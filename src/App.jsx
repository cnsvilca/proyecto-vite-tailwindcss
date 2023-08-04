import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [questionList, setQuestionList] = useState([])
  useEffect(() => {
    fetch('https://the-trivia-api.com/api/questions?categories=geography&limit=20&difficulty=easy')
      .then((res) => res.json())
      .then((res) => setQuestionList(res))
  }, [])
  return (
    <div className='py-4 px-2 bg-cyan-400 container'>
      <h1 className="font-bold underline mb-6 md:text-7xl sm:text-5xl text-3xl">
        My app Quiz
      </h1>
      <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 '>
        {questionList.map((item) =>
          <div key={item.id} className='bg-amber-200 rounded-xl py-4 px-2'>
            <h3 className='font-medium mb-3' >{item.question}</h3>
            <div className='flex flex-col'>
              <p>{item.correctAnswer}</p>
              {item.incorrectAnswers.map((respIncorrecta) =>
                <p>{respIncorrecta}</p>
              )}
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default App
