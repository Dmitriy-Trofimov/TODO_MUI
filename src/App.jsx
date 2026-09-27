import Title from './components/Title';
import BoxMain from './components/BoxMain';
import AddTask from './components/AddTask';



export default function AppToDo() {

  return (
    <BoxMain>    

      <Title>
        TODO
      </Title>

      <AddTask/>
    </BoxMain>
  )
}