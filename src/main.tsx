import { createRoot } from 'react-dom/client'
import '@/assets/index.css';
import App from './App.tsx';
import {ToDoListProvider} from "@/store/ToDoListProvider";

createRoot(document.getElementById('root')!).render(
  <ToDoListProvider>
    <App/>
  </ToDoListProvider>
)
