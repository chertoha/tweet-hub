import BackLink from "components/BackLink";
import PageTitle from "components/PageTitle";
import { StyledBar } from "./TweetsToolbar.styled";

const TweetsToolbar = () => {
  return (
    <StyledBar>
      <BackLink>Back</BackLink>
      <PageTitle>Users List</PageTitle>
    </StyledBar>
  );
};
export default TweetsToolbar;
