import React, {useState} from 'react';

import 'devextreme/dist/css/dx.light.css';
import './App.css';
import {DataGrid} from "devextreme-react";
import {Column, ColumnChooser, SearchPanel} from "devextreme-react/data-grid";

function App() {
    const [column, setColumn] = useState([]);
    const serviceUrl = 'http://77.78.198.63:252/sifre';
    const kolone = [
        "id",
        "klasifikacija",
        "naziv",
        "karakteristikaA",
        "karakteristikaB",
        "karakteristikaC",
        "karakteristikaD",
        "karakteristikaE"
    ];


    return (
        <div className="App">
            <div className={"main"}>
            <DataGrid
                className={"tabela"}
                dataSource={serviceUrl}

            >

                <SearchPanel visible={true} placeholder={'Pretraga'}/>
                {kolone.map((value, key) => {
                    return <Column key= {key} dataField={value} />
                })}
                <ColumnChooser title={'Sakrivene kategorije'} enabled={true}/>
            </DataGrid>
                </div>
            <aside>
            </aside>
        </div>
    );
}

async function fetchColumn() {
    let columns = null;
    let response = null;
    columns = await fetch('http://77.78.198.63:252/kolone');
    response = await columns.json();
    return response;
}

export default App;
