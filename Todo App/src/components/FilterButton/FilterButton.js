import React from 'react'
import PropTypes from 'prop-types'

const FilterButton = ({ filter, filterClickHandler, children, ariaLabel }) => {
  return (
    <button
      aria-label={`${ariaLabel ? ariaLabel : "Filter By:" + filter + " todos"}`}
      className="o-app__filterBtn"
      data-filter={filter}
      onClick={filterClickHandler}>
        {children}
    </button>
  )
}

FilterButton.propTypes = {
  filter: PropTypes.string.isRequired,
  filterClickHandler: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string
}

export default FilterButton
