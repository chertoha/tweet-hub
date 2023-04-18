import PropTypes from "prop-types";
import Card from "components/Card";
import { Item, List } from "./CardList.styled";

const CardList = ({ list, favorites }) => {
  return (
    <List>
      {list.map((item) => (
        <Item key={item.id}>
          <Card {...item} favorites={favorites} />
        </Item>
      ))}
    </List>
  );
};

export default CardList;

CardList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
