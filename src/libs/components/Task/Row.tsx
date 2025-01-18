import styled from 'styled-components';
import { ITask } from '@/store/ToDoListProvider';

interface IProps extends ITask {
  title: string,
}

export default function ({title, text}: IProps) {
  return (
    <Row>
        <span>{title}:</span> <h4>{text}</h4>
    </Row>
  )
};

const Row = styled.div`
  display: flex;
`;