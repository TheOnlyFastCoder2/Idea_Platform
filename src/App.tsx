
import styled from 'styled-components';
import Header from './libs/components/Header';
import { observer } from 'mobx-react';
import TaskManager from './libs/components/TODOList';
import UploaderToDotList from './libs/components/UploaderToDotList';

export default observer(function () {
  return (
    <App>
      <Header/>
      <TaskManager/>
      <UploaderToDotList/>
    </App>
  )
})

const App = styled.div``;
