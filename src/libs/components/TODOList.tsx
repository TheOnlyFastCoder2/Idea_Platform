import styled from 'styled-components';
import TaskManager from './TaskManager';
import { observer } from 'mobx-react';

export default observer(function () {
  return (
    <TODOList>
      <TaskManager type={"todo"}/>
      <TaskManager type={"in_progress"}/>
      <TaskManager type={"review"}/>
      <TaskManager type={"done"}/>
    </TODOList>
  )
});

const TODOList = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  margin-top: 58px;
`;

