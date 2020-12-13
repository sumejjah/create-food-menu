import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import MealDetailsModal from './MealDetailsModal';

const mapStateToProps = (state, { meal }) => ({
  formValues: getFormValues("MealDetails")(state),
  initialValues: meal
});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps)(MealDetailsModal);