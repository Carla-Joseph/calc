import React, { useState } from 'react'

export function Calculator() {
  const [currentDisplay, setCurrentDisplay] = useState(0)
  const [leftOperand, setLeftOperand] = useState()
  const [operator, setOperator] = useState()
  const [rightOperand, setRightOperand] = useState()

  const handleClickDigit = event => {
    const digitText = event.target.innerText

    setCurrentDisplay(digitText)

    const digitAsNumber = parseInt(digitText)

    if (leftOperand === undefined) {
      setLeftOperand(digitAsNumber)
    } else {
      setRightOperand(digitAsNumber)
    }
  }

  const handleClickOperator = operator => {
    setOperator(operator)
  }

  const handleClickEquals = () => {
    let answer

    switch (operator) {
      case '/':
        answer = leftOperand / rightOperand
        break

      case '*':
        answer = leftOperand * rightOperand
        break

      case '-':
        answer = leftOperand - rightOperand
        break

      case '+':
        answer = leftOperand + rightOperand
        break
    }

    setCurrentDisplay(answer)
  }

  const handleClickClear = () => {
    setCurrentDisplay(0)
    setLeftOperand(undefined)
    setRightOperand(undefined)
    setOperator(undefined)
  }

  console.log(handleClickDigit)
  return (
    <main>
      <div className="calculator">
        <div className="display">{currentDisplay}</div>
        <div className="buttons">
          <button onClick={handleClickClear} className="button fn">
            AC
          </button>
          <button className="button fn">&#177;</button>
          <button className="button fn">&#37;</button>
          <button
            onClick={() => handleClickOperator('/')}
            className="button op"
          >
            &#247;
          </button>
          <button onClick={handleClickDigit} className="button">
            7
          </button>
          <button onClick={handleClickDigit} className="button">
            8
          </button>
          <button onClick={handleClickDigit} className="button">
            9
          </button>
          <button
            onClick={() => handleClickOperator('*')}
            className="button op"
          >
            {' '}
            &#215;
          </button>
          <button onClick={handleClickDigit} className="button">
            4
          </button>
          <button onClick={handleClickDigit} className="button">
            5
          </button>
          <button onClick={handleClickDigit} className="button">
            6
          </button>
          <button
            onClick={() => handleClickOperator('-')}
            className="button op"
          >
            {' '}
            &#8722;
          </button>

          <button onClick={handleClickDigit} className="button">
            1
          </button>
          <button onClick={handleClickDigit} className="button">
            2
          </button>
          <button onClick={handleClickDigit} className="button">
            3
          </button>
          <button
            onClick={() => handleClickOperator('+')}
            className="button op"
          >
            &#43;
          </button>
          <button onClick={handleClickDigit} className="button x2">
            0
          </button>
          <button className="button">.</button>
          <button onClick={handleClickEquals} className="button op">
            &#61;
          </button>
        </div>
      </div>
    </main>
  )
}

export default Calculator
