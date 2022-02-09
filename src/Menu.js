import React from "react";

function Menu({ items }) {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, description, price } = item;
        return (
          <article className="menu-item" key={id}>
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">
                  ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </h4>
              </header>
              <p className="item-text">{description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
