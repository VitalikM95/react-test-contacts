import CreateInput from '../components/CreateInput'

const HomePage = () => {
  return (
    <div className='flex'>
      <div className='w-[30%] px-4'>
        <h2 className='text-[24px] font-semibold'>Create Contact</h2>
        <CreateInput />
      </div>
      <div className='w-[70%] px-4'>Temp</div>
    </div>
  )
}

export default HomePage
