// @flow
/* eslint-disable */


import { connect } from 'react-redux';

import { sayHelloAsync } from '../action/hello';
import Button from '../component/button';

const mapStateToProps = () => ({
  label: 'Say hello asyncronously and send 1234',
});

const mapDispatchtoProps = dispatch => ({
  handleClick: () => { dispatch(sayHelloAsync(1234)) },
});

export default connect(mapStateToProps, mapDispatchtoProps)(Button);
