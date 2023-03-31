import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";

const API_URL = "https://bootcamp-rent-cars.herokuapp.com/customer/car";

const Detail = () => {
  const [detailData, setDetailData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API_URL}/${id}`);
      setDetailData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      Detail
      <Navbar />
      <div>{detailData.name}</div>
      <div>{detailData.price}</div>
    </div>
  );
};

export default Detail;
