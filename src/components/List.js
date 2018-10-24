import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => {
  return (
    <ul className="list">
      {articles.map(el => (
        <li className="list-item" key={el.id}>
          {el.title}
        </li>
      ))}
    </ul>
  );
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
