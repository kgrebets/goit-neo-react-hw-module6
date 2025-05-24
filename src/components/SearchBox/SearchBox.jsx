import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";

function SearchBox() {
  const dispatch = useDispatch();

  const filterName = useSelector((state) => state.filters.name);

  const handleSearchTermChange = (term) => {
    dispatch(changeFilter(term));
  };

  return (
    <div className={styles.container}>
      Find contacts by name:
      <br />
      <input
        type="text"
        value={filterName}
        onChange={(e) => handleSearchTermChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
