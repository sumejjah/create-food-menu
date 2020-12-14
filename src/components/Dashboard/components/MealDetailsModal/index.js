import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import MealDetailsModal from './MealDetailsModal';

import { downloadRecipe } from '../../redux/actions';

const mapStateToProps = (state, { meal }) => ({
  formValues: getFormValues("MealDetails")(state),
  initialValues: meal
});

const mapDispatchToProps = (dispatch) => ({
  download: (params) => dispatch(downloadRecipe(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(MealDetailsModal);