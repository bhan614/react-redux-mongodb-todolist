import React from 'react';
import DeleteIcon from '../assets/delete.png';

class TodoItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showDel: false  // 控制删除 icon 的显示隐藏
		}
	}

	handleDelete () {
		// 获取父组件传递过来的 date
		const id = this.props.id;
		// 执行父组件的 delete 方法
		this.props.onDeleteItem(id);
	}

	render() {
		return (
			<div className="todoItem">
				<p>
					<span className="itemCont">{ this.props.content }</span>
					<span className="itemTime">{ this.props.date }</span>
					<button className="delBtn" onClick={this.handleDelete.bind(this)}>
						<img className="delIcon" src={DeleteIcon} />
					</button>
				</p>
			</div>
		)
	}
}

export default TodoItem;
