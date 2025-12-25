import { useContext } from "react";
import { TaskContext } from "../App";

const Stats = () => {
  const { tasks } = useContext(TaskContext);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const remaining = total - completed;

  return (
    <section className="stats-container">
      <h2>Task Statistics</h2>
      <div className="stats-items">
        <div className="stat-item">
          <span className="label">Total Tasks</span>
          <span className="value">{total}</span>
        </div>
        <div className="stat-item">
          <span className="label">Completed</span>
          <span className="value completed">{completed}</span>
        </div>
        <div className="stat-item">
          <span className="label">Remaining</span>
          <span className="value remaining">{remaining}</span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
