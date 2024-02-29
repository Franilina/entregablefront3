import React from 'react';

function App() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [error, setError] = useState('');
    const [submittedData, setSubmittedData] = useState(null);
  
    const handleInputChange1 = (event) => {
      setInput1(event.target.value);
    };
  
    const handleInputChange2 = (event) => {
      setInput2(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      if (input1.trim().length < 3 || input1.trim().startsWith(' ') || input2.trim().length < 6) {
        setError('Por favor chequea que la información sea correcta');
        return;
      }
  
      setSubmittedData({ input1, input2 });
      setError('');
    };

  return (
    <div className="App">
    <h1>Elige un color</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input1">Input 1:</label>
        <input 
          type="text" 
          id="input1" 
          value={input1} 
          onChange={handleInputChange1} 
        />
      </div>
      <div>
        <label htmlFor="input2">Input 2:</label>
        <input 
          type="text" 
          id="input2" 
          value={input2} 
          onChange={handleInputChange2} 
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
    {error && <p>{error}</p>}
    {submittedData && (
      <div>
        <h2>Información enviada:</h2>
        <p>Input 1: {submittedData.input1}</p>
        <p>Input 2: {submittedData.input2}</p>
      </div>
    )}
  </div>
);
}

export default App;