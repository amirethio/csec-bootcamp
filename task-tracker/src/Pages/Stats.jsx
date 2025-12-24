import { useContext } from "react";
import { TaskContext } from "../App";

const Stats = () => {
  const { tasks } = useContext(TaskContext);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const remaining = total - completed;



  return (
    <section className="todo-footer">
      <p className="total-p">
        Total Todos: <span className="total">{total}</span>
      </p>
      <p>
        Completed: <span className="completed">{completed}</span>
      </p>
      <p>
        Remaining: <span className="remaining">{remaining}</span>
      </p>
  
    </section>
  );
};

export default Stats;
