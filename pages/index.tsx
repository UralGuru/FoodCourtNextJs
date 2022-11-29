import {useSelector} from "react-redux";

export default function Home() {
  const user = useSelector((state: any) => state.auth);

  return (
      <>
          Кафешки
      </>
  )
}
