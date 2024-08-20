import React, { useState, useEffect } from "react";
import { Card, Col, Dropdown, DropdownButton, Row, Spinner } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useGetConditionQuery, useGetSearchQuery, useGetFilterQuery } from "../../utils/ApiSlice";
import axios from "axios";
import Pagination from "../past-appointments/Pagination";
import Select from "react-select";
import { Options } from "../../constant/Constant";

const Condition: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isSuccess, isLoading } = useGetConditionQuery(page);
  const [images, setImages] = useState<string[]>([]);

  const [search, setSearch] = useState("");
  const { data: searchItem, isSuccess: getSearch } = useGetSearchQuery({ value: search, page });

  const [filter, SetFilter] = useState("");
  const { data: filteredItems } = useGetFilterQuery({ value: filter, page });

  const searchItems = filteredItems?.totalResults > 0 ? filteredItems : searchItem;
  const Item = searchItems?.results.length > 0 ? searchItems : data;

  useEffect(() => {
    if (isSuccess && getSearch) {
      const promises = Item.results.map((list: { coverImage: string }) => {
        return axios.get(`https://devapi.myorthopedicproblem.com/v1/s3/signed/url?fileName=${list.coverImage}`);
      });
      Promise.all(promises).then((responses) => {
        const images = responses.map((response) => response.data.url);
        setImages(images);
      });
    }
  }, [isSuccess, data, getSearch, search.length, searchItems, filter.length, Item]);

  return (
    <div>
      <div className="d-flex align-content-center mt-3">
        <div className="d-flex">
          <input
            type="search"
            className="border-1 px-2 feild-form rounded-start-2"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <div className="bg-primary px-1 align-content-center rounded-end-2">
            <IoSearch className="bg-primary text-white fs-4" />
          </div>
        </div>

        <DropdownButton
          variant="none"
          className="bg-primary align-content-center custom-dropdown p-0 ms-2 rounded-2"
          title={<FaFilter className="bg-primary text-white fs-5" />}
          autoClose="outside">
          <Dropdown.Item eventKey="X" className="DItem">
            <Select
              className="select"
              closeMenuOnSelect={true}
              isMulti
              options={Options}
              onChange={(option) => SetFilter(option.map((item) => item.value).toString())}
            />
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="mt-4">
        <Row className="d-flex justify-content-center">
          {isLoading ? (
            <Spinner animation="border" role="status" className="mt-5" />
          ) : (
            images.map((image, index) => (
              <Col md={3} key={index} className="d-flex mb-4">
                <Card className="p-2 bg-white hover-card border-0">
                  <div className="w-100">
                    <img src={image} className="mb-3 img rounded-3" />
                  </div>

                  <Card.Header className="text-secondary border border-0 bg-white">
                    <h4 className="m-0">{Item.results[index]?.evaluationTypeId?.label}</h4>
                  </Card.Header>
                  <Card.Header className="border border-0 bg-white">
                    <h4>{Item.results[index]?.title}</h4>
                  </Card.Header>
                </Card>
              </Col>
            ))
          )}
          {isSuccess && <Pagination page={page} setPage={setPage} pageCount={search.length > 0 ? searchItems.totalPages : Item.totalPages} />}
        </Row>
      </div>
    </div>
  );
};

export default Condition;
