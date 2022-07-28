import React from "react";

function Header (){
    return (
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
    )
}

export default Header;