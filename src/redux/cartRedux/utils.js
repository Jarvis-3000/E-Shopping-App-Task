export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    )
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }

export const quantityChange = (cartItems, item, operation) => {

    return cartItems.map(cartItem => {
  
      if (cartItem.id === item.id) {
        if (operation === '+') {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1
          }
        }
  
        else if (operation === '-') {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1
          }
        }
      }
  
      return cartItem
    }
  )
}