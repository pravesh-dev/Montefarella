import React from 'react'

function FaqData() {
    const data = [
        {
            ques: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            ans: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni architecto eos pariatur, labore id et ullam rerum, sit molestias ipsam odio voluptatum, reiciendis illo.`,
        },
        {
            ques: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            ans: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni architecto eos pariatur, labore id et ullam rerum, sit molestias ipsam odio voluptatum, reiciendis illo.`,
        },
        {
            ques: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            ans: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni architecto eos pariatur, labore id et ullam rerum, sit molestias ipsam odio voluptatum, reiciendis illo.`,
        },
        {
            ques: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            ans: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni architecto eos pariatur, labore id et ullam rerum, sit molestias ipsam odio voluptatum, reiciendis illo.`,
        },
        {
            ques: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            ans: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni architecto eos pariatur, labore id et ullam rerum, sit molestias ipsam odio voluptatum, reiciendis illo.`,
        },
        {
            ques: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            ans: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni architecto eos pariatur, labore id et ullam rerum, sit molestias ipsam odio voluptatum, reiciendis illo.`,
        }
    ]
  return (
    <div className='flex flex-wrap'>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.ques}</h1>
          <p>{item.ans}</p>
        </div>
      ))}
    </div>
  )
}

export default FaqData
