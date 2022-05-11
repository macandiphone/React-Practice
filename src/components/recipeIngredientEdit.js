import React from 'react'

const RecipeIngredientEdit = props => {
  const { ingredient, handleIngredientChange } = props

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
  }

  return (
    <>
      <input
        type="text"
        onInput={e => handleChange({ name: e.target.value })}
        className="recipe-edit__input"
        value={ingredient.name}
      />
      <input
        type="text"
        className="recipe-edit__input"
        onInput={e => handleChange({ amount: e.target.value })}
        value={ingredient.amount}
      />
      <button className="btn btn--danger">&times;</button>
    </>
  )
}

export default RecipeIngredientEdit
