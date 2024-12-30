import React, { useState } from "react";
import { Col, Row, Spinner, Table } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import { useGetAppointmentsQuery } from "../../utils/ApiSlice";
import moment from "moment";
import { IoCallOutline } from "react-icons/io5";
import profile from "../../assets/defaultUserMOP.svg";
import Pagination from "./Pagination";
import { AiOutlineMessage } from "react-icons/ai";
import { BsCameraVideo } from "react-icons/bs";

interface listType {
  provider: { name: string };
  appointmentDate: string;
  appointmentTime: string;
  contactMode: string;
  status: string;
}

const PastAppointments: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isSuccess } = useGetAppointmentsQuery(page);

  return (
    <div>
      <Row className="d-flex flex-nowrap m-0 p-0">
        <Col className="d-flex m-0 me-3 sticky-top vh-100">
          <Sidebar />
        </Col>
        <Col className="d-flex flex-fill p-4 Bg-color justify-content-center">
          <div className="m-5 shadow-lg p-5 rounded-4 bg-white w-100">
            <h2>Past Appointments</h2>
            <Table className="mt-4">
              <thead>
                <tr className="text-center">
                  <th className="text-start text-secondary opacity-75">PROVIDER</th>
                  <th className="text-secondary opacity-75">TYPE</th>
                  <th className="text-secondary opacity-75">REQUEST DATE & TIME</th>
                  <th className="text-secondary opacity-75">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={4} className="text-center">
                      <Spinner animation="border" role="status" />
                    </td>
                  </tr>
                ) : (
                  isSuccess ?
                  data.remoteVisit.docs.map((list: listType, index: number) => (
                    <tr key={index} className="text-center">
                      <td className="text-start text-primary d-flex align-items-center gap-2">
                        <img src={profile} alt="pro" className="img-fluid" width={30} />
                        {list.provider.name}
                      </td>
                      <td className="text-primary fs-small">
                        {(list.contactMode === "AUDIO" && <IoCallOutline />) ||
                          (list.contactMode === "CHAT" && <AiOutlineMessage />) ||
                          (list.contactMode === "VIDEO" && <BsCameraVideo />) ||
                          "Office"}
                      </td>
                      <td className="fw-semibold text-secondary opacity-75">
                        {moment(list.appointmentDate).format("DD/MM/YY") + " " + list.appointmentTime}
                      </td>
                      <td className="success fw-semibold">{list.status}</td>
                    </tr>
                  )) : 
                  <tr>
                    <td colSpan={4} className="text-center fw-semibold">
                      No data found
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            <div>{isSuccess && <Pagination setPage={setPage} pageCount={data.remoteVisit.totalPages} page={page} />}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PastAppointments;
