import developerAvatar from "assets/images/developer_avatar.jpg";
import {
  AvatarImage,
  AvatarWrapper,
  DevAvatarBar,
  DevLink,
  GoToTweetsLink,
  LinksItem,
  LinksList,
  LinksTitle,
  StyledDevCard,
  TweetsLinkButton,
} from "./DeveloperCard.styled";
import { useLocation } from "react-router-dom";
import { ROUTES } from "router";

const DeveloperCard = () => {
  const location = useLocation();

  return (
    <StyledDevCard>
      {/* <AvatarWrapper>
        <AvatarImage src={developerAvatar} alt="Anton Chertok" />
      </AvatarWrapper> */}

      <DevAvatarBar>
        <AvatarWrapper>
          <AvatarImage src={developerAvatar} alt="Anton Chertok" />
        </AvatarWrapper>
      </DevAvatarBar>

      <LinksTitle>Anton Chertok</LinksTitle>
      <LinksList>
        <LinksItem>
          <DevLink to="https://github.com/chertoha" target="_blank">
            GitHub
          </DevLink>
        </LinksItem>
        <LinksItem>
          <DevLink
            to="https://www.linkedin.com/in/anton-chertok/"
            target="_blank"
          >
            LinkedIn
          </DevLink>
        </LinksItem>
        <LinksItem>
          <DevLink to="https://www.facebook.com/chertoha/" target="_blank">
            Facebook
          </DevLink>
        </LinksItem>
        <LinksItem>
          <DevLink to="mailto:a.chertok@akatech.com.ua" target="_blank">
            Email: a.chertok@akatech.com.ua
          </DevLink>
        </LinksItem>
        <LinksItem>
          <DevLink to="tel:+380667262367" target="_blank">
            Tel: +38 (066) 726 23 67
          </DevLink>
        </LinksItem>
      </LinksList>

      <GoToTweetsLink to={ROUTES.TWEETS} state={{ from: location }}>
        <TweetsLinkButton>Go to /tweets</TweetsLinkButton>
      </GoToTweetsLink>
    </StyledDevCard>
  );
};

export default DeveloperCard;
