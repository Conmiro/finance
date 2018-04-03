import React from "react";
import SalaryForm from "./containers/SalaryForm";
import MonthlyBudget from "./containers/MonthlyBudget";

import './App.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {getInitialData} from "./redux/actions";
import {connect} from "react-redux";


class App extends React.Component {
    componentDidMount() {
        this.props.getInitialData();
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-1 col-xl-2">
                </div>
                <div className="col-lg col-xl">
                    Salary Form
                    <SalaryForm />
                    <br />
                    Monthly Budget
                    <MonthlyBudget/>
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

export default connect(null, {getInitialData}) (App);