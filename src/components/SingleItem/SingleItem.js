import React from "react";
import styles from "./SingleItem.module.css";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/actions";

const SingleItem = ({ singleItem, addToCart }) => {
  return (
    <div className={styles.singleItem}>
      <img className={styles.singleItem__image} src={singleItem.image} alt="" />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{singleItem.title}</p>
        <p className={styles.details__description}>{singleItem.description}</p>
        <p className={styles.details__price}>$ {singleItem.price}</p>

        <button
          onClick={() => addToCart(singleItem.id)}
          className={styles.details__addBtn}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    singleItem: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
