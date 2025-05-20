
import React from 'react';

interface Task {
  name: string;
  ru: string;
  tasks: string[];
}

interface TasksTableProps {
  tasks: Task[];
}

const TasksTable: React.FC<TasksTableProps> = ({ tasks }) => {
  return (
    <section id="tarefas" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-10 text-center">Tarefas dos Integrantes</h2>
        
        <div className="overflow-x-auto">
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr>
                <th style={{border: '1px solid #ddd', padding: '8px 12px', textAlign: 'left', backgroundColor: '#f0f4f8', fontWeight: '600'}}>Nome</th>
                <th style={{border: '1px solid #ddd', padding: '8px 12px', textAlign: 'left', backgroundColor: '#f0f4f8', fontWeight: '600'}}>RU</th>
                <th style={{border: '1px solid #ddd', padding: '8px 12px', textAlign: 'left', backgroundColor: '#f0f4f8', fontWeight: '600'}}>Tarefa</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((person, index) => (
                person.tasks.map((task, taskIndex) => (
                  <tr key={`${index}-${taskIndex}`} style={{backgroundColor: taskIndex % 2 === 1 ? '#f9f9f9' : 'transparent'}}>
                    {taskIndex === 0 ? (
                      <>
                        <td rowSpan={person.tasks.length} style={{border: '1px solid #ddd', padding: '8px 12px', textAlign: 'left'}}>{person.name}</td>
                        <td rowSpan={person.tasks.length} style={{border: '1px solid #ddd', padding: '8px 12px', textAlign: 'left'}}>{person.ru}</td>
                      </>
                    ) : null}
                    <td style={{border: '1px solid #ddd', padding: '8px 12px', textAlign: 'left'}}>{task}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TasksTable;
