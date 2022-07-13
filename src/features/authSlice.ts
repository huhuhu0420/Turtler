import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  AuthState,
  LoginDetails,
  SignupDetails,
  UserDetails,
} from "../types/auth.types";
import { auth, db } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { setDoc, doc, getDoc, getDocs, collection } from "firebase/firestore";

const initialState: AuthState = {
  userDetails: null,
  id: "",
  allUsers: [],
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: LoginDetails, thunkAPI) => {
    try {
      toast.info("Logging in, wait a few seconds");
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in!");
    } catch (error: any) {
      toast.error(error.message);
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (
    { email, password, firstName, lastName, userName }: SignupDetails,
    thunkAPI
  ) => {
    try {
      toast.info("Signing up, wait a few seconds");

      await createUserWithEmailAndPassword(auth, email, password);

      toast.success("Successfully signed up!");

      const user: any = auth.currentUser;
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      await setDoc(doc(db, "users", auth.currentUser!.uid), {
        displayName: auth.currentUser!.displayName,
        email: auth.currentUser!.email,
        userName: userName,
        photo: null,
        followers: [],
        following: [],
        posts: [],
        likedPosts: [],
        bookmarkedPosts: [],
      });
    } catch (error: any) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "auth/getUserDetails",
  async (id: string, thunkAPI) => {
    try {
      const docData = await getDoc(doc(db, "users", id));
      return docData.data() as UserDetails;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload;
    },
    setAllUsers(state, action) {
      state.allUsers = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.userDetails = action.payload;
    });
  },
});

export const { setUser, setAllUsers } = authSlice.actions;

export default authSlice.reducer;
