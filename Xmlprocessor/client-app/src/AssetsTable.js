import React, { useState } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Link } from 'react-router-dom';
import OnlyAssets from './components/OnlyAssets';
import { Grid, GridColumn } from 'semantic-ui-react'
import Table from 'react-bootstrap/Table'
import "./Table.css"; 

const AssetsTable = (props) => {
    const [selectAttributes, setSelectAttributes] = useState([])
    const [renDer, setRenDer] = useState(false)
    // if(renDer){
    //     return <OnlyAssets attributes={setSelectAttributes} renDer= {renDer} />
    // }

    return (


        <Grid columns={2}>
            <Grid.Column >
                <div class="center">
                    
                    <Table  id="table-to-xls" striped bordered hover>
                        <thead style={{backgroundColor:"lightblue"}}>
                            <tr >
                                <th style={{ color: 'black' }}>Id</th>
                                <th style={{ color: 'black' }}>Name</th>
                                <th style={{ color: 'black' }}>Description</th>
                                <th style={{ color: 'black' }}>Assets</th>

                            </tr>
                        </thead>
                        {props.jsonData.map(asset => (

                            <tbody  >
                                <tr >
                                    <td>{asset.AssetId}</td>
                                    <td>{asset.Name}</td>
                                    <td>{asset.Description}</td>
                                    <button style={{ style: 'none' }} onClick={() => setSelectAttributes(asset.Attributes)} >

                                        Click Here to See Attributes
                                    </button>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                    <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="download-table-xls-button"
                        table="table-to-xls"
                        filename="tablexls"
                        sheet="tablexls"
                        buttonText="Download as XLS" />


                </div>
            </Grid.Column>
            <Grid.Column>
             <div class="center">
                    
                    {selectAttributes.length > 0 &&
                        <Table striped bordered hover>
                        <thead style={{backgroundColor: "lightblue"}}>
                            <tr >
                                <th style={{ color: 'black' }}>Name</th>
                                <th style={{ color: 'black' }}>DataType</th>
                                <th style={{ color: 'black' }}>Value</th>
                            </tr>
                        </thead>
    
                 {selectAttributes.map(l =>{
                                    return (
                                        <tbody >
                                        <tr>
                                        <td>{l.Name}</td> 
                                        <td>{l.DataType}</td>
                                        <td>{l.Value}</td>
                                        </tr>
                                        </tbody>
                                        )
                                    })}
                </Table>
                    }
                    </div>
                
            </Grid.Column>
        </Grid>


    )
}

export default AssetsTable;
