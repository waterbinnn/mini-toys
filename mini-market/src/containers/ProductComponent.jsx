import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className="column" key={id} style={styles.container}>
        <Link to={`product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} style={styles.image} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

const styles = {
  container: {
    marginTop: 50,
  },
  image: {
    height: 350,
    objectFit: 'contain',
    backgroundColor: 'white',
    padding: 20,
  },
};
