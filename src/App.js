import "./App.css";
import { Table, Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ListUser from './components/ListUser';
import ViewUser from  './components/ViewUser';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser'

export default function App() {
  return  <BrowserRouter>
   
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">API Application</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Add">Add New</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container className="pt-5" >
          <Routes>
            <Route index element={<ListUser/>}  />
            <Route path="Add" element={<AddUser/>}  />
            <Route path="users/:userId/edit" element={<EditUser/>}  />
            <Route path="users/:userId" element={<ViewUser/>}  />
            
          </Routes>


        </Container>
      </div>
    </BrowserRouter>
  
}
