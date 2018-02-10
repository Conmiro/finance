import React from "react";
import SalaryForm from "./SalaryForm";
import './App.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-1 col-xl-2">
                </div>
                <div className="col-lg col-xl">
                    <SalaryForm />
                </div>
                <div className="col-lg-1 col-xl-2">
                </div>
            </div>
        );
    }
}

App.defaultProps = {
    name: "User"
};

export default App;