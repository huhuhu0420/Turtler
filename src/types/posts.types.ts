export type Posts = {
  comments: {
    uid: string;
    comment: string;
  }[];
  createdAt: any;
  likes: string[];
  postDescription: string;
  uid: string;
  displayName: string;
  photo: string | null;
  userName: string;
  postID: string;
};

export type PostState = {
  postsLoading: boolean;
  posts: Posts[];
  postModal: boolean;
  editPost: Posts | null;
};
