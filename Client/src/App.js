import Login from './components/auth/login.js'
import './App.css';
import Button from './components/onboarding/button-choice'
import ButtonSubmit from './components/onboarding/button-submit'

function App() {
  return (
    <div className="App">
      <Login />
      <Button label="Choice" />
      <ButtonSubmit label="Hello" />
    </div>
  );
}

export default App;
