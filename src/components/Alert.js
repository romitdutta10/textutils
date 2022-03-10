import React from 'react'

export default function Alert(props) {

    const capitalize = (text) => {
        return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
    }
  return (
      <div style={{height: '50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message} 
      </div>}
      </div>
  )
}
