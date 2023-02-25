import React, { useState } from "react";

const Question = ({ id, question, answer }) => {
  const [show, setShow] = useState(false);

  return <div className='card-group'>
    {
    show ? <div className="card">
        <div className='ques.answer'>
            <h5>{id}.{question}</h5>
            <button></button>
        </div>
        </div>
}
  </div>;
  )
};
export default Question;
