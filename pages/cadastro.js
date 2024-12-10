import {useState} from 'react'

import Link from 'next/link'
import styles from '../styles/login.module.css';

import LoginCard from "../src/components/loginCard/loginCard"
import Input from '../src/components/input/input';
import Button from '../src/components/button/button';

export default function CadastroPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password:'',
    })

    const [error,setError] = useState('')

    const handleFormEdit = (event, name) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }

    const handleForm = async (event) => {
        try{
            event.preventDefault()
            const response = await fetch('/api/user/cadastro', {
                method: 'POST',
                body: JSON.stringify(formData)
            })

            const json = await response.json()
            if(response.status !== 201 ) throw new Error (json)
        }catch(err){
            setError(err.message)
        }
    }
    return (
        <div className={styles.background}>
            <LoginCard title='Cadastro'>
                <form className={styles.form}> 
                    <Input type='text' id="username" name="username" placeholder='Nome' required value={formData.name} onChange ={(e) => {handleFormEdit(e, 'name')}} />
                    <Input type="email" id="email" name="email" placeholder="E-mail" required value={formData.email} onChange ={(e) => {handleFormEdit(e, 'email')}} />
                    <Input type="password" id="password" name="password" placeholder="Senha" required value={formData.password} onChange ={(e) => {handleFormEdit(e, 'password')}} />
                    <Button>Criar Conta</Button>
                    {error && <p>{error}</p>}
                    <Link href="/login">Já possuo conta</Link>
                </form>
            </LoginCard>
        </div>
    );
}
