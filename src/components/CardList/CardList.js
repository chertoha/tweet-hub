import PropTypes from "prop-types";
import Card from "components/Card";
import { Item, List } from "./CardList.styled";

const CardList = () => {
  return (
    <List>
      <Item>
        <Card />
      </Item>
      <Item>
        <Card />
      </Item>
      <Item>
        <Card />
      </Item>
      <Item>
        <Card />
      </Item>
      <Item>
        <Card />
      </Item>
      <Item>
        <Card />
      </Item>
    </List>
  );
};

export default CardList;
