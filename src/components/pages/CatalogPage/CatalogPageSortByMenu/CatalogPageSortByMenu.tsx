import React from "react";

import { OptionType } from "types/OptionType";
import styles from "./CatalogPageSortByMenu.module.scss";

const options: OptionType[] = [
  {
    label: "Название",
    value: "name",
  },
  {
    label: "Стоимость",
    value: "price",
  },
];

interface Props {
  sortBy: OptionType | null;
  setSortBy: (option: OptionType) => void;
}

const SortBy: React.FC<Props> = ({ sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleOptionClick(option: OptionType) {
    setSortBy(option);
    setIsOpen(false);
  }

  React.useEffect(() => {
    setSortBy(options[0]);
  }, [setSortBy]);
  return (
    <div className={styles.sortby}>
      <button
        className={styles.sortby__btn}
        data-open={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <strong>Сортировка:</strong> {sortBy?.label ?? ""}
      </button>
      {isOpen && (
        <ul className={styles.menu}>
          {options.map((option) => (
            <li
              className={styles.menu__item}
              key={option.value}
              data-selected={option.value === sortBy?.value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortBy;
