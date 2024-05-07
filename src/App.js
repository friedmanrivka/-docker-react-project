
import './App.css';

import store from './FinalProject/redux/store';
import { Provider } from 'react-redux';
import Navbar from './FinalProject/components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import HomePageComponent from './FinalProject/components/HomePageComponent';



function App() {
  return (
    <div className="App">
      <div className="App-header" >
        {/* <Component1></Component1> */}
        {/* <ProductsComponent></ProductsComponent> */}
        {/* <SliderPictures><BananaComp></BananaComp><PeachComp></PeachComp><KiwiComp></KiwiComp><StrawberryComp></StrawberryComp></SliderPictures>*/}
         {/* <UseRefExample></UseRefExample> */}
         
         {/* <NavbarComponent></NavbarComponent> */}
       {/* <Provider store={store}>
          
          <ShopComponent></ShopComponent>
        </Provider>  */}


       {/* <UseFormExample></UseFormExample>  */}
       
     <div style={{"marginTop":"-600px"}}>
    
      <Provider store={store}>    
      <BrowserRouter >

      <Navbar></Navbar> 
    
      <HomePageComponent></HomePageComponent>
      
      </BrowserRouter>    
        </Provider>  
        </div>
      </div>
    </div>
  );
}

export default App;
