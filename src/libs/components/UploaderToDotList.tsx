import SVGDownload from '@/assets/svg/SVGDownload';
import SVGUpload from '@/assets/svg/SVGUpload';
import { ITask, useToDoList } from '@/store/ToDoListProvider';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function FileUploader() {
  const [file, setFile] = useState<File>();
  const toDoList = useToDoList();

  function toSaveFileFromText(text: string) {
    const blob = new Blob([text], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'toDoList.txt';
    a.click();
    URL.revokeObjectURL(url);
  }

  function toSetFile(ev:React.ChangeEvent<HTMLInputElement>) {
    if(ev.currentTarget.files) {
      setFile(ev.currentTarget.files[0])
    }
  }
  
  function toDownloadStore() {
    const store = Array.from(toDoList.store.values()).map((item) => {
      return {...item}
    });
    toSaveFileFromText(JSON.stringify(store));
  }

  useEffect(() => {
    if(file) {
      const fileRead = new FileReader();
      fileRead.onload = (ev) => {
        if(!ev.target?.result) return;
        const data = JSON.parse(ev.target.result as string);
        toDoList.toLoadStore(data as ITask[]);
        setFile(undefined);
      }
      fileRead.onerror = (e) => {
        console.error("Ошибка при чтении файла:", e);
        setFile(undefined);
      }

      fileRead.readAsText(file);
    }
  }, [file]);

  return (
    <>
      <UploaderToDoList>
        <Downloader onClick={toDownloadStore}>
          <SVGDownload/>
        </Downloader>
        <Uploader htmlFor="file-upload">
            <SVGUpload/>
            <input
              type="file"
              name='htmlFor'
              onChange={toSetFile}
              placeholder="Выберите файл"
            />
        </Uploader>
      </UploaderToDoList>
    </>
  );
};

const UploaderToDoList = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
  bottom: 0; right: 0;

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 50%;
    font-weight: 900;
    font-size: 20px;
    cursor: pointer;
    transition: 0.2s;
    width: 40px;
    height: 40px;
    background-color: white;
    &::before {
      opacity: 0;
      transition: 0.2s ease;
      position: absolute;
      right: 100%; bottom:50%;
      margin: 5px;
      background-color: white;
      padding: 10px 20px;
      border-radius: 10px;
      font-weight: lighter;
      pointer-events: none;
      text-transform: capitalize;
    }
    &:hover, &:focus-visible {
      background-color: rgba(255,255,255,0.8);
      &::before {
        opacity: 1;
      }
    }
  }
`;

const Downloader = styled.button`
  &::before {
    content: "download";
  }
`;

const Uploader = styled.label`
  &::before {
    content: "upload";
  }
  cursor: pointer;
  input {opacity: 0; 
  position: absolute;  
  cursor: pointer;}
`