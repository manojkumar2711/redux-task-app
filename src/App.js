import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Addtask from './components/Addtask';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Provider } from 'react-redux';
import { store } from './store';
import TaskList from './components/TaskList';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Navbar />


        <Row className="justify-content-md-center">
          <Col lg="6">
            <Addtask />
            <TaskList/>

          </Col>
        </Row>

      </Container>

    </Provider>
  );
}

export default App;
