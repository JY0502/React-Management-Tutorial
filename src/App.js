import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '유재돈',
  'birthday': '870502',
  'gender': '남자',
  'job': '소프트웨어 엔지니어'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '810912',
  'gender': '남자',
  'job': '친구'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '예쁜이',
  'birthday': '930426',
  'gender': '여자',
  'job': '모델'
}
]
class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
            );
          })
        }
      </div>
    );
  }
}

export default App;
