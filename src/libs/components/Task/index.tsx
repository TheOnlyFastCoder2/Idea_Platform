import styled from 'styled-components';
import { ITask, useToDoList } from '@/store/ToDoListProvider';
import Input from './Input';
import { datePattern, fromTimestamp } from '@/libs/utils/formatterDate';
import { useRef } from 'react';
import { ReturnedTypeSaverTask, TValueWithError } from './SaverTask';
import Pencil from '@/libs/ui/Pencil';
import Bin from '@/libs/ui/Bin';


interface IProps extends ITask {
  isEditable: boolean
  listenerInputs?: (entity: ReturnedTypeSaverTask) => void;
  toSetIsEditable: (value:boolean) => void; 
}

export const initTask: ITask = {
  id: 0,
  type: "todo",
  startDay: new Date().getTime(),
  endDay: new Date().getTime(),
  text: '',
} as const;


export default function HybridTask ({isEditable, toSetIsEditable, listenerInputs, ...props}: IProps) {
  const toDoList = useToDoList();
  const startDay = fromTimestamp(props.startDay);
  const endDay = fromTimestamp(props.endDay);

  const isDeadlineMet = !(props.startDay < props.endDay);
  const refStartDay = useRef<TValueWithError>({value: startDay, isError: false});
  const refEndDay = useRef<TValueWithError>({value: endDay, isError: false});
  const refText = useRef<TValueWithError>({value: props.text});

  function listener () {
    listenerInputs && listenerInputs({
      startDay: refStartDay,
      endDay: refEndDay,
      text: refText,
    })
  }

  if (isEditable) {
    return (
      <TaskStyled>
        <Row><span>Начало:</span>
          <Input callback={listener} refValue={refStartDay} pattern={datePattern}/>
        </Row>
        <Row><span>Окончание:</span> 
          <Input callback={listener} refValue={refEndDay} pattern={datePattern}/>
        </Row>
        <Row><span>Описание:</span>
          <Input callback={listener} refValue={refText} />
        </Row>
      </TaskStyled>
    ) 
  }

  return (
    <TaskStyled>
      <Row>
        <ContainerText>
          <span>Начало:</span> 
          <h4>{startDay}</h4>
        </ContainerText>
       <ContainerIcons>
          <Pencil onClick={() => toSetIsEditable(true)}/>
          <Bin onClick={() => toDoList.toDeleteTask(props.id)}/>
       </ContainerIcons>
      </Row>
      <Row>
        <ContainerText className={`${isDeadlineMet ? props.type !== 'done' ? '__deadlineMet': '': ''}`}>
          <span>Окончание:</span> 
          <h4>{endDay}</h4>
        </ContainerText>
      </Row>
      <Row>
        <ContainerText>
          <span>Описание:</span> 
          <h4>{props.text}</h4>
        </ContainerText>
      </Row>
    </TaskStyled>
  )
};

const TaskStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  border-radius: 10px;
  background-color: #393939;
  padding: 16.5px 16px 16px 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #b0b0b0;
  }
  h4 {
    color: #e5e5e5;
    font-size: 14px;
    line-height: 22px;
    font-weight: bold;
    letter-spacing: -0.4px;
  }

  .Input {
    flex-grow: 1;
    margin-left: 10px;
  }
`;

const ContainerText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; 

  &.__deadlineMet * {
    color:#be2b30;
  }
`;

const ContainerIcons = styled.div`
  display: flex;
  gap: 5px;
  margin-left: auto;
`