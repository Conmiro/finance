


import MonthlyBudget from "../components/MonthlyBudget";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    let {budget} = state;
    return {budget};
};


const mapDispatchToProps = (dispatch) => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps) (MonthlyBudget)