import '@styles/globals.css';

const RootLayout = ({children}) => {
    return (<div className='flex h-screen w-full'>
        {children}
    </div>)
}

export default RootLayout