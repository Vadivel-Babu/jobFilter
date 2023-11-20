import {useEffect, useState } from 'react';
import './App.css'
import Filter from './Components/Filter';
import List from './Components/List';
import data from "./data.json";


function App() {

  const items = data;
  const [item,setItem] = useState([]);
  const [sort,setSort] = useState([]);    
  const [filter,setFilter] = useState([]);
  useEffect(() => {
    setItem(items);
    return function(){
      setItem([])
    }
  },[]);

  function handleAddFilter(lang){
    if(!filter.includes(lang)){
      setFilter((filter) => [...filter,lang]);
    }
    
  }

  function handleDeleteFilter(lang){
    let filtered = filter.filter((i) => i !== lang);
    setFilter(filtered);
  }

  useEffect(() => {
    handleFilter();
  },[filter]);

  function handleFilter(){
    filter.forEach((filterElement) => {
      let f = item.filter((it) => it.languages.includes(filterElement));
      let x = item.filter((it) => it.tools.includes(filterElement));  
        
      setSort([...f,...x]);
    })
  }

  return (
    <div className="app">
      <header className="header">
      </header>
      <div className="container">
      {filter.length !== 0 && 
       <Filter filter={filter} remove={handleDeleteFilter} clear={() => setFilter([])}/>}
       {filter.length === 0 ?
        item.map((d) => (
          <List data={d} key={d.id} add={handleAddFilter} />
        ))
        :
         sort.map((d) => (
          <List data={d} key={d.id} add={handleAddFilter}/>
        ))
       }
      </div>

    </div>
   
  )
}

export default App;
