import React, { useState, useEffect } from 'react';
import Planner from './Components/Planner';
import PlannerList from './Components/PlannerList';
import Loading from './Components/Loading';

function App() {
  const [plannerList, setPlannerList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const addList = (inputText, inputHours) => {
    if (inputText !== '') {
      setPlannerList([...plannerList, { text: inputText, hours: parseInt(inputHours) }]);
    }
  };

  const deleteListItem = (key) => {
    const newPlannerList = [...plannerList];
    newPlannerList.splice(key, 1);
    setPlannerList(newPlannerList);
  };

  const incrementTime = (index) => {
    const newPlannerList = [...plannerList];
    newPlannerList[index].hours += 1;
    setPlannerList(newPlannerList);
  };

  const decrementTime = (index) => {
    const newPlannerList = [...plannerList];
    if (newPlannerList[index].hours > 1) {
      newPlannerList[index].hours -= 1;
      setPlannerList(newPlannerList);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <Planner addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {plannerList.map((listItem, i) => {
          return (
            <PlannerList
              key={i}
              index={i}
              item={listItem.text}
              hours={listItem.hours}
              deleteItem={deleteListItem}
              incrementTime={incrementTime}
              decrementTime={decrementTime}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
