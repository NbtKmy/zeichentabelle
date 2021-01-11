import React, { Fragment } from 'react';
import { connect } from "react-redux";
import styles from "./styles.module.css";

@connect((store) => {
  return {
    copy_status: store.copyReducer.copy_status
  };
})


export default class CopyAlert extends React.Component {



  render() {

    const { copy_status } = this.props;



    if (!copy_status) {
        return (
          null
        )
      } else {
        return (
          <h3 className={styles.alert}>Kopiert!</h3>
      )
    }
  }
}
