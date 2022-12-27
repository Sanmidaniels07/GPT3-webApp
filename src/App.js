import React from "react"
import {Footer, Blog, Possibility, Features, Whatgpt3, Header} from './containers'
import { CTA, Brand, Navbar, Feature} from './components'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
<Navbar/>
<Header/>

</div>
<Brand/>
<Whatgpt3/>
<Features/>
<Feature/>
<Possibility/>
<CTA/>
<Blog/>
<Footer/>
    </div>
  );
}

export default App;
