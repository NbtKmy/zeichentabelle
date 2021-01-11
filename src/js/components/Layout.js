import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { uiList, uiTile } from '../actions/uiActions';
import { filterChars } from '../actions/filterActions';
import { copyStatus } from '../actions/copyActions';

import CopyAlert from './CopyAlert';

import char_table from "../tables/char_table.json";
import cat_table from "../tables/char_category.json";

import styles from "./styles.module.css";


@connect((store) => {
  return {
    ui_list: store.uiReducer.ui_list,
    ui_tile: store.uiReducer.ui_tile,
    chars_filtered: store.filterReducer.chars_filtered,
    copy_status: store.copyReducer.copy_status
  };
})



export default class Layout extends React.Component {
  componentDidMount() {
    this.props.dispatch(copyStatus());
  }



  uiList(){
    this.props.dispatch(uiList());
  }

  uiTile(){
    this.props.dispatch(uiTile());
  }

  filterChars(chars, cat){
    this.props.dispatch(filterChars(chars, cat));
  }

  copyStatus(){
    this.props.dispatch(copyStatus());
  }




  render() {

    const { ui_list, ui_tile, chars_filtered, copy_status } = this.props;

    console.log(ui_tile);
    console.log(chars_filtered);
    console.log(copy_status);



    const buttons = cat_table.map((cat) =>
    <button className={styles.btn2} key={cat.key} onClick={() => this.filterChars(char_table, cat.desc)}>{cat.name}</button>);

    const chars_list = chars_filtered.map((c) =>
    <div className={styles.list} key={c.char}>
      <h3>{c.char}</h3>
      <p>{c.desc}</p>
    </div>
    );

    const chars_tile = chars_filtered.map((c) =>
    <CopyToClipboard text={c.char} key={c.char} onCopy={this.copyStatus.bind(this)}>
    <button className={styles.tile} key={c.char}>
      <h3>{c.char}</h3>
    </button>
    </CopyToClipboard>
    );

    if (!ui_tile) {
      if (chars_filtered.length == 0){
        return (
          <React.Fragment>
          <div className={styles}>
          <button className={styles.btn} onClick={this.uiTile.bind(this)}><img src="./js/icons/tiles.svg" width="50" height="50" /></button>
          <div>{buttons}</div>
          </div>
          </React.Fragment>
        )
      } else {
        return (
        <React.Fragment>
        <button className={styles.btn} onClick={this.uiTile.bind(this)}><img src="./js/icons/tiles.svg" width="50" height="50" /></button>
        <div>{buttons}</div>
        <div>{chars_list}</div>
        </React.Fragment>
      )
      }
    }
   else if (ui_tile) {
     if (chars_filtered.length == 0){
       return (
         <React.Fragment>
         <button className={styles.btn} key="listUI" onClick={this.uiList.bind(this)}><img src="./js/icons/list.svg" width="50" height="50" /></button>
         <div>{buttons}</div>
         </React.Fragment>
       )
     } else {
       return (
       <React.Fragment>
       <button className={styles.btn} key="listUI" onClick={this.uiList.bind(this)}><img src="./js/icons/list.svg"  width="50" height="50"/></button>
       <div>{buttons}</div>
       <div>{chars_tile}</div>
       <div className={styles.text}>
       <h1>Durch Klick wird das Zeichen in Clipboard kopiert</h1>
       </div>
       <CopyAlert />
       </React.Fragment>
     )
     }
    }
  }
}
