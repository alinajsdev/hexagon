import "./App.css";
import { hexagon } from "./hexData";


function App() {
  return (
    <div class="honeycomb">

    {hexagon.map((el, index) => (
      <div class="ibws-fix">
        <div class="hexagon" style={{background : el.text ? '#092F53' : ""}}>
          <div  class="hexagontent">{el.text}</div>
        </div>
        <div class="hexagon"  style={{background : el.title ? '#092F53' : ""}}>
          <div class="hexagontent">{el.title}</div>
        </div>
      </div>
    ))}
  </div>
  );
}

export default App;
