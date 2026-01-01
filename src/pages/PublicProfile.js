import { useParams } from "react-router-dom";

export default function PublicProfile() {
  const { username } = useParams();

  return (
    <div>
      <h1>Profile: {username}</h1>
    </div>
  );
}