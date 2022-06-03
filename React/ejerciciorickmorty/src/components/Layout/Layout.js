import List from "../../components/List";
import Navbar from "../../components/Navbar";
import Pagination from "../../components/Pagination";
import { useDarkModeContext } from "../../contexts/DarkModeContext";

export default function Layout({
  setSearchCharacter,
  page,
  setPage,
  maxPage,
  list,
  setList,
}) {
  const { darkMode } = useDarkModeContext();

  return (
    <div className="App">
      <header className={darkMode ? "App-header-dark" : "App-header-light"}>
        <Navbar setPage={setPage} setSearchCharacter={setSearchCharacter} />
        <br></br>
        <Pagination page={page} setPage={setPage} maxPage={maxPage} />
        <List list={list} setList={setList} />
      </header>
    </div>
  );
}

