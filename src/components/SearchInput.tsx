import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

interface Props {
  onSearch: (searchText: string) => void;
}

export const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup startElement={<BsSearch color="gray.500" />}>
        <Input
          ref={ref}
          ps="2.5em"
          borderRadius={20}
          placeholder="Search games..."
          variant="subtle"
        />
      </InputGroup>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
`;
