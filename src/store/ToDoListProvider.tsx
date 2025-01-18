
import { fromTimestamp } from '@/libs/utils/formatterDate';
import { makeAutoObservable, runInAction } from 'mobx';
import React, { createContext, useContext, ReactNode } from 'react';


export interface ITask {
  id: number;
  type: 'done' | 'todo' | 'in_progress' | 'review';
  startDay: number;
  endDay: number;
  text: string;
}

export interface ITaskNotTimestamp {
  startDay: number; 
  endDay: number;
  text: string;
}

interface ITasManagers {
  done: ITask[],
  todo: ITask[],
  in_progress: ITask[],
  review: ITask[]
}

const initState: ITasManagers  = {
  done: [],
  todo: [],
  in_progress: [],
  review: [],
} as const;


class ToDoList {
  store = new Map<number, ITask>();
  taskManagers = initState;
  onDragOverItem:ITask["type"]|null = null;
  searchQuery  = ''; 

  constructor() {
    makeAutoObservable(this);
  }
  
  toLoadStore(state:ITask[]) {
    const store = new Map();
    state.forEach((item) => {
      store.set(item.id, item);
    });

    runInAction(() => {
      this.store = store;
      this.getTaskManagers();
    });
  }

  getTaskManagers() {
    runInAction(() => {
      this.taskManagers = Array.from(this.store).reduce<ITasManagers>((acc, [_, item]) => {
        switch (item.type) {
          case 'todo': acc.todo.push(item); break;
          case 'done': acc.done.push(item); break;
          case 'in_progress': acc.in_progress.push(item); break;
          case 'review': acc.review.push(item); break;
        }
        return acc;
      }, {
        done: [],
        todo: [],
        in_progress: [],
        review: [],
      });

      this.toSortedByDate()
    });
  }
  
  toSetSearchQuery(value: string) {
    this.searchQuery = value;
  }

  toListenerSearch(type: ITask["type"]) {
    if (!this.searchQuery.trim()) {
      return this.taskManagers[type];
    }

    return this.taskManagers[type].filter(({ text, startDay, endDay }) => {
      const startDayFormatted = fromTimestamp(startDay);
      const endDayFormatted = fromTimestamp(endDay);

      return (
        new RegExp(this.searchQuery, 'i').test(text) || 
        new RegExp(this.searchQuery, 'i').test(startDayFormatted) || 
        new RegExp(this.searchQuery, 'i').test(endDayFormatted)
      );
    });
  }

  toSortedByDate() {
    Object.keys(this.taskManagers).forEach((key) => {
      const taskArray = this.taskManagers[key as keyof ITasManagers];
      taskArray.sort((a:ITask, b:ITask) => a.startDay - b.startDay);
    })
  }

  toCreateTask(entity: ITaskNotTimestamp) {
    runInAction(() => {
      const id = (Array.from(this.store.keys()).at(-1) || 0) + 1;

      this.store.set(id, {
        id,
        type: 'todo',
        startDay:entity.startDay,
        endDay:entity.endDay,
        text: entity.text,
      });
      this.getTaskManagers();
    })
  }

  dragTo(id:number, type:ITask["type"]) {
    runInAction(() => {
      const entity = this.store.get(id)!;
      this.store.set(id, {
        ...entity,
        type
      });
      this.getTaskManagers();
    })
  }

  toEditTask(entity: ITask) {
    runInAction(() => {
      this.store.set(entity.id, entity);
      this.getTaskManagers();
    })
  }
  
  toDeleteTask(id:number) {
    runInAction(() => {
      this.store.delete(id);
      this.getTaskManagers();
    })
  }
}

export type TToDoList = ToDoList;
const ToDoListContext = createContext<TToDoList | undefined>(undefined);

export const ToDoListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const store = new ToDoList();
  return (
    <ToDoListContext.Provider value={store}> 
      {children}
    </ToDoListContext.Provider>
  );
};


export function useToDoList() {
  const context = useContext(ToDoListContext);
  return context!;
};
