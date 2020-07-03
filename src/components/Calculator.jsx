import React, { useState, useEffect } from 'react'

export function Calculator() {
  const [currentDisplay, setCurrentDisplay] = useState(0)
  const [firstOperand, setFirstOperand] = useState()
  const [operator, setOperator] = useState()
  const [secondOperand, setSecondOperand] = useState()

  const handleKeyUp = event => {
    console.log(event.code)
    const digit = event.code.split('Digit')[1]
    const isInteger = Number.isInteger(parseInt(digit))

    if (isInteger) {
      handleDigitSelected(digit)
    } else {
      switch (event.keyCode) {
        case 111:
          handleSelectOperator('/')
          break
        case 106:
          handleSelectOperator('*')
          break
        case 109:
          handleSelectOperator('-')
          break
        case 189:
          handleSelectOperator('-')
          break
        case 107:
          handleSelectOperator('+')
          break
        case 13:
          handleClickEquals()
          break
        case 187:
          handleClickEquals()
          break
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  })

  const handleClickDigit = event => {
    const digitText = event.target.innerText

    handleDigitSelected(digitText)
  }

  const handleSelectOperator = operator => {
    setOperator(operator)
  }

  const handleClickEquals = () => {
    let answer

    switch (operator) {
      case '/':
        answer = firstOperand / secondOperand
        break

      case '*':
        answer = firstOperand * secondOperand
        break

      case '-':
        answer = firstOperand - secondOperand
        break

      case '+':
        answer = firstOperand + secondOperand
        break
    }

    setCurrentDisplay(answer)
  }

  const handleClickClear = () => {
    setCurrentDisplay(0)
    setFirstOperand(undefined)
    setSecondOperand(undefined)
    setOperator(undefined)
  }

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
            onClick={() => handleSelectOperator('/')}
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
            onClick={() => handleSelectOperator('*')}
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
            onClick={() => handleSelectOperator('-')}
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
            onClick={() => handleSelectOperator('+')}
            className="button op"
          >
            &#43;
          </button>
          <button onClick={handleClickDigit} className="button x2">
            0
          </button>
          <button onClick={handleClickDigit} className="button">
            .
          </button>
          <button onClick={handleClickEquals} className="button op">
            &#61;
          </button>
        </div>
      </div>
    </main>
  )

  function handleDigitSelected(digitText) {
    setCurrentDisplay(digitText)

    const digitAsNumber = parseInt(digitText)

    if (firstOperand === undefined) {
      setFirstOperand(digitAsNumber)
    } else {
      setSecondOperand(digitAsNumber)
    }
  }
}

export default Calculator
