import React from 'react';

const CategoryItem = React.createClass({
  displayName: 'CategoryItem',
  createListItem(list) {
    return (
      <div className="sub_category item">
        <a href="#">{list.title}</a>
      </div>
    )
  },
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
  },
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
});

const CategoryList = React.createClass({
  displayName: 'CategoryList',
  createCategoryItem(category) {
    return <CategoryItem category={category} />;
  },
  render() {
    const { categories } = this.props;
    if (Array.isArray(categories)) {
      return <div>{categories.map(this.createCategoryItem)}</div>;
    } else {
      return <div>{this.createCategoryItem(categories)}</div>;
    }
  }
});

const MenuContainer = React.createClass({
  displayName: 'MenuContainer',
  getInitialState() {
    return {
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
    }
  },
  render() {
    return (
      <CategoryList categories={this.state.categories} />
    );
  }
});

export default MenuContainer;
