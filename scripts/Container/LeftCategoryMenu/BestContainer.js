import React, {Component} from 'react';

class CategoryItem extends Component {
  constructor(props) {
    super(props);

    this.createListItem = this.createListItem.bind(this);
    this.createSubListItem = this.createSubListItem.bind(this);
  }
  createListItem(list) {
    return (
      <div className="sub_category item">
        <a href="#">{list.title}</a>
      </div>
    )
  }
  createSubListItem(subList) {
    return (
      <li>
        {
          subList.header &&
          <h5 className="">
            <a href="#">{subList.header}</a>
          </h5>
        }
        {subList.list.map(this.createListItem)}
      </li>
    )
  }
  render() {
    const { category } = this.props;
    return (
      <div>
        <div id="sub_category">
          <div className="sub_category_button">
            <div className="sub_category_text">{category.menuHeader}</div>
          </div>
        </div>
        <menu className="sub_category_list">
          <div className="sub_category_header">{category.subHeader}</div>
          <ul >
            {category.subList.map(this.createSubListItem)}
          </ul>
        </menu>
      </div>
    )
  }
}

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.createCategoryItem = this.createCategoryItem.bind(this);
  }
  createCategoryItem(category) {
    return <CategoryItem category={category} />;
  }
  render() {
    const { categories } = this.props;
    if (Array.isArray(categories)) {
      return <div>{categories.map(this.createCategoryItem)}</div>;
    } else {
      return <div>{this.createCategoryItem(categories)}</div>;
    }
  }
}

export default class MenuContainer extends Component {
  displayName() {
    return 'MenuContainer';
  }
  constructor() {
    super();

    this.state = {
      categories: {
        menuHeader: '베스트',
        subHeader: '전체보기',
        subList: [{
          header: '의류',
          list: [
            {title: '옷'},
            {title: '옷'},
            {title: '옷'}
          ]
        }]
      }
    };
  }
  render() {
    console.log(this.state);
    return (
      <CategoryList categories={this.state.categories} />
    );
  }
}