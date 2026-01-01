import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function ImageGallery() {
  const [user, setUser] = useState(null);
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Get logged-in user
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();
  }, []);

  // 🔹 Fetch images
  const fetchImages = async (userId) => {
    const { data, error } = await supabase.storage
      .from("images")
      .list(userId, {
        limit: 100,
        sortBy: { column: "created_at", order: "desc" }
      });

    if (!error) setImages(data || []);
  };

  // 🔹 Upload image
  const uploadImage = async () => {
    if (!file || !user) return;

    setLoading(true);

    const filePath = `${user.id}/${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("images")
      .upload(filePath, file);

    if (!error) {
      setFile(null);
      fetchImages(user.id); // 🔥 instant refresh
    }

    setLoading(false);
  };

  // 🔹 Load images when user is ready
  useEffect(() => {
    if (user) fetchImages(user.id);
  }, [user]);

  return (
    <div style={styles.container}>
      <h3>Upload Image</h3>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={uploadImage} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>

      <hr />

      <h3>My Images</h3>

      <div style={styles.gallery}>
        {images.map((img) => (
          <img
            key={img.name}
            src={`${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/images/${user.id}/${img.name}`}
            alt=""
            style={styles.image}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    textAlign: "center"
  },
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "center"
  },
  image: {
    width: "180px",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px"
  }
};