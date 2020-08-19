import React from 'react';

const Client = (props) => (
    <div className={props.className}>
        <table className="table">
            <thead className="thead-dark text-center">
                <tr>
                    <th scope="col">Client Name : {props.clientName}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row"><ClientURL/></th>
                </tr>
                <tr>
                <th scope="row"><ClientURL/></th>
                </tr>
                <tr>
                <th scope="row"><ClientURL/></th>
                </tr>
            </tbody>
            </table>
    </div>
)

class ClientName extends React.Component {

    render(){
        return (
        <div>{this.props.clientname}</div>
        )
    }
}

class ClientURLs extends React.Component {

    render(){
        return (
            <div></div>
        )
    }
}


class ClientURL extends React.Component {
    render(){
        return (
            <div><a href='#'> Hyperlink title </a></div>
        )
    }
}
export default Client;