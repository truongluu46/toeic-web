import { useEffect } from "react";
import axiosClient from "./utils/axiosClient";

function App() {
  useEffect(() => {
    axiosClient.get("/health")
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>TOEIC Practice Web</h1>

       <p>Học từ vựng & Thi thử TOEIC</p>
    </div>
  );
}

export default App;






