import CreateInput from '../components/CreateInput'
import ContactCard from '../components/ContactCard'

const HomePage = () => {
  return (
    <div className='flex'>
      <div className='w-[30%] px-4'>
        <h2 className='text-2xl font-semibold'>Create Contact</h2>
        <CreateInput />
      </div>
      <div className='w-[70%] px-4'>
        <h2 className='text-2xl font-semibold'>Contacts</h2>
        <ContactCard />
      </div>
    </div>
  )
}

export default HomePage
