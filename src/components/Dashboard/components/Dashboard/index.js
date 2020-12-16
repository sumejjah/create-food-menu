import { connect } from 'react-redux';
import Dashboard from "./Dashboard";

import { getMeals } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  getMeals: (keyword) => dispatch(getMeals(keyword)),
});

export default connect(null, mapDispatchToProps)(Dashboard);
