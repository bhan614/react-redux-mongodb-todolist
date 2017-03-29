import { connect } from 'react-redux';
import HomeView from '../components/HomeView';
import { refreshTodo, addTodo, deleteItem } from '../../../store/todoreducer';

const mapStateToProps = (state) => {
  return {
    todoList: state.todoState,
  }
}

const HomeViewContainer = connect(
  mapStateToProps,
  {refreshTodo, addTodo, deleteItem}
)(HomeView)

export default HomeViewContainer;
