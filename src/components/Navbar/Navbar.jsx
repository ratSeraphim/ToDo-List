import SearchBar from "./Search/SearchBar";
import * as S from "./style";

const Navbar = () => {
  return (
    <S.Navigation>
      <S.SiteTitle>To-Do List</S.SiteTitle>
      <div className="links">
        <S.MyButton to="/">Home</S.MyButton>
        <S.MyButton to="/create">Create New</S.MyButton>
      </div>
      <SearchBar />
    </S.Navigation>
  );
};

export default Navbar;
