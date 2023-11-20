import "../styles/filter.scss";

const Filter = ({filter,remove,clear}) => {
  
  return (
    <div className="filter">
      <div className="filter__item">

        {filter.map((el,i) => 
         <div className="item" key={i}>
          <span className="name">
            {el}
          </span>
          <button className="remove" onClick={() => remove(el)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/>
            </svg>
          </button>
          </div>
        )}
       
      </div>
      <button className="clear" onClick={clear}>
        Clear
      </button>
    </div>
  )
}

export default Filter