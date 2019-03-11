/*

  Composition vs Inheritance
  Компоновка (Композиция) против Наследования.

  Наследование, определяет обьект по тому чем он ЯВЛЯЕТСЯ.
  Композиция, определяет обьект по тому, что он ДЕЛАЕТ

  Опишем проблематику. Слайды!

*/
// Our Functions

const Composition = () => {

const Drive = ( state ) => ({
  drive: () => console.log('Wroooom!, It\'s a car ' + state.name )
});

const ChangeName = state => ({
  changeName: ( name ) => {
    console.log(`Old name:`, state.name, state );
    state.name = name;
    console.log(`New name:`, state.name, state );
  }
});

const Refill = ( state ) => ({
  refill: () => console.log( state.name + ' was refiled')
});

const Move = ( state ) => ({
  move: ( speed ) => {
    console.log(speed);
    state.speed += speed ;
    console.log( state.name + ' is moving. Speed ->' + state.speed );
  }
});

const Fly = ( state ) => ({
  fly: () => {
    console.log( state );
    console.log( state.name + ' flying into sky! Weather is ' + state.weather );
  }
});

const LoggerIn = obj => ({
  logger: () => {
    console.log( obj );
  }
});

// Проверим ф-ю
// Refill({name: "Volkswagen"}).refill(); // Volkswagen was refiled

// // Наш конструктор.
const EcoRefillDrone = (name, speed) => {
  let state = {
    name,
    speed: Number(speed),
    weather: 'rainy'
  };


  console.log( Drive(state), Refill(state) );

  return Object.assign(
    {},
    state,
    Drive(state),
    Refill(state),
    ChangeName(state),
    Fly(state),
    Move(state),
    LoggerIn(state)
  );
};


const Plane = (name) => {
  const state = {
    name,
    speed: 0
  }
  return Object.assign(
    {},
    state,
    Fly(state),
    Refill(state)
  )
}

  const Boing = Plane('Boing');
      Boing.refill();
      Boing.fly();

  console.log( Boing );
  //
  // const myDrone = EcoRefillDrone('JS-Magic', 100);
  //       myDrone.drive();
  //       myDrone.refill();
  //       myDrone.fly();
  //       myDrone.move(100);
  //       myDrone.move(100);
  //       console.log( 'myDrone', myDrone );
  //       myDrone.logger();
  //
  // const myDrone2 = EcoRefillDrone('JS-Is-Amaizing', 100);
  // myDrone2.move(100);
  // myDrone2.move(200);
  // myDrone2.changeName('Dex3');
        // myDrone2.changeName('HDMI');
  //
  // const Logger = obj => console.log( obj );
  //       Logger(myDrone2);
  //       myDrone2.logger();
  //       let bindedMove = myDrone2.move.bind(null, 200);
  //       MoveId.addEventListener('click', bindedMove );

}


export default Composition;
