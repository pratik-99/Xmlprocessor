import logo from './logo.svg';
import './App.css';
import "./Table.css";
import axios from 'axios'
import React,{useState} from 'react';
import AssetsTable from './AssetsTable';
import exportFromJSON from 'export-from-json'
import LoaderComp from './Loader'
import "./components/AssetAttribute.css"
import { Button, Table } from 'react-bootstrap';

import {
  JsonToExcel
} from 'react-json-excel';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AssetAttribute from './components/AssetAttribute';
import Home from './Home';
function App() {

const [file, setFile] = useState(null);
const[jsonData,setJsonData]=useState([]);
const[loader,setLoader]=useState(false);
const data = jsonData
const fileName = 'download'  
const exportType = 'xls' 
const ExportToExcel = () => {  
    exportFromJSON({ data, fileName, exportType })  
  }  

const fetchData = (e) =>{
setFile(e.target.files[0])
}
const handleSubmit = () =>{
var form = new FormData();
form.append("file", file)
setLoader(true);
  axios.post('https://localhost:44392/api/fileupload', form).then(data =>{
  console.log(data.data)
  setJsonData(data.data);
  setLoader(false);
}).catch(err => {
  console.log(err)
})

}
      if(loader) {
        return <LoaderComp/>
      }
      return (
          <div className="App">
            <input type="file"  name="file" onChange={fetchData}  />
            <br></br>
            <Button variant="dark" onClick={handleSubmit} >Get </Button> 
          {jsonData.length >0 && 
            <AssetsTable  jsonData={jsonData}/>
          }
         
          <br></br><br/><button type="button" onClick={ExportToExcel}>Export To Excel</button>  
          
          </div>
        );
}

export default App;
