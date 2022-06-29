import { useState, useEffect } from 'react'
import logo from './gomgomi_smile.png'
import './App.css'
import { Button } from 'antd';

const CONSONANT_LIST = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅌ', 'ㅍ', 'ㅎ']
function App() {
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(3);
  const [consonant, setConsonant] = useState(null);

  useEffect(() => {
      if (!start) {
          return;
      }

      if (count === 0) {
          setConsonant(CONSONANT_LIST[Math.floor(Math.random() * ((CONSONANT_LIST.length - 1) - 0) + 0)]);
          setStart(false);
          return;
      }

      setTimeout(() => {
          setCount(count - 1);
      }, 1000);
  }, [count, start]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>초성 자동 생성기</p>
      </header>
        <p className="consonant">
            {count === 0 ? consonant : count}
        </p>
      <p>
        <Button type="primary" className="generate-btn" onClick={() => {
            setStart(true);
            setCount(3);
            setConsonant(null);
        }}>
          생성하기
        </Button>
      </p>
    </div>
  )
}

export default App
