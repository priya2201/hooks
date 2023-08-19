import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import MouseDown from './components/MouseDown';
import ClickCounter2 from './components/ClickCounter2';
import Hovercounter2 from './components/HOvercounter2';
import User from './components/User';
import Counter from './components/Counter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
function App() {
  return (
    <div className="App">
          {/* <ErrorBoundary>

   <Hero heroName="Joker"/></ErrorBoundary>
   <ErrorBoundary><Hero heroName="batman"/>
   </ErrorBoundary> */}
   <ClickCounter/>
   <HoverCounter/>
   <MouseDown name='pia'/>
   {/* <ClickCounter2/>
  //  <Hovercounter2/> */}
   <User render={(isLoggedIn)=>isLoggedIn?'pia':'vina'}/>
   <Counter>{(count,incrementCount)=>(
   <ClickCounter2 count={count} incrementCount={incrementCount}/>
  )}
  
   </Counter>
   {/* <Counter render={(count,incrementCount)=>(
<Hovercounter2 count={count} incrementCount={incrementCount}/>
   )}/> */}
  <Counter>{(count,incrementCount)=>(
<Hovercounter2 count={count} incrementCount={incrementCount}/>
   )}
   </Counter>
   {/* <UserProvider value="pia">   <ComponentC/></UserProvider> */}
   {/* <UserProvider value="pia">    */}
   <ComponentC/>
   {/* </UserProvider> */}


    </div>
  );
}

export default App;
