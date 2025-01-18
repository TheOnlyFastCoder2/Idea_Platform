import BXSGhost from '@/assets/svg/BXSGhost';
import BXSHappy from '@/assets/svg/BXSHappy';
import BXSSmile from '@/assets/svg/BXSSmile';
import BXSUpsideDown from '@/assets/svg/BXSUpsideDown';
import { ITask, ITaskNotTimestamp, useToDoList } from '@/store/ToDoListProvider';
import styled from 'styled-components';
import useModalWin from '../useModalWin';
import { SaverTask } from '../Task/SaverTask';


interface IProps {
  type: ITask["type"],
}

export default function ({ type }: IProps) {
  const toDoList = useToDoList();
  const {ModalWin, toClose, toOpen} = useModalWin();

  switch(type) {
    case 'todo': {
      return (
        <>
          <ModalWin>
            <SaverTask
              customProps={{
                cancel: toClose,
                isEditableByDefault: true,
                save:(entity:ITaskNotTimestamp) => toDoList.toCreateTask(entity)
              }}/>
          </ModalWin>
          <TopPanel className='__todo'>
            <span><BXSHappy/> To Do</span>
            <button onClick={toOpen}>
              + Добавить
            </button>
          </TopPanel>
        </>
      )
    }
    case 'in_progress': {
      return (
        <TopPanel>
          <span> <BXSSmile/> In Progress</span>
        </TopPanel>
      )
    }
    case 'review': {
      return (
        <TopPanel>
         <span> <BXSUpsideDown/> Review</span>
        </TopPanel>
      )
    }
    case 'done': {
      return (
        <TopPanel>
          <span> <BXSGhost/> Done</span>
        </TopPanel>
      )
    }   
  }
};

const TopPanel = styled.div`
  display: flex;

  span {
    display: inline-flex;
    gap: 8px;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.36%;
    line-height: 28px;
    color: #cecdce;
    text-transform: capitalize;
  }
  
  &.__todo {
    justify-content: space-between;
    button {
      align-content: center;
      color: #a19c9f;
    }
  }
`;
