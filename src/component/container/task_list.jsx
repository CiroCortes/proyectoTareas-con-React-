
import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForms from '../pure/forms/taskForms';
import TaskComponent from '../pure/task';




const TaskListComponent = () => {


   const defaultTask1 = new Task('Example 1', 'Default description 1',true, LEVELS.NORMAL);
   const defaultTask2 = new Task('Example 2', 'Default description 2',false, LEVELS.URGENT);
   const defaultTask3 = new Task('Example 3', 'Default description 3',false, LEVELS.BLOCKING);
    
   // Estado de componente
   // the tasks, must be in to Array, to be able to show
   const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
   const [loading, setLoading] = useState(true);

   // control del ciclo de vida
   useEffect(() => {
    console.log('Task as been modified');
    setTimeout(()=>{
      setLoading(false);
    }, 2000)
    
    return () => {
      console.log('Task list component is going to unmount..')
    }
  }, [tasks]);

    function completeTask(task){
      console.log('Complete this Task', task);
      const index = tasks.indexOf(task);
      const tempTasks = [...tasks];
      tempTasks[index].completed = ! tempTasks[index].completed;
      // we update the state of the component whit the new and it will update the
      // Iteration of the task in order to show the task update
      setTasks(tempTasks);

    }
    function deleteTask(task){
      console.log('Delete this Task', task);
      const index = tasks.indexOf(task);
      const tempTasks = [...tasks];
      tempTasks.splice(index, 1)
      setTasks(tempTasks);

    }
    function addTask(task){
      console.log('Delete this Task', task);
      const tempTasks = [...tasks];
      tempTasks.push(task);
      setTasks(tempTasks);
    }

    const Table = ()=>{
      return(
        <table>
        <thead>
        <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Descrption</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: iterar sobre una lista de tareas, es como hacer un 
          for each */}
          { tasks.map((task, index) =>{
              return(
                 <TaskComponent 
                  key={index}
                  task={task}
                  complete={completeTask}
                  remove = {deleteTask}
                  />

                    )
                }
          )}
        </tbody>

      </table>

      )
    }

    let taskTable = <Table></Table>

    if(tasks.length > 0){
      taskTable = <Table></Table>
    }else{
      taskTable = (
        <div>
            <h3>There are no task to show</h3>
            <h4>Please, create one</h4>
        </div> )
    }

    const loadingStyle={
      color: 'grey',
      fontSize:'20px',
      fontWeight:'bold'

    }
    
    return (
        <div>
          <div className='col-12'>
              <div className='card' >
              {/* Card Header (title) */}
                  <div className='card-header p-3'>
                      <h5>
                      Your Task:
                     </h5>
                  </div>
                 {/* Card body (content) */}
                   <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position:'relative', height: '400px'}}>
                   {/**TODO: add loading spinner */}
                    
                       {loading ? (<p style={loadingStyle}>Loading task....</p>) : taskTable}
                  </div>
                  
                </div>

           </div>
            {/*<TaskComponent task={defaultTask}/>*/}
            
            <TaskForms add={addTask} length={tasks.length}></TaskForms> 
        </div>
    );
};


export default TaskListComponent;