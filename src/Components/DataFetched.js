import React, { useState, useEffect } from "react";
import DataCard from "../Components/DataDisplayed";
import axios from "axios";

export default function DataList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=H1CI0YQyDi8KqoYTbfal3iZi2hOAVYyeZdbUcHKF"
      )
      .then(response => {
        //console.log(response.data.title);
        const info = response.data;
        console.log(info);
        setData(info);
      }) //.then close
      .catch(error => {
        console.log("NASA data not returned- ", error);
      }); //.catch close
  }, []); // useEffect close

  return (
    <div>
      <DataCard
        title={data.title}
        date={data.date}
        copyright={data.copyright}
        hdurl={data.hdurl}
        explanation={data.explanation}
      />
    </div>
  );
} //DataList close
