import { Arr } from "./arr"
import { Name } from "./name"
import { Event } from "./event";


function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>שלום! האפליקציה הראשונה שלי ב-React פועלת!</h1>
      <p>כל שינוי שאשמור כאן יופיע מיד בדפדפן.</p>
      <Name paramter="button"> </Name>
      <Arr></Arr>
      <Event name="adi" min="button"></Event>
    </div>
    
  )
}

export default App