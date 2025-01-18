import styled from 'styled-components';
import Searcher from '@/libs/ui/Searcher';
import { useToDoList } from '@/store/ToDoListProvider';
import { observer } from 'mobx-react';

export default observer(function () {
  const toDoList = useToDoList();

  function toSearchTask(ev:React.FormEvent<HTMLInputElement>) {
    toDoList.toSetSearchQuery(ev.currentTarget.value)
  }

  return (
    <Header>
      <h2>Your tasks</h2>
      <Searcher onChange={toSearchTask}/>
    </Header>
  )
});

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  
  h2 {
    font-size: 40px;
    letter-spacing: 0.36%;
    line-height: 28px;
    font-weight: bold;
    color: #e1e0e1; 
  }
`;