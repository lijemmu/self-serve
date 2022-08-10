import './Styles/App.css';
import './InputBox';
import './Button';
import InputBox from './InputBox';
import Button from './Button';

function App() {

  const values = [
    {engText:"Enter your table number", amhText:"terepeza kuter yasgebu"},
    {engText:"Number of people per table", amhText:"ye sew kuter be terepeza"}
  ];


  return (<div>
    <InputBox engText={values[0].engText} amhText={values[0].amhText}/>
    <InputBox engText={values[1].engText} amhText={values[1].amhText}/>
    <Button />
    </div>
  );
}

export default App;
