import SearchBar from "./Search/SearchBar";
import * as S from "./style";

const Navbar = ({ handleInputChange, searchInput }) => {
  return (
    <S.Navigation>
      <S.SiteTitle>To-Do List</S.SiteTitle>
      <div className="links">
        <S.MyButton to="/">Home</S.MyButton>
        <S.MyButton to="/create">Create New</S.MyButton>
      </div>
      <SearchBar
        handleInputChange={handleInputChange}
        searchInput={searchInput}
      />
    </S.Navigation>
  );
};

export default Navbar;
