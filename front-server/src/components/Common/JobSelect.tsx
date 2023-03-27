import { useState } from 'react'
import React from 'react'
function JobSelect() {
  const [code, setCode] = useState(0)
  return (
    <>
      <div>
        <div>
          <div
            onClick={() => {
              setCode(1)
            }}
          >
            IT
          </div>
          <div
            onClick={() => {
              setCode(2)
            }}
          >
            제조
          </div>
        </div>
        <div>{code === 1 ? <div>개발자</div> : null}</div>
        <div>{code === 2 ? <div>제조업</div> : null}</div>
        <div></div>
      </div>
    </>
  )
}

export default JobSelect
