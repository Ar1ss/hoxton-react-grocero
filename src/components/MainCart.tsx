function MainCart ({getItemImagePath ,storeItems}) {

  return (
  <main id='cart'>
        <h2>Your Cart
        </h2>

        <div className='cart--item-list-container'>
          <ul className='item-list cart--item-list'>
            {storeItems.map((item) => (
              <li key={item.id}>
                <div className='.cart--item-icon'>
                  <img src={
                    getItemImagePath(item)
                  } />
                </div>
                <div className='.cart--item-name'>{item.name}</div>
                <div className='.cart--item-quantity'>{item.inCart}</div>
                <button>+</button>
                <button>-</button>
              </li>
            ))}
          </ul>
        </div>

        <div className='total-section'>
          <div>
            <h3>
              Total
            </h3>
          </div>

          <div>
            <span className='total-number'>
              Total: 
            
            </span>
          </div>
        </div>
      </main>
  )
}

export default MainCart;