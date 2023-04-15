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
import { useUpdateUserMutation } from "redux/users/usersApi";
import { convertNumberToLocale } from "utils/convertNumberToLocale";

const Card = ({ userData }) => {
  const [updateUser] = useUpdateUserMutation();

  const {
    user,
    tweets,
    followers,
    isFollowing,
    avatar = defaultAvatar,
  } = userData;

  const onFollowClick = () => {
    updateUser({
      ...userData,
      isFollowing: !isFollowing,

      // followers: "100500",
      followers: isFollowing
        ? (+followers - 1).toString()
        : (+followers + 1).toString(),
    });
  };

  return (
    <StyledCard>
      <AvatarBar>
        <ImageWrapper>
          <img src={avatar} alt={user} width="62" height="62" />
        </ImageWrapper>
      </AvatarBar>
      <CardMeta>
        <CardText>{`${convertNumberToLocale(tweets)} ${
          tweets === 1 ? "tweet" : "tweets"
        }`}</CardText>

        <CardText>{`${convertNumberToLocale(followers)} ${
          followers === 1 ? "Followers" : "Followers"
        }`}</CardText>

        <CardButton
          type="button"
          isActive={isFollowing}
          onClick={onFollowClick}
        >
          {isFollowing ? "Following" : "Follow"}
        </CardButton>
      </CardMeta>
    </StyledCard>
  );
};

export default Card;

Card.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    user: PropTypes.string.isRequired,
    tweets: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
    isFollowing: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
};
