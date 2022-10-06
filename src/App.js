import { useState } from 'react';
import './App.css';
function App() {
  const [arr,SetArr] = useState(['React를 배워봅시다']);
  const [contents, setContent] = useState('');
  const onChange = (e) =>{
    setContent(e.target.value);
  }
  const onClick = (e) =>{
    e.preventDefault();
    if (contents === '') { return;}
    SetArr([...arr,contents]);
    console.log('onSubmit', arr);
  }
  return (
    <>
      <div className='wrap'>
        <form className='inputForm'>
          <input type='text' value={contents} onChange={onChange}></input>
          <button type='submit' className='add-button' onClick={onClick}>추가하기</button>
        </form>
        <div className='title'>
          <h1>Todo List</h1>
        </div>
        <div className='Todo'>
          {arr.map((prop,index)=><div className='TodoList' key={index}>{prop}</div>)}
        </div>
      </div>
    </>
  );
}

export default App;
