import React, { Component } from 'react';
import { connect } from 'react-redux';

const Input = () => {
  return (
    <div><button>click me</button></div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(Input);