import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { PostCard, PostLoader } from "../../components";
import { getBookmarkedPosts } from "../../services/postServices";
import Select from 'react-select'

export const Bookmark = () => {
  let { bookmarkedPosts, bookmarkedPostsLoading, posts } = useAppSelector(
    (store) => store?.posts
  );

  const auth = useAppSelector((store) => store.auth);
  // admin
  const adminId = process.env.REACT_APP_ADMIN_ID;
  const [switchedId, setSwichedId] = useState(auth.id);
  const { allUsers } = useAppSelector((store) => store.auth);
  const switchedUsers = allUsers.filter((user) => user.id === switchedId);
  interface IKeys { value: string; label: string }
  let options = allUsers.map((user) => ({
    value: user.id+"",
    label: user.userName+""
  } as IKeys))
  const customStyles = {
    option:(provided:any) => ({
      ...provided,
      color:"black",
    }),
  }
  bookmarkedPosts = posts.filter(
    (post) => 
      switchedUsers[0].bookmarkedPosts.some((p) => p === post.postID),
  )

  // admin
  let title = (auth.id === adminId) ? "Bookmarks [Admin]" : "Bookmarks";

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBookmarkedPosts());
  }, []);
  return (
    <>
      <main className="main-container">
        <h4 className="title">{title}</h4>

        {(auth.id === adminId) && (
          <>
            <Select 
            options={options} 
            onChange={(choice) => setSwichedId(choice?.value+"")}
            styles={customStyles}
            />
          </>
        )}

        {bookmarkedPostsLoading ? (
          <PostLoader />
        ) : (
          bookmarkedPosts?.map((post) => {
            return <PostCard key={post.postID} {...post} />;
          })
        )}
      </main>
    </>
  );
};
