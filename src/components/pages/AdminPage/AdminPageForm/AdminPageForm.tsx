import React from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

import { Button } from "components/atoms";

import { useAppDispatch, useAppSelector } from "hooks/redux";
import { selectCategoryBySlug } from "store/slices/categorySlice";
import { addProduct } from "store/slices/productSlice";

import { ProductVolumeType } from "types/ProductVolumeType";
import { ProductCategoryType } from "types/ProductCategoryType";

import styles from "./AdminPageForm.module.scss";

type ActionType = {
  payload: string;
  type:
    | "title"
    | "brand"
    | "img"
    | "volume"
    | "barcode"
    | "producerName"
    | "price"
    | "type";
};

type StateType = {
  title: string;
  brand: string;
  img: string;
  volume: number;
  barcode: string;
  producerName: string;
  price: number;
  type: string;
};

const initialState = {
  title: "",
  brand: "",
  img: "",
  volume: 0,
  barcode: "",
  producerName: "",
  price: 0,
  type: "",
};

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "brand":
      return { ...state, brand: action.payload };
    case "img":
      return { ...state, img: action.payload };
    case "volume":
      return { ...state, volume: Number(action.payload) };
    case "barcode":
      return { ...state, barcode: action.payload };
    case "producerName":
      return { ...state, producerName: action.payload };
    case "price":
      return { ...state, price: Number(action.payload) };
    case "type": {
      return { ...state, type: action.payload };
    }
    default:
      throw new Error();
  }
}

const AdminPageForm: React.FC = () => {
  const category = useAppSelector(selectCategoryBySlug("cosmetics-hygiene"));
  const [state, formDispatch] = React.useReducer(reducer, initialState);
  const reduxDispatch = useAppDispatch();
  const navigate = useNavigate();

  const addProductHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(state);
    if (
      state.title &&
      state.brand &&
      state.img &&
      state.volume &&
      state.barcode &&
      state.producerName &&
      state.type &&
      state.price
    ) {
      const productVolume: ProductVolumeType = {
        qty: state.volume,
        unit: "мл",
      };
      const productCategory: ProductCategoryType = {
        name: "Косметика и гигиена",
        slug: "cosmetics-hygiene",
        type: {
          name: state.type,
          options: [],
        },
      };

      reduxDispatch(
        addProduct({
          product: {
            id: Number(nanoid()),
            ...state,
            volume: productVolume,
            category: productCategory,
            isPopular: true,
          },
        })
      );

      navigate("/catalog/cosmetics-hygiene");
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.form__control}>
        <label className={styles.form__label} htmlFor="title">
          Название
        </label>
        <input
          value={state.title}
          onChange={(e) =>
            formDispatch({ type: "title", payload: e.target.value })
          }
          className={styles.form__input}
          type="text"
          id="title"
        />
      </div>
      <div className={styles.form__control}>
        <label className={styles.form__label} htmlFor="brand">
          Бренд
        </label>
        <input
          value={state.brand}
          onChange={(e) =>
            formDispatch({ type: "brand", payload: e.target.value })
          }
          className={styles.form__input}
          type="text"
          id="brand"
        />
      </div>
      <div className={styles.form__control}>
        <label className={styles.form__label} htmlFor="img">
          URL картинки
        </label>
        <input
          value={state.img}
          onChange={(e) =>
            formDispatch({ type: "img", payload: e.target.value })
          }
          className={styles.form__input}
          type="text"
          id="img"
        />
      </div>
      <div className={styles.form__control}>
        <label className={styles.form__label} htmlFor="volume">
          Объём
        </label>
        <input
          value={state.volume}
          onChange={(e) =>
            formDispatch({ type: "volume", payload: e.target.value })
          }
          className={styles.form__input}
          type="number"
          id="volume"
        />
      </div>
      <div className={styles.form__control}>
        <label className={styles.form__label} htmlFor="barcode">
          Штрихкод
        </label>
        <input
          value={state.barcode}
          onChange={(e) =>
            formDispatch({ type: "barcode", payload: e.target.value })
          }
          className={styles.form__input}
          type="text"
          id="barcode"
        />
      </div>
      <div className={styles.form__control}>
        <label className={styles.form__label} htmlFor="producerName">
          Производитель
        </label>
        <input
          value={state.producerName}
          onChange={(e) =>
            formDispatch({ type: "producerName", payload: e.target.value })
          }
          className={styles.form__input}
          type="text"
          id="producerName"
        />
      </div>
      <div className={styles.form__control}>
        <label className={styles.form__label} htmlFor="price">
          Стоимость
        </label>
        <input
          value={state.price}
          onChange={(e) =>
            formDispatch({ type: "price", payload: e.target.value })
          }
          className={styles.form__input}
          type="number"
          id="price"
        />
      </div>
      <div className={styles.form__control}>
        <label className={styles.form__label} htmlFor="type">
          Тип уборки
        </label>
        <select
          value={state.type}
          onChange={(e) =>
            formDispatch({ type: "type", payload: e.target.value })
          }
          className={styles.form__select}
          name=""
          id=""
        >
          <option value="">Выберите тип</option>
          {category?.types?.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <Button tag="button" type="submit" onClick={addProductHandler}>
        Добавить
      </Button>
    </form>
  );
};

export default AdminPageForm;
