import React, {Component} from 'react';

class ModifyItem extends Component {
	/*
	Mock these functions using Jest and the Enzyme shallow function instance.
	let mockFun1 = jest.fn();
	shallow(<App/>).instance().addItem = mockFun1;
	*/
	addItem(itemObj) {
		throw new Error('Mock this function');
	}
	modifyItem(oldItem, newItem) {
		throw new Error('Mock this function');
	}
	deleteItem(itemname) {
		throw new Error('Mock this function');
	}
	
	/*
	The functions onAddItem, onModifyItem and onDeleteItem are not completed. But they don't have to be. You are allowed to write a better implementation, but you don't need to do that to finish the exercise.
	Use the Enzyme shallow function "instance" to call them. Example:
	shallow(<App/>).instance().onAddItem({type: 'click'});
	You may add event handlers and call them using shallow(<App/>).simulate(..)
	*/
	onAddItem(event) {
		this.addItem({name: 'wheelchair', price: 5000});
	}
	onModifyItem(event) {
		this.modifyItem({name: 'rocket', price: 100000000}, {name: 'shuttle', price: 90000000});
	}
	onDeleteItem(event) {
		this.deleteItem('grapefruit');
	}
	
	render() {
		// Optional: add event handlers using onClick
		return (
			<div>
				<input type="text" value="item1-name"/>
				<input type="text" value="item1-price"/>
				<button>Add new item</button> <br/>
				<button>Modify price for existing item</button> <br/>
				<button>Delete item</button> <br/>
			</div>
		)
	}
}

//export default ......