import React from "react";
import '../SalaryForm.scss';

class SalaryForm extends React.Component {

    constructor(props) {
        super(props);
        // bindings
        this.slideSalary = this.slideSalary.bind(this);
        this.typeAnnualSalary = this.typeAnnualSalary.bind(this);
        this.typeHourlySalary = this.typeHourlySalary.bind(this);
        this.updateSalary = this.updateSalary.bind(this);
        this.releaseSliderSalary = this.releaseSliderSalary.bind(this);

        this.state = {
            salary: 50000,
            upperLimit: 200000
        };
        console.log(this.state);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.budget['salary'] != this.state['salary'])
            this.updateSalary(nextProps.budget['salary']);
    }


    slideSalary(event) {
        let slider = event.target;
        let amount = slider.value;
        this.setState({
            salary: amount
        });
        this.updateBudget();


    };

    updateSalary(salary) {
        // update salary in state
        this.setState({
            salary: salary
        });
        // update upper limit for slider
        salary > 50000 ? this.setState({upperLimit: salary*2}) : this.setState({upperLimit: 200000})
    }

    releaseSliderSalary(event) {
        event.type = "touchend" && (event.preventDefault());
        const salary = this.state.salary;
        this.updateSalary(salary);
    }

    typeAnnualSalary(event) {
        const salary = event.target.value;
        this.setState({
            salary: salary
        });
        this.updateSalary(salary);
    };

    typeHourlySalary(event) {
        const salary = Math.round(event.target.value*40*52)
        this.setState({
            salary: salary
        });
        this.updateSalary(salary);
    }

    getHourly() {
        return Math.round(this.state['salary'] / 40 / 52 * 100) / 100;

    }

    updateBudget() {
        this.props.updateBudget({salary: this.state.salary});
    }

    render() {
        return (

            <div className = "card">
                <form>
                    <div className="form-row justify-content-end">
                        <div className="col-7 mr-auto pl-5">
                            <label>Salary</label>
                            <input className="form-control" type="range"  step="500" min="500" max={this.state.upperLimit} onTouchEnd={this.releaseSliderSalary} onMouseLeave={this.testLeave} onClick={this.releaseSliderSalary} onChange={this.slideSalary} value={this.state.salary} />
                        </div>
                        <div className="col-auto">
                            <label>Annual</label>
                            <div className = "input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">$</div>
                                </div>
                                <input className="annual-salary form-control" type="number" onChange={this.typeAnnualSalary} value={this.state.salary} />
                            </div>
                        </div>
                        <div className="col-auto pr-5">
                            <label>Hourly</label>
                            <div className = "input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">$</div>
                                </div>
                                <input className="hourly-salary form-control" type="number" onChange={this.typeHourlySalary} value={this.getHourly()} />
                                <div className="input-group-append">
                                    <div className="input-group-text">/hr</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

SalaryForm.defaultProps = {
    budget: { }
};

export default SalaryForm;