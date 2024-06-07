import React from 'react'

const CartContext = React.createContext({
  isDarkTheme: false,
  savedList: [],
  updateSavedList: [],
  toggleTheme: () => {},
})
export default CartContext
