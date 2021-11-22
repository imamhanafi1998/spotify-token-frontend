import "./styles.css";
import axios from "axios";

export default function App() {
  const submitH = async () => {
    const token = document.getElementById("token").value;
    try {
      const {
        data
      } = await axios.post(
        "https://spotify-token.netlify.app/.netlify/functions/api/token",
        { token }
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      document.getElementById("token").value = null;
    }
  };

  return (
    <div className="App">
      <input type="text" id="token" />
      <button
        onClick={submitH}
        style={{ marginLeft: "20px", marginTop: "20px" }}
      >
        SUBMIT
      </button>
    </div>
  );
}
