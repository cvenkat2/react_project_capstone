import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import Footer from './components/Footer'
import MetaTags from 'react-meta-tags';
import './App.css';

function App() {
  return (
    <>
     <div>
      <MetaTags>
        <meta name="og:description" content='description'/>
        <meta name='og:image' content=''/>
        <meta name='og:title' content='Little Lemon'/>
      </MetaTags>
      <Header/>
      <Main/>
      <Nav/>
      <Footer/>
     </div>
      
    </>
  );
}

export default App;
