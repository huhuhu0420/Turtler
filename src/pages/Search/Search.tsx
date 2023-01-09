import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { PostCard, PostLoader } from "../../components";
import {setLastDoc } from "../../features/postsSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPosts, getNewPosts } from "../../services/postServices";
// import { conformsTo } from "lodash";


export const Search = () => {
  const { postsLoading, posts, latestDoc, newPostsLoading } = useAppSelector(
    (store) => store?.posts
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLastDoc());
    dispatch(getPosts(latestDoc));
  }, []);

  const fetchDataHandler = () => {
    dispatch(getNewPosts(latestDoc));
  };

  useEffect(() => {
    if (
      latestDoc &&
      posts.length !== 0 &&
      !postsLoading &&
      document.body.clientHeight === window.innerHeight ||
      getStr.length!=0
    ) {
      dispatch(getNewPosts(latestDoc));
    }
  }, [latestDoc]);



  var [getStr,setGetStr]=useState("");
  function changeValue(e: React.ChangeEvent<HTMLInputElement>){
    setGetStr(e.target.value);
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.postDescription.includes(getStr) ||
      post.displayName.includes(getStr) ||
      post.userName.includes(getStr)
  )



  return (
    <>
      <main className="main-container">
        <h4 className="title">Search</h4>
        <input type="text" onChange={changeValue} />
        {/* <button onClick={}/> */}

        {postsLoading ? (
          <PostLoader />
        ) : (
          <InfiniteScroll
            dataLength={posts.length} //This is important field to render the next data
            next={fetchDataHandler}
            hasMore={latestDoc === undefined ? false : true}
            loader={<PostLoader />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <h4>Yay! You have seen it all</h4>
              </p>
            }
          >
            {filteredPosts.map((post) => {
              console.log(getStr);
              return <PostCard key={post.postID} {...post} />;
            })
            }
            
          </InfiniteScroll>
        )}
        {newPostsLoading && <PostLoader />}
      </main>
    </>
  );
};
