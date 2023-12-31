import { useDispatch, useSelector } from "react-redux";
import {
  selectIsBookmarkOpen,
  selectBookmarkCount,
} from "../../store/bookmark/bookmark.action";
import { ReactComponent as Icon } from "../../assets/icons/bookmark";
import classes from "./bookmark-icon.styles.module.css";

const BookmarkIcon = () => {
  const dispatch = useDispatch();
  const bookmarkCount = useSelector(selectBookmarkCount);
  const toggleIsBookmarkOpen = () =>
    dispatch(setIsBookmarkOpen(!isBookmarkOpen));

  return (
    <div className={classes["icon-container"]} onClick={toggleIsBookmarkOpen}>
      <Icon className={classes["icon"]} />
      <span className={classes["counter"]}>{bookmarkCount}</span>
    </div>
  );
};

export default BookmarkIcon;
