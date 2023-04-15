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

const links = [
  { label: "GitHub", link: "https://github.com/chertoha" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/anton-chertok/" },
  { label: "Facebook", link: "https://www.facebook.com/chertoha/" },
  {
    label: "Email: a.chertok@akatech.com.ua",
    link: "mailto:a.chertok@akatech.com.ua",
  },
  { label: "Tel: +38 (066) 726 23 67", link: "tel:+380667262367" },
];

const DeveloperCard = () => {
  const location = useLocation();

  return (
    <StyledDevCard>
      <DevAvatarBar>
        <AvatarWrapper>
          <AvatarImage src={developerAvatar} alt="Anton Chertok" />
        </AvatarWrapper>
      </DevAvatarBar>

      <LinksTitle>Anton Chertok</LinksTitle>
      <LinksList>
        {links.map(({ label, link }) => (
          <LinksItem key={label}>
            <DevLink to={link} target="_blank">
              {label}
            </DevLink>
          </LinksItem>
        ))}
      </LinksList>

      <GoToTweetsLink to={ROUTES.TWEETS} state={{ from: location }}>
        <TweetsLinkButton>Go to /tweets</TweetsLinkButton>
      </GoToTweetsLink>
    </StyledDevCard>
  );
};

export default DeveloperCard;
