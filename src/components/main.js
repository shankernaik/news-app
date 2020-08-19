import React from 'react';
import Client from './client';

const clients = [
    'ABC',
    'DEF',
    'PQR',
    'XYZ',
];

class  Main extends React.Component {

    render(){
        var clientDiv = [];
        for (let index = 0; index < clients.length; index+=2 ) {
            let left = clients[index];
            let right = clients[index+1];

            if(left != null && right != null ){
                clientDiv.push(
                    <div className="row">
                        <Client clientName={left}  className="col-md-6"/>
                        <Client clientName={right}  className="col-md-6"/>
                    </div>
                );
            }
            else if(left != null && right == null ){
                clientDiv.push(
                    <div className="row">
                        <Client clientName={left}  className="col-sm-6"/>
                    </div>
                );
            }
            else if(left == null && right == null ){
                // do nothing
            }
        }
        return (
            <div  className="container">
                {clientDiv}
            </div>
        )
    }
}

export default Main;