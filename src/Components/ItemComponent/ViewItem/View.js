import React, {Component} from 'react';
import ScrollableTable from "../../Common/ScrollableTable/ScrollableTable";
import axios from '../../../axios/axios-item';

class App extends Component {

    state = {
        itemDetails: []
    }

    componentDidMount() {
        axios.get(`items`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    itemDetails: response.data
                })
            })

            .catch(error => {
                console.log("error: " + error)
            });
    }

    render() {

        // add the table body data

        const tbodyData = [];


        const itemData = this.state.itemDetails;

        itemData.map(item => {
                tbodyData.push({
                    "id": item.code,
                    "description": item.description,
                    "qty": item.qty,
                    "price": item.unitprice,
                });
            }
        );


        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '3%'}}>
                    <ScrollableTable

                        // header and body data displays

                        theadData={theadData}
                        tbodyData={tbodyData}

                        // table styles here

                        theadStyle={theadStyle}
                        tableStyle={tableStyle}
                        containerStyle={containerStyle}
                        trStyle={trStyle}

                        // table row on click action

                        tableOnClick={this.tableOnClick}

                    />
                </div>

            </div>

        )
    }

}

const theadData = ["Id", "Description", "Qty", "Price"];

// add style to table head

const theadStyle = {
    backgroundColor: '#F2F5F4',
    borderBottom: '1px solid lightgray',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    overflow: 'hidden',
    height: '65px',
    color: 'black'
};


// add style to table

const tableStyle = {boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 8px 0 rgba(0, 0, 0, 0.19)'};
// add style to table included container

const containerStyle = {width: '100%', marginBottom: '3%'};

const trStyle = {
    color: 'black',
    fontWeight: 'bold'
}

export default App;