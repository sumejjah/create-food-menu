import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import MealDetailsModal from './MealDetailsModal';

import { downloadRecipe } from '../../redux/actions';
import { downloadSuccess } from '../../redux/selectors';

const mapStateToProps = (state, { meal }) => ({
  formValues: getFormValues("MealDetails")(state),
  initialValues: meal,
  downloadSuccess: downloadSuccess(state)
});

const mapDispatchToProps = (dispatch) => ({
  download: (params) => dispatch(downloadRecipe(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(MealDetailsModal);