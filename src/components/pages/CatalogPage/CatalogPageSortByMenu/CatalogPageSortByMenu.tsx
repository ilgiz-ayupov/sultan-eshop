import React from "react";

import styles from "./CatalogPageSortByMenu.module.scss";

type OptionType = {
  label: string;
  value: string;
};

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

const SortBy: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState<OptionType>(
    options[0]
  );

  function handleOptionClick(option: OptionType) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  return (
    <div className={styles.sortby}>
      <button
        className={styles.sortby__btn}
        data-open={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <strong>Сортировка:</strong> {selectedOption.label}
      </button>
      {isOpen && (
        <ul className={styles.menu}>
          {options.map((option) => (
            <li
              className={styles.menu__item}
              key={option.value}
              data-selected={option.value === selectedOption.value}
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
