import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "components/atoms";

import styles from "./ErrorPage.module.scss";

interface ErrorPageProps {
  status: number;
  message: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ status, message }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.box}>
      <h1 className={styles.title}>{status}</h1>
      <p className={styles.desc}>{message}</p>
      <Button
        className={styles.btn}
        tag="button"
        type="button"
        onClick={() => navigate(-1)}
      >
        Вернуться назад
      </Button>
    </div>
  );
};

export default ErrorPage;
