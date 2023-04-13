import PropTypes from "prop-types";
import {
  AvatarBar,
  CardButton,
  CardMeta,
  CardText,
  ImageWrapper,
  StyledCard,
} from "./Card.styled";
import defaultAvatar from "assets/images/card/default-avatar.png";

const Card = ({
  id,
  user,
  tweets,
  followers,
  isFollowing,
  avatar = defaultAvatar,
}) => {
  return (
    <StyledCard>
      <AvatarBar>
        <ImageWrapper>
          <img src={avatar} alt={user} width="62" height="62" />
        </ImageWrapper>
      </AvatarBar>
      <CardMeta>
        <CardText>777 tweets</CardText>
        <CardText>100,500 Followers</CardText>
        <CardButton type="button">Follow</CardButton>
      </CardMeta>
    </StyledCard>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
