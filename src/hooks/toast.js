// 커스텀 hooks에서는 useState, useRef를 가져와 쓸 수 있다.
import { v4 as uuidv4 } from 'uuid';
import { addToasts as add, removeToasts } from "../store/toastSlice";
// 이미 addToast란 함수가 있어서 add라고 칭해서 함수를 쓰기로 함.
import { useDispatch } from "react-redux";

const useToast = () => { // use를 앞에 붙여 훅이라는 것을 암시.
  const dispatch = useDispatch();

  const deleteToast = (id) => {
    dispatch(removeToasts(id));
  }
  
  const addToast = (toast) => {
    const id = uuidv4()
    const toastWidthId = {
      ...toast,
      id // id: id
    }

    dispatch(add(toastWidthId));

    setTimeout(()=>{
      deleteToast(id);
    }, 5000)
  };

  return {
    addToast,
    deleteToast
  }
}

export default useToast;