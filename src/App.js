import './App.css';
import PersonForm from './Components/PersonForm';
import Main from './Main';

function App() {
  const editperson = {fname:'bob',lname:'boberson'}
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Manager</h1>
      </header>
      <Main></Main>
      <PersonForm></PersonForm>
      <PersonForm obj={editperson} />
    </div>
  );
}

export default App;
