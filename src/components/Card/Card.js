import PropTypes from "prop-types";
import defaultAvatar from "assets/images/card/default-avatar.png";
import {
  AvatarBar,
  CardButton,
  CardMeta,
  CardText,
  ImageWrapper,
  StyledCard,
} from "./Card.styled";
import {
  useGetFavoritesQuery,
  useLazyGetFavoritesQuery,
  useUpdateFavoritesMutation,
  useUpdateUserMutation,
} from "redux/users/usersApi";
import { convertNumberToLocale } from "utils/convertNumberToLocale";
import { useEffect, useState } from "react";

const Card = ({
  id,
  user,
  tweets,
  followers,
  // isFollowing,
  avatar = defaultAvatar,
  favorites,
}) => {
  const [updateFavorites] = useUpdateFavoritesMutation();
  const [follow, setFollow] = useState(null);

  useEffect(() => {
    const result = favorites.find(({ userId }) => userId === id);
    setFollow(result);
  }, [favorites, id]);
  // useEffect(() => {
  //   fetchFavorites().then(({ data }) => {
  //     // const result = favorites.includes(id);
  //     // console.log(favorites);
  //     // const result = data.find(({ userId }) => userId === id);
  //     // setIsFollowing(result);
  //     // setFollow(result);
  //   });
  // }, [favorites, fetchFavorites, id]);

  // useEffect(() => {
  //   if (favorites) {
  //     console.log(favorites);
  //     const result = favorites.find(({ userId }) => userId === id);
  //     setFollow(result);
  //   }
  // }, [favorites, id]);

  const onFollowClick = () => {
    const method = follow ? "DELETE" : "POST";
    const body = method === "POST" ? { userId: id } : null;
    updateFavorites({ id: follow?.id, method, body });
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

        <CardButton type="button" isActive={follow} onClick={onFollowClick}>
          {follow ? "Following" : "Follow"}
        </CardButton>
      </CardMeta>
    </StyledCard>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  user: PropTypes.string.isRequired,
  tweets: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  // isFollowing: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  favorites: PropTypes.array.isRequired,
};
