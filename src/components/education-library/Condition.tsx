import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useGetConditionQuery, useGetFilterQuery } from "../../utils/ApiSlice";
import axios from "axios";
import Pagination from "../past-appointments/Pagination";

const Condition: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isSuccess } = useGetConditionQuery(page);
  const [images, setImages] = useState<string[]>([]);

  const [search, setSearch] = useState("");
  const { data: searchItems, isSuccess: getSearch } = useGetFilterQuery(search);

  useEffect(() => {
    if (isSuccess && getSearch) {
      const promises = (search.length > 0 ? searchItems : data).results.map((list: { coverImage: string }) => {
        return axios.get(`https://devapi.myorthopedicproblem.com/v1/s3/signed/url?fileName=${list.coverImage}`);
      });
      Promise.all(promises).then((responses) => {
        const images = responses.map((response) => response.data.url);
        setImages(images);
      });
    }
  }, [isSuccess, data, getSearch, search.length, searchItems]);

  return (
    <div>
      <div className="d-flex align-content-center mt-3">
        <input
          type="text"
          className="border-1 px-2 feild-form"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="bg-primary px-1 align-content-center">
          <IoSearch className="bg-primary text-white fs-4" />
        </div>
        <div className="bg-primary ms-2 p-1 px-2 align-content-center">
          <FaFilter className="bg-primary text-white fs-5" />
        </div>
      </div>
      <div className="mt-4">
        <Row>
          {images.map((image, index) => (
            <Col md={3} key={index} className="d-flex mb-4">
              <Card className="p-2 bg-white hover-card border-0">
                <div className="w-100">
                  <img src={image} className="mb-3 img rounded-3" />
                </div>

                <Card.Header className="text-secondary border border-0 bg-white">
                  <h4 className="m-0">{data.results[index].evaluationTypeId.label}</h4>
                </Card.Header>
                <Card.Header className="border border-0 bg-white">
                  <h4>{data.results[index].title}</h4>
                </Card.Header>
              </Card>
            </Col>
          ))}
          {isSuccess && <Pagination page={page} setPage={setPage} pageCount={search.length > 0 ? searchItems.totalPages : data.totalPages} />}
        </Row>
      </div>
    </div>
  );
};

export default Condition;
