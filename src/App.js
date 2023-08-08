import "./App.css";


function App() {
  const count = 200;
  const countArray = Array.from({ length: count }, (_, index) => index + 1); 
  return (
    <div class="honeycomb">
    {countArray.map((el, index) => (
      <div class="ibws-fix">
        <div class="hexagon">
          <div  class="hexagontent">{index}</div>
        </div>
        <div class="hexagon"  >
          <div class="hexagontent"></div>
        </div>  
      </div>
    ))}
  </div>
  );
}

export default App;
