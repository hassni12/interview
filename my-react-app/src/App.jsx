import { useEffect } from "react";
import { useState } from "react";


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        await fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((data) => setData(data));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    const intervel = setInterval(fetchData, 5000);
    return () => clearInterval(intervel);
  }, []);
  if (isLoading) return <strong>connecting....</strong>;

  return (
    <>
      {data.map((info, i) => (
        <strong key={i}>{info.title}</strong>
      ))}
    </>
  );
}

export default App;
