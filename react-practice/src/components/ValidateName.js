import React, { Component } from 'react';

export default function ValidateName(props) {
  console.log(props)
  return (
    !props.hasError
      ? <></>
      : <h5>{ props.message }</h5>
  )
}