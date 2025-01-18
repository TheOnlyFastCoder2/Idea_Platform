import { ITask, useToDoList } from '@/store/ToDoListProvider';
import styled from 'styled-components';
import TopPanel from './TopPanel';
import { SaverTask } from '../Task/SaverTask';
import { observer } from 'mobx-react';


interface IProps {
  type: ITask["type"],
}

export default observer(function ({ type }: IProps) {
  const toDoList = useToDoList();

  function handleDragEnd (id:number) {
    if(!toDoList.onDragOverItem) return;
    toDoList.dragTo(id, toDoList.onDragOverItem)
  };

  function handleDragEnter (ev:React.DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    toDoList.onDragOverItem = ev.currentTarget.dataset.type as typeof type;
  };

  return (
    <TaskManager
      data-type={type}
      onDragEnter={handleDragEnter}
      onDragOver={(e) => e.preventDefault()}
      >

      <TopPanel {...{type}}/>
      <Container >
        {toDoList.toListenerSearch(type).map((entity) => {
          return (
            <SaverTask
              draggable
              key = {entity.id}
              customProps={{
                data:entity,
                cancel:() => {},
                isEditableByDefault:false,
                save: (entity: ITask) => toDoList.toEditTask(entity)
              }}
              onDragEnd={handleDragEnd.bind(null, entity.id)}
            />
          )
        })}
      </Container>
    </TaskManager>
  )
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

const TaskManager = styled.div`
  padding: 32px 16px;
  background-color: #080508;
  @media (min-width: 1400px) {
    height: min-content;
  }
`;

