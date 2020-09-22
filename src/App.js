import React from 'react';
import PropTypes from 'prop-types'

// Component의 이름은 Upper Case로 시작되어야 한다.
// Properties 가져와서 사용하기
function TestProps(props) {
  return (
    <div>
      My name is {props.name}. I am {props.age} years old and favorite food is {props.fav}.
    </div>
  );
}

const foodList = [
  {
    id: 1,
    name: "pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80",
    rating: 4.7
  },
  {
    id: 2,
    name: "sushi",
    image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=680&q=80",
    rating: 4.0
  },
  {
    id: 3,
    name: "salad",
    image: "https://images.unsplash.com/photo-1569760142069-bc6838de16c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
    rating: 4.1
  }
];

function FavFood({ name, picture, rating }) {
  // alt tag는 시각장애인을 위한 웹 표준이다. 이미지를 읽어주는데 활용된다고 한다.
  return (
    <div>
      <hr/>
      <h4>I like {name}</h4>
      <h3><i>{rating} / 5.0</i></h3>
      <img src={picture} alt={name} />
    </div>
    
  );
}

// property의 타입과 존재 유무등을 확인하고 에러 메시지 띄워주는 패키지
// https://ko.reactjs.org/docs/typechecking-with-proptypes.html
// isRequired가 있으면 무조건, 없으면 있어도 되고 undefined여도 됨
FavFood.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  // Component에 넣는 값들을 props라고 한다.
  // HTML 안에서 JS 문법을 쓰고싶다면 { }로 감싸서 사용하는듯?
  // React 내부에서 unique한 데이터임을 명시해주기 위해 id값과 key값을 만들어준다.
  return (
    <div className="App">
      <h1>Hello React World !!</h1>
      <TestProps name="jonas" age="20" fav="pizza" />
      {foodList.map(dish => (
        <FavFood key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))};
    </div>
  );
}

export default App;
