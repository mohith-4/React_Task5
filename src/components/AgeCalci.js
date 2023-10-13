import React , {useState} from 'react'

import "../components/Agecalci.css"

const AgeCalci = () => {
    const [birthdate , setBirthdate] = useState('') ;
    const [age , setAge] = useState(0) ;

    const calculateAge = () => {
        const today = new Date() ;
        const birthdateDate = new Date(birthdate) ;

        let age = today.getFullYear() - birthdateDate.getFullYear() ;
        const monthDiff = today.getMonth() - birthdateDate.getMonth() ;
        if(monthDiff < 0 ||  (monthDiff === 0 && today.getDate() < birthdateDate.getDate())){
            age-- ;
        }
        setAge(age) ;
    } ; 

    const resetCalci = () => {
        setBirthdate('') ;
        setAge(0) ;
    } ; 

    return(
        <>
        <div className='Cont_outer'>
             <h2 className='heading container_title'>AGE CALCULATOR</h2>
             <div className='Cont_middle'>
                    <div className='right'>
                        <h4> Enter Your Date of Birth</h4>
                        <input className='date' type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
                        <div className='button_div'>
                        <button className='btn-1' onClick={calculateAge}>Calculate Age</button>
                        <button id='rst_btn' className="btn-2" onClick={resetCalci}>  Reset </button>

                        <h2>You are {age > 0 ? ` ${age}` : ''}  years old</h2>
                        
                        </div>
                    </div>

                     
             </div>
            </div>
            
        </>
    ) ; 
}

export default AgeCalci ;
