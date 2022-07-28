
import './App.css'

function App () {
  return (
    <body>
      <script type='module' src='/src/main.ts'></script>
      <header id='store'>
        <h1>Grocero</h1>
        <ul className='item-list store--item-list'>
          <li>
            <div className='.store--item-icon'>
              <img src='src/icons/001-beetroot.svg' />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className='.store--item-icon'>
              <img src='src/icons/002-carrot.svg' />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className='.store--item-icon'>
              <img src='src/icons/003-apple.svg' />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className='.store--item-icon'>
              <img src='src/icons/004-apricot.svg' />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className='.store--item-icon'>
              <img src='src/icons/005-avocado.svg' />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className='.store--item-icon'>
              <img src='src/icons/006-bananas.svg' />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className='.store--item-icon'>
              <img src='src/icons/007-bell-pepper.svg' />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className='.store--item-icon'>
              <img src='src/icons/008-berry.svg' />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className='.store--item-icon'>
              <img src='src/icons/009-blueberry.svg' />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className='.store--item-icon'>
              <img src='src/icons/010-eggplant.svg' />
            </div>
            <button>Add to cart</button>
          </li>
        </ul>
      </header>

      <main id='cart'>
        <h2>Your Cart</h2>

        <div className='cart--item-list-container'>
          <ul className='item-list cart--item-list'>
            <li>
              <img
                className='cart--item-icon'
                src='src/icons/002-carrot.svg'
                alt='carrot'
              />
              <p>carrot</p>
              <button className='quantity-btn remove-btn center'>-</button>
              <span className='quantity-text center'>2</span>
              <button className='quantity-btn add-btn center'>+</button>
            </li>
            <li>
              <img
                className='cart--item-icon'
                src='src/icons/003-apple.svg'
                alt='apple'
              />
              <p>apple</p>
              <button className='quantity-btn remove-btn center'>-</button>
              <span className='quantity-text center'>3</span>
              <button className='quantity-btn add-btn center'>+</button>
            </li>
            <li>
              <img
                className='cart--item-icon'
                src='src/icons/004-apricot.svg'
                alt='apricot'
              />
              <p>apricot</p>
              <button className='quantity-btn remove-btn center'>-</button>
              <span className='quantity-text center'>4</span>
              <button className='quantity-btn add-btn center'>+</button>
            </li>
            <li>
              <img
                className='cart--item-icon'
                src='src/icons/005-avocado.svg'
                alt='avocado'
              />
              <p>avocado</p>
              <button className='quantity-btn remove-btn center'>-</button>
              <span className='quantity-text center'>5</span>
              <button className='quantity-btn add-btn center'>+</button>
            </li>
            <li>
              <img
                className='cart--item-icon'
                src='src/icons/006-bananas.svg'
                alt='bananas'
              />
              <p>bananas</p>
              <button className='quantity-btn remove-btn center'>-</button>
              <span className='quantity-text center'>6</span>
              <button className='quantity-btn add-btn center'>+</button>
            </li>
            <li>
              <img
                className='cart--item-icon'
                src='src/icons/007-bell-pepper.svg'
                alt='bell-pepper'
              />
              <p>bell-pepper</p>
              <button className='quantity-btn remove-btn center'>-</button>
              <span className='quantity-text center'>7</span>
              <button className='quantity-btn add-btn center'>+</button>
            </li>
            <li>
              <img
                className='cart--item-icon'
                src='src/icons/008-berry.svg'
                alt='berry'
              />
              <p>berry</p>
              <button className='quantity-btn remove-btn center'>-</button>
              <span className='quantity-text center'>8</span>
              <button className='quantity-btn add-btn center'>+</button>
            </li>
            <li>
              <img
                className='cart--item-icon'
                src='src/icons/009-blueberry.svg'
                alt='blueberry'
              />
              <p>blueberry</p>
              <button className='quantity-btn remove-btn center'>-</button>
              <span className='quantity-text center'>9</span>
              <button className='quantity-btn add-btn center'>+</button>
            </li>
            <li>
              <img
                className='cart--item-icon'
                src='src/icons/010-eggplant.svg'
                alt='eggplant'
              />
              <p>eggplant</p>
              <button className='quantity-btn remove-btn center'>-</button>
              <span className='quantity-text center'>10</span>
              <button className='quantity-btn add-btn center'>+</button>
            </li>
          </ul>
        </div>

        <div className='total-section'>
          <div>
            <h3>Total</h3>
          </div>

          <div>
            <span className='total-number'>Total: 18.90</span>
          </div>
        </div>
      </main>
    </body>
  )
}

export default App
