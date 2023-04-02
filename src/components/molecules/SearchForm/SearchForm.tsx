import React from "react";

import { Form, FormControl, Input, FormButton } from "components/atoms";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";


interface SearchFormProps extends React.HTMLProps<HTMLFormElement> {
  className?: string;
}

const SearchForm: React.FC<SearchFormProps> = (props) => {
  return (
    <Form {...props}>
      <FormControl>
        <Input name="search" type="text" placeholder="Поиск..." />
        <FormButton type="submit">
          <SearchIcon />
        </FormButton>
      </FormControl>
    </Form>
  );
};

export default SearchForm;
