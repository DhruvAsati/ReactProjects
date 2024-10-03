import React, { useState, useEffect } from 'react';
import Planner from './Components/Planner';
import PlannerList from './Components/PlannerList';
import Loading from './Components/Loading';


function App() {
  const [plannerList, setPlannerList] = useState([]);

  const [loading, setLoading] = useState(true);

  // Load planner list from local storage when the app loads
  useEffect(() => {
    const savedPlannerList = localStorage.getItem('plannerList');
    if (savedPlannerList) {
      setPlannerList(JSON.parse(savedPlannerList));
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);



  const addList = (inputText) => {
    if (inputText !== '') {
      setPlannerList([...plannerList, { text: inputText}]);
    }
    localStorage.setItem('plannerList', JSON.stringify(plannerList));
  };

  const deleteListItem = (key) => {
    const newPlannerList = [...plannerList];
    newPlannerList.splice(key, 1);
    setPlannerList(newPlannerList);
   
  };


  if (loading) {
    return <Loading />;
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <Planner addList={addList} />
        <h1 className="app-heading">ToDo APP</h1>
        <hr />
        {plannerList.map((listItem, i) => {
          return (
            <PlannerList
              key={i}
              index={i}
              item={listItem.text}
              deleteItem={deleteListItem}
              />
          );
        })}
      </div>
    </div>
  );
}

export default App;
