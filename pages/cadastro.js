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

    const handleFormEdit = (event, name) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }

    const handleForm = (event) => {
        event.preventDefault()
        console.log(formData)
    }
    return (
        <div className={styles.background}>
            <LoginCard title='Cadastro'>
                <form className={styles.form}> 
                    <Input type='text' placeholder='Nome' required value={formData.name} onChange ={(e) => {handleFormEdit(e, 'name')}} />
                    <Input type='text' placeholder='Sobrenome' required/>
                    <Input type="email" placeholder="E-mail" required value={formData.email} onChange ={(e) => {handleFormEdit(e, 'email')}} />
                    <Input type="password" placeholder="Senha" required value={formData.password} onChange ={(e) => {handleFormEdit(e, 'password')}} />
                    <Button>Criar Conta</Button>
                    <Link href="/login">Já possuo conta</Link>
                </form>
            </LoginCard>
        </div>
    );
}
