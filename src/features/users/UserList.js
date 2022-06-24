// ** Table Columns

// ** Third Party Components
// import { ChevronDown } from 'react-feather'
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Delete, Trash2 } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import { deleteUser, getUser, addUser, getStudentData } from "./userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const [ModalToggle, setModalToggle] = useState(false);
  const [Name, setName] = useState("");
  const [Position, setPosition] = useState("");
  const [Email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const [mobile, setmobile] = useState("");
  const [JoiningDate, setJoiningDate] = useState("");
  const [Salary, setSalary] = useState("");

  const [Department, setDepartment] = useState("");

  let user = useSelector(getUser).payload.user;
  console.log("payload :>> ", user);
  useEffect(() => {
    dispatch(getStudentData());
  }, []);
  const basicColumns = [
    {
      name: "ID",
      sortable: true,
      maxWidth: "100px",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      sortable: true,
      minWidth: "225px",
      selector: (row) => row.full_name,
      sortable: true,
    },
    {
      name: "Email",
      sortable: true,
      minWidth: "310px",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Position",
      sortable: true,
      minWidth: "250px",
      selector: (row) => row.post,
      sortable: true,
    },
    {
      name: "Age",
      sortable: true,
      minWidth: "100px",
      selector: (row) => row.age,
      sortable: true,
    },

    {
      name: "Department",
      sortable: true,
      minWidth: "100px",
      selector: (row) => row.Department,
      sortable: true,
    },

    {
      name: "mobile",
      sortable: true,
      minWidth: "100px",
      selector: (row) => row.mobile,
      sortable: true,
    },
    {
      name: "Salary",
      sortable: true,
      minWidth: "100px",
      selector: (row) => row.Salary,
      sortable: true,
    },

    {
      name: "Joining Date",
      sortable: true,
      minWidth: "100px",
      selector: (row) => row.JoiningDate,
      sortable: true,
    },
    {
      name: "DOB",
      sortable: true,
      minWidth: "100px",
      selector: (row) => row.DOB,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => {
        return (
          <>
            {/* <Button
              size="sm"
              style={{ cursor: "pointer" }}
              
            > */}
            <Trash2
              style={{ cursor: "pointer" }}
              onClick={async () => {
                // console.log('row :>> ', row);
                await dispatch(deleteUser(row));
              }}
            />
            {/* </Button> */}
          </>
        );
      },
    },
  ];
  const SubmitData = () => {
    console.log("object :>> ", Name, Email, Position);
    dispatch(
      addUser({
        Name,
        Email,
        Position,
        DOB,
        Salary,
        JoiningDate,
        mobile,
        Department,
      })
    );
    setModalToggle(false);
  };
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        {/* <CardTitle tag="h4">Zero Configuration</CardTitle> */}
        <Row className="text-end">
          <Col className="d-flex justify-content-end ml-10">
            <Button
              size="sm"
              color="danger"
              onClick={() => setModalToggle(!ModalToggle)}
            >
              Add New User
            </Button>
          </Col>
        </Row>
      </CardHeader>
      <div className="react-dataTable">
        <DataTable
          noHeader
          pagination
          data={user?.user}
          columns={basicColumns}
          className="react-dataTable"
          //   sortIcon={<Icon baseClassName="fas" className="fa-plus-circle" sx={{ fontSize: 30 }} />}
          paginationRowsPerPageOptions={[10, 25, 50, 100]}
        />
      </div>
      <div>
        <Modal isOpen={ModalToggle} toggle={() => setModalToggle(!ModalToggle)}>
          <ModalHeader toggle={() => setModalToggle(!ModalToggle)}>
            Modal title
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter Name "
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Position</Label>
                <Input
                  id="position"
                  name="position"
                  placeholder="Enter position"
                  type="text"
                  onChange={(e) => setPosition(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="DOB">Position</Label>
                <Input
                  id="DOB"
                  name="DOB"
                  placeholder="Enter DOB"
                  type="date"
                  onChange={(e) => setDOB(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="joiningDate">Joining Date</Label>
                <Input
                  id="joiningDate"
                  name="joiningDate"
                  placeholder="Enter Joining Date"
                  type="date"
                  onChange={(e) => setJoiningDate(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="mobileNo">Mobile No</Label>
                <Input
                  id="mobileNo"
                  name="mobileNo"
                  placeholder="Enter Mobile No"
                  type="text"
                  onChange={(e) => setmobile(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="mobileNo">Salary</Label>
                <Input
                  id="salary"
                  name="salary"
                  placeholder="Enter Salary"
                  type="salary"
                  onChange={(e) => setSalary(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="mobileNo">Department</Label>
                <Input
                  id="department"
                  name="department"
                  placeholder="Enter department"
                  type="department"
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </FormGroup>
              <Button color="primary" onClick={SubmitData}>
                Add
              </Button>{" "}
              <Button onClick={() => setModalToggle(false)}>Cancel</Button>
            </Form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    </Card>
  );
};

export default UserList;
