import React,{Component} from 'react';
import ScrollableTable from "../../Common/ScrollableTable/ScrollableTable";

class App extends Component{
    render(){
        return(
            <div>
                <div style={{display:'flex',justifyContent:'center',marginTop:'3%'}}>
                    <ScrollableTable

                        // header and body data displays

                        theadData={theadData}
                        tbodyData={tbodyData}

                        // table styles here

                        theadStyle={theadStyle}
                        tableStyle={tableStyle}
                        containerStyle={containerStyle}

                        // table row on click action

                        tableOnClick={this.tableOnClick}

                    />
                </div>

            </div>

        )
    }

}
const theadData=["Id","Description","Qty","Price"];

// add the table body data

const tbodyData=[];

// add style to table head

const theadStyle={backgroundColor:'#F2F5F4',borderBottom:'1px solid lightgray',display:'flex',alignItems:'center',fontWeight:'normal',overflow:'hidden',height:'65px'};


// add style to table

const tableStyle={boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 8px 0 rgba(0, 0, 0, 0.19)'};
// add style to table included container

const containerStyle={width:'100%',marginBottom: '3%'}

export default App;