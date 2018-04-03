

import SalaryForm from "../components/SalaryForm";
import {connect} from "react-redux";
import {updateBudget} from "../redux/actions";

const mapStateToProps = (state) => {
    let {budget} = state;
    return {budget};
};


const mapDispatchToProps = (dispatch) => {
  return {updateBudget: (formState) => dispatch(updateBudget(formState))};
};

export default connect(mapStateToProps, mapDispatchToProps) (SalaryForm)