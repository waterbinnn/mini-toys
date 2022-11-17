import React from 'react';
import { connect } from 'react-redux';

import { Container, P, Button } from './Counter.style';

//Action
function incrementCounter(num) {
  return {
    type: 'INCREMENT',
    num: num,
  };
}
function decreaseCounter(num) {
  return {
    type: 'DECREASE',
    num: num,
  };
}

function Counter(props) {
  function incrementClick() {
    props.incrementCounter(1);
  }
  function decreaseClick() {
    props.decreaseCounter(1);
  }

  return (
    <Container>
      <Button type="button" onClick={decreaseClick}>
        Decrease
      </Button>
      <P>{props.count}</P>
      <Button type="button" onClick={incrementClick}>
        Increment
      </Button>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

const mapDispatchToProps = {
  incrementCounter,
  decreaseCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
