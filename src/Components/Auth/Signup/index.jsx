import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'


const Signup = () => {
    const [province, setProvince] = useState([
        'Andijon viloyati',
        'Buxoro viloyati',
        'Farg\'ona viloyati',
        'Namangan viloyati',
        'Navoiy viloyati',
        'Samarqand viloyati',
        'Toshkent shaxri'
    ])

    const [region, setRegion] = useState([
        [
            'Andijon tumani',
            'Asaka tumani',
            'Baliqchi tumani',
            'Bo\'ston tumani'
        ],
        [
            'Olot tumani',
            'Buxoro tumani',
            'Kogon tumani',
            'Vobkent tumani',
            'Shofirkon tumani',
        ],
        [
            'Farg\'ona tumani',
            'Oltiariq tumani',
            'Buvayda tumani',
        ],
        [
            'Namangan tumani',
            'Mingbuloq tumani',
            'Pop tumani',
            'Uychi tumani',
            'Chust tumani',
            'Kosonsoy tumani',
            'To\'raqo\'rg\'on tumani',
        ],
        [
            'Xatirchi tumani',
            'Nurota tumani',
            'Uchquduq tumani',
        ]
    ])

    useEffect(() => {
        fetch('../src/Data/Viloyatlar.json')
            .then(data => data.json())
            .then(provinces => console.table(provinces))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="auth-panel sign-up">
            <h2 className="font-semibold">Ro'yxatdan o'tish</h2>
            <p className="font-regular">
                Code Kids platformasidagi shaxsiy profilingizni yarating !
            </p>

            <form action="" className='form-sign-up'>
                <div className="or-self-sign">
                    <p
                        className="font-light line-circle"
                    >
                    </p>
                </div>

                <div className="my-col">
                    <label className="font-semibold" htmlFor="ism">
                        Ism<span>*</span>
                    </label>
                    <input
                        type="text"
                        id="ism"
                        name="ism"
                        placeholder="Isminingizni kiriting"
                    />
                </div>

                <div className="my-col">
                    <label className="font-semibold" htmlFor="familiya">
                        Familiya<span>*</span>
                    </label>
                    <input
                        type="text"
                        id="familiya"
                        name="familiya"
                        placeholder="Loginingizni kiriting"
                    />
                </div>

                <div className="my-col">
                    <label className="font-semibold" htmlFor="viloyat">
                        Viloyat<span>*</span>
                    </label>
                    <select name="" id="">
                        <option value="">Andijon</option>
                        <option value="">Farg'ona</option>
                        <option value="">Namangan</option>
                        <option value="">Toshkent</option>
                        <option value="">Navoiy</option>
                    </select>
                </div>

                <div className="my-col">
                    <label className="font-semibold" htmlFor="viloyat">
                        Tuman<span>*</span>
                    </label>
                    <select name="" id="">
                        <option value="">Andijon</option>
                        <option value="">Farg'ona</option>
                        <option value="">Namangan</option>
                        <option value="">Toshkent</option>
                        <option value="">Navoiy</option>
                    </select>
                </div>

                <div className="my-col">
                    <label className="font-semibold" htmlFor="log-in">
                        Login<span>*</span>
                    </label>
                    <input
                        type="text"
                        id="log-in"
                        name="log-in"
                        placeholder="Loginingizni kiriting"
                    />
                </div>

                <div className="my-col">
                    <label className="font-semibold" htmlFor="password">
                        Parol<span>*</span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Parolingizni kiriting"
                    />
                </div>

                <button type="submit" className="login-button btn">
                    Ro'yxatdan o'tish
                </button>

                <div className="create-profile font-regular">
                    Shaxsiy hisobingiz hisobingiz mavjudmi ?
                    <Link to="../sign-in">Kirish</Link>
                </div>
            </form>
        </div>
    )
}

export default Signup