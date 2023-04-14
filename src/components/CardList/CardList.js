import PropTypes from "prop-types";
import Card from "components/Card";
import { Item, List } from "./CardList.styled";

const CardList = ({ list }) => {
  return (
    <List>
      {list.map((item) => (
        <Item key={item.id}>
          <Card userData={item} />
        </Item>
      ))}
    </List>
  );
};

export default CardList;

CardList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
