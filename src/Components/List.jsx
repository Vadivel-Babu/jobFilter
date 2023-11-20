import "../styles/list.scss";

const List = ({data,add}) => {
  return (
    <div className="list">
      <img src={data.logo} alt={data.company} className="img" />
        <div className="job__description">
          <div className="wrapper">
            <span className="company">{data.company}</span>
            {data.new && <span className="new flex">NEW!</span>}
            {data.featured && <span className="feature flex">FEATURED</span>}
          </div>
          <div className="details">
          <h3 className="position">{data.position}</h3>
           <div className="wrapper-2">
            <p className="posted">{data.postedAt}</p>
            <p className="dot">.</p>
            <p className="contract">{data.contract}</p>
            <p className="dot">.</p>
            <p className="location">{data.location}</p>  
           </div>
          </div>     
      </div>
      <div className="skills">
        {data.languages.map((lan,i) => (
          <span className="skill" onClick={() => add(lan)} key={i}>{lan}</span>
        ))}
        {data.tools.map((lan,i) => (
          <span className="skill" onClick={() => add(lan)} key={i}>{lan}</span>
        ))}
      </div>

    </div>
  )
}

export default List