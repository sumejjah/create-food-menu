import { connect } from 'react-redux';
import { push } from "connected-react-router";

import ErrorPage from "./ErrorPage";

const mapDispatchToProps = (dispatch) => ({
  goToUrl: (url) => dispatch(push(url))
})
export default connect(null, mapDispatchToProps)(ErrorPage);
