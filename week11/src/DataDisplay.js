import React, { useEffect, useState } from "react";

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>API 데이터 가져오기</h1>
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))
      ) : (
        <p>데이터를 불러오는 중...</p>
      )}
    </div>
  );
}

export default DataDisplay;
