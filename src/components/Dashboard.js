import React, { useState } from 'react';
import Widget from './Widget';
import widgetsData from '../widgetsData';
import './Dashboard.css';

const Dashboard = () => {
  const [widgets, setWidgets] = useState(widgetsData);

  const addWidget = () => {
    const newWidget = { id: widgets.length + 1, title: 'New Widget', content: 'Random text' };
    setWidgets([...widgets, newWidget]);
  };

  const removeWidget = (id) => {
    setWidgets(widgets.filter(widget => widget.id !== id));
  };

  return (
    <div className="dashboard">
      <h2>CNAPP Dashboard</h2>
      <div className="widgets">
        {widgets.map(widget => (
          <div key={widget.id}>
            <Widget title={widget.title} content={widget.content} />
            <button onClick={() => removeWidget(widget.id)}>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={addWidget}>Add Widget</button>
    </div>
  );
};

export default Dashboard;
