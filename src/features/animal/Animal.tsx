import { styled } from '@mui/material';

const Animal: React.FC = () => {
  return (
    <Root>
      <h3>動物一覧</h3>
      <ul>
        <List>犬</List>
        <List>猫</List>
        <List>ハムスター</List>
        <List>あざらし</List>
      </ul>
    </Root>
  );
};
export default Animal;

const Root = styled('div')(() => ({
  margin: '10rem auto',
}));
const List = styled('li')(() => ({
  marginTop: '1rem',
}));
