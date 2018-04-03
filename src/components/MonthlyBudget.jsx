import React from 'react';


class MonthlyBudget extends React.Component {

    constructor(props)  {
        super(props);


    }


    componentWillReceiveProps(nextProps) {

    }

    render() {
        return(
            <div className="card">
                <form>
                    <div className="row justify-content-end">
                        <div className="col-7 mr-auto pl-5">
                            <label>Housing</label>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{width : (100-this.props['housing-percent'])+'%'}}>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <br />
                            <div className = "input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">$</div>
                                </div>
                                <input className="budget-amount" type="number" value={this.props.budget['salary'] * this.props['housing-percent']/100} onChange={function(){}} />
                            </div>
                        </div>
                        <div className="col-auto pr-5">
                            <br />
                            <div className = "input-group">
                                <input className="budget-percent" type="number" defaultValue="20" />
                                <div className="input-group-append">
                                    <div className="input-group-text">%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        )

    };

}


MonthlyBudget.defaultProps = {
    budget: 65000,
   'housing-percent': 20
};


export default MonthlyBudget;