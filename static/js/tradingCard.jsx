"use strict";
const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg',
    cardId: 1,
  },
  { 
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
    cardId: 2,

  },
  {
    name:"Llambda",
    skill:"knitting scarves",
    imgUrl:"/static/img/llambda.jpg",
    cardId: 3,
  },
  {
    name:"Catmaid",
    skill:"swimming with sharks",
    imgUrl:"/static/img/merge.png",
    cardId: 4,
  },
  {
    name:"Seedpy",
    skill:"spitting watermelon seeds at people",
    imgUrl:"/static/img/seedpy.jpeg",
    cardId: 5,
  },
];

console.log(tradingCardData);


  


function TradingCard(props) {
  return (
    <div className="card"> 
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} />
      <h2>Skill: {props.skill} </h2>
    </div>
  );
}

function TradingCardContainer() {
  const tradingCards = [];

  for (const currentCard of tradingCardData) {
    tradingCards.push(
      <TradingCard
      name={currentCard.name}
      skill={currentCard.skill}
      imgUrl={currentCard.imgUrl}
      />    
    );
  }

  return (
    <React.Fragment>
      {tradingCards}
    </React.Fragment>
  ); 
}

ReactDOM.render(
  <TradingCardContainer/>,
  document.querySelector('#container')
);




// ReactDOM.render(
//   (
//     <TradingCard
//       name="Balloonicorn"
//       skill="video games"
//       imgUrl="/static/img/balloonicorn.jpg"
//     />
//   ),
//   document.querySelector('#balloonicorn')
// );


