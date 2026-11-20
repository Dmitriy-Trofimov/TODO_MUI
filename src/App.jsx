import Title from './components/Title';
import BoxMain from './components/BoxMain';
import TaskSection from './components/TaskSection';

export default function AppToDo() {

  return (
    <BoxMain>    
      <Title>
        TODO
      </Title>
      <TaskSection/>
    </BoxMain>
  )
}