import React from 'react';
import restApiData from '../restApi.json';

const Menu = () => {
  return (
    <section className='menu' id='menu'>
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>Our popular dishes feature customer favorites made with rich flavors, fresh ingredients, and expert preparation, offering a delicious variety that keeps guests coming back.</p>
        </div>
        <div className="dishes_container">
          {restApiData.data[0].dishes.map(element => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.title} />
              <h3>{element.title}</h3>
              <button>{element.category}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu;