// src/pages/Dashboard.js
import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";
import Layout from "../components/Layout";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  // ✅ SESSION-SAFE AUTH CHECK (FIXES EMAIL VERIFY ISSUE)
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        navigate("/login");
        return;
      }

      setUser(data.session.user);
      fetchImages(data.session.user.id);
    };

    checkSession();
  }, [navigate]);

  // ✅ Fetch images and generate signed URLs
  const fetchImages = async (userId) => {
    try {
      const { data, error } = await supabase
        .storage
        .from("user-images")
        .list(userId, { limit: 100 });

      if (error) throw error;

      const urls = await Promise.all(
        data.map(async (file) => {
          const { data: signedUrlData, error } = await supabase
            .storage
            .from("user-images")
            .createSignedUrl(`${userId}/${file.name}`, 3600);

          if (error) throw error;
          return signedUrlData.signedUrl;
        })
      );

      setImages(urls);
    } catch (error) {
      console.error("Error fetching images:", error.message);
    }
  };

  // ✅ Handle file upload
  const handleUpload = async () => {
    if (!file || !user) return;

    setUploading(true);
    const fileName = `${Date.now()}-${file.name}`;

    try {
      const { error: uploadError } = await supabase
        .storage
        .from("user-images")
        .upload(`${user.id}/${fileName}`, file);

      if (uploadError) throw uploadError;

      const { data: signedUrlData, error } = await supabase
        .storage
        .from("user-images")
        .createSignedUrl(`${user.id}/${fileName}`, 3600);

      if (error) throw error;

      setImages(prev => [signedUrlData.signedUrl, ...prev]);
      setFile(null);
    } catch (error) {
      console.error("Upload error:", error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Layout>
      <p>
        <h2>Welcome, <b>{user?.user_metadata?.username || "User"}</b></h2>
      </p>
      <ImageGallery
        images={images}
        onUpload={handleUpload}
        uploading={uploading}
        setFile={setFile}
      />
    </Layout>
  );
}
