import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
//----------------ENUM --------------

const PRICES = { 
    WEB: 500,
    SEO: 300,
    GOOGLE: 200
} 

//---------------------------------

const Form = styled.form`
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  width: fit-content;
  margin: auto;
`;

const H2 = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  padding-bottom: 1rem;
`;


const Label = styled.label`
  padding-bottom: 1rem;
`;

const getFinalPrice = (event, finalPrice, setFinalPrice) => {
  const servicePrice = Number(event.target.value);

  if(event.target.checked) {
    setFinalPrice(finalPrice + servicePrice)
  } else {
    setFinalPrice(finalPrice - servicePrice)
  }
}


function App() {
  const [ finalPrice, setFinalPrice ] = useState(0);

  return (
    <div className="App">
      <H2>¿Qué quieres hacer?</H2>

      <Form>
        <Label>
          <input 
            onClick={(event) => getFinalPrice(event, finalPrice, setFinalPrice)}
            type="checkbox" 
            name="web"
            value={PRICES.WEB} 
            /> 
              {" "}Una página web ({PRICES.WEB}E)
        </Label>
        <Label>
          <input 
            onClick={(event) => getFinalPrice(event, finalPrice, setFinalPrice)}
            type="checkbox" 
            name="seo"
            value={PRICES.SEO}
            /> 
              {" "}Una consultoría SEO ({PRICES.SEO}E)
        </Label>
        <Label>
          <input 
            onClick={(event) => getFinalPrice(event, finalPrice, setFinalPrice)}
            type="checkbox" 
            name="google"
            value={PRICES.GOOGLE}/> 
              {" "}Una campaña de Google Ads ({PRICES.GOOGLE}E)
        </Label>
      </Form>

      <p>Precio: {finalPrice}</p>
    </div>
  );
}

export default App;
