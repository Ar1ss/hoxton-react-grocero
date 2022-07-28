function StoreHeader ({getItemImagePath, storeItems ,}) {
    return (
        <header id='store'>
        <h1>Grocero</h1>
        <ul className='item-list store--item-list'>
          {storeItems.map((item) => (
            <li key={item.id}>
              <div className='.store--item-icon'>
                <img src={
                  getItemImagePath(item)
                } />
              </div>
              <button>Add to cart</button>
            </li>
          ))}
        </ul>
      </header>
    )
}
export default StoreHeader;