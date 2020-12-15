import { connect } from 'react-redux';

import FoodList from './FoodList';
import { getMealsRequest, getMealsSuccess, getMealsFail } from '../../redux/selectors';


const mapStateToProps = (state) => ({
  mealsRequest: getMealsRequest(state),
  meals: getMealsSuccess(state),
  mealsFail: getMealsFail(state)
})

export default connect(mapStateToProps)(FoodList);