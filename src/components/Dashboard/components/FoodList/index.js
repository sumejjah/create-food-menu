import { connect } from 'react-redux';

import FoodList from './FoodList';
import { getMealsRequest, getMealsSuccess } from '../../redux/selectors';


const mapStateToProps = (state) => ({
  mealsRequest: getMealsRequest(state),
  meals: getMealsSuccess(state)
})

export default connect(mapStateToProps)(FoodList);