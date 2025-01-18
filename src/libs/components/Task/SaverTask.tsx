import { useRef, useState } from 'react';
import styled from "styled-components";
import HybridTask, { initTask } from ".";
import { ITask, ITaskNotTimestamp } from "@/store/ToDoListProvider";
import { ButtonCancel, ButtonDone } from "@/libs/ui/ButtonIcon";
import { toTimestamp } from '@/libs/utils/formatterDate';

export type TValueWithError = {value: string, isError?: boolean};

interface IPropsSaverTask <T extends ITask | ITaskNotTimestamp> extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  customProps: {
    data?: ITask
    cancel: () => void,
    save: (entity: T) => void,
    isEditableByDefault: boolean,
  }
}

export interface ReturnedTypeSaverTask {
  startDay: React.RefObject<TValueWithError>;
  endDay: React.RefObject<TValueWithError>;
  text: React.RefObject<TValueWithError>;
}

export function SaverTask<T extends ITask | ITaskNotTimestamp>({customProps, ...props}: IPropsSaverTask<T>) {
  const [isEditable, setIsEditable] = useState(customProps.isEditableByDefault)
  const refData = useRef<Partial<ReturnedTypeSaverTask>>({});

  function toSetIsEditable(value: boolean) {
    setIsEditable(value);
  }

  function listenerInputs(data:ReturnedTypeSaverTask) {
    refData.current = data;
  }

  function toSave() {
    const {startDay, endDay, text} = refData.current;

    if(!(startDay?.current && endDay?.current && text?.current.value) ) return;
    if(startDay.current.isError && endDay.current.isError) return;

    if(!customProps.data) {
      const saveData: ITaskNotTimestamp = {
        startDay: toTimestamp(startDay.current.value) as number,
        endDay: toTimestamp(endDay.current.value) as number,
        text: text.current.value,
      };
      customProps.save(saveData as T);
      customProps.cancel();
    } else {
      const saveData: ITask = {
        ...customProps.data as ITask,
        startDay: toTimestamp(startDay.current.value) as number as number,
        endDay: toTimestamp(endDay.current.value) as number as number,
        text: text.current.value,
      };

      customProps.save(saveData as T);
      cancel();
    }
  }
  
  function cancel() {
    setIsEditable(false);
    customProps.cancel();
  }

  return (
    <SaverTaskStyles {...props}>
     <HybridTask listenerInputs={listenerInputs} {...{toSetIsEditable, isEditable, ...(customProps.data??initTask)}}/>
      {(isEditable && (
         <Container>
          <ButtonDone onClick={toSave}/>
          <ButtonCancel onClick={cancel}/>
        </Container>
      ))}
    </SaverTaskStyles>
  )
}


const SaverTaskStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: min-content;
  background-color: red;
  width: 100%;
  gap: 10px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #242424;
`;


const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 10px;
  padding: 0 16px 16px 16px;
`;
