// src/Auth.js
import { supabase } from "./supabase";

/**
 * SIGN UP USER
 * - Creates auth user
 * - Stores username in user_metadata
 */
export const signUpUser = async (email, password, username) => {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username },
      emailRedirectTo: `https://creative-showcase-nu.vercel.app/dashboard`
    }
  });
};

  if (error) {
    console.error("SIGNUP ERROR:", error.message);
    return null;
  }

  return data.user;
};

/**
 * LOGIN USER
 * - Uses Supabase Auth ONLY
 */
export const loginUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password: password.trim(),
  });

  if (error) {
    console.error("LOGIN ERROR:", error.message);
    return null;
  }

  return data.user;
};

/**
 * LOGOUT USER
 */
export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("LOGOUT ERROR:", error.message);
  }
};

/**
 * GET CURRENT USER
 */
export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error("GET USER ERROR:", error.message);
    return null;
  }
  return data.user;
};

/**
 * UPDATE USERNAME (user_metadata)
 */
export const updateUsername = async (username) => {
  const { data, error } = await supabase.auth.updateUser({
    data: { username: username.trim() },
  });

  if (error) {
    console.error("UPDATE USERNAME ERROR:", error.message);
    return null;
  }

  return data.user;
};
