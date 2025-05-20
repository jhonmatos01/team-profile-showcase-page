
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
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>RU</th>
                <th>Tarefa</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((person, index) => (
                person.tasks.map((task, taskIndex) => (
                  <tr key={`${index}-${taskIndex}`}>
                    {taskIndex === 0 ? (
                      <>
                        <td rowSpan={person.tasks.length}>{person.name}</td>
                        <td rowSpan={person.tasks.length}>{person.ru}</td>
                      </>
                    ) : null}
                    <td>{task}</td>
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
